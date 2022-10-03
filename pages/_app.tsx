import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import Header from "components/mdx/Header";
import Paragraph from "components/mdx/Paragraph";

const components = {
  h1: (props: any) => <Header.H1 {...props} />,
  h2: (props: any) => <Header.H2 {...props} />,
  p: (props: any) => <Paragraph {...props} />,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
