import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Home/Login/Login';
import Signup from './components/Home/Signup/Signup';
import Notfound from './components/NotFound/Notfound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
