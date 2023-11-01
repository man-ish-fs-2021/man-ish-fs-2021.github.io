import React from "react";
import styled from "styled-components";

const StyledA = styled.a`
  text-decoration: none;
  color: ${(props) => props.color};
  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

const AnchorStyled = ({ href, color, children, hoverColor = "white" }) => {
  return (
    <StyledA href={href} color={color} hoverColor={hoverColor}>
      {children}
    </StyledA>
  );
};

export default AnchorStyled;
