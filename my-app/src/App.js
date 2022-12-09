import {BrowserRouter as Router, Switch,} from 'React-Router-dom'
import './App.css';
import New from '/New';
import Listar from './listar';
import Search from './Search';

function App() {
  return (
     <div classname= 'App'>
       <Router>
        <navbar/>
        <Switch>
          <router path= 'Restaurantes' element={<Listar/>}/>
          <router path= 'Agregar restaurante' element={<New/>}/>
          <router path= 'bustar' element={<Search/>}/>
        </Switch>
       </Router> 
     </div> 
  );
}

export default App;
