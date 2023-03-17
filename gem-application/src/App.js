import './App.css';
import Navbar from './components/Navbar';
import Page from './components/page';
import ZipFinder from './components/ZipFinder';
 
function App() {


  return (
    <div className="App"> 
      <Navbar /> 
    <div className="ZoneFinder">
      <img alt="zones" src="https://cdn11.bigcommerce.com/s-2ba96/product_images/uploaded_images/usda-zonemap2.jpg"/> 
      <ZipFinder />
    </div>
    <div>
      <Page />
     </div>
    </div>
  );
}

export default App;
