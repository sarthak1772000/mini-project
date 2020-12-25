import { useState, useEffect} from "react";
import {Link} from 'react-router-dom';

const Idea = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('/allideas',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setData(result.submitidea)
        })
     },[])

    return( 
        <div className="card-deck" style={{margin: "50px 10px auto"}}>
        {
            data.map(item => {
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
    );
} 

export default Idea;