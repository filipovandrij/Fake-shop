import ProductsList from 'components/ProductsList/ProductsList'

type Props = { addProductToCart: (count: number, price: number) => void }
const Home = (props: Props) => {
    return (
        <div>
            <ProductsList addProductToCart={props.addProductToCart} />
        </div>
    )
}
export default Home
