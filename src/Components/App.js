import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ProductsPage from './ProductsPage';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product from './Product';
import Header from './Header';

function App() {
    const [productsList, setProductsList] = useState([]);
    const [cart, setCart] = useState([]);

  const axiosCall = () => {
    let apiUrl = `https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/store/products`;
    Axios.get(apiUrl).then((response) => {
      setProductsList(response.data)
    })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(axiosCall, []);

      useEffect(() => {
      let lSCart = window.localStorage.getItem('cart');
      if (lSCart !== cart) {
        setCart(JSON.parse(lSCart));
      }
    }, [])

  const updateCart = (cart) => {
    setCart(cart);
    window.localStorage.setItem('cart', JSON.stringify(cart))
    // console.log(cart);
  }

  const addToCart = (index) => {
    // console.log(cart);
    let temp = [...cart] || [];
    temp.push(productsList[index])
    console.log(temp);
    updateCart(temp);
    // console.log(cart)
  }

  const removeFromCart = (index) => {
    let temp = [...cart];
    temp.splice(index, 1);
    updateCart(temp);
  }

  const total = () => {
    let num = 0;
    if (cart !== null) {
      for (let i = 0; i < cart.length; i++) {
        num += cart[i].price
      }
      return num.toFixed(2);
    }
  }

  return (
    <div className="container">

      <Router>
          <Header />
           <Switch>
              <Route path='/cart'>
            {cart !== null ?
              cart.map((product, index) =>
                <Cart
                  key={index}
                  index={index}
                  product={product}
                  removeFromCart={removeFromCart}
                />
              )
              :
              'Your Cart is Empty'}
            <div className="fw-bold fs-3">Total: ${total()}</div>
          </Route>
          <Route path='/products'>
            <h2 className="fw-bold">Product List</h2>
            {productsList.map((product, index) =>
              <ProductsPage
                key={index}
                index={index}
                  product={product}
                addToCart={addToCart}
              />
            )}
          </Route>
          <Route path='/product/:id'>
            <Product
            productsList={productsList} 
            addToCart={addToCart}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;