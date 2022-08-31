import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from "./componentes/ItemListContainer";
import ItemCount from './componentes/ItemCount/ItemCount';


 const onAdd= (quantity) => {
 	alert('Agregaste ' + quantity + ' elementos.')
 }

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting='Bienvenida' /> 
    <ItemCount stock={ItemCount.stock} initial={1} onAdd={onAdd}/>
    </>
  );
}

export default App;
