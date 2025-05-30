import './App.css';
<<<<<<< HEAD
import Header from './Componentes/Header'; // Ruta corregida
=======
import janeImage from './img/jane.png'; // Importa tu imagen
>>>>>>> 5759287 (perfil)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
=======
      <header className="App-header" style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
        <img src={janeImage} alt="Jane Doe" style={{ width: '150px', borderRadius: '10px' }} />
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ color: 'purple' }}>Hi, I'm Jane Doe! 👋</h1>
          <p style={{ maxWidth: '500px' }}>
            I am a full stack developer with 2 years of experience in both application and presentation layers.
            I have worked on applications and microservices deployed on IBM Cloud. I am an avid user of IBM Watson Services
            and have worked on Watson Assistant, NLU, Sentiment analyzer to name a few.
          </p>
        </div>
      </header>
>>>>>>> 5759287 (perfil)
    </div>
  );
}

export default App;
