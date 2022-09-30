import Navbar from './components/Navbar.jsx';
import Slideshow from './components/Slideshow.jsx';
import AccessButton from './components/AccessButton.jsx';
import RightAccessButton from './components/RightAccessButton.jsx';
import FadeIn from './components/FadeIn.jsx'
import './App.css';
import Pedri from './images/pedri.jpg'
import Messi from './images/messi.jpg'
import Cristiano from './images/cristiano.jpg'
import Debruyne from './images/debruyne.jpg'
import Suarez from './images/suarez.jpg'
import Lewandoski from './images/lewandoski.jpg'
import VanDijk from './images/van_dijk.jpg'
import Paqueta from './images/paqueta.jpg'
import News from './images/001-news.png'
import AboutUs from './components/AboutUs.jsx';
import Contact from './components/Contact.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow list={[Pedri, Messi, Cristiano, Debruyne, Suarez, Lewandoski, VanDijk, Paqueta]}/>
      <AccessButton title="Noticias" text="Las últimas novedades relacionadas al mundial de fútbol 2022, todas en un mismo lugar" buttonText="Acceder" imgsrc={News}/>
      <RightAccessButton title="Fixture" text="Mira los equipos y crea tus predicciones para el futuro" buttonText="Acceder" imgsrc={News}/>
      <AccessButton title="Entradas" text="Adquiere por anticipado los boletos para los partidos, exclusivamente desde nuestra tienda digital" buttonText="Acceder" imgsrc={News}/>
      <AboutUs />
      <Contact />
    </div>
  );
}

export default App;
