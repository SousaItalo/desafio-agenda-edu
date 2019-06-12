import React, { Component } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

import { ECCard, ECText, ECContainer } from '@common';

const EventImage = styled.Image`
  height: 100%;
  width: 20%;
  min-width: 66px;
  border-radius: 5px;
  margin-right: 12px;
`;

export default class EventCard extends Component {
  render() {
    return (
      <ECCard
        flexDirection="row"
        mb="2"
        mr="1"
      >
        <EventImage
          source={{uri: this.props.image}}
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
            {this.props.title}
          </ECText>
          <ECText
            textStyle="subtitle"
            color="grays.2"
            mb="3"
          >
            <AntDesign name="clockcircleo" size={14} color="#666666"/> {this.props.startTime}
          </ECText>
          <ECText
            textStyle="caption"
            color="grays.1"
          >
            {this.props.startDate}
          </ECText>
        </ECContainer>
      </ECCard>
    );
  }
}
