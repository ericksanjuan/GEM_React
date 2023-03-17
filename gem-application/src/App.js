import './App.css';
import Navbar from './components/Navbar';
import Form from './components/form';
 

function App() {
  return (
    <div className="App">
      <Navbar />
    <img alt="zones" src="./Images/USDA_zones.png"/>  
    <div className="form">
      <Form />
    </div>
    </div>
  );
}

export default App;
