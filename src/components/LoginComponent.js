import React, { useState} from 'react';
import axios from 'axios';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [student, setStudent] = useState(false);
    const [mentor, setMentor] = useState(false);

    const PostData = () => {
        const payload = {
            "email": email,
            "password": password
        }

        if(student){
            axios.post('http://localhost:5000/students', payload)
            .then(res => {
                if(response.status === 201){
                    alert('login successful');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }

        if(mentor){
            axios.post('http://localhost:5000/mentors', payload)
            .then(function(response){
                if(response.status === 201){
                    console.log('registration successful');
                }
            })
            .catch(function(error){
                console.log(error);
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
                                        <label>Register as A</label>
                                        <div className="form-check text-left">
                                            <input className="form-check-input" 
                                                type="radio" 
                                                name="exampleRadios" 
                                                id="exampleRadios1" 
                                                value={student} 
                                                onChange = {() => setStudent(!student)}
                                                checked 
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
                                            type="submit" 
                                            className="btn btn-primary"
                                            onSubmit = {() => PostData}
                                        >
                                            Login
                                        </button>
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