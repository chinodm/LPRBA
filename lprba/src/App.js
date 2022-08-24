import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting='Bienvenido' text='Lorem ipsum dolor sit amet. Id amet iusto aut delenit' relleno='relleno del prop'/>
    </>
  );
}

export default App;
