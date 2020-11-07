import React from 'react';
import './login.css';
function Login(){
    return(
        <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <h3>WELCOME TO SBK BANK</h3>
                    </div>
                    <div className="col-4"></div>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="jumbotron">
                            <div className="form-group">
                                <label for="uname">Username</label>
                                <input type="text" className="form-control" id="uname" aria-describedby="emailHelp"></input>
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small> */}
                                                  
                                <div className="form-group">
                                    <label for="pwd">Password</label>
                                    <input type="password" className="form-control" id="pwd"></input>
                                </div>
                                    <button type="button" className="btn btn-primary" onclick="Bank.login()">Submit</button>
                                </div>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                    <script src="bank.js"></script>
              </div>
    );
}
export default Login;