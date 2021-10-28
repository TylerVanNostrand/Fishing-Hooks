import React from 'react';
import {  useParams } from 'react-router-dom';

function Product({productsList, addToCart}) {

    let { id } = useParams();
    const product = productsList.find(item => item.id === parseInt(id));

    return (
             <div className="container">
        {console.log(id, productsList, product)}
        {product !== undefined ?
            <div className="row">
                <div className="col">
                    <div className="fs-3 fw-bold">
                        {product.name}
                    </div>
                    <div>
                        {product.description}
                    </div>
                    <div className="fs-6 fst-italic">
                        {product.price.toFixed(2)}
                         <button type="button" className="btn btn-outline-primary btn-sm mt-2" 
                         onClick={() => addToCart(productsList.findIndex((el) => el.id === parseInt(id)))}>Add to Cart</button>
                </div>
            </div>
          </div>  
          :
          'Page Loading'
        }
        </div>
    )
}

export default Product
