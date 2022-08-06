import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Exercises1 from './pages/Exercise1';
import Exercises2 from './pages/Exercise2';
import Exercises3 from './pages/Exercise3';
import Exercises4 from './pages/Exercise4';
import Exercises5 from './pages/Exercise5';
import Exercises6 from './pages/Exercise6';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';

export default function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/Exercises1" element={<Exercises1 />} />
            <Route exact path="/Exercises2" element={<Exercises2 />} />
            <Route exact path="/Exercises3" element={<Exercises3 />} />
            <Route exact path="/Exercises4" element={<Exercises4 />} />
            <Route exact path="/Exercises5" element={<Exercises5 />} />
            <Route exact path="/Exercises6" element={<Exercises6 />} />
         </Routes>
      </BrowserRouter>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
