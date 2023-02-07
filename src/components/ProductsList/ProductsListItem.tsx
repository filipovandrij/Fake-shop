import { CardActions, Button, Card, CardContent } from '@mui/material'
import './ProductsListItem.scss'
type Props = {
    title: string
    descriptoin: string
    type: string
    capacity: string
    price: number
}

const ProductsListItem = (props: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-title">{props.title}</div>
                <div className="product-desc">This {props.descriptoin}</div>
                <div className="product-features">Type: {props.type}</div>
                <div className="product-features">
                    Capacite: {props.capacity}
                </div>
                <div className="product-price">{props.price}$</div>
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
