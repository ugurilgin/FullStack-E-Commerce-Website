import React from 'react'
import { CartProvider } from 'react-use-cart'
import CheckOutReview from './CheckOutReview'

function CallCheckOutReview() {
    return (
        <div>
            <CartProvider>
<CheckOutReview/>
            </CartProvider>
        </div>
    )
}

export default CallCheckOutReview
