import React from "react";
import { Button, Grid, Image, Input, Text } from "../elements";


const WriteCmt = (props) => {

  return (
    <Grid is_flex padding="8px;">
        <Input placeholder="댓글 내용을 입력해주세요." />
        <Button label="작성" width="60px" height="40px" margin="0 8px" />
    </Grid>
  )
}



export default WriteCmt;