import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material'
import { useCallback, useState } from 'react'

type CartDataProps = {
    totalCount: number
    totalPrice: number
}

const App = () => {
    const [basket, setBasket] = useState<CartDataProps>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = useCallback(
        (count: number, price: number) => {
            setBasket((prevState) => ({
                totalCount: prevState.totalCount + count,
                totalPrice: prevState.totalPrice + count * price,
            }))
        },
        [basket, setBasket]
    )

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header basket={basket} />
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
