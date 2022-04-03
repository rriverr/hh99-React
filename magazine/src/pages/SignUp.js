import React from "react";
import styled from "styled-components";

import { Grid, Text, Input, Button } from "../elements";

const SignUp = (props) => {
  return (
    <Grid margin="auto" width="400px">
      <Grid padding="16px">
        <Text textalign="center" bold size="1.5em">회원가입</Text>
      </Grid>
      <Grid  padding="0 16px">
        <Input label="아이디" placeholder="아이디를 입력하세용." />
      </Grid>
      <Grid margin="32px 0" padding="0 16px">
        <Input label="닉네임" placeholder="닉네임을 입력하세용." />
      </Grid>
      <Grid margin="32px 0" padding="0 16px">
        <Input label="비밀번호" placeholder="비밀번호를 입력하세용." />
      </Grid>
      <Grid margin="32px 0" padding="0 16px">
        <Input label="비밀번호 확인" placeholder="비밀번호를 다시 입력하세용." />
      </Grid>
      <Grid margin="40px 0" padding="0 16px">
        <Button label="가입하기" />
      </Grid>
    </Grid>
  )
}



export default SignUp;