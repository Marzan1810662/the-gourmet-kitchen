import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Notfound from './components/NotFound/Notfound';
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/checkout' element={
                                <RequireAuth>
                                  <Checkout />
                                </RequireAuth>
                              }></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
