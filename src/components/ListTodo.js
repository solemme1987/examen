import React, {useState} from 'react'

function ListTodo({items}) {
     
      const [marcar, setMarcar] = useState('')
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

    return (
       items.map((item)=>(
           <li key={item} onClick={handleClass} > {item}</li>
    ))
    ) 
}

export default ListTodo
