import React from 'react';
import styled from 'styled-components';

const Line = styled.View`
  border-bottom-width: ${props => props.theme.borderWidths[1]};
  border-color: ${props => props.theme.colors.purples[1]};
  width: 55%;
`;

const ECDivider = () => <Line />;

export default ECDivider;
