import React from 'react';
import styled from 'styled-components';
import { textStyle, color, fontWeight } from 'styled-system';

const BaseText = styled.Text`
  ${textStyle};
  ${color};
  ${fontWeight}
`;

const ECText = (props) => <BaseText {...props} />

ECText.defaultProps = {
  textStyle: 'body',
  color: 'white',
}

export default ECText;
