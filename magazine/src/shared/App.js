import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"

import Header from '../components/Header';
import PostList from '../pages/PostList';
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route Path="/" component={Header} />
        <Route path="/" exact component={PostList}/>
        <Route path="/login" exact component={LogIn}/>
        <Route path="/signup" exact component={SignUp}/>
      </BrowserRouter>
    </React.Fragment>
  
  );
}

export default App;
