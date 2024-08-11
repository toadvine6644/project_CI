import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    {/* code xong  */}
      <Header />
      <NavBar />
        <Routes>
          <Route path='/'></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
        </Routes>
      <Footer />
      
    </>
  );
}

export default App;
