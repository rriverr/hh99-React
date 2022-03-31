// ***** Redux ***** //
import { db } from '../../Firebase'
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import { async } from '@firebase/util';


// 액션
const LOAD = 'dict/LOAD';
const CREATE = 'dict/CREATE';
const DELETE = 'dict/DELETE';
const UPDATE = 'dict/UPDATE';

// 초기값
const initialState = {
  list: [
    // {
    //   word: "楽しむ",
    //   ruby: "たのしむ",
    //   mean: "즐기다",
    //   exam: "私の分も楽しんできてね。",
    //   trans: "내 몫까지 즐기고 와.",
    //   completed: false
    // },
  ],
};


// 액션 생성
export function loadDict(dict_list) {
  return { type: LOAD, dict_list };
}

export function createDict(dict) {
  return { type: CREATE, dict };
}

export function deleteDict(dict_index) {
  return { type: DELETE, dict_index };
}

export function updateDict(dict_index, completed) {
  return { type: UPDATE, dict_index, completed };
}



// 미들웨어
// 가져오기
export const loadDictFB = () => {
  return async function (dispatch) {
    const dict_data = await getDocs(collection(db, "dict"));
    // console.log("dict_data", dict_data);

    let dict_list = [];
    dict_data.forEach((doc) => {
      // console.log("doc.data()", doc.data())
      // 가져온 데이터 원하는 형태(배열)로 
      dict_list.push({ id: doc.id, ...doc.data() });
    });
    // console.log("dict_list", dict_list);
    dispatch(loadDict(dict_list));
  }
}

// 추가하기
export const addDictFB = (dict) => {
  console.log("ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",dict);
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dict"), dict);
    const _dict = await getDoc(docRef);
    const dict_data = { id: _dict.id, ...dict };
    console.log("dict_data", dict_data)
    dispatch(createDict(dict_data));
  }
}

// 수정하기
export const updateDictFB = (list) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "dict", list.id);
    const list_id = list.id;
    // console.log("list.completed", list.completed )
    // await updateDoc(docRef, {completed:true});
    if (list.completed == false) {
      await updateDoc(docRef, { completed: true });
      dispatch(updateDict(list_id, {completed:true}))
    } else { 
      await updateDoc(docRef, { completed: false }); 
      dispatch(updateDict(list_id, {completed:false}));
    }
    
    // 리덕스 데이터 업데이트
    // const _dict_list = getState().dict.list;
    // console.log("dict_list", _dict_list)
    // const dict_index = _dict_list.findIndex((d) => {
    //   return d.id === list.id;
    // });
    // console.log("dict_index", dict_index)
    // // console.log("인덱스", dict_index)
    // dispatch(updateDict(dict_index));
    // console.log("dddd",_dict_list)
  }
}

// 삭제하기
export const deleteDictFB = (list) => {
  return async function (dispatch, getState) {
    console.log("미들웨어", list.id)
    if (!list.id) {
      window.alert("id가없어용")
      return;
    }
    const docRef = doc(db, "dict", list.id);
    await deleteDoc(docRef);

    const _dict_list = getState().dict.list;
    console.log("삭제하기_dict_list", _dict_list)
    const dict_index = _dict_list.findIndex((d) => {
      return d.id === list.id;
    });

    dispatch(deleteDict(dict_index));
  }
}



// 리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    // 로드
    case "dict/LOAD": {
      return { list: action.dict_list };
    }

    // 추가
    case "dict/CREATE": {
      console.log("gg",action)
      const new_dict_list = [action.dict, ...state.list]
      console.log(new_dict_list);
      return { list: new_dict_list };
    }

    case "dict/UPDATE": {
      const new_dict_list = state.list.map((l, idx) => {
        console.log("Dda",action)
        if (action.dict_index === l.id) {
          return {...l, ...action.completed};
        } else {
          return l;
        }
      })
      return { list: new_dict_list };
    }

    //삭제
    case "dict/DELETE": {
      console.log(state)
      const new_dict_list = state.list.filter((l, idx) => {
        return parseInt(action.dict_index) !== idx;
      });
      return { list: new_dict_list };
    }

    default: return state;
  }
}

