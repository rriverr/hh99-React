import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { db } from './Firebase';
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import { dict_data, loadDictFB } from "./redux/modules/dict";

import Main from './Main';
import AddList from './AddList';




function App() {

  const dispatch = useDispatch();
  // 파이어스토어 확인
  React.useEffect(async () => {
    console.log("db", db);
    dispatch(loadDictFB());


    // // 데이터 가져오기
    // const query = await getDocs(collection(db, "dict"));
    // console.log("query", query);
    // query.forEach((doc)=>{
    //   console.log("doc.id, data", doc.id, doc.data());

    // // 도큐먼트 추가
    // addDoc(collection(db, "dict"), {
    //   word: "word", 
    //   ruby: "ruby", 
    //   mean: "mean", 
    //   exam: "exam", 
    //   trans: "trans",
    //   completed: false
    // })

    // //도큐먼트 수정
    // const docRef = doc(db, "dict", "fxQocpyzEPrYMrDE6GLS");
    // updateDoc(docRef, {completed: false});

    // //삭제하기
    // const docRef = doc(db, "dict", "fxQocpyzEPrYMrDE6GLS");
    // deleteDoc(docRef);
  }, []);




  return (
    <AppStyled>
      <nav>
        <h1>일본어 단어장</h1>
      </nav>
      <Route path="/" exact >
        <Main />
      </Route>
      <Route path="/add">
        <AddList />s
      </Route>
      <Route path="/modify">
        <AddList />
      </Route>
    </AppStyled>
  );
}


const AppStyled = styled.div`
  margin-bottom: -10px;
  font-size: 16px;
  
  ${'' /* height: 100vh;
  background: #fff6c0;
  background-attachment: scroll; */}

  nav {
    position: sticky;  
    top: 0;

    width: 100vw;
    border-bottom: 5px dotted #ff96a8;
    background-color: #fff;

    z-index: 100;

    h1 {
      margin: auto;
      padding: 16px 0 0 0;

      width: fit-content;
      
      color: #799ad4;
      font-size: 4em;
    }
  }
`;


export default App;
