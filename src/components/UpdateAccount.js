import React, { useState } from 'react';
import axios from "axios";

function UpdateAccount(){
        const [name, setName] = useState("")
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [linkedinProfile, setLinkedin] = useState("");
        const [student, setStudent] = useState(false);
        const [mentor, setMentor] = useState(false);
        const [branch, setBranch] = useState("");
        const [Field, setField] = useState("");

        const handleSubmitClick = (e) => {
            e.preventDefault();
            if(password === confirmPassword) {
                PostData();   
            } else {
                console.log('Passwords do not match');
            }
        }

        const PostData = () =>{

            const payload2 = {
                name: name,
                email: email,
                password: password,
                Field: Field,
                linkedinProfile: linkedinProfile
            }

            if(student){
                fetch("/students/me",{
                    method:"patch",
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization":"Bearer "+localStorage.getItem("jwt")
                    },
                    body:({
                        name: name,
                        password: password,
                        branch: branch,
                        linkedinProfile: linkedinProfile
                    })
                })
                .then(res => {
                    console.log(res);
                    alert('Successfully updated now relogin!');
                })
                .catch(err => {
                    alert(err);
                })
            }

            if(mentor){
                axios.patch('http://localhost:5000/mentors', payload2)
                .then(res => {
                    alert('registration successful');
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
                                <div className="card-header"><b>Update Account</b></div>
                                <div className="line"></div>
                                <div className="card-body" className="login">
                                    <form>
                                        <div className="form-group text-left">
                                            <label htmlFor="name">Enter Name</label>
                                            <input type="text" 
                                                className="form-control" 
                                                id="name" 
                                                placeholder="Enter name"
                                                value = {name}
                                                onChange = {(e) => {setName(e.target.value)}}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputEmail1">Email address(this is for mentors only)</label>
                                            <input type="email" 
                                                className="form-control" 
                                                id="email" 
                                                placeholder="Enter email"
                                                value = {email}
                                                onChange = {(e) => {setEmail(e.target.value)}}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" 
                                                className="form-control" 
                                                id="password" 
                                                placeholder="Password"
                                                value = {password}
                                                onChange = {(e) => {setPassword(e.target.value)}}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <input type="password" 
                                                className="form-control" 
                                                id="confirmPassword" 
                                                placeholder="Confirm Password"
                                                value = {confirmPassword}
                                                onChange = {(e) => {setConfirmPassword(e.target.value)}}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="branch">Branch(If student required)</label>
                                            <input type="text" 
                                                className="form-control" 
                                                id="branch" 
                                                placeholder="Enter branch"
                                                value = {branch}
                                                onChange = {(e) => {setBranch(e.target.value)}}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="Field">Field(If mentor required)</label>
                                            <input type="text" 
                                                className="form-control" 
                                                id="Field" 
                                                placeholder="Enter Field"
                                                value = {Field}
                                                onChange = {(e) => {setField(e.target.value)}}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="linkedin">LinkedIn profile URL</label>
                                            <input type="url" 
                                                className="form-control" 
                                                id="linkedin" 
                                                placeholder="LinkedIn profile URL"
                                                value = {linkedinProfile}
                                                onChange = {(e) => {setLinkedin(e.target.value)}}
                                            />
                                        </div>
                                        <label>Update as A</label>
                                        <div className="form-check text-left">
                                            <input className="form-check-input" 
                                                type="radio" 
                                                name="student" 
                                                id="student" 
                                                value={student} 
                                                onChange = {() => setStudent(!student)}
                                            />
                                            <label className="form-check-label" htmlFor="student">
                                                Student 
                                            </label>
                                        </div>
                                        <div className="form-check text-left">
                                            <input className="form-check-input" 
                                                type="radio" 
                                                name="mentor" 
                                                id="mentor" 
                                                value={mentor}
                                                onChange = {() => setMentor(!mentor)} 
                                            />
                                            <label className="form-check-label" htmlFor="mentor">
                                                Mentor
                                            </label>
                                        </div>
                                        <br />
                                        <button 
                                            className="btn btn-primary"
                                            onClick = { handleSubmitClick } 
                                        >
                                            Update
                                        </button>
                                        <p>Please fill all fields!</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
}

export default UpdateAccount;