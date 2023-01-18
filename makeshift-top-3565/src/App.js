
import './App.css';
import Navbar from "./Component/Navbar"
import Carousel from './Component/Carousel';
import Footer from "./Component/Footer"
import Data from "./Data.json"; 

function App() {
  return (
    <div className="App">
     <Navbar/>
    <Carousel start={Data.banner.start}/>
     <Footer/>
    </div>
  );
}

export default App;
