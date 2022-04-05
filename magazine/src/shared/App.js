import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import Header from '../components/Header';
import PostList from '../pages/PostList';
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp';
import Detail from '../pages/Detail';
import Upload from '../pages/Upload';

import { useDispatch } from 'react-redux';
import { actionCreaters as userActions } from '../redux/modules/user';
import { apiKey } from "./firebase";
import { Grid } from '../elements';



function App() {

  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, [])

  return (
    <React.Fragment>
      <Grid>
        <Header />
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/detail" exact component={Detail} />
          <Route path="/upload" exact component={Upload} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>

  );
}

export default App;
