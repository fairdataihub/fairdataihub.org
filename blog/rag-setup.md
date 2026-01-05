---
title: 'How to Quickly Set Up a RAG System: A Practical Guide Inspired by Our Work on DMP-Chef'
authors:
  - 'NahidZeinali'
date: '2025-12-05'
category: 'Product'
heroImage: 'https://www.dailydoseofds.com/content/images/2024/11/ragdiagram-ezgif.com-resize.gif'
imageAuthor: 'Avi Chawla'
imageAuthorLink: 'https://www.dailydoseofds.com/a-crash-course-on-building-rag-systems-part-2-with-implementments/'
subtitle: 'A Practical Introduction to Retrieval-Augmented Generation (RAG) Based on Insights From DMP-Chef'
tags:
  - RAG
  - AI Systems
  - Data Management Plans
  - DMP Chef
  - FAIR Data
---

## Introduction
Retrieval-Augmented Generation (RAG) is one of the most effective strategies for building Artificial Intelligence (AI) systems that are accurate, reliable, and domain-aware. In our work on [DMP-Chef](https://fairdataihub.org/dmp-chef), an AI-powered system for generating funder-compliant Data Management Plans, RAG helps us expand the knowledge of large language models (LLMs) using curated external knowledge on funders’ requirements instead of depending only on their internal memory. This post provides a clear and practical overview of how RAG works, along with an example for building and testing your first RAG system.

## What Is Retrieval-Augmented Generation (RAG)?

RAG is an AI architecture that strengthens an LLMby giving it access to an external knowledge source. Instead of producing answers only from what the model learned during training, it retrieves relevant information from documents, PDFs, webpages, or structured datasets that we provide it. This leads to more accurate, grounded, and trustworthy outputs, especially in domains that require precision.

### ✨ Why RAG Matters

A well-designed RAG system improves AI performance in several important ways:

- ✨ Higher accuracy because responses are based on real and up-to-date information
- 🔍 Greater transparency because users can inspect the retrieved context
- 📚 Easy scalability because new data can be added without retraining the LLM
- 🧪 Stronger domain awareness which is essential for scientific, clinical, or technical work

In simple terms, RAG gives your LLM a research assistant that grows as your knowledge base expands.

## 🔍 How a RAG Pipeline Works

A typical RAG workflow includes four main components that work together to create grounded outputs.

### 1. Ingestion and Chunking

Raw content, such as PDFs, HTML pages, images, and notes, is converted into clean text and divided into meaningful chunks. Good chunking improves retrieval quality by keeping each segment coherent and context-rich.

### 2. Embedding and Indexing

Each chunk is converted into a numerical vector using an embedding model such as [MiniLM](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2), [mpnet](https://huggingface.co/sentence-transformers/all-mpnet-base-v2), [OpenAI](https://platform.openai.com/docs/guides/embeddings), and etc. These vectors are stored in a vector database like [FAISS](https://faiss.ai/), [LanceDB](https://docs.lancedb.com/), [MongoDB Atlas Search](https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-overview/), [Pinecone](https://docs.pinecone.io/), [Milvus](https://milvus.io/docs), or [Weaviate](https://docs.weaviate.io/weaviate). This database acts as the memory used during retrieval.

### 3. Retrieval

When a user asks a question, the query is embedded and compared with stored vectors. Using similarity search, such as cosine similarity, the system selects the most relevant pieces of text. Retrieval quality has a major impact on the quality of the final answer.

### 4. Generation

The retrieved content is provided to a large language model such as [Gemini](https://ai.google.dev/gemini-api/docs), [DeepSeek](https://api-docs.deepseek.com/), [OpenAI](https://platform.openai.com/docs/api-reference/introduction), [Claude](https://platform.claude.com/docs/en/api/overview), [Mistral](https://docs.mistral.ai/api), [Cohere](https://docs.cohere.com/), [Groq](https://console.groq.com/docs/api-reference) and etc. The model combines the retrieved information with its internal knowledge to generate a precise and context-aware response to the user’s question.

## 🚀 Build a RAG System (Step-by-Step)

👉 [View on GitHub](https://github.com/fairdataihub/RAG_blog/tree/main)

### Use Case:
 In this scenario, we put a few NIH DMP/DMS PDFs in a local data/ folder and ask the same question in two ways: No-RAG, where the local Llama model answers from general knowledge, and RAG, where it first retrieves relevant PDF passages using embeddings + FAISS and then answers with citations. Comparing them side by side shows that RAG is more document-based and traceable, especially for details like repository names, sharing timelines, access restrictions, and metadata requirements.

---
## 1)  Ingestion and Chunking
### 1A) Ingestion (Load NIH PDFs)
We’ll load PDFs into LangChain `Document` objects (one per page). Each Document should keep metadata like:
- `source_file`
- `page`

```python
from pathlib import Path
import re
import numpy as np
import pandas as pd
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import OllamaEmbeddings
from langchain_ollama import ChatOllama, OllamaEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import TextLoader
try:
    from langchain_ollama import ChatOllama
except Exception:
    from langchain_community.chat_models import ChatOllama

# Models (make sure you ran: ollama pull llama3.2 && ollama pull nomic-embed-text)
LLM_MODEL = "llama3.2"
EMBED_MODEL = "nomic-embed-text"

llm = ChatOllama(model=LLM_MODEL, temperature=0.2)
embeddings = OllamaEmbeddings(model=EMBED_MODEL)

# Load PDFs (one Document per page) + add metadata for citations
DATA_DIR = Path("data")
pdf_paths = sorted(DATA_DIR.glob("*.pdf"))
if not pdf_paths:
    raise FileNotFoundError("No PDFs found in ./data")

docs = []
for p in pdf_paths:
    pages = PyPDFLoader(str(p)).load()
    for d in pages:
        d.metadata["source_file"] = p.name
        d.metadata["page"] = d.metadata.get("page")  # keep page if present
    docs.extend(pages)

print(f"Loaded {len(pdf_paths)} PDFs | {len(docs)} pages")
print("Example:", docs[0].metadata, docs[0].page_content[:200])
```

> If your PDFs are scanned images (no embedded text), `PyPDFLoader` may return empty content. In that case you’ll need OCR.

---

### 1B) Chunk the pages

Chunking helps retrieval: instead of retrieving an entire page, we retrieve the most relevant *pieces*.

```python
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=150,
    separators=["\n\n", "\n", " ", ""]
)

chunks = text_splitter.split_documents(docs)

# Add chunk_id for citations
for i, c in enumerate(chunks):
    c.metadata["chunk_id"] = f"chunk_{i:06d}"

print("Total chunks:", len(chunks))
print("Sample chunk metadata:", chunks[0].metadata)
print("Sample chunk text (first 300 chars):", chunks[0].page_content[:300])
```

---

## 2) Embedding and Indexing

We’ll embed every chunk using Ollama embeddings, then index them in FAISS.

```python
EMBED_MODEL = "nomic-embed-text"   # or "mxbai-embed-large"
BASE_URL = "http://localhost:11434"

embeddings = OllamaEmbeddings(model=EMBED_MODEL, base_url=BASE_URL)

# Build FAISS index
vectorstore = FAISS.from_documents(chunks, embeddings)

# Optional: save index locally
vectorstore.save_local("faiss_index_nih")
print("FAISS index built and saved to ./faiss_index_nih")

```

---

## 3) Build retriever in the two pipelines
---

```python
retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

def format_docs_for_prompt(docs):
    """Create a compact context string + show citations info."""
    blocks = []
    for d in docs:
        src = d.metadata.get("source_file", "unknown")
        page = d.metadata.get("page", "NA")
        cid = d.metadata.get("chunk_id", "NA")
        text = d.page_content.strip()
        blocks.append(f"[{cid} | {src} | page={page}]\n{text}")
    return "\n\n---\n\n".join(blocks)

def extract_citations(text):
    """Find chunk citations like chunk_000123 in the answer."""
    return sorted(set(re.findall(r"chunk_\d{6}", text)))
 ```   
---

### 3A) Baseline (No-RAG)

The model answers with **no document grounding**.

```python
def answer_without_rag(question: str) -> str:
    prompt = f"""You are helping write an NIH Data Management and Sharing (DMS) Plan.

Answer the question clearly and concisely.

Question:
{question}

Return:
- Answer: (paragraph)
- Notes: (bullets, if needed)
"""
    return llm.invoke(prompt).content
```
---

### 3B) RAG (retrieve + grounded generation with citations)

> Newer LangChain retrievers use `retriever.invoke(question)`.

```python
def answer_with_rag(question: str, k: int = 5) -> dict:
    retriever = vectorstore.as_retriever(search_kwargs={"k": k})

    # ✅ New LangChain API
    retrieved = retriever.invoke(question)

    context = format_docs_for_prompt(retrieved)

    prompt = f"""You are helping write an NIH Data Management and Sharing (DMS) Plan.

Use ONLY the context below to answer. If the context is insufficient, say what is missing.

Context:
{context}

Question:
{question}

Return exactly:
- Answer: (paragraph)
- Key points: (bullets)
- Citations: (list chunk_ids you relied on, like chunk_000123)
"""
    out = llm.invoke(prompt).content
    cited = extract_citations(out)

    return {
        "answer": out,
        "retrieved_docs": retrieved,
        "retrieved_chunk_ids": [d.metadata.get("chunk_id") for d in retrieved],
        "cited_chunk_ids": cited
    }

```

---

## 4) Generation

To clearly demonstrate RAG vs No-RAG, ask questions that require **exact details** from the PDFs (repository name, timing language, tiered access, DOI, etc.):

```python
question = (
    "From the PDF DMS plan example, extract the EXACT: "
    "(1) repository name used for deposit, "
    "(2) when data will be released (timing language), "
    "(3) how long data remains available, "
    "(4) what access model is used (e.g., tiered access) and what agreement/contract is required. "
    "Return bullets and include short quotes."
)

print("==== NO RAG ====")
print(answer_without_rag(question))

print("\n==== WITH RAG ====")
rag = answer_with_rag(question, k=5)
print(rag["answer"])

print("\n---- RAG Evidence (Retrieved Chunks) ----")
for d in rag["retrieved_docs"]:
    print(f"\n[{d.metadata.get('chunk_id')} | {d.metadata.get('source_file')} | page={d.metadata.get('page')}]")
    print(d.page_content[:700])

print("\nRetrieved chunk ids:", rag["retrieved_chunk_ids"])
print("Cited chunk ids:", rag["cited_chunk_ids"])

```

**What you should see:**
- No-RAG: generic policy-like text, missing repo/timing specifics
- RAG: concrete details + chunk IDs + quoted phrases from the PDF

---

## 📚 Conclusion

RAG is a powerful approach for building AI systems that depend on trustworthy, interpretable, and domain-specific information. Whether you are creating research tools, clinical decision-support systems, or automated policy-generation workflows, RAG ensures that your AI remains dependable, accurate, and scalable. This is the same principle we apply in DMP-Chef to produce high-quality, NIH-compliant Data Management Plans.

## ✨ Acknowledgements
Some portions of this post were refined with the assistance of ChatGPT’s writing tools.
