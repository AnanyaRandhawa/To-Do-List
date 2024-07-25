import styles from './items.module.css';
const Items=({foodli, handleBuyButton})=>{
  
return(
    
    <li className="list-group-item kg-item">{foodli}
    <button className={`${styles.buttons} btn btn-info`} onClick={handleBuyButton}>Buy</button>
    </li>
);
}
export default Items;