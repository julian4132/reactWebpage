import Navbar from './components/Navbar.jsx';
import Slideshow from './components/Slideshow.jsx';
import './App.css';
import Messi from './images/messi.jpg'
import Cristiano from './images/cristiano.jpg'
import Debruyne from './images/debruyne.jpg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow list={[Messi, Cristiano, Debruyne]}/>
    </div>
  );
}

export default App;
