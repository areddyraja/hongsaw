import React from 'react';
import logoImg from './assets/annotaPicLogo.svg';
import bgImg from './assets/login-bg.jpg';


function Login() {
  return (
    <div>
      <div className="bg-light login-bg">
        <div className="container-fluid">
          <div className="row">
            {/* <div className='col-9 nopadding'>
              <img src={bgImg} className='img-fluid login-img'/> 
            </div> */}
            {/* <div className='col-3 nopadding'> */}
              <div className="login-section">
                {/* <img src={logoImg}/>  */}
                <div id="login" >
                  <div className="login-lable" >
                  <div className="logo"><img src="activity.svg"/>Activity <span>Monitoring</span> <div>| Admin</div></div>
                  </div>
                  <form className="vld-parent" >
                    <div className="form-group">
                      <label>Username</label>
                      <input  type="text" className="form-control" required />
                      <div className="invalid-feedback">Invalid username format</div>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input  type="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" >
                      Login
                    </button>
                    <div>New user create a account</div>
                  </form>
                </div>
               
              </div>
            {/* </div> */}
           
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Login;