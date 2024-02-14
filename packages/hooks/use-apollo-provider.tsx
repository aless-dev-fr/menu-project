import { ApolloClient, InMemoryCache, from, ApolloProvider as Provider } from "@apollo/client"
import { ReactNode } from "react"

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: '/foods',
})
  
export function ApolloProvider({ children }: { children: ReactNode }) {
    return <Provider client={apolloClient}>{children}</Provider>
}