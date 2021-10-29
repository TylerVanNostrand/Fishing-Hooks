import React from 'react'
import {Link } from 'react-router-dom';

export default function Splash() {
    return (
        <div class="d-flex justify-content-center">
            <h3>Welcome to Lt. Dan's Bait and Tackle</h3>
            <Link to='/products/'>Click here to see all of our products</Link>
        </div>
    )
}