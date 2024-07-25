import './App.css';
import FoodItems from './FoodItems';
import ErrorMessage from './errorMessage';
import Container from './container';
import FoodInput from './FoodInput'
import { useState } from 'react';


function App() {

  let [foodItem, setfoodItems]=useState(['Rice','Curd','Green Veggie','Salad']);

   
 const onKeyDown=(event)=>{
   if(event.key === 'Enter'){
    let newFoodItem = event.target.value;
    let newItem = [...foodItem,newFoodItem];
    setfoodItems(newItem);
    console.log(newItem);
   }

  }


  return (
  <>
    <Container>
     <h3>To-Do List</h3>
      <FoodInput handleKeyDown={onKeyDown}  />
      <FoodItems items={foodItem}/>
      <ErrorMessage items={foodItem}/>
      </Container>
    </>
  );
}


export default App;
