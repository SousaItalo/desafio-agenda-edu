import React, { Component } from 'react';

import { ECText } from '@common';

export default class ErrorMessage extends Component {
  render() {
    return (
      <ECText
        color={red}
        fontSize="0"
      >
        {`*${this.props.ErrorMessage}`}
      </ECText>
    );
  }
}
