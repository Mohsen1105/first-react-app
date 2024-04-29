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
    const Product = ({title}) => {
        return <div className='product'>
            <div>{title}</div>
            <div >
                <button className='btn'>Title</button>
            </div>
        </div>
    }

export default Product