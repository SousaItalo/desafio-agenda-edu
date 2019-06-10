import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components/native';

const colors = {
  purple: '#733DBE',
  black: '#333333',
  grays: [
    '#ABB1B7',
    '#999999',
    '#666666',
  ]
};

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const theme = {
  buttons: {
    primary: {
      backgroundColor: colors.purple,
      borderColor: colors.purple,
    }
  },
  borderWidths: [0, 0.75, 2, 4, 6, 8],
  colors: {...colors},
  space: [0, 4, 8, 13, 15, 17, 20, 24, 36],
  textStyles: {
    largeTitle: {
      fontSize: 25,
      fontWeight: fontWeights[5],
      color: colors.black,
    },
    title: {
      fontSize: 16,
      fontWeight: fontWeights[3],
      color: colors.black,
    },
    label: {
      fontSize: 14,
      color: colors.grays[2],
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
  fontSizes: [12, 14, 16, 20, 25],
};

export default class ThemeWrapper extends Component {
  render() {
    const { children } = this.props;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
}
