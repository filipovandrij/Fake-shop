import { Typography, Grid } from '@mui/material'
import ProductsListItem from 'components/ProductsList/ProductsListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h2">
                Product List
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="iPhone 14 pro"
                        descriptoin="Nice phone"
                        type="phone"
                        capacity="256 Gb"
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="Samsung Galaxy 20"
                        descriptoin="Nice phone"
                        type="phone"
                        capacity="156 Gb"
                        price={700}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="Nokia 1050"
                        descriptoin="Bad phone"
                        type="phone"
                        capacity="580 Gb"
                        price={1800}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
