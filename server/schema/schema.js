const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data
var books = [
    { name: 'M3 Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'M3 The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'M3 The Long Earth', genre: 'Sci-Fi', id: '3' },
    { name: 'M4 The Long Earth', genre: 'Sci-Fi', id: '4' },
    { name: 'M3 The Medium Earth', genre: 'Sci-Fi', id: '5'},
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ( ) => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                // code to get data from db / other source
                return _.find(books, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
