import React from 'react';
import logoImg from './assets/annotaPicLogo.svg';
import bgImg from './assets/login-bg.jpg';


function Login() {
  return (
    <div>
       <div class="login-bg">
    <div class="container-fluid">
      <div class="row">
          <div class="login-section">
            <img src={logoImg}/>
            <div id="login" >
              <div class="login-lable" >
                  Admin Login
              </div>
              <form class="vld-parent" >
                <div class="form-group">
                  <label>Username</label>
                  <input type="text" class="form-control" required />
                  <div class="invalid-feedback">Invalid username format</div>
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input v-model="loginForm.password" type="password" class="form-control" />
                </div>
                <button type="submit" class="btn btn-primary btn-block" >
                  Login
                </button>
                <div>New user create a account</div>
              </form>
            </div>
           
          </div>
      </div>
    </div>


  </div>
    </div>
  );
}

export default Login;