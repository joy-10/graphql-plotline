# graphql-plotline

### Hosted on Heroku Visit https://graphql-plotline.herokuapp.com/ and Play With below Queries ###

//MongoDB Atlas used as Database

For Adding Seller 

<pre><code>mutation{ 
addSeller(name:"Plotline Limited",sellerId:"PLT11") 
  { 
    name //This returns the name we are inserting 
  } 
}</code></pre>

For Adding Product 

<pre><code>mutation{ 
addProduct(name:"Fridge",productId:"FDG21",price:23000,sellerId:"PLT11"){ 
  name 
  productId 
  } 
} </code></pre>

For fetching single product

<pre><code>{ 
  product(productId:"FDG21") 
  { 
    name 
    productId 
    price 
    seller{ 
      name 
      sellerId 
    } 
  } 
}</code></pre>

For fetching a single seller

<pre><code>{ 
seller(sellerId:"JOY10") 
  { 
    name 
    sellerId
    products{ 
      name 
      price 
      productId 
    } 
  } 
} </code></pre>

For fetching all products

<pre><code>{ 
products{
    name
    price 
    productId 
    seller{ 
      name 
    } 
  } 
}</code></pre>

For fetching all sellers

<pre><code>{ 
sellers{ 
    name 
    sellerId 
    products{ 
      name 
      price 
      productId 
    } 
  } 
}</code></pre>


