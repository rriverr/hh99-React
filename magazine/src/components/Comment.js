import React from "react";
import { Grid, Image, Text } from "../elements";


const Comment = (props) => {

  return (
    <Grid is_flex>
      <Image shape="circle" src={props.src} />
      <Text bold>{props.user_info.user_name}</Text>
      <Text>덧글내요이오아이옹옹</Text>
    </Grid>
  )
}

Comment.defaultProps = {
  user_info: {
    user_name: "river",
    user_profile: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDuPiJ%2FbtrydfqtMyN%2FTpMT9SosNwZktIIkyaZ53K%2Fimg.png",
  },
  image_url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDuPiJ%2FbtrydfqtMyN%2FTpMT9SosNwZktIIkyaZ53K%2Fimg.png",
  contents: "웅냥냐",
  Comment_cnt: 10,
  insert_dt: "2021-04-02 10:00:00",
};


export default Comment;