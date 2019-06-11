import React from 'react';
import styled from 'styled-components';
import { width, border } from 'styled-system';

const Line = styled.View`
  borderBottomWidth: ${props => props.theme.borderWidths[1]};
  borderColor: ${props => props.theme.colors.purples[1]};
  width: 60%;
`;

const ECDivider = () => <Line />;

export default ECDivider;
