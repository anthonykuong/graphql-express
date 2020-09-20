# graphql-server-example
GraphQL Server - Apollo server starter example using
https://www.apollographql.com/docs/apollo-server/getting-started/

# revision
@author - Anthony Ku Ong


#Setup Notes

### Links
1. graphql code: https://graphql.org/code/
2. apollo-server :https://www.apollographql.com/docs/apollo-server/
3. github: https://github.com/apollographql/apollo-server
4. npm :https://www.npmjs.com/package/apollo-server-express

#Introduction
We will use apollo server as a GraphQL server (to be used with any GraphQL client).
* Obtain a basic understanding of GraphQL principles
* Define a GraphQL schema that represents the structure of your data set
* Run an instance of Apollo Server that lets you execute queries against your schema

```
Steps go to your github (will be using my username as an example): 
https://github.com/anthonykuong/
1.  Add new repository: https://github.com/new
2. cd C:/GIT_REPOS (or your base)
3. mkdir graphql-server-example
4. cd graphql-server-example
5 npm init --yes
6. npm install apollo-server graphql
7. Create index.js - touch index.js
8. Add the schema, data, resolver, and instance
```

```javascript
const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

9. Run:
node index.js
Server ready at http://localhost:4000/graphql
10. add this to the query.
{
  books {
    title
    author
  }
}
```

### Publish to Git.

```
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/anthonykuong/graphql-server-example.git
git push -u origin master
   ```             

### NodeJS installation

Follow the followint steps to install NodeJS/NPM if you haven't:
* https://www.freecodecamp.org/news/how-to-install-node-in-your-machines-macos-linux-windows/
