import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import { ECContainer } from '@common';
import * as Api from "@services/api";

import ListDivider from './ListDivider';
import EventCard from './EventCard';
import moment from 'moment';

export default class EventsList extends Component {
  state = {
    events: [],
    lastDividerDay: null,
    renderDivider: false,
  }

  static navigationOptions = {
    title: "Eventos",
  };

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
    this.fetchEvents();
  }

  renderEvent = (event) => {
    const startAt = moment.utc(event.startAt);

    return (
      <EventCard
        title={event.title}
        image={event.image}
        location={event.location}
        startTime={startAt.format('HH:mm')}
        startDate={startAt.format('LLLL')}
      />
    );
  }

  renderSeparator = () => <ListDivider />;

  render() {
    return (
      <ECContainer
        flex={1}
        px='6'
        pt="2"
      >
        <FlatList
          data={this.state.events}
          renderItem={({ item }) => this.renderEvent(item)}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </ECContainer>
    );
  }
}
