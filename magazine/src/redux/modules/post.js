import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { db } from "../../shared/firebase";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import moment from "moment";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";


const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

// initialState
const initialState = {
  list: [],
}

const initialPost = {
  // id: 0,
  // user_info: {
  //   user_name: "river",
  //   user_profile: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDuPiJ%2FbtrydfqtMyN%2FTpMT9SosNwZktIIkyaZ53K%2Fimg.png",
  // },
  image_url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDuPiJ%2FbtrydfqtMyN%2FTpMT9SosNwZktIIkyaZ53K%2Fimg.png",
  contents: "",
  Comment_cnt: 0,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};




const addPostFB = (contents = "",) => {
  return async function (dispatch, getState, { history }) {
    const _user = getState().user.user;
    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };
    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    const _data = {...user_info, ..._post};
    const new_data = await addDoc(collection(db, "post"), _data);
    console.log("new_data", (await getDoc(new_data)).data());
    const get_data = await getDoc(new_data);
    const post_data = {id:get_data.id, user_info, ..._post};
    console.log(get_data.id);
    dispatch(addPost(post_data));
    history.replace('/');
  }
}


const getPostFB = () => {
  return async function (dispatch, getState, { history }) {
    const post_data = await getDocs(collection(db, "post"));
    console.log("getPostFB", post_data)
    let post_list = [];
    post_data.forEach((doc) => {
      let _post = doc.data();

      // ['commnet_cnt', 'contents', ... ] 이런 식으로 항목을 배열로 만들어줌
      let post = Object.keys(_post).reduce((acc, cur) => {
        if (cur.indexOf("user_") !== -1) {
          return {
            ...acc,
            user_info: {
              ...acc.user_info,
              [cur]: _post[cur]
            },
          }
        }
        return { ...acc, [cur]: _post[cur] };
      }, { id: doc.id, user_info: {} })

      post_list.push(post);
    })
    console.log("post_list", post_list);
    dispatch(setPost(post_list));
  }
}



// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.post_list;
    }),

    [ADD_POST]: (state, action) => produce(state, (draft) => {
      draft.list.unshift(action.payload.post);
    }),
  }, initialState
)


const actionCreaters = {
  setPost,
  addPost,
  getPostFB,
  addPostFB,
}

export { actionCreaters };