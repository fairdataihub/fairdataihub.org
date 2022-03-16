import Head from 'next/head';
import axios from 'axios';

const Blog = ({ articles, error }) => {
  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  return (
    <div>
      <Head>
        <title>Contact Us - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="Contact Us - Fair Data Innovations Hub"
        />
        <meta
          property="twitter:title"
          content="Contact Us - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/contact-us" />
        <meta property="og:url" content="https://fairdataihub.org/contact-us" />
        <meta
          property="twitter:url"
          content="https://fairdataihub.org/contact-us"
        />

        <meta
          name="description"
          content="Contact us for any questions, collobaration requests or comments about the Fair Data Innovations Hub"
        />
        <meta
          property="og:description"
          content="Contact us for any questions, collobaration requests or comments about the Fair Data Innovations Hub"
        />
        <meta
          property="twitter:description"
          content="Contact us for any questions, collobaration requests or comments about the Fair Data Innovations Hub"
        />

        <meta
          property="og:image"
          content="https://i.ibb.co/svDc3xk/image.png"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/svDc3xk/image.png"
        />
      </Head>

      <main>
        <div className="relative flex items-center justify-center bg-transparent bg-cover bg-no-repeat sm:h-screen">
          <ul>
            {articles.data.map((article) => (
              <li key={article.id}>{article.attributes.title}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

Blog.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get('http://localhost:1337/api/articles');
    const articles = res.data;
    return { articles };
  } catch (error) {
    return { error };
  }
};

export default Blog;
