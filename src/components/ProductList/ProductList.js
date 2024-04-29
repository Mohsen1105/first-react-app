import Product from "../Product/Products"
import './ProductList.css'

const ProductList = ({products }) => {
    return (
        <div className="product-list">
            {products.map((item) => {
                return <Product key={item.id} title={item.title} />
            })}
        </div>
    )
}

export default ProductList