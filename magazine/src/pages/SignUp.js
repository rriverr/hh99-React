import React from "react";
import { useDispatch } from "react-redux";

import { Grid, Text, Input, Button } from "../elements";
import { actionCreaters as userActions } from "../redux/modules/user";

const SignUp = (props) => {

  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");

  const email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const signup = () => {
    if (id === "" || pwd === "" || user_name === "") {
      window.alert("빈 칸을 입력해주세요.");
      return;
    }
    if (pwd !== pwd_check) {
      window.alert("비밀번호가 다릅니다.");
      return;
    }

    if (!email.test(id)) {
      window.alert("아이디를 이메일 형식으로 입력해주세요.")
      return; 
    }

    dispatch(userActions.signupFB(id, pwd, user_name));
  }

  return (

    <Grid margin="auto" width="350px">
      <Grid padding="16px">
        <Text textalign="center" bold size="1.5em">회원가입</Text>
      </Grid>

      <Grid padding="0 16px">
        <Input label="아이디" placeholder="아이디를 입력하세용." onChange={(e) => {
          setId(e.target.value);
          console.log(e.target.value);
        }} />
      </Grid>

      <Grid margin="32px 0" padding="0 16px">
        <Input label="닉네임" placeholder="닉네임을 입력하세용." onChange={(e) => {
          setUserName(e.target.value);
          console.log(e.target.value);
        }} />
      </Grid>

      <Grid margin="32px 0" padding="0 16px">
        <Input label="비밀번호" placeholder="비밀번호를 입력하세용." type="password" onChange={(e) => {
          setPwd(e.target.value);
          console.log(e.target.value);
        }} />
      </Grid>

      <Grid margin="32px 0" padding="0 16px">
        <Input label="비밀번호 확인" placeholder="비밀번호를 다시 입력하세용." type="password" onChange={(e) => {
          setPwdCheck(e.target.value);
          console.log(e.target.value);
        }} />

      </Grid>
      <Grid margin="40px 0" padding="0 16px">
        <Button label="가입하기" onClick={signup} />
      </Grid>

    </Grid>
  )
}



export default SignUp;