import './App.css';
import { Home } from './pages/Home';
import { Routes, Route} from "react-router-dom"
import Login from './pages/Login';
import Register from './pages/SignUp';

const App = ()=>{
return (
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    
  </Routes>
  );
}

export default App;
