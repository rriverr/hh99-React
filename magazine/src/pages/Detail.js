import React from "react";
import Comment from "../components/Comment";
import Post from "../components/Post";
import WriteCmt from "../components/WriteCmt";

import { Button, Grid, Image, Text } from "../elements";


const Detail = (props) => {

  return (
    <React.Fragment>
      <Text bold size="1.5em">상세보기</Text>
      <Grid>
        <Post />
      </Grid>
      <Grid>
        <WriteCmt />
      </Grid>
      <Grid>
        <Comment />
      </Grid>
    </React.Fragment>
  )
}

export default Detail;