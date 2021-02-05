
import React, {useState} from 'react'
import ListTodo from './ListTodo'

function FormInput() {
      
      const [inputValue, setInputValue] = useState('');
      const [items, setItem] = useState([])
      
      //Modifico el estado del input
      const handleInputChange = (e) =>{
          setInputValue(e.target.value);  
        //  console.log(inputValue);       
      }
      
      const handleSubmit=(e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){
           
            setItem([ inputValue, ...items]);
    
            setInputValue('');//DEjamos el campo vacio
        }
     }

    return (

        <form id="form" onSubmit={handleSubmit}>

          <input type="text" 
                 className="input" 
                 id="input" 
                 placeholder="Enter your todo" 
                 value={inputValue}
                 onChange={handleInputChange}
                 autoComplete="off"/>

            <ul className="todos" id="todos"> 
                  <ListTodo items={items}/>
            </ul> 
           

       </form>
    )
}

export default FormInput
