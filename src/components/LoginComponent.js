import React, { useState, useContext} from 'react';
import {useHistory,Link} from 'react-router-dom';
import {UserContext} from '../App';
import axios from 'axios';

function Login(){
    const {state,dispatch} = useContext(UserContext);
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [student, setStudent] = useState(false);
    const [mentor, setMentor] = useState(false);

    const PostData = (e) => {
        e.preventDefault();

        const payload = {
            email: email,
            password: password
        }

        if(student){
            axios.post('http://localhost:5000/students/login', payload)
            .then( res => {
                    console.log(res.data);
                    localStorage.setItem("jwt",res.data.token);
                    localStorage.setItem("user",JSON.stringify(res.data.user));
                    dispatch({type:"USER", payload:res.data.user});
                    alert('login successful');
                    history.push('/home');
            })
            .catch(err => {
                alert(err);
            })
        }

        if(mentor){
            axios.post('http://localhost:5000/mentors/login', payload)
            .then(res => {
                localStorage.setItem("jwt",res.data.token);
                localStorage.setItem("user",JSON.stringify(res.data.user));
                dispatch({type:"USER", payload:res.data.user});
                alert('login successful');
                history.push('/home');
            })
            .catch(err => {
                alert(err);
            })
        }
    }

        return(
            <React.Fragment>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-7 col-md-7">
                            <div className="card">
                                <div className="card-header"><b>Login</b></div>
                                <div className="line"></div>
                                <div className="card-body" className="login">
                                    <form>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" 
                                                className="form-control" 
                                                id="email" 
                                                placeholder="Enter email"
                                                value = {email}
                                                onChange = { (e) => setEmail(e.target.value) }
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" 
                                                className="form-control" 
                                                id="password" 
                                                placeholder="Password"
                                                value = {password}
                                                onChange = { (e) => setPassword(e.target.value) }
                                            />
                                        </div>
                                        <label>Login as A</label>
                                        <div className="form-check text-left">
                                            <input className="form-check-input" 
                                                type="radio" 
                                                name="exampleRadios" 
                                                id="exampleRadios1" 
                                                value={student} 
                                                onChange = {() => setStudent(!student)}
                                            />
                                            <label className="form-check-label" htmlFor="exampleRadios1">
                                                Student 
                                            </label>
                                        </div>
                                        <div className="form-check text-left">
                                            <input className="form-check-input" 
                                                type="radio" 
                                                name="exampleRadios" 
                                                id="exampleRadios2" 
                                                value={mentor}
                                                onChange = {() => setMentor(!mentor)} 
                                            />
                                            <label className="form-check-label" htmlFor="exampleRadios2">
                                                Mentor
                                            </label>
                                        </div>
                                        <br />
                                        <button 
                                            className="btn btn-primary"
                                            onClick = {PostData}
                                        >
                                            Login
                                        </button>
                                        <h5>
                                            <Link to="/register">Dont have an account ?</Link>
                                        </h5>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
}

export default Login;