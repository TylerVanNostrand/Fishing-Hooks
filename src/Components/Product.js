import React from 'react';
import {  useParams } from 'react-router-dom';

function Product({productList, addToCart}) {

    let { id } = useParams();
    const product = productList.find(item => item.id === parseInt(id));

    return (
             <div className="container">
        {console.log(id, productList, product)}
            <div className="row">
                <div className="col">
                    <div>
                        {product.name}
                    </div>
                    <div>
                        {product.description}
                    </div>
                    <div>
                        {product.price}
                         {/* <button type="button" className="btn btn-outline-primary btn-sm mt-2" onClick={() => addToCart(index)}>Add to Cart</button> */}
                </div>
            </div>
          </div>  
        </div>
    )
}

export default Product
