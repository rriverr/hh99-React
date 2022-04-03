import React from "react";
import styled from "styled-components";

const Button = (props) => {

  const { type, margin, width, height, label } = props;

  if(type === "line") {
    return (
    <LineBtn {...props}>{label}</LineBtn>
    )
  } else if(type === "none") {
    return (
    <NoneBtn {...props}>{label}</NoneBtn>
    )
  } else {
    return (
    <Btn {...props}>{label}</Btn>
    )
  }

}

Button.defaultProps = {
  margin: "",
  width: "100%",
  height: "50px",
  label: null,
}


const Btn = styled.button`
  margin: ${(props) => props.margin};

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: none;
  border-radius: 3px;

  background: #333;

  color: #fff;
`;

const LineBtn = styled.button`
  margin: ${(props) => props.margin};

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: none;
  border-bottom: 2px solid #333;

  background-color: transparent;

  color: #333;
`

const NoneBtn = styled.button`
  margin: ${(props) => props.margin};

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: none;

  background-color: transparent;

  font-weight: 600;
  color: #333;
`

export default Button;