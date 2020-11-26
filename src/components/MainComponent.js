import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import SubmitIdea from './SubmitIdea';
import Register from './RegisterComponent';
import Login from './LoginComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' component={ Home }/>
                    <Route path='/submitIdea' component={ SubmitIdea }/>
                    <Route path='/register' component={ Register }/>
                    <Route path='/login' component={ Login }/>
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;

