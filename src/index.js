import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement(
    'div',
    {id: 'app', className: 'container'},
    'Hello World'
)

const root = document.getElementsById('root')

ReactDOM.render(element, root)

