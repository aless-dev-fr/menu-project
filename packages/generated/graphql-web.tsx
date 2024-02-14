import * as Apollo from "@apollo/client"
import { gql } from "@apollo/client";

const defaultOptions = {} as const

const FoodsDocument = gql`
    query {
        foods {
            id
            Name
            Description
            Country
            Price
        }
    }
`

export function useFoodsQuery(baseOptions: Apollo.QueryHookOptions)
{
    const options = { ...defaultOptions, ...baseOptions }

    return Apollo.useQuery(FoodsDocument, options)
}