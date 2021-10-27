import React from 'react'
import {Link } from 'react-router-dom';


function Cart({item, removeFromCart, index}) {

    return (
        <div className="container border p-3">
                <Link className="fs-4 fw-bold" to={`product/${item.id}`}>
                    {item.name}
                </Link>
                <div>
                    ${item.price.toFixed(2)}
                </div>
                <div className="fs-6 text-muted text-decoration-underline" onClick={() => removeFromCart(index)}>
                    Remove from cart
                </div>
                </div>
    )
}
export default Cart;