import './App.css';
import NavBar from './components/blocks/NavBar';
import About from './components/blocks/About';
import Services from './components/blocks/Services';
import Goods from './components/blocks/Goods';
import Gallery from './components/blocks/Gallery/';
import YandexMap from './components/blocks/YandexMap';
import Footer from './components/blocks/Footer';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCccZbbK5z7yGk05eiZnWAGs5PMKM9t-G4",
  authDomain: "na-zare.firebaseapp.com",
  projectId: "na-zare",
  storageBucket: "na-zare.firebasestorage.app",
  messagingSenderId: "762125239584",
  appId: "1:762125239584:web:32a7e1e12c75d446be8345",
  measurementId: "G-FPNXFS1XL8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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
