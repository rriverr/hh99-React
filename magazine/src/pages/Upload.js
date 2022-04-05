import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Image, Input, Text } from "../elements";
import { actionCreaters as postActions } from "../redux/modules/post";

const Upload = (props) => {
  const dispatch = useDispatch();
  const {history} = props;  

  const [contents, setContents] = React.useState("");
  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  }

  const is_login = useSelector((state) => state.user.is_login);
  if(!is_login) {
    return (
      <Grid width="350px" margin="100px auto" center>
        <Text size="4em">잠깐!</Text>
        <Text size="1.5em">로그인 후에만 글을 쓸 수 있어요!</Text>
        <Grid center>
          <Button label="로그인하러 가기" margin="30px auto" width="200px" onClick={() => {
            {history.replace('/login');}
          }} />
        </Grid>
      </Grid>
    )
  }

  return (
    <React.Fragment>
      <Grid width="350px" margin="30px auto">
        <Text bold size="1.5em" textalign="center">작성하기</Text>
        <Grid padding="16px">
          <Input type="file" />
        </Grid>
        <Grid padding="16px">
          <Text bold size="1em">미리보기</Text>
          <Image shape="rectangle" />
        </Grid>
        <Grid padding="16px">
          <Input textarea label="게시글 내용" placeholder="내용을 입력해주세요." onChange={changeContents} />
        </Grid>
        <Grid padding="16px">
          <Button label="등록하기" onClick={addPost} /> 
        </Grid>
      </Grid>
    </React.Fragment>

  )
}

export default Upload;