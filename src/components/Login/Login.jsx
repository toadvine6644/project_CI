import React, { useState } from 'react'
import SideImage from '../Assets/Images/side-img.jpg'
import '../CSS/Login.css'
import config from '../../config';
import Loader from '../Loader'
import Modal from '../Modal/Modal';
import { useNavigate } from "react-router-dom";


function Login() {
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const getAllUser = async () => {
        setShowLoader(true);
        let res = await fetch(config.endpoint + '/user');
        let result = await res.json();
        setShowLoader(false);
        return result;
    }

    const closeDialog = () => {
        setShowDialog(false);
    }
    
    const handleLogin = async () => {
        let allUser = await getAllUser();
        let existsUsername = allUser.find(x => x.username == username);
        if (existsUsername) {
            let checkPassword = existsUsername.password == password;
            if (checkPassword) {
                navigate("/Home");
            } else {
                setDialogMessage('Incorrect Username or Password');
                setShowDialog(true);
            }
        } else {
            setDialogMessage('Incorrect Username or Password');
            setShowDialog(true);
        }
    }
  return (
    <div>
        <div className="log-container">
            <div className="left">
                <img src={SideImage} className='side-img' alt=""/>
            </div>
            <div className="right">
                <div className="text-section">
                    <h1 className='text-heading'>Log in to Exclusive</h1>
                    <p className='sub-heading'>Enter your details below</p>
                </div>
                
                <div className='login-section'>
                    <input onChange={(event) => {setUsername(event.target.value)}} type="email" name="email" id="e-mail" value={username} placeholder='Email or Phone Number'/>
                    <input onChange={(event) => {setPassword(event.target.value)}} type="password" name="password" value={password} id="password" placeholder='Password'/>
                </div>

                <div className="btn-log-section">
                    <button className='login-btn' onClick={handleLogin}>Log in</button>
                    <p className='pass-txt'>Forgot Password</p>
                </div>
            
            
            </div>
        </div>
        {
            showLoader && <Loader></Loader>
        }
        {
            showDialog && <Modal closeDialog={closeDialog} dialogMessage={dialogMessage}></Modal>
        }
    </div>
  );
}

export default Login