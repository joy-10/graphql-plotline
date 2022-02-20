const graphql =require('graphql')
const {GraphQLObjectType,GraphQLID,GraphQLInt,
    GraphQLString,GraphQLSchema,
    GraphQLList,GraphQLNonNull,GraphQLFloat
} = graphql

const Seller = require('../models/seller')
const Product = require('../models/product')

const ProductType = new GraphQLObjectType({
    name:'Product',
    fields:() => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        productId: {type: GraphQLString},
        price: {type: GraphQLFloat},
        sellerId: {type: GraphQLString},
        seller:{
            type:SellerType,
            resolve(parent,args){
                return Seller.findOne({sellerId:parent.sellerId})
            }
        }
    })
})

const SellerType = new GraphQLObjectType({
    name: 'Seller',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        sellerId: {type: GraphQLString},
        products:{
            type:new GraphQLList(ProductType),
            resolve(parent,args){
                return Product.find({sellerId:parent.sellerId})
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        product:{
            type: ProductType,
            args:{productId: {type: GraphQLString}},
            resolve(parent,args){
                return Product.findOne({productId:args.productId})
            }
        },
        seller:{
            type: SellerType,
            args: {sellerId: {type: GraphQLString}},
            resolve(parent,args)
            {
                return Seller.findOne({sellerId:args.sellerId})
            }
        },
        products:{
            type: new GraphQLList(ProductType),
            resolve(parent,args){
                return Product.find({})
            }
        },
        sellers:{
            type: new GraphQLList(SellerType),
            resolve(parent,args){
                return Seller.find({})
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addProduct:{
            type: ProductType,
            args:{
            name:{type:new GraphQLNonNull(GraphQLString)},
            productId: {type:new GraphQLNonNull(GraphQLString)},
            price: {type:new GraphQLNonNull(GraphQLFloat)},
            sellerId: {type:new GraphQLNonNull(GraphQLString)},
        },
        resolve(parent,args){
            let product = new Product({
                name: args.name,
                productId: args.productId,
                price: args.price,
                sellerId: args.sellerId
            })
            return product.save()
        }},
        addSeller:{
            type: SellerType,
            args: {
                name: {type:new GraphQLNonNull(GraphQLString)},
                sellerId: {type:new GraphQLNonNull(GraphQLString)},
            },
            resolve(parent,args){
                let seller = new Seller({
                    name: args.name,
                    sellerId: args.sellerId
                })
                return seller.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})