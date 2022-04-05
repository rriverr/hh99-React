import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Button } from "../elements";
import { actionCreaters as userActions } from "../redux/modules/user";
import { getCookie, deleteCookie } from "../shared/Cookie";

import { history } from "../redux/configureStore"
import { apiKey } from "../shared/firebase";
import Permit from "../shared/Permit";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  //세션 체크
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`
  const is_session = sessionStorage.getItem(_session_key)? true : false;
  
  // console.log(_session_key);
  // console.log(sessionStorage.getItem(_session_key));
  // console.log(is_session);

  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Grid padding="8px" is_flex>
          <Button type="none" width="30px" height="30px" label="홈" onClick={() => { history.push("/"); }} />
          <div>
            <Button type="none" width="70px" height="30px" label="내 정보" />
            <Button type="none" width="60px" height="30px" label="알림" />
            <Button type="none" width="70px" height="30px" label="로그아웃" onClick={() => {
              dispatch(userActions.logoutFB());
            }} />
          </div>
        </Grid>
      </React.Fragment>
    )
  }

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

export default Header;