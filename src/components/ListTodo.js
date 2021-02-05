import React from 'react'

function ListTodo({items}) {
    return (
       items.map((item)=>(
           <li key={item}>{item}</li>
    ))
    ) 
}

export default ListTodo
