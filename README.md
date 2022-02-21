# graphql-plotline

Hosted on Heroku Visit https://graphql-plotline.herokuapp.com/ and Play With below Queries

//MongoDB Atlas used as Database

For Adding Seller 

mutation{ \
addSeller(name:"Plotline Limited",sellerId:"PLT11") \
  { \
    name //This returns the name we are inserting \
  } \
} 

For Adding Product 

mutation{ \ 
addProduct(name:"Fridge",productId:"FDG21",price:23000,sellerId:"PLT11"){ \
  name \
  productId \
  } \
} 

For fetching single product

{ \
  product(productId:"FDG21") \
  { \
    name \
    productId \
    price \
    seller{ \
      name \
      sellerId \
    } \
  } \
}

For fetching a single seller

{ \
	seller(sellerId:"JOY10") \
  { \
    name \
    sellerId \
    products{ \
      name \
      price \
      productId \
    } \
  } \
} 

For fetchinh all products

{ \
	products{ \
    name \
    price \
    productId \
    seller{ \
      name \
    } \
  } \
}

For fetching all sellers

{ \
	sellers{ \
    name \
    sellerId \
    products{ \
      name \
      price \
      productId \
    } \
  } \
}


