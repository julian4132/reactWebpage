import Navbar from './components/Navbar.jsx';
import Slideshow from './components/Slideshow.jsx';
import './App.css';
import Pedri from './images/pedri.jpg'
import Messi from './images/messi.jpg'
import Cristiano from './images/cristiano.jpg'
import Debruyne from './images/debruyne.jpg'
import Suarez from './images/suarez.jpg'
import Lewandoski from './images/lewandoski.jpg'
import VanDijk from './images/van_dijk.jpg'
import Paqueta from './images/paqueta.jpg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow list={[Pedri, Messi, Cristiano, Debruyne, Suarez, Lewandoski, VanDijk, Paqueta]}/>
    </div>
  );
}

export default App;
