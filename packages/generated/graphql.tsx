import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type MenuItem = {
  __typename?: 'MenuItem';
  Country?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Name: Scalars['String']['output'];
  Price: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteFood: MenuItem;
};


export type MutationDeleteFoodArgs = {
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  foods?: Maybe<Array<Maybe<MenuItem>>>;
};

export type FoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type FoodsQuery = { __typename?: 'Query', foods?: Array<{ __typename?: 'MenuItem', id?: string | null, Name: string, Description?: string | null, Country?: string | null, Price: number } | null> | null };

export type SeleteFoodMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SeleteFoodMutation = { __typename?: 'Mutation', deleteFood: { __typename?: 'MenuItem', Name: string } };


export const FoodsDocument = gql`
    query foods {
  foods {
    id
    Name
    Description
    Country
    Price
  }
}
    `;

/**
 * __useFoodsQuery__
 *
 * To run a query within a React component, call `useFoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFoodsQuery(baseOptions?: Apollo.QueryHookOptions<FoodsQuery, FoodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FoodsQuery, FoodsQueryVariables>(FoodsDocument, options);
      }
export function useFoodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FoodsQuery, FoodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FoodsQuery, FoodsQueryVariables>(FoodsDocument, options);
        }
export function useFoodsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FoodsQuery, FoodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FoodsQuery, FoodsQueryVariables>(FoodsDocument, options);
        }
export type FoodsQueryHookResult = ReturnType<typeof useFoodsQuery>;
export type FoodsLazyQueryHookResult = ReturnType<typeof useFoodsLazyQuery>;
export type FoodsSuspenseQueryHookResult = ReturnType<typeof useFoodsSuspenseQuery>;
export type FoodsQueryResult = Apollo.QueryResult<FoodsQuery, FoodsQueryVariables>;
export const SeleteFoodDocument = gql`
    mutation seleteFood($id: ID!) {
  deleteFood(id: $id) {
    Name
  }
}
    `;
export type SeleteFoodMutationFn = Apollo.MutationFunction<SeleteFoodMutation, SeleteFoodMutationVariables>;

/**
 * __useSeleteFoodMutation__
 *
 * To run a mutation, you first call `useSeleteFoodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSeleteFoodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [seleteFoodMutation, { data, loading, error }] = useSeleteFoodMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSeleteFoodMutation(baseOptions?: Apollo.MutationHookOptions<SeleteFoodMutation, SeleteFoodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SeleteFoodMutation, SeleteFoodMutationVariables>(SeleteFoodDocument, options);
      }
export type SeleteFoodMutationHookResult = ReturnType<typeof useSeleteFoodMutation>;
export type SeleteFoodMutationResult = Apollo.MutationResult<SeleteFoodMutation>;
export type SeleteFoodMutationOptions = Apollo.BaseMutationOptions<SeleteFoodMutation, SeleteFoodMutationVariables>;