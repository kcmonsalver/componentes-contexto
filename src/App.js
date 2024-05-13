
import './App.css';
import { UserContext } from './Context/UserContext';
import Datos from './componentes/Informacion';


function App() {
    const userData ={
      nombre: "Kristhian Monsalve",
      edad: 26,
      genero: "masculino"
    }
  
  return (
    <UserContext.Provider value={userData}>
    <div className='App'>
          
          <h1>Ejemplo de contexto</h1>
          <Datos/>
            </div>
            </UserContext.Provider>
  );
}



export default App;
