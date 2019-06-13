import React, { Component, Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

import { ECCard, ECText, ECContainer } from '@common';
import ListDivider from './ListDivider';

const EventImage = styled.Image`
  height: 100%;
  width: 20%;
  min-width: 66px;
  border-radius: 5px;
  margin-right: 12px;
`;

export default class EventCard extends Component {
  render() {
    const { event } = this.props;
    const dateTime = moment(event.startAt);

    return (
      <Fragment>
        {this.props.event.renderDivisor && <ListDivider date={dateTime.format('LLL')}/>}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('EventDetails', { event: this.props.event })}
        >
          <ECCard
            flexDirection="row"
            mb="2"
            mr="1"
          >
            <EventImage
              source={{uri: event.image}}
            />
            <ECContainer>
              <ECText
                textStyle="caption"
                color="grays.1"
                mb="3"
              >
                EVENTOS
              </ECText>
              <ECText
                textStyle="body"
                color="black"
                mb="2"
              >
                {event.title}
              </ECText>
              <ECText
                textStyle="subtitle"
                color="grays.2"
                mb="3"
              >
                <AntDesign name="clockcircleo" size={14} color="#666666"/> {dateTime.format('HH:mm')}
              </ECText>
              <ECText
                textStyle="caption"
                color="grays.1"
              >
                {dateTime.format('LLLL')}
              </ECText>
            </ECContainer>
          </ECCard>
        </TouchableOpacity>
      </Fragment>
    );
  }
}
