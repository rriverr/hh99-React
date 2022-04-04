import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import Header from '../components/Header';
import PostList from '../pages/PostList';
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp';


function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}> 
        <Header/>
        <Route path="/" exact component={PostList}/>
        <Route path="/login" exact component={LogIn}/>
        <Route path="/signup" exact component={SignUp}/>
      </ConnectedRouter>
    </React.Fragment>
  
  );
}

export default App;
