// react 17 dont need to use import react
//import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// 1
// const element = React.createElement(
//     'div',
//     {id: 'app', className: 'container'},
//     'Hello World'
// )


// /// 2.jsx
// const element = (
//     <div id="app" className='container'>
//         Hello
//     </div>
// )
//ReactDOM.render(element, root)


// // 3. functions (for using components we must create function)
// function App(){
//     return(
//     <div id="app" className='container'>
//         Hello
//     </div>
// )
// }

ReactDOM.render(<App/>, document.getElementById('root'))

