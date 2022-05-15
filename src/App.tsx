
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Upload } from './Upload/Upload';
import { Album } from './Album/Album';
import { Home } from './Home/Home';

function App() {
  return (
    <div className="App">
     
        <Rutas></Rutas>
      
    </div>
  );
}



const Rutas = () => {

  return(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album" element={<Album />} />
      <Route path="/upload" element={<Upload />} />
    
    </Routes>
</BrowserRouter>

  )
}
export default App;
