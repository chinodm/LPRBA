import ItemCount from "./ItemCount/ItemCount";

  const ItemListContainer= (props) => {
      return (
           <article className="ListContainer">
                <h2>{props.greeting}</h2>
                <h3>{props.text}</h3>            
           </article>
      )

     
  }


 export default ItemListContainer;