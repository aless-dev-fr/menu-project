import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic, { DynamicOptions } from "next/dynamic";
import { ReactNode } from "react";

const ApolloProvider = dynamic((async () => import("../packages/hooks/use-apollo-provider").then((imp) => imp.ApolloProvider)) as DynamicOptions)

export function NoopComponent({ children }: Record<string, unknown> & { children: ReactNode })
{
  return <>{children}</>
}

export default function App(appProperties : AppProps) {

  const { Component: _Component, pageProps, router } = appProperties

  const Component = _Component as AppProps["Component"] & {
    providers?: ("apollo")[]
  }

  const MaybeApolloProvider = Component.providers?.includes("apollo") ? ApolloProvider : NoopComponent

  return (
    <>
      <MaybeApolloProvider>
        <Component {...pageProps} />
      </MaybeApolloProvider>
    </>
  )
}
