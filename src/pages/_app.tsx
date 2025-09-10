import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/global.css';
import '@/styles/highlightjs.css';

import Layout from '../components/layout/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
