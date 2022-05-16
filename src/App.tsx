
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Upload } from './Upload/Upload';
import { Album } from './Album/Album';
import { Home } from './Home/Home';


//export const url="https://jaodevvps.online:8010/v1/"
export const url="http://127.0.0.1:8000/v1/"

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
