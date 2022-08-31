import { useEffect, useState } from 'react';
import "./ItemCount.css";

const ItemCount = ({stock = 10, initial = 1, onAdd}) => {
     
     const [count, setCount] = useState(0);
     
     useEffect(() => {
          setCount(initial);
     }, []);
     
     const increment = () => {
          if (count < stock) {
               setCount(count + 1)
          }
     };
     
     const decrement = () => {
          if (count > initial) {
               setCount(count - 1)
          }
     };
     
     return(
          <div className='contador'>
               <button onClick={increment}> + </button>
               <h3>{count}</h3>
               <button onClick={decrement}> - </button>
               <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
          </div>
     )
};




// import {useEffect, useState} from 'react';
// import "./ItemCount.css";

// const ItemCount = ({ stock=0, initial=1, onAdd}) => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         setCount(initial);
//     },
//     []);

//     const increment = () => {
//         if (count < stock){
//             setCount(count + 1);
//         }
//     }

//     const decrement = () => {
//         if (count > initial){
//             setCount(count - 1);
//         }
//     }
//     return(
//         <div>
//       <div className="quantity">
//         <button onClick={increment}> + </button>
//         <span>{count}</span>
//         <button onClick={decrement}> - </button>
//       </div>

//       <div className="buttonContainer">
//         <button onClick={() => onAdd(count)} className="addButton">
//           Agregar al Carrito
//         </button>
//       </div>
//     </div>
        // <div className="product-amount-container">
        //     <button variant="text" onClick={increment}>+</button>
        //     <div className="product-amount">{count}</div>
        //     <button variant="text" onClick={decrement}>-</button>
        //     {
        //         stock
        //         ? <button variant="contained" color="primary" onClick={() => onAdd(count)}> Agregar al Carrito</button>
        //         : <button variant="contained" disabled>Agregar al Carrito</button>
        //     }
        // </div>
//     );
// }


export default ItemCount;