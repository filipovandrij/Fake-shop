import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Product } from 'utils/productsArray'

type Props = {
    product: Product
    productCount: number
    removeProductFromCart: (id: number) => void
}

const CartProductListItemExtended = ({
    removeProductFromCart,
    product,
    productCount,
}: Props) => {
    return (
        <Grid item>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
