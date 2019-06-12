import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components/native';

const colors = {
  purples: [
    'rgba(115, 61, 190, 0.10)',
    'rgba(115, 61, 190, 0.15)',
  ],
  mainPurple: '#733DBE',
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
      backgroundColor: colors.mainPurple,
      borderColor: colors.mainPurple,
    }
  },
  borderWidths: [0, 0.75, 1, 2, 4, 6, 8],
  colors: {...colors},
  space: [0, 4, 8, 11, 13, 15, 17, 20, 24, 36, 64],
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
      color: colors.grays[1],
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
  widths: [16, 32, 64, 128, 256, '100%'],
};

export default class ThemeWrapper extends Component {
  render() {
    const { children } = this.props;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
}
