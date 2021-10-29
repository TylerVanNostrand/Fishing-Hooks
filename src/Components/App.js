import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Row } from 'react-bootstrap'
import ProductsPage from './ProductsPage';
import Cart from './Cart';
import Product from './Product';
import Header from './Header';
import Splash from './Splash';



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
     let temp = [];
    if (cart !== null) {
      temp = [...cart]
    }
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
    <>

      <Router>
          <Header />
            <Switch>
                 <Route exact path='/'>
            <Splash />
            </Route>
              <Route path='/cart'>
                <h2 className="fw-bold mt-3">Cart</h2>
                    {cart !== null ?
                    cart.map((product, index) =>
                <Cart
                  key={index}
                  index={index}
                  product={product}
                  removeFromCart={removeFromCart}
                />
              )
              : 'Your Cart is Empty'}
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
            <ul>
             <Row className='g-4'> 
            <Product
                productsList={productsList} 
                addToCart={addToCart}/>
            </Row>   
            </ul>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;