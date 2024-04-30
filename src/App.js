
import { useState } from "react" 
//import Product from "./components/Product/Products"
import ProductList from "./components/ProductList/ProductList"

//function App(){
const App = () => {

        //   [currentStateName, set state]
    const [products, setProducts] = useState([
        // initial state
        {id: 1, title: 'Book 1'},
        {id: 2, title: 'Book 2'},
        {id: 3, title: 'Book 3'},
    ])   

    const deleteProduct = (id) => {
        // console.log(`Deleted ${id}`)
        setProducts(products.filter((item) => item.id !== id))
    }

    return(
    <div className='container'>
        {/* <Product />
        <Product />
        <Product /> */}

        {/* using props as attribute */}
        {/* <Product title='Book 1'/>
        <Product title='Book 2'/>
        <Product title='Book 3'/> */}

        <ProductList products={products} onDelete={deleteProduct}/>

    </div>
)
}

export default App