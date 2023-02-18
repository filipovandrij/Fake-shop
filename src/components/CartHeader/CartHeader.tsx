type Props = {
    productsInCart: {
        [id: number]: number
    }
}

function CartHeader({ productsInCart }: Props) {
    return (
        <div>
            <div>{productsInCart[1]}</div>
            <div>$ {productsInCart[2]}</div>
        </div>
    )
}
export default CartHeader
