import { useState, useEffect} from "react";
import "../profile.css";

const AllMentors = () =>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('/getmentors',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setData(result.mentors)
        })
     },[])

    return(
        <div className="container">
        <div className="row">
        { 
            data.map(item => {
                return(
                    <div className="md-4" key={item._id}>
                    <div className="container">
                            <div className="profile-card-4 text-center"><img src={item.pic} className="img img-responsive" />
                            <div className="profile-content">
                                <div className="profile-name">{item.name}
                                </div>
                                <h5>{item.name}</h5>
                                <div className="profile-description">{item.Field}</div>
                                <a href={item.linkedinProfile} target="_blank"><span className="fa fa-linkedin-square fa-lg"></span></a>
                            </div>
                            </div>
                    </div>
                    </div>
                );
            })    
        }
        </div>
        </div>
    );
}

export default AllMentors;