import { ApolloClient, InMemoryCache} from '@apollo/client';

const clientAAA = new ApolloClient({
    uri:'https://astral-app-ns.herokuapp.com/graphql',
    cache: new InMemoryCache(),
});

export default clientAAA;