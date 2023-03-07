import { Typography } from '@mui/material'
import { useState } from 'react'

type Props = {}

type Order = {
    name: string
    address: string
}

const CheckoutPage = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        address: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))

    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) =>
        setOrderData((prevState) => ({
            ...prevState,
            address: e.target.value,
        }))

    const orderSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const renderForm = () => {
        return (
            <form onSubmit={orderSend}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={orderData.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your address"
                        value={orderData.address}
                        onChange={handleAddress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div>
                <div>Dear, {orderData.name} thanks for your order!</div>
                <div>Address: {orderData.address}</div>
            </div>
        )
    }

    return (
        <>
            <Typography
                component={'h2'}
                variant="h4"
                sx={{
                    margin: '0 0 40px 0',
                }}
            >
                Checkout
            </Typography>
            {isOrderSend ? renderMessage() : renderForm()}
        </>
    )
}
export default CheckoutPage
