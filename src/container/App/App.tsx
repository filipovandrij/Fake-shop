import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material'
import { useState } from 'react'

type Props = {}

type ProductsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsIncart] = useState<ProductsInCart>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsIncart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />

            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
