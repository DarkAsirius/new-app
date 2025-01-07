import './App.css';
import NavBar from './components/blocks/NavBar';
import About from './components/blocks/About';
import Services from './components/blocks/Services';
import Goods from './components/blocks/Goods';
import Gallery from './components/blocks/Gallery/';
import YandexMap from './components/blocks/YandexMap';
import Footer from './components/blocks/Footer';


function App() {
  return (
    <>
      <NavBar />
      <About />
      <Services />
      <Goods />
      <Gallery />
      <YandexMap coordinates={[47.224379, 39.727014]}/>
      <Footer />
    </>
  );
}

export default App;
