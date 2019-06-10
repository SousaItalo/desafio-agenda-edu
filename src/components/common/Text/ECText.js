import React from 'react';
import styled from 'styled-components';
import {
  textStyle,
  color,
  fontWeight,
  space
} from 'styled-system';

const BaseText = styled.Text`
  ${space};
  ${textStyle};
  ${color};
  ${fontWeight}
`;

const ECText = (props) => <BaseText {...props} />

ECText.defaultProps = {
  textStyle: 'body',
  color: 'black',
}

export default ECText;
