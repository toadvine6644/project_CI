import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import {Routes, Route} from 'react-router-dom';
import UserStore from './components/userContex';
import { useState, useEffect} from 'react';
import Profile from './components/Profile/Profile';
import Payment from './components/Profile/Payment';

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    let isLogged = window.localStorage.getItem('isLoggedIn');
    if (isLogged) {
      setIsloggedIn(isLogged);
    }
  }, [])

  return (
    <>
    {/* code xong  */}
    <UserStore.Provider value={{ isLoggedIn, setIsloggedIn }}>
      <Header />
      <NavBar />
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/About'></Route>
          <Route path='/LogIn' element={<Login/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/Payment' element={<Payment/>}></Route>
      </Routes>
      <Footer />
      </UserStore.Provider>
    </>
  );
}

export default App;
