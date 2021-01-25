const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data
var books = [
    { name: 'M7 Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'M7 The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'M7 The Long Earth', genre: 'Sci-Fi', id: '3' },
    { name: 'M7 The Long Earth', genre: 'Sci-Fi', id: '4' },
    { name: 'M7 The Medium Earth', genre: 'Sci-Fi', id: '5'},
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ( ) => ({
        id: { type: GraphQLString },
        name: { type: GkraphQLString },
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
