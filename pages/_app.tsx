import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MenuItemContext } from "@/packages/hooks/use-data-context";
import { ApolloProvider } from "../packages/hooks/use-apollo-provider";

export default function App(appProperties : AppProps) {

  const { Component: _Component, pageProps, router } = appProperties;

  const Component = _Component as AppProps["Component"]
  
  return (
    <ApolloProvider>
        <MenuItemContext>
            <Component {...pageProps} />
        </MenuItemContext>
     </ApolloProvider>
  )
}
