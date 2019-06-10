import React from 'react';
import styled from 'styled-components/native';
import {
  color,
  width,
  height,
  buttonStyle,
  borderRadius,
} from 'styled-system';

const BaseButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
  ${color};
  ${width};
  ${height};
  ${buttonStyle};
  ${borderRadius};
`;

const ECButton = (props) => <BaseButton {...props}/>

ECButton.defaultProps = {
  variant: 'primary',
  borderRadius: 5,
}

export default ECButton;
