
import Product from "./components/Products"

//function App(){
const App = () => {
    return(
    <div className='container'>
        {/* <Product />
        <Product />
        <Product /> */}

        {/* using props as attribute */}
        <Product title='Book 1'/>
        <Product title='Book 2'/>
        <Product title='Book 3'/>

    </div>
)
}

export default App