import React from 'react';
import { Link } from 'react-router-dom';


function ProductsPage({product, addToCart, index}) {

    return (
        <div>
            <div className="col border p-3">
                <Link className="fs-3 fw-bold" to={`/product/${product.id}`}>
                    {product.name}
                </Link>
                <div className="fs-6 fst-italic">
                    Price: ${(product.price).toFixed(2)}
                </div>
                <button type="button" className="btn btn-outline-primary btn-sm mt-2" onClick={() => addToCart(index)}>Add to Cart</button>
                {/* <i
                    type="button"
                    className={props.product.inCart ? "bi bi-check-circle-fill" : "bi bi-circle"}
                    // onClick={setCompleted}
                >
                </i> */}
            </div>
        </div>
    )

}

export default ProductsPage