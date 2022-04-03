import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";

const Header = (props) => {
  const history = useHistory();

  const [is_login, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    let cookie = getCookie("user_id");
    console.log(cookie);
    if (cookie) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  })

  if (is_login) {
    return (
      <React.Fragment>
        <Grid padding="8px" is_flex>
          <Button type="none" width="30px" height="30px" label="홈" onClick={() => { history.push("/"); }} />
          <div>
            <Button type="none" width="70px" height="30px" label="내 정보" />
            <Button type="none" width="60px" height="30px" label="알림" />
            <Button type="none" width="70px" height="30px" label="로그아웃" onClick={() => {
              deleteCookie("user_id");
            }} />
          </div>
        </Grid>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <Grid padding="8px" is_flex>
          <Button type="none" width="30px" height="30px" label="홈" onClick={() => { history.push("/"); }} />
          <div>
            <Button type="none" width="70px" height="30px" label="회원가입" onClick={() => { history.push("/signup"); }} />
            <Button type="none" width="60px" height="30px" label="로그인" onClick={() => { history.push("/login"); }} />
          </div>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Header;