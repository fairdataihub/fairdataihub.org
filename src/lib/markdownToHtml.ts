import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeHighlight from 'rehype-highlight';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeExternalLinks, {
      target: `_blank`,
      rel: [`noopener`, `noreferrer`, `nofollow`],
    })
    .process(markdown);

  return result.toString();
}
