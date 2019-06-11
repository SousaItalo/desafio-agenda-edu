import React, { Component } from 'react';

import { ECText, ECDivider, ECContainer, ECCard } from '@common';
import ListDivider from './ListDivider';

export default class EventsList extends Component {
  render() {
    return (
      <ECContainer
        pt="8"
        px='6'
      >
        <ListDivider />
        <ECCard>
          <ECText>teste teste</ECText>
        </ECCard>
      </ECContainer>
    );
  }
}
