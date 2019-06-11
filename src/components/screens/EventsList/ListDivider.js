import React, { Component } from "react";

import { ECText, ECDivider, ECContainer, ECCard } from '@common';

export default class ListDivider extends Component {
  render() {
    return (
      <ECContainer
        flexDirection="row"
        justifyContent="space-between"
        mb="7"
      >
        <ECText
          mr="4"
          textStyle="label"
        >
          Events List page
        </ECText>
        <ECDivider />
      </ECContainer>
    );
  }
}
