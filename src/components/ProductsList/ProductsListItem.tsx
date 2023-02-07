import { CardActions, Button, Card, CardContent } from '@mui/material'
import './ProductsListItem.scss'
type Props = {}

const ProductsListItem = (props: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-title">iPhone 14 pro</div>
                <div className="product-desc">This iPhone 14 pro</div>
                <div className="product-features">Type: phone</div>
                <div className="product-features">Capacite: 256 Gb</div>
                <div className="product-price">1200$</div>
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
