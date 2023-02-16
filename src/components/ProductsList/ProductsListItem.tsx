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
    color: String
}

class ProductsListItem extends Component<Props, State> {
    state = {
        count: 1,
        color: 'green',
    }

    onIncrementClick = (num: number) => {
        this.setState((prevState: State) => ({
            count: prevState.count + num,
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
        }))
    }

    changeColor = () => {
        this.setState((prevState: State) => {
            if (prevState.color === 'green') {
                return {
                    color: 'red',
                }
            } else {
                return {
                    color: 'green',
                }
            }
        })
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
                    <div className="product-features">
                        Capacite: {capacity} Gb
                    </div>
                    <p>
                        Color:{' '}
                        <span className={this.state.color}>
                            {this.state.color}
                        </span>
                    </p>
                    <button onClick={this.changeColor}>Change color</button>
                    <div className="product-price">{price}$</div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={this.onDecrementClick}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={() => this.onIncrementClick(3)}
                        >
                            +
                        </Button>
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
