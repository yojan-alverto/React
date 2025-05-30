import './App.css';
import Projectos from './Componentes/Projectos';
import InfoPerfil from './Componentes/InfoPerfil';
import Formurario from './Componentes/Formurario';
import Header from './Componentes/Header';
import Habilidades from './Componentes/Habilidades';
import Recomendaciones from './Componentes/Recomendaciones';

function App() {
  return (
    <div className="App">
      <Header />
      <InfoPerfil />
      <Habilidades />
      <Projectos />
      <Recomendaciones />
      <Formurario />
    </div>
  );
}

export default App;
