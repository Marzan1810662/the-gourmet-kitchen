import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Notfound from './components/NotFound/Notfound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
