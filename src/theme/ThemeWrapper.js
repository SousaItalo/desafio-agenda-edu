import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components/native';

const colors = {
  purple: '#733DBE',
  black: '#333333',
  gray: '#999999',
  darkerGray: '#666666',
};

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const theme = {
  buttons: {
    primary: {
      backgroundColor: colors.purple,
      borderColor: colors.purple,
    }
  },
  colors: {
    puple: colors.purple,
  },
  space: [0, 4, 8, 12, 16, 20, 24],
  textStyles: {
    largeTitle: {
      fontSize: 25,
      fontWeight: fontWeights[600],
      color: colors.black,
    },
    title: {
      fontSize: 16,
      fontWeight: fontWeights[3],
      color: colors.black,
    },
    subtitle: {
      fontSize: 14,
    },
    body: {
      fontSize: 16,
    },
    caption: {
      fontSize: 12,
    }
  },
  fontWeights: fontWeights,
};

export default class ThemeWrapper extends Component {
  render() {
    const { children } = this.props;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
}
