import React from 'react';
import './Register_Login.css';

function Register_Login() {

  return (
    <div className="Register_Login" >
      <div></div>

      <button onClick={() => {
        dispatchchangeUserStatus({
          type: 'changeUserStatus',
          payload: { userStatus: true }  //payload
        })
      }}></button>
    </div>
  );
}



export default Register_Login;
