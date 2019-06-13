import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import moment from 'moment';

import { ECContainer } from '@common';
import * as Api from "@services/api";

import EventCard from './EventCard';

export default class EventsList extends Component {
  state = {
    events: [],
    lastDividerDay: null,
    renderDivider: false,
    nextPage: 1,
  }

  static navigationOptions = {
    title: "Eventos",
  };

  fetchEvents = async () => {
    const { data: response, status } = await Api.getEvents(4, this.state.nextPage);

    if(status === 200) {
      let lastDivisorDate = null;

      const events = response.data.map(event => {
        const renderDivisor = lastDivisorDate === null || !moment.utc(event.startAt).isSame(lastDivisorDate, 'day');

        if(renderDivisor) {
          lastDivisorDate = moment.utc(event.startAt);
        }

        return {...event, renderDivisor }
      });

      this.setState({
        ...this.state,
        events: [...this.state.events, ...events],
        nextPage: this.state.nextPage < response.metadata.total_pages ? this.state.nextPage + 1 : null,
      });
    }
  }

  componentDidMount() {
    this.fetchEvents();
  }

  render() {
    return (
      <ECContainer
        flex={1}
        px='6'
      >
        <FlatList
          data={this.state.events}
          renderItem={({ item }) => <EventCard event={item} navigation={this.props.navigation}/>}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          onEndReached={this.fetchEvents}
          onEndReachedThreshold={0.1}
        />
      </ECContainer>
    );
  }
}
