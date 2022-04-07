import React from "react";

import { Button, Grid, Image, Text } from "../elements";
import Permit from "../shared/Permit";

const Post = (props) => {

  return (
    <div>
      <Grid>
        <Grid is_flex>
          <Grid is_flex>
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Text>{props.insert_dt}</Text>
          <Permit>
            <Button label="수정" width="60px" height="30px" />
          </Permit>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url}/>
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.Comment_cnt}개</Text>
        </Grid>
      </Grid>
    </div>
  )
}

Post.defaultProps = {
  user_info: {
    user_name: "river",
    user_profile: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDuPiJ%2FbtrydfqtMyN%2FTpMT9SosNwZktIIkyaZ53K%2Fimg.png",
  },
  image_url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDuPiJ%2FbtrydfqtMyN%2FTpMT9SosNwZktIIkyaZ53K%2Fimg.png",
  contents: "웅냥냐",
  Comment_cnt: 10,
  insert_dt: "2021-04-02 10:00:00",
};


export default Post;