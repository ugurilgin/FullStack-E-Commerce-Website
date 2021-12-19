import React from 'react'
import ProductPage from './ProductPage'
import {CartProvider} from 'react-use-cart'
function CallProductPage() {
    return (
        <div>
            <CartProvider>
            <ProductPage/>
            </CartProvider>
        </div>
    )
}

export default CallProductPage
