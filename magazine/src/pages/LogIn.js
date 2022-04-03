import React from "react";

import { Grid, Text, Input, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

const LogIn = (props) => {

  console.log(getCookie('user_id'));
  console.log(getCookie('user_pwd'));

  const login = () => {
    setCookie("user_id", "river", 3);
    setCookie("user_pwd", "ppp", 3);
  }

  return (
    <Grid margin="auto" width="400px">
      <Grid padding="16px">
        <Text textalign="center" bold size="1.5em">로그인</Text>
      </Grid>
      <Grid  padding="0 16px">
        <Input label="아이디" placeholder="아이디를 입력하세용." />
      </Grid>
      <Grid margin="32px 0" padding="0 16px">
        <Input label="비밀번호" placeholder="비밀번호를 입력하세용." />
      </Grid>
      <Grid margin="40px 0" padding="0 16px">
        <Button label="로그인하기" onClick={() => {
          login();
        }}/>
      </Grid>
    </Grid>
  )
}


export default LogIn;