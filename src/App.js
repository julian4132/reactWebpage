import Navbar from './components/Navbar.jsx';
import Slideshow from './components/Slideshow.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow list={["a", "b"]}/>
    </div>
  );
}

export default App;
