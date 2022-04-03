import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { createDict, addDictFB } from "./redux/modules/dict";


function AddList() {

  const history = useHistory();

  // input 받아오기
  const word = React.useRef(null);
  const ruby = React.useRef(null);
  const mean = React.useRef(null);
  const exam = React.useRef(null);
  const trans = React.useRef(null);

  const dispatch = useDispatch();

  // 단어 추가하기
  const addDictList = () => {
    // console.log("등록할거예용");
    if (word.current.value === "" || ruby.current.value === "" || mean.current.value === "" || exam.current.value === "" || trans.current.value === "") {
      window.alert("항목을 모두 입력해주세요!")
    } else if (word.current.value === " " || ruby.current.value === " " || mean.current.value === " " || exam.current.value === " " || trans.current.value === " ") {
    window.alert("항목을 모두 입력해주세요!")
    } else {
        dispatch(addDictFB({
          word: word.current.value,
          ruby: ruby.current.value,
          mean: mean.current.value,
          exam: exam.current.value,
          trans: trans.current.value,
          completed: false
        }));
        history.goBack();
    }
    // 기존 코드
    // console.log(word.current.value);
    // console.log(ruby.current.value);
    // console.log(mean.current.value);
    // console.log(exam.current.value);
    // console.log(trans.current.value);

    // reducer로 데이터 보내기
    // dispatch(createDict({ word: word.current.value,
    //                       ruby: ruby.current.value,
    //                       mean: mean.current.value,
    //                       exam: exam.current.value,
    //                       trans: trans.current.value,
    //                       completed: false }));
  };

  return (
    <FormWrap>
      <h3>단어 추가하기</h3>
      <div>
        <label>단어</label>
        <input ref={word} />
        <label>후리가나</label>
        <input ref={ruby} />
        <label>의미</label>
        <input ref={mean} />
        <label>예문</label>
        <input ref={exam} />
        <label>해석</label>
        <input ref={trans} />
      </div>
      <button onClick={() => {
        addDictList();
      }}>저장하기</button>
    </FormWrap>
  );
}


const FormWrap = styled.div`
    width: 100vw;
    height: 100vh;

    font-size: 16px;
    text-align: center;
    color: #424c5d;

    h3 {
        margin: 30px;

        font-size: 2.5em;
        text-align: center;
    }

    div {
        margin: auto;

        width: 400px;

        text-align: left;

        label {
            font-size: 1.2em;
            font-weight: 800;
            
            text-align: left;
        }

        input {
            margin: 5px auto;

            width: 100%;
            height: 25px;

            border: none;
            border-bottom: 2px solid #b1c5e8;

            transition: 0.5s;
            &:focus {
                outline: none;

                border-bottom: 2px solid #799ad4;
            }
        }
    }

  button {
      margin-top: 30px;
      padding: 12px 0;

      width: 200px;
      height: 50px;

      color: white;
      font-family: 'GangwonEduSaeeum_OTFMediumA';
      font-size: 1.7em;

      background-color: #799ad4;

      border: none;
      border-radius: 30px;

      transition: 0.3s;

      &:hover {
        background-color: #b1c5e8;
      }
      &:active {
        transition: 0.1s;
        background-color: #ff96a8;
      }

      }

`;



export default AddList;
