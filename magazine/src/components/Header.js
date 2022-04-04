import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Grid, Button } from "../elements";
import { actionCreaters as userActions } from "../redux/modules/user";
import { getCookie, deleteCookie } from "../shared/Cookie";



const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);



  if (is_login) {
    return (
      <React.Fragment>
        <Grid padding="8px" is_flex>
          <Button type="none" width="30px" height="30px" label="홈" onClick={() => { history.push("/"); }} />
          <div>
            <Button type="none" width="70px" height="30px" label="내 정보" />
            <Button type="none" width="60px" height="30px" label="알림" />
            <Button type="none" width="70px" height="30px" label="로그아웃" onClick={() => { dispatch(userActions.logOut({})) }} />
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