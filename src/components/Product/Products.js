import './Product.css'



// function Product(){
//     return <div className='product'>Product</div>
// }

// //dynamic components
// //function Product(props){
// const Product = (props) => {
//     return <div className='product'>{props.title}</div>
// }

//object destructing (implicit props)
    const Product = ({product, onDelete}) => {

        // declare one function into another function
        // const titleHandler = () => {
        //     console.log(title)
        // }



        return <div className='product'>
            <div>{product.title}</div>
            <div >
                <button className='btn' onClick={() => onDelete(product.id)}>
                    Delete
                </button>
            </div>
        </div>
    }

export default Product