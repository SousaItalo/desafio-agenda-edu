import React from 'react';
import styled from 'styled-components';
import {
  space,
  alignSelf,
} from 'styled-system';

import ECContainer from '../Container';

const Card = styled(ECContainer)`
  shadow-color: ${props => props.theme.colors.purples[0]};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.3;
  shadow-radius: 10;
  elevation: 4;
  border-radius: 5px;
  border-left-width: 4px;
  border-left-color: ${props => props.theme.colors.mainPurple};
  overflow: hidden;
  ${space};
  ${alignSelf};
`;

const ECCard = ({children, ...props}) => <Card {...props}>{children}</Card>;

ECCard.defaultProps = {
  shadow: 1,
  p: 4,
}

export default ECCard;
