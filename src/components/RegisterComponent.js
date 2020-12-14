import React, { Component } from 'react';

class Register extends Component {
    render(){
        return(
            <React.Fragment>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-7 col-md-7">
                            <div className="card">
                                <div className="card-header"><b>Register</b></div>
                                <div className="line"></div>
                                <div className="card-body" className="login">
                                    <form>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" 
                                            className="form-control" 
                                            id="email" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Enter email"
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" 
                                                className="form-control" 
                                                id="password" 
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                            <input type="password" 
                                                className="form-control" 
                                                id="confirmPassword" 
                                                placeholder="Confirm Password"
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="linkedin">LinkedIn profile URL</label>
                                            <input type="url" 
                                            className="form-control" 
                                            id="linkedin" 
                                            placeholder="LinkedIn profile URL"
                                            />
                                        </div>
                                        <label>Register as A</label>
                                        <div className="form-check text-left">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Student" checked />
                                            <label class="form-check-label" for="exampleRadios1">
                                                Student 
                                            </label>
                                        </div>
                                        <div className="form-check text-left">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Mentor" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                Mentor
                                            </label>
                                        </div>
                                        <div className="form-check text-left">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="Admin" />
                                            <label class="form-check-label" for="exampleRadios3">
                                                Admin
                                            </label>
                                        </div>
                                        <br />
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary"
                                        >
                                            Register
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
}

export default Register;