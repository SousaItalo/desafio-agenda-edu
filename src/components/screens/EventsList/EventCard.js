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
          source={{uri: 'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'}}
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
            Aula especial de natação
          </ECText>
          <ECText
            textStyle="subtitle"
            color="grays.2"
            mb="3"
          >
            <AntDesign name="clockcircleo" size={14} color="#666666"/> 14:00
          </ECText>
          <ECText
            textStyle="caption"
            color="grays.1"
          >
            Quarta, 25 de janeiro às 20:00h
          </ECText>
        </ECContainer>
      </ECCard>
    );
  }
}
