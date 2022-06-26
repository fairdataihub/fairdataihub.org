// import { remark } from 'remark';
// import html from 'remark-html';
// import remarkRehype from 'remark-rehype';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown);
  // const result = await remark().use(html).use(remarkRehype).process(markdown);
  return result.toString();
}
