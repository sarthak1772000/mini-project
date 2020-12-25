import React from 'react';
import { Jumbotron } from 'reactstrap';

const DetailIdea = (props) => {
    if(props){
    return(
        <React.Fragment>
            <Jumbotron>
            <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1 style={{fontFamily:"Fibra One"}}>Startup Idea</h1>
                        </div>      
                    </div>
            </div>
            </Jumbotron>
            <br />
            <br />
            <div className="container">
                <h6>Group Name</h6>
                <p>{props?props.location.detail.item.groupName:"loading"}</p>
                <h6>Group Leader Name:</h6>
                <p>{props?props.location.detail.item.leaderName:"loading"}</p>
                <h6>Group Leader Email:</h6>
                <p>{props?props.location.detail.item.email:"loading"}</p>
                <h6>Abstract of a project</h6>
                <p>{props?props.location.detail.item.abstract:"loading"}</p>
                <a href={props?props.location.detail.item.synopsis:"#"} target="_blank">Visit synopsis of project</a>
            </div>
        </React.Fragment>
    );
    }
}

export default DetailIdea;