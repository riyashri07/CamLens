
import './App.css';
import Navbar from "./Component/Navbar"
// import Carousel from './Component/Carousel';
import Footer from "./Component/Footer"
// import Data from "./Data.json"; 
import Allroutes from './Component/Allroutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
