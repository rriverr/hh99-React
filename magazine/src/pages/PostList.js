import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actionCreaters as postActions } from "../redux/modules/post";

import Post from "../components/Post";
import Permit from "../shared/Permit";
import { Button } from "../elements";




const PostList = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);
  // console.log("postlist", post_list);

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, [])

  return (
    <div>
      {/* <Post /> */}
      {post_list.map((post, idx) => {
        return <Post key={post.id} {...post} />
      })}
      <Permit>
        <Button label="+" type="circle" width="56px" onClick={() => {
          history.push('/upload');
        }} />
      </Permit>
    </div>
  )
}

export default PostList;