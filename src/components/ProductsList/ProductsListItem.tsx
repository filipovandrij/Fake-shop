import {
    TextField,
    CardActions,
    Button,
    Card,
    CardContent,
} from '@mui/material'
import { Component } from 'react'
import './ProductsListItem.scss'
type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

type State = {
    count: number
}

class ProductsListItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            count: 2,
        }
    }

    render() {
        const { title, description, type, capacity, price, image } = this.props
        return (
            <Card variant="outlined" className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-title">{title}</div>
                    <div className="product-desc">This {description}</div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">Capacite: {capacity}</div>
                    <div className="product-price">{price}$</div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField size="small" value={this.state.count} />
                        <Button variant="outlined">+</Button>
                    </div>
                </CardContent>
                <CardActions className="product-btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

// const ProductsListItem = (: Props) => {

// }

export default ProductsListItem
