import React from "react";
import styled from "styled-components";


const Input = (props) => {
  const { label, placeholder, type, textarea } = props;

  if (textarea) {
    return (
      <React.Fragment>
        <Label>{label}</Label>
        <Textarea {...props} />
      </React.Fragment>
    )
  }

  if (type === "file") {
    return (
      <React.Fragment>
        <InputBox type={type} {...props} />
      </React.Fragment>
    )
  }


  return (
    <React.Fragment>
      <Label>{label}</Label>
      <InputBox type={type} {...props} />
    </React.Fragment>
  )
}

Input.defaultProps = {
  label: "",
  placeholder: null,
  type: "text",
  textarea: false,
}

const Label = styled.label`
  padding: 8px;
  font-size: 1em;
  font-weight: 600;
`

const InputBox = styled.input`
  box-sizing: border-box;
  padding: 0 10px;

  width: 100%;
  height: 40px;

  border: none;
  border-bottom: 2px solid #999;

  placeholder: ${(props) => props.placeholder};

  transition: 0.3s;
  
  &:focus {
    outline: none;
    border-bottom: 2px solid #333;
  }
  
  &::placeholder {
    font-size:0.85em;
    color: #999;
  }

`

const Textarea = styled.textarea`
  font-family: 'KoPubDotumMedium';

  box-sizing: border-box;
  margin: 10px 0;
  padding: 10px;

  width: 100%;
  height: 100px;

  border: 2px solid #999;
  border-radius: none;

  resize: none;
  placeholder: ${(props) => props.placeholder};

  transition: 0.3s;

  &:focus {
    outline:none;
    border: 2px solid #333;
  }
`

export default Input;