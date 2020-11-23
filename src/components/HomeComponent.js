import React from 'react';
import { Jumbotron } from 'reactstrap';

function Home(){
    return(
        <React.Fragment>
            <Jumbotron>
            <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1 style={{fontFamily:"Fibra One"}}>Startup Mentoring Platform</h1>
                        </div>      
                    </div>
                </div>
            </Jumbotron>
        </React.Fragment>
    );
}

export default Home;
