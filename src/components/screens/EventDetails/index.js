import React, { Component } from 'react';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

import { ECContainer, ECText } from '@common';

const CustomImage = styled.Image`
  width: 100%;
  height: 250px;
`;

const AbsoluteContainer = styled(ECContainer)`
  position: absolute;
  top: 240px;
  border-radius: 20;
  width: 100%;
`;

const Box = styled(ECContainer)`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export default class EventDetails extends Component {
  static navigationOptions = {
    title: 'Detalhes',
  };

  render() {
    const event = this.props.navigation.getParam('event');
    const dateTime = moment.utc(event);

    return(
      <ECContainer>
        <CustomImage source={{uri: event.image}}/>
        <AbsoluteContainer
          flex={1}
          px='9'
          pt='9'
        >
          <ECContainer
            flexDirection='row'
            mb='8'
          >
            <Box
              bg='purples.1'
              justifyContent='center'
              alignItems='center'
              mr='5'
            >
              <ECText
                fontSize='4'
                fontWeight='6'
                color='mainPurple'
              >
                {dateTime.format('DD')}
              </ECText>
              <ECText
                color='mainPurple'
              >
                {dateTime.format('MMM')}
              </ECText>
            </Box>
            <ECContainer>
              <ECText textStyle='largeTitle'>
                {event.title}
              </ECText>
              <ECText
                textStyle='body'
                color='grays.2'
              >
                <AntDesign name='clockcircleo' size={14} color='#666666'/> 16:00
              </ECText>
            </ECContainer>
          </ECContainer>
          <ECContainer>
            <ECText
              textStyle='body'
              color='grays.2'
              alignItems='center'
            >
            {event.description}
            </ECText>
          </ECContainer>
        </AbsoluteContainer>
      </ECContainer>
    );
  }
}
