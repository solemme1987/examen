
import React, {useState} from 'react'
import ListTodo from './ListTodo'

function FormInput() {
      
      let lista;

      if(localStorage.getItem('lista')){
         lista=localStorage.getItem('lista').split(',');
      }else{
          lista=[];
      }


      const [inputValue, setInputValue] = useState('');
      const [items, setItem] = useState(lista)

      
      console.log(lista);
      
      //Modifico el estado del input
      const handleInputChange = (e) =>{
          setInputValue(e.target.value);     
      }
      
      //manejo el submit 
      const handleSubmit=(e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){
           
            setItem([ inputValue, ...items]);
    
            setInputValue('');//DEjamos el campo vacio

            localStorage.setItem('lista',[ inputValue, ...items]);

            console.log('Mi lista',localStorage.getItem('lista'))

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
