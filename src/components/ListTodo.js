import React, {useState} from 'react'

function ListTodo({items}) {
   
    const [marcar, setMarcar] = useState('')

    // MArcar elemento o tarea
    const handleClass=(e)=>{
    
         if(marcar===''){

            setMarcar('completed')
            e.target.className=(marcar);
               
         }else{
             
             setMarcar('')
             e.target.className=(marcar);
         }
        return marcar;
    }

    const handleRemove=(e)=>{
        e.preventDefault();
        e.target.remove();
     }
    return (
       items.map((item)=>(
           <li key={item} onClick={handleClass} onContextMenu={handleRemove}> {item}</li>
    ))
    ) 
}

export default ListTodo
