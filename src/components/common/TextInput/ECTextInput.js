import React, { Fragment } from 'react';
import styled from 'styled-components/native';
import {
  color,
  height,
  fontSize,
  borderWidth,
  space,
  textStyle
} from 'styled-system';

const Wrapper = styled.View`
    flex-direction: column;
    width: 100%;
    ${space}
`

const Label = styled.Text`
  margin-bottom: 8.5;
  ${textStyle}
`;

Label.defaultProps = {
  textStyle: 'label',
}

const Input = styled.TextInput`
  height: 50;
  border-radius: 3;
  ${color};
  ${fontSize};
  ${height};
  ${space};
  ${height};
  ${borderWidth};
`;

Input.defaultProps = {
  py: '3',
  pl: '6',
  pr: '4',
  fontSize: '3',
  color: 'black',
  backgroundColor: 'white',
  borderStyle: 'solid',
  borderWidth: '1',
  borderColor: 'grays.1'
};

const ECTextInput = ({label, ...props}) => (
  <Wrapper>
    <Label>
      {label}
    </Label>
    <Input {...props} />
  </Wrapper>
);

export default ECTextInput;
