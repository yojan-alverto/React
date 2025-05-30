import './App.css';
import Header from './Componentes/Header'; 
import Projectos from './Componentes/Projectos';
import InfoPerfil from './Componentes/InfoPerfil';
import Formurario from './Componentes/Formurario';
function App() {
  return (
    <div className="App">
      <Header />
      <InfoPerfil />
      <Projectos />
      <Formurario />
    </div>
  );
}

export default App;
