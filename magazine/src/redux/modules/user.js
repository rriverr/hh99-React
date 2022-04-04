import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../shared/firebase";



// 액션 타입
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// 액션 생성 함수
// const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
}

const user_initial = {
  user_name: 'river',

}


// 미들웨어 액션
const loginAction = (user) => {
  // return function(dispatch, getState, {history}) {
  //   console.log(history);
  //   dispatch(logIn(user));
  //   history.push('/');
  // }
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    history.push('/');
  }
}

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, id, pwd)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage)
        // ..
      });

  }
}





// 리듀서
export default handleActions(
  {
    // [LOG_IN]: (state, action) => produce(state, (draft) => {
    //   setCookie("is_login", "success");
    //   draft.user = action.payload.user;
    //   draft.is_login = true;
    // }),
    [SET_USER]: (state, action) => produce(state, (draft) => {
      setCookie("is_login", "success");
      draft.user = action.payload.user;
      draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
      deleteCookie("is_login");
      draft.user = null;
      draft.is_login = false;
    }),
    [GET_USER]: (state, action) => produce(state, (draft) => {

    }),
  }
  , initialState
);

const actionCreaters = {
  // logIn,
  logOut,
  getUser,
  loginAction,
  signupFB,
};

export { actionCreaters };