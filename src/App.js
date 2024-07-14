import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register';
import Main from './components/Main';
import Introduce from './components/Introduce';
import Ctf from './components/Ctf';
import Item from './components/Item';
import Account from './components/Account';
import Ranking from './components/Ranking';
import Blank from './components/Blank';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exect path="/" element={<Home/>}/>
          <Route exect path="*" element={<Blank />}/>
          <Route exect path="login" element={<Login/>}/>
          <Route exect path="register" element={<Register/>}/>
          
          <Route exect path="main" element={<Main />}/>
          <Route exect path="introduce" element={<Introduce />}/>
          <Route exect path="ctf" element={<Ctf />} />
          <Route exect path="item" element={<Item />}/>
          <Route exect path="account" element={<Account />}/>
          <Route exect path="ranking" element={<Ranking />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
