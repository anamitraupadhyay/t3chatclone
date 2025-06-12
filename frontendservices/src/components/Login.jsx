import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGoogle } from 'react-icons/fa';
import styles from './Login.module.css'; // Assuming you have a CSS module for styles
const Login = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    
    <div className="login-container" style={{width:'100vw'}}>
      <div className="">
        <button
          className="" style={{
           position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex:'10',
            backgroundColor: '#87274c',
            color: 'white', 
            padding: '10px 20px',
            borderRadius: '5px',    
            display: 'flex',
            alignItems: 'center',   
            gap: '10px',
        }}
          onClick={handleBack}
        >
          <FaArrowLeft />
          Back to Chat
        </button>
      </div>

      <div className="">
        <h2 >
          Welcome to <span style={{color:'pink'}}>T3.chat</span>
        </h2>
        <p className="">
         Sign in below (we'll increase your message limits if you do 😊)
        </p>

        <button className="" style={{backgroundColor:'#87274c', color:'white', padding:'10px 20px', borderRadius:'5px',  alignItems:'center'}}>
          <FaGoogle size={20} />
          <span style={{marginLeft:'10px'}}>Continue with Google</span>
        </button>

        <p className=""  style={{color:'#a6a4a4'}}>
          By continuing, you agree to our{' '}
          <span className="" style={{color:'white',fontWeight:'600'}}>Terms of Service</span>{' '}
          and{' '}
          <span className=""style={{color:'white',fontWeight:'600'}}>Privacy Policy</span>
        </p>
      </div>
    </div>
   
  );
};

export default Login;
