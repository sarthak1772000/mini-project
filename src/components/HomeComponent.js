import React from 'react';
import { Jumbotron } from 'reactstrap';
import "../profile.css";

function Profile(){
    return(
        <div className="page-content page-container" id="page-content">
        <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-xl-12 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" /> </div>
                                <h6 className="f-w-600">Hembo Tingor</h6>
                                <p>Web Designer</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Phone</p>
                                        <h6 className="text-muted f-w-400">98979989898</h6>
                                    </div>
                                </div>
                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Recent</p>
                                        <h6 className="text-muted f-w-400">Sam Disuja</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Most Viewed</p>
                                        <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                                    </div>
                                </div>
                                <ul className="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}
function Idea(){
    return(
        <div className="card-deck" style={{margin: "50px 10px auto"}}>
            <div className="card">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1533901567451-7a6e68d6cd8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Group name</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a className="button-primary">Read More</a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1533901567451-7a6e68d6cd8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1533901567451-7a6e68d6cd8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1533901567451-7a6e68d6cd8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Group name</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a className="button-primary">Read More</a>
                </div>
            </div>
        </div>       
    );
} 

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
            <Idea />
            <Profile />
        </React.Fragment>
    );
}

export default Home;
