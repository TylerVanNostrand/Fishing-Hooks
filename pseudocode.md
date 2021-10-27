Fishing Hooks Project

    Using React Hooks to be able to manage state without class components
    Be able to navigate/view pages with react-router
    Conditionally render based on state
    Refreshing the pages should maintain the user's view/data

Path 1 (Shopping Cart)

    User will have all products listed on the page
    Have specfic product pages for each product that can be used by clicking a product's name
    User can change how many of each item they have in their cart
    Have a "add to cart" option with each product. (Allow them to choose to add more than 1 the item)

### Components

#### App/Home Page
    Main landing page for the Fishhooks site

    State
        productList - an array of item objects from the Axios API Call
            id - given
            name - given
            description - given
            type - given
            price - given
            created_at - given
            updated_at - given
            inCart - added



    Methods
        axiosCall - an Axios call to get all the products to be listed in the shop


    Render
        Products - map through array of products to create
        Cart - 


#### ProductsPage
    A page that shows all products

State
    productList - an array of item objects from the Axios API Call
    cart - an array of items to display in the cart, user can add and remove items from this array with a button click



Methods
    axiosCall - an Axios call to get all the products to be listed in the shop

    addToCart - adds a product to the cart array

    removeCart - removes a product from the cart array


Render
Product Name
Add to Cart button


#### ProductPage

Render
    Product Name
    Description
    Cost
    Add to Cart button

#### CartPage

Methods
inCart - a function that maps through the productList array and 
Sum - adds the cost of all products in the cart


Render
Product Name
Product Cost
Remove from cart button
Total: Sum

