import React, {useState} from 'react'
import SideImage from '../Assets/Images/side-img.jpg'
import googleIcon from '../Assets/Images/icon-google.svg'
import '../CSS/SignUp.css'
import config from '../../config';
import Loader from '../Loader'
import Modal from '../Modal/Modal';
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
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

    const hanleSignin = async () => {
        if (!username) {
            setDialogMessage('You Must Enter Username!');
            setShowDialog(true);
            return;
        }
        if (!password) {
            setDialogMessage('You Must Enter Password!');
            setShowDialog(true);
            return;
        }
        let allUser = await getAllUser();
        let existsUser = allUser.find(x => x.username == username);
        if (existsUser) {
            setDialogMessage('Username Already Exist!');
            setShowDialog(true);
            return;
        } else {
            let res = await fetch(config.endpoint + '/user', {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    username: username,
                    password: password
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            if(res.status == 201) {
                navigate('/Login');
            } else {
                setDialogMessage('Something Went Wrong, Please Try Again Later');
                setShowDialog(true);
            }
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
                        <h1 className='text-heading'>Create an account</h1>
                        <p className='sub-heading'>Enter your details below</p>
                    </div>
                    
                    <div className='login-section'>
                        <input onChange={(event) => {setName(event.target.value)}} type="text" value={name} name="name" id="name" placeholder='Name' />
                        <input onChange={(event) => {setUsername(event.target.value)}} type="email" value={username} name="email" id="e-mail" placeholder='Username'/>
                        <input onChange={(event) => {setPassword(event.target.value)}} type="password" value={password} name="password" id="password" placeholder='Password'/>
                    </div>
    
                    <div className="btn-sign-section">
                        <button onClick={hanleSignin} className='sign-btn'>Create Account</button>
                        <button className='sign-gg-btn'>
                            <img className='gg-icon' src={googleIcon} alt="" />
                            Sign up with Google
                        </button>
                            <div className='signup-txt'>
                                <p className='txt-left'>Already have account?</p>
                                <p className='txt-right'>Log in</p>
                            </div>
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

export default SignUp