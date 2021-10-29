import React from 'react'
import {Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

export default function Splash() {
    return (
        <div class="d-flex justify-content-center">
            <Row className='text-center'>
            <Col xs={12} className='h3'>Welcome to Lt. Dan's Bait and Tackle </Col>
            <Col xs={12}>
            <Link to='/products/'>Click here to see all of our products</Link>
            </Col>
            </Row>
        </div>
    )
}