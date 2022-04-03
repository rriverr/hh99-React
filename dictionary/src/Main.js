import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { deleteDictFB, updateDict, updateDictFB } from './redux/modules/dict';


function Main() {
  const history = useHistory();
  const dispatch = useDispatch();

  const dict_list = useSelector((state) => state.dict.list);
  console.log("main_dict_list", dict_list)

  return (
    <DictList>
      {dict_list.map((list, index) => {
        {/* console.log("요요", list, index) */}
        {/* console.log("요요요", list.completed) */}
        return (
          <DictCard key={index} completed={list.completed}>
            
            <BtnBox completed={list.completed}>
              {/* 완료버튼 */}
              <button
                onClick={() => {
                  dispatch(updateDictFB(list));
                  console.log("list", list);
                }}
              >✔</button>

              {/* 삭제버튼 */}
              <button
                onClick={() => {
                  dispatch(deleteDictFB(list));
                }}
              >×</button>
            </BtnBox>
            
            <div>
              <h2 className='word'>{list.word}</h2>
              <p className='ruby'>[ {list.ruby} ]</p>
              <p className='mean'>{list.mean}</p>
              <p className='exam'>{list.exam}</p>
              <p className='trans'>{list.trans}</p>
            </div>
          </DictCard>
        );
      })}

      <button className='addBtn'
        onClick={() => {
          history.push(`/add`)
        }}>+</button>
    </DictList>
  );
}


const DictList = styled.div`
    margin: 10px auto;

    min-width: 450px;
    max-width: 1200px;
    width: 100vw;

    font-size: 16px;
    text-align: center;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-row-gap: 5px;

    .addBtn {
        position: fixed;
        right: 50px;
        bottom: 50px;

        width: 60px;
        height: 60px;
        
        background-color: #799ad4;
        font-size: 3em;
        color: #fff;

        border: none;
        border-radius: 30px;

        transition : 0.8s;

        &:hover {
            -ms-transform: rotate(180deg); // explorer 
            -webkit-transform: rotate(180deg); // chrome, safari, opera 
            transform: rotate(180deg);
            background-color: #b1c5e8;
        }

        &:active {
          transition: none;
          background-color: #ff96a8;
        }

    }

`;

const DictCard = styled.div`
    margin: 10px;

    min-width: 300px;
    min-height: 150px;
    
    border: 3px solid #799ad4;
    border-radius: 10px;

    transition: 0.2s;

    background-color: ${(props) => props.completed ? "#799ad4" : "#fff"};

    position: relative;

      div {
        padding: 0 0 40px 30px;

        font-size: 1.2em;
        text-align: left;
        color: ${(props) => props.completed ? "#fff" : "#424c5d"};

        h2 {
          font-family: 'ChosunGu';

          margin-bottom: -5px;
          font-size: 1.5em;
        }

        .ruby {
          margin: 8px 0 20px 3px;
          font-size: 1em;
        }

        .mean {
          margin: -12px 0;
          font-size : 1.5em;
        }
        
        .exam {
          font-family: 'ChosunGu';
        }

        .exam, .trans {
          width: fit-content;

          margin-bottom: -15px;

          font-size: 1em;
          font-weight: 600;
          color: ${(props) => props.completed ? "#fff" : "#555"};

          background: linear-gradient(to top, #ff96a8 50%, transparent 50%);
        }
    }
`;

const BtnBox = styled.div`
  width: fit-content;
  height: fit-content;

  position: absolute;
  top: 10px;
  right: 10px;

  button {
    margin-left: 5px;

    width: 30px;
    height: 30px;

    border: 2px solid #ff96a8;
    border-radius: 20px;

    background: ${(props) => props.completed ? "#ff96a8" : "#fff"};

    font-size: 0.8em;
    font-weight: 800;
    color: ${(props) => props.completed ? "#fff" : "#ff96a8"};

    transition: 0.3s;
    &:hover {
      color: ${(props) => props.completed ? "#ff96a8" : "#fff"};
      background: ${(props) => props.completed ? "#fff" : "#ff96a8"};
      border: 2px solid ${(props) => props.completed ? "#fff" : "#ff96a8"};
    }

    &:active {
      color: ${(props) => props.completed ? "#fff" : "#ff96a8"};
      background: ${(props) => props.completed ? "#ff96a8" : "#fff"};
    }

  }
`;


export default Main;
