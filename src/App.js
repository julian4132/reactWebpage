import Navbar from './components/Navbar.jsx';
import Slideshow from './components/Slideshow.jsx';
import AccessButton from './components/AccessButton.jsx';
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


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow list={[Pedri, Messi, Cristiano, Debruyne, Suarez, Lewandoski, VanDijk, Paqueta]}/>
      {/*<AccessButton title="Noticias" text="aaa" buttonText="bbb" imgsrc={News}/>*/}
      <FadeIn>
        <div>
          <p>Holaa</p>
        </div>
      </FadeIn>
    </div>
  );
}

export default App;
