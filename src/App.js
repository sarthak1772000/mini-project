import './App.css';
import { BrowserRouter,useHistory } from 'react-router-dom';
import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomeComponent';
import SubmitIdea from './components/SubmitIdea';
import Register from './components/RegisterComponent';
import Login from './components/LoginComponent';
import Profile from './components/ProfileComponent';
import Idea from './components/IdeaComponent';
import MentorProfile from './components/MentorProfile';
import DetailIdea from './components/DetailIdea';
import AllMentors from './components/AllMentors';
import UpdateAccount from './components/UpdateAccount';
import {reducer,initialState} from './reducers/userReducer'
import { Switch, Route} from 'react-router-dom';

export const UserContext = createContext()


const Main = () => {
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/');
    }else{
      history.push('/login')
    }
  },[])
      return(
              <Switch>
                  <Route exact path='/' component={ Home }/>
                  <Route exact path='/home' component={ Home }/>
                  <Route path='/idea' component={ Idea }/>
                  <Route path='/submitIdea' component={ SubmitIdea }/>
                  <Route path='/register' component={ Register }/>
                  <Route path='/login' component={ Login }/>
                  <Route path='/profile' component={ Profile }/>
                  <Route path='/mentorprofile' component={ MentorProfile }/>
                  <Route path='/profile' component={ Profile }/>
                  <Route path='/detailidea' component={ DetailIdea} />
                  <Route path='/allmentors' component={ AllMentors} />
                  <Route path='/updateaccount' component={ UpdateAccount } />
              </Switch>
      );
}

function App(){
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
