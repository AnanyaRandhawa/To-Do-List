import Items from "./items";

const FoodItems=({items})=>{


 return(
    <ul className="list-group">
    {items.map((item,index)=>(
      <Items key={index} foodli={item} handleBuyButton={()=>console.log(`${item} bought`)}></Items>
    ))}
</ul>
 );
};
export default FoodItems;