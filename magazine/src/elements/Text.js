import React, { children } from "react";
import styled from "styled-components";

const Text = (props) => {
  
  const { bold, color, size, textalign, children } = props;

  const styles = {
    bold: bold, 
    color: color, 
    size: size,
    textalign: textalign,
  };

  // console.log("children",children)

  return (
    <P {...styles}>
      {children}
    </P>
    )

}

Text.defaultProps = {
  children: null,
  bold: false,
  color: '#333',
  size: '14px',
  textalign: false,
}

const P = styled.p`
  margin: 10px;
  
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};

  ${(props) => props.textalign ? `text-align: ${props.textalign};` : "" };
`;


export default Text; 