import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "../packages/hooks/use-apollo-provider";

export default function App(appProperties : AppProps) {

  const { Component: _Component, pageProps, router } = appProperties;

  const Component = _Component as AppProps["Component"]
  
  return (
    <ApolloProvider>
        <Component {...pageProps} />
     </ApolloProvider>
  )
}