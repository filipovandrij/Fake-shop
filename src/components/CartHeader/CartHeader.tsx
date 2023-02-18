type Props = {
    basket: {
        totalCount: number
        totalPrice: number
    }
}

const CartHeader = ({ basket }: Props) => {
    return (
        <div>
            <div>{basket.totalCount}</div>
            <div>$ {basket.totalPrice}</div>
        </div>
    )
}
export default CartHeader
