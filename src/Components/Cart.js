import React from 'react'
import { Link } from 'react-router-dom';


function Cart({product, removeFromCart, index}) {

    return (
        <div className="container border p-3">
                <Link className="fs-4 fw-bold" to={`product/${product.id}`}>
                    {product.name}
                </Link>
                <div>
                    ${product.price.toFixed(2)}
                </div>
                <div className="fs-6 text-muted text-decoration-underline" onClick={() => removeFromCart(index)}>
                    Remove from cart
                </div>
                </div>
    )
}
export default Cart;