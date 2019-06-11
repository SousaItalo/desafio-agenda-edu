import React, { Component } from "react";

import { ECText, ECDivider, ECContainer } from '@common';

export default class ListDivider extends Component {
  render() {
    return (
      <ECContainer
        flexDirection="row"
        justifyContent="space-between"
        mt="5"
        mb="7"
      >
        <ECText
          mr="4"
          textStyle="label"
          styles={{lineHeight: 5}}
        >
          Quarta, 25 de janeiro
        </ECText>
        <ECDivider />
      </ECContainer>
    );
  }
}
