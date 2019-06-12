import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { ECContainer } from '@common';
import * as Api from "@services/api";

import ListDivider from './ListDivider';
import EventCard from './EventCard';

export default class EventsList extends Component {
  state = {
    events: [],
  }

  fetchEvents = async () => {
    const { data: response, status } = await Api.getEvents();

    if(status === 200) {
      this.setState({
        ...this.state,
        events: response.data,
        meta: response.metadata,
      });
    }
  }

  componentDidMount() {
    this.fetchEvents()
  }

  render() {
    console.log(this.state);
    return (
      <ECContainer
        flex={1}
        px='6'
      >
        <FlatList
          data={this.state.events}
          renderItem={({event}) => <EventCard />}
          showsVerticalScrollIndicator={false}
        />
      </ECContainer>
    );
  }
}
