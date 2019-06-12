import React, { Component } from 'react';

import { ECContainer } from '@common';
import ListDivider from './ListDivider';
import EventCard from './EventCard';


export default class EventsList extends Component {
  render() {
    return (
      <ECContainer
        pt='8'
        px='6'
        flex={1}
      >
        <EventCard />
      </ECContainer>
    );
  }
}
