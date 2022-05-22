
import { productArray } from '../assets/productSrc'
import Product from '../components/props/Products'
import Header from "../components/Header";

const Products = () => {

    return (
        <div>
            <Header props={'Products'} clr={'#FF5F5D' }/>
            <Product productArray={ productArray}/>
        </div>

    )
}


export default Products