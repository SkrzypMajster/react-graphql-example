import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import {GraphqlProviderProps} from "./GraphqlProvider.types";

console.log(process.env.REACT_APP_API_URL);

const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    cache: new InMemoryCache(),
});

export const GraphqlProvider = ({children}: GraphqlProviderProps) => (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
);
