import style from './FoodInput.module.css';
const FoodInput=({handleKeyDown,
    // handleButton
})=>{
   
     
return(<>
    <input type="text" placeholder="Enter Food Item Here" className={style.foodInput} onKeyDown={handleKeyDown}/>
    {/* <button onClick={handleButton}>Add</button> */}
    </>
);
}
export default FoodInput;