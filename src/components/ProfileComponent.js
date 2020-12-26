import "../profile.css";
import React from 'react';
import {useContext, useState,useEffect} from 'react';
import {UserContext} from '../App';
import {Link} from 'react-router-dom';

const Profile = () => {
    const [idea,setIdea] = useState([]);
    const {state,dispatch} = useContext(UserContext);
    const [image,setImage] = useState("");
    useEffect(()=>{
        fetch('/getmyidea',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setIdea(result.submitidea)
        })
     },[])

     useEffect(() =>{
        if(image){
        const data = new FormData()
        data.append("file",image);
        data.append("upload_preset","startup forum");
        data.append("cloud_name","ssp25");
        fetch("https://api.cloudinary.com/v1_1/ssp25/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
           fetch('http://localhost:5000/students/updatepic',{
               method:"put",
               headers:{
                   "Content-Type":"application/json",
                   "Authorization":"Bearer "+localStorage.getItem("jwt")
               },
               body:JSON.stringify({
                   pic:data.url
               })
           }).then(res=>res.json())
           .then(result=>{
               localStorage.setItem("user",JSON.stringify({...state,pic:result.pic}))
               dispatch({type:"UPDATEPIC",payload:result.pic})
           })
       
        })
        .catch(err=>{
            console.log(err)
        })
       }
    },[image])
    const updatePhoto = (file)=>{
        setImage(file)
    }

    return(
        <React.Fragment>
        <div className="page-content page-container" id="page-content">
        <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-xl-12 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src={state?state.pic:"loading"} style={{width:"160px",height:"160px",borderRadius:"80px"}} /> </div>
                                <h6 className="f-w-600">{state?state.name:"loading"}</h6>
                                <div className="btn btn-primary">
                                    <span>Update pic</span>
                                    <input type="file" onChange={(e)=>updatePhoto(e.target.files[0])} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">{state?state.email:"loading"}</h6>
                                    </div>
                                </div>
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Branch</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">{state?state.branch:"loading"}</p>
                                    </div>
                                </div>
                                <ul className="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href={state?state.linkedinProfile:"#"} target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="linkedin" data-abc="true"><i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        <hr/>
        <h3 style={{textAlign:"center"}}>My idea Submissions</h3>
        <div className="card-deck" style={{margin: "50px 10px auto"}}>
        {
            idea.map(item => {
            return(    
                <div className="card" className="col-md-3"key={item._id}>
                <img className="card-img-top" src="https://images.unsplash.com/photo-1533901567451-7a6e68d6cd8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{item.groupName}</h5>
                    <p className="card-text">{item.abstract}</p>
                    <Link className="button-primary" to={{
                        pathname:'/detailidea',
                        detail :{
                            item: item
                        }
                    }}>Read More</Link>
                </div>
                </div>   
            );
            }
            )       
        }
        </div>
        </React.Fragment>
    );
}

export default Profile;

