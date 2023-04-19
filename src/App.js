import './App.css';


import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './scenes/Home.jsx';
import About from './scenes/About.jsx';


function App() {
  return (
    < div className='App'>
      <h1>This is the Title of the Site</h1>

    <BrowserRouter>
    <Routes> 
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    </Routes> 
    </BrowserRouter>
    
     <h3>This is below browser Router</h3>
     <p>This can be the footer</p>
    
     </div>
  );
}

export default App;
