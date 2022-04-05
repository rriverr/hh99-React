import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../shared/firebase";
import firebase from 'firebase/compat/app';


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

// const loginAction = (user) => {
//   // return function(dispatch, getState, {history}) {
//   //   console.log(history);
//   //   dispatch(logIn(user));
//   //   history.push('/');
//   // }
//   return function (dispatch, getState, { history }) {
//     console.log(history);
//     dispatch(setUser(user));
//     history.push('/');
//   }
// }

// 회원가입

const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {

    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
      signInWithEmailAndPassword(auth, id, pwd)
        .then((userCredential) => {
          // 로그인 이후 무엇을 할 것인지 
          const user = userCredential.user;
          console.log(user)
          dispatch(setUser({ user_name: user.displayName, id: id, user_profile: '', uid: user.uid, }));
          history.push('/');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode, errorMessage);

        });
    });


  }
}

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {

    createUserWithEmailAndPassword(auth, id, pwd)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        updateProfile(auth.currentUser, {
          displayName: user_name,
        }).then(() => {
          dispatch(setUser({ user_name: user_name, id: id, user_profile: '', uid: user.uid, }));
          history.push('/');
        }).catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ..
      });

  }
}

const loginCheckFB = () => {
  return function (dispatch, getState, {history}) {
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatch(setUser({
          user_name: user.displayName,
          user_profile: "",
          id: user.email,
          uid: user.uid,
        }));
      } else {
        dispatch(logOut());
      }
    })
  }
}

const logoutFB = () => {
  return function (dispatch, getState, {history}) {
    auth.signOut().then(() => {
      dispatch(logOut());
      history.replace('/');
      // 로그아웃된 유저를 로그인 전용 페이지에 머무를 수 없게 하기 위해 push 대신 replace 사용.
    })
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
      // console.log("되나?")
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
  // loginAction,
  loginFB,
  signupFB,
  loginCheckFB,
  logoutFB,
};

export { actionCreaters };