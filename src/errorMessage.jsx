const ErrorMessage=({items})=>{
    
return (
<>
 {items.length===0 && <h3>Assignment not assigned yet.</h3>}
</>
);
}
export default ErrorMessage;