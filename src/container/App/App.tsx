import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { Container, StyledEngineProvider } from '@mui/material'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'
import { omit } from 'lodash'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import ProductPage from 'pages/Product/ProductPage'

type Props = {}

type ProductsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, [id]))
    }

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container
                sx={{
                    padding: '60px 0',
                }}
            >
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="cart"
                        element={
                            <CartPage
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
