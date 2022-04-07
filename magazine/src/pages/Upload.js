import React, { forwardRef, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Image, Input, Text } from "../elements";
import { actionCreaters as imageActions } from "../redux/modules/image";
import { actionCreaters as postActions } from "../redux/modules/post";
import { storage, uploadBytes, ref, getDownloadURL } from "../shared/firebase";


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


  const is_uploading = useSelector(state => state.image.uploading);

  const fileInput = React.useRef();

  const selectFile = (e) => {
    console.log("e", e);
    console.log("e.target", e.target);
    console.log("e.target.files", e.target.files);
    console.log("Ref.current.files", fileInput.current.files)

    console.log(fileInput.current.files[0]);

    const reader = new FileReader(); 
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // console.log("reader.result", reader.result); // 파일의 내용이 아주 긴 텍스트로 출력됨.
      dispatch(imageActions.setPreview(reader.result));
    }
  }

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    dispatch(imageActions.uploadImageFB(image));
  }


  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);


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
          <Input type="file" onChange={selectFile} _ref={fileInput} disabled={is_uploading}/>
          {/* <Button label="업로드하기" onClick={uploadFB} /> */}
        </Grid>
        <Grid padding="16px">
          <Text bold size="1em">미리보기</Text>
          <Image shape="rectangle" src={ preview? preview : "https://windsormedicalcenter.com/wp-content/themes/pathwell/images/no-image.jpg" } />
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