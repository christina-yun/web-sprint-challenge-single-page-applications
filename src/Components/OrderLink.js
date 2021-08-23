import React from 'react';
import { Link } from 'react-router-dom'

function OrderLink(props) {

    return(
        <Link to='/pizza'>
            <button id='order-pizza'>Order Now</button>
        </Link>
    )
}
export default OrderLink;