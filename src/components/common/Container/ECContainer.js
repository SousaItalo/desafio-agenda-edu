import React from 'react';
import styled from 'styled-components/native';
import {
  flex,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  alignContent,
  justifyItems,
  justifySelf,
  alignSelf,
  color,
  space,
  width,
  borderRadius,
} from 'styled-system';

const Container = styled.View`
  justify-content : flex-start;
  ${borderRadius}
  ${width}
  ${color}
  ${space}
  ${flex}
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
  ${alignContent}
  ${justifyItems}
  ${justifySelf}
  ${alignSelf}
`;


const ECContainer = (props) => <Container {...props} />;

ECContainer.defaultProps = {
  py: 2,
  px: 6,
  bg: 'white',
  width: '100%',
}

export default ECContainer;
