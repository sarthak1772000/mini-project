import React, { useContext, useState } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,Button, Jumbotron } from 'reactstrap';
import {NavLink, useHistory} from 'react-router-dom';
import {UserContext} from '../App';

function Header(){
    const {state,dispatch} = useContext(UserContext);
    const [isNavOpen,toggleNav] = useState(false);
    const history = useHistory();

    const Nav1 = () =>{        
            return(
                <React.Fragment>
                <Navbar dark expand="md">
                        <div className="container">
                            <NavbarToggler onClick={() => toggleNav(!isNavOpen)} />
                            <NavbarBrand className="mr-auto" href="/">
                                <h2>Startup</h2>
                            </NavbarBrand>
                            <Collapse isOpen={isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/submitIdea">
                                    <span className="fa fa-plus-square-o fa-lg"></span> Submit Idea
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav style={{marginLeft:"10px"}} navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/idea">
                                        <span className="fa fa-users fa-lg"></span> Student Ideas
                                    </NavLink>
                                </NavItem>
                        </Nav>
                        <Nav style={{marginLeft:"10px"}} navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/profile">
                                        <span className="fa fa-user fa-lg"></span> Profile
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        <Nav style={{marginLeft:"10px"}} navbar>
                                <NavItem>
                                    <button className="btn btn-danger"
                                        onClick={() => {
                                            localStorage.clear();
                                            dispatch({type:"CLEAR"});
                                            history.push('/login');
                                        }
                                        }
                                    >
                                        Log out
                                    </button>
                                </NavItem>
                            </Nav>
                            </Collapse>
                        </div>
                </Navbar>
    </React.Fragment>
            );
        }

        const Nav2 = () =>{
            return(
                <React.Fragment>
                    <Navbar dark expand="md">
                            <div className="container">
                                <NavbarToggler onClick={() => toggleNav(!isNavOpen)} />
                                <NavbarBrand className="mr-auto" href="/">
                                    <h2>Startup</h2>
                                </NavbarBrand>
                                <Collapse isOpen={isNavOpen} navbar>
                                <Nav style={{marginLeft:"10px"}} navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/register">
                                        <span className="fa fa-plus fa-lg"></span> Register
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav style={{marginLeft:"10px"}} navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/login">
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </NavLink>
                                </NavItem>
                            </Nav>
                                </Collapse>
                            </div>
                    </Navbar>
                    </React.Fragment>
            );
        }
        

    if(state){
        console.log(state);
        return <Nav1 />
    }
    else
        return <Nav2 />
}





export default Header;