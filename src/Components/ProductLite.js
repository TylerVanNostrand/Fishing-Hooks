function ProductLite(props) {

    return (
        <div>
            <div className="col m-1 pb-3">
                <h4 className="fw-bold">
                    {props.product.name}
                </h4>
                <div className="fs-6 fst-italic">
                    Price: {props.product.price}
                </div>
                <button type="button" className="btn btn-primary btn-sm">Add to Cart</button>
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

export default ProductLite