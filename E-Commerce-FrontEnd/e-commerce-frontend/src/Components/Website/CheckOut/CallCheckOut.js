import React from 'react'
import { CartProvider } from 'react-use-cart'
import CheckOut from './CheckOut'

function CallCheckOut() {
    return (
        <div>
            <CartProvider>
                <CheckOut/>
            </CartProvider>
        </div>
    )
}

export default CallCheckOut
