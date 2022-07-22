import { AppProps } from "next/app";

import "@/styles/global.css";
import "@/styles/highlightjs.css";

import Layout from "../components/layout/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
