import React, { useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const SubmitIdea =() => {
        const history = useHistory()
        const [email,setEmail] = useState("");
        const [groupName,setGroupName] = useState("");
        const [leaderName,setLeaderName] = useState("");
        const [abstract,setAbstract] = useState("");
        const [synopsis,setSynopsis] = useState("");
        const [url,setUrl] = useState("");

        useEffect(()=>{
            if(url){
             fetch("/submitIdea",{
                 method:"post",
                 headers:{
                     "Content-Type":"application/json",
                     "Authorization":"Bearer "+localStorage.getItem("jwt")
                 },
                 body:JSON.stringify({
                     email,
                     groupName,
                     leaderName,
                     abstract,
                     synopsis:url
                 })
             }).then(res=>res.json())
             .then(data=>{
         
                if(data.error){
                    alert(data.error)
                }
                else{
                    console.log(data);
                    alert('Sucessfully submitted idea');
                    history.push('/')
                }
             }).catch(err=>{
                 console.log(err)
             })
         }
         },[url])
       
        const postDetails = (e)=>{
            e.preventDefault();
            console.log('Hii');
            const data = new FormData()
            data.append("file",synopsis)
            data.append("upload_preset","startup forum")
            data.append("cloud_name","ssp25")
            fetch("https://api.cloudinary.com/v1_1/ssp25/image/upload",{
                method:"post",
                body:data
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setUrl(data.url)
            })
            .catch(err=>{
                console.log(err)
            })
     
         
        }
        return(
            <React.Fragment>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-7 col-md-7">
                            <div className="card">
                                <div className="card-header"><b>Submit Idea</b></div>
                                <div className="line"></div>
                                <div className="card-body" className="login">
                                    <form>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" 
                                                className="form-control" 
                                                id="email" 
                                                placeholder="Enter email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="group">Group Name</label>
                                            <input type="text" 
                                                className="form-control" 
                                                id="group" 
                                                placeholder="Group Name"
                                                value={groupName}
                                                onChange={(e) => setGroupName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="leader">Leader Name</label>
                                            <input type="text" 
                                                className="form-control" 
                                                id="leader" 
                                                placeholder="Leader Name"
                                                value={leaderName}
                                                onChange={(e) => setLeaderName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="abstract">Write a project abstract</label>
                                            <textarea className="form-control" 
                                                id="abstract" 
                                                rows="6" 
                                                placeholder="project abstract"
                                                value={abstract}
                                                onChange={(e) => setAbstract(e.target.value)}
                                            >
                                            </textarea>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="file">Submit synopsis of Idea</label>
                                            <input type="file" className="form-control-file" id="file" 
                                                onChange={(e) => setSynopsis(e.target.files[0])}
                                            />
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary"
                                            onClick={postDetails}
                                        >
                                            Submit
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

export default SubmitIdea;