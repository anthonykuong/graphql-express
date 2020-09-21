# graphql-express

GraphQL server with a mock book schema

# References 
* https://www.youtube.com/watch?v=5RGEODLhjhY&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=10
*  https://graphql.org/graphql-js/running-an-express-graphql-server/

1. Call nodemon app

2. localhost:4000/graphql to open graphiql

Example query
```
{
 book(id: "1"){
 name 
  genre 
  id
}
}
```

Example result
```javascript
{
  "data": {
    "book": {
      "name": "Name of the Wind",
      "genre": "Fantasy",
      "id": "1"
    }
  }
}

```
