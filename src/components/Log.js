import React, { useState } from "react";
import './Log.css';

const Log = () => {
  const [action, setAction] = useState('Sign Up'); // Corrected initial value

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Login' ? <div></div> : 
          <div className="input-place">
            <input placeholder="enter a name" type="text" />
          </div>
        }
        <input className="password" placeholder="enter password" type="password" />
        <label type='checkbox'>remember me</label>
      </div>
      {action === 'Sign Up' ? <div></div> : 
        <div className="forgot">forgot password? <span>click here!</span></div>
      }
      
      <div className="submit-group">
        <div 
          className={action === 'Sign Up' ? 'submit gray' : 'submit'} 
          onClick={() => setAction('Login')}
        >
          Login
        </div>
        <div 
          className={action === 'Login' ? 'submit gray' : 'submit'} 
          onClick={() => setAction('Sign Up')}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
}

export default Log;
