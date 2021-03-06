import React from "react";
import styled from "styled-components";

const Image = (props) => {

  const { shape, src, size } = props;
  const styles = {
    src: src,
    size: size,
  }

  if(shape === "circle") {
    return (
      <ImageCircle {...styles}> </ImageCircle>
    )
  }

  if(shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    )
  }


  return (
    <React.Fragment>

    </React.Fragment>
  )
}

Image.defaultProps = {
  shape: "circle",
  src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDuPiJ%2FbtrydfqtMyN%2FTpMT9SosNwZktIIkyaZ53K%2Fimg.png",
  size: 36,
}

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
  
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  height: 10vh;

`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props)=>props.src}");
  background-size: cover;

  margin: 4px;
`;


export default Image;