import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login';
import {Toaster} from 'react-hot-toast'
function App() {
  const Token  = sessionStorage.getItem('token')

  return (
    
    <BrowserRouter>
    {Token ? <Home/> : <Login/>}
   
    <Toaster/>
    </BrowserRouter>
  );
}

export default App;
