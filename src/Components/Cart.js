import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';


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
        <div>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Credit Card number</Form.Label>
                            <Form.Control placeholder="Enter Credit Card number" />
                        </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check out now" />
                        </Form.Group>

                <Button variant="primary" type="submit" onClick={() => removeFromCart(index)}>
                    Clear Cart
                </Button>&nbsp;

                <Button variant="primary" type="submit">
                    Submit
                </Button>&nbsp;

                <Button as={Link} variant="primary" type="submit" to="/products">
                    Back to Products
                </Button>

            </Form>
            </div>
        </div>
    )
}
export default Cart;