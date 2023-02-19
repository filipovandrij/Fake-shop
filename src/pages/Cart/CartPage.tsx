import { Card, CardContent, Grid } from '@mui/material'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}
const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            {' '}
            <Card variant="outlined" className="product">
                <CardContent>
                    {Object.keys(productsInCart).map((productId) => (
                        <div key={productId}>
                            <div className="product-image">
                                <img
                                    src={
                                        productsObject[parseInt(productId)]
                                            .image
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-title">
                                {productsObject[parseInt(productId)].title}
                            </div>
                            <div className="product-desc">
                                This{' '}
                                {
                                    productsObject[parseInt(productId)]
                                        .description
                                }
                            </div>
                            <div className="product-features">
                                Type: {productsObject[parseInt(productId)].type}
                            </div>
                            <div className="product-features">
                                Capacite:{' '}
                                {productsObject[parseInt(productId)].capacity}
                            </div>
                            <div className="product-price">
                                {productsObject[parseInt(productId)].price}$
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>{' '}
        </Grid>
    )
}
export default CartPage
