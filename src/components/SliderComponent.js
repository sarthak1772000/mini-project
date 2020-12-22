import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,Button, Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <React.Fragment>
            <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <h2>Startup</h2>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
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
}


export default Header;