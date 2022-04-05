import React from "react";
import { useDispatch } from "react-redux";

import { Grid, Text, Input, Button } from "../elements";
import { actionCreaters as userActions } from "../redux/modules/user";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

const LogIn = (props) => {

  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const login = () => {
    if(id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호를 입력해주세요.");
      return;
    } 
    
    if (!email.test(id)) {
      window.alert("아이디를 이메일 형식으로 입력해주세요.")
      return; 
    }

    dispatch(userActions.loginFB(id, pwd));
  }

  return (
    <Grid margin="auto" width="350px">
      <Grid padding="16px">
        <Text textalign="center" bold size="1.5em">로그인</Text>
      </Grid>
      <Grid  padding="0 16px">
        <Input label="아이디" placeholder="아이디를 입력하세용." onChange={(e) => {
          setId(e.target.value);
          console.log(e.target.value);
        }}/>
      </Grid>
      <Grid margin="32px 0" padding="0 16px">
        <Input label="비밀번호" placeholder="비밀번호를 입력하세용." type="password" onChange={(e) => {
          setPwd(e.target.value);
          console.log(e.target.value);
        }}/>
      </Grid>
      <Grid margin="40px 0" padding="0 16px">
        <Button label="로그인하기" onClick={login}/>
      </Grid>
    </Grid>
  )
}


export default LogIn;