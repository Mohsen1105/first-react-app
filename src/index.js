import React from 'react'
import ReactDOM from 'react-dom'

// const element = React.createElement(
//     'div',
//     {id: 'app', className: 'container'},
//     'Hello World'
// )

///jsx
const element = (
    <div id="app" className='container'>
        Hello
    </div>
)


const root = document.getElementById('root');
 
ReactDOM.render(element, root)

