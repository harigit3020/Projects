import React from 'react';
import './login.css';
import swal from 'sweetalert';
function Login(){
    const [username,setUsername]=React.useState("");
    const [password,setPassword]=React.useState("");
    const getAccountDetails=()=>{

        let data={ 
            sreedevi:{username:"sreedevi",password:"abc123",acno:1001,balance:50000},
            test1:{username:"test1",password:"test1",acno:1002,balance:5000},
            test2:{username:"test2",password:"test2",acno:1003,balance:6000},
            test3:{username:"test3",password:"test3",acno:1004,balance:7000},      

        }
        return data;
    }
    const changeUser=(event)=>{
        setUsername(event);
    }
    const changePassword=(event)=>{
        setPassword(event);
    }
    
   const onSubmit=()=>{
    let usname=document.querySelector("#uname").value;//abc
    let pwd=document.querySelector("#pwd").value;
    //chk username is present inside data
    let data=getAccountDetails()
    if(usname in data){//abc in data
        let password=data[usname]["password"];
        if(pwd==password){
            swal("login sucess!", "u provided valid data!", "success");
             setTimeout(()=> window.location.href="usernav.htm",1000);//Delay calling
        }
        else{
            swal("login failed!", "u provided invalid data!", "error");

        }     
    }
    else{
        alert("inavlid user")
}

}

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
                        <from onSubmit={onSubmit} >
                            <div className="form-group">
                                <label for="uname">Username</label>
                                <input type="text"  onChange={changeUser} className="form-control" id="uname" aria-describedby="emailHelp"></input>
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small> */}
                                                  
                                <div className="form-group">
                                    <label for="pwd">Password</label>
                                    <input type="password" onChange={changePassword} className="form-control" id="pwd"></input>
                                </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                                </from>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
              </div>
    );
}
export default Login;