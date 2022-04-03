import React from "react";
import styled from "styled-components";


const Input = (props) => {
  const { label, placeholder } = props;

  return (
    <React.Fragment>
      <Label>{label}</Label>
      <InputBox {...props} />
    </React.Fragment>
  )
}

Input.defaultProps = {
  label: false,
  placeholder: null,
}

const Label = styled.label`
  font-size: 0.9em;
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

export default Input;