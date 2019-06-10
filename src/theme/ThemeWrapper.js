import React, { Component } from "react";
import { ThemeProvider } from "styled-components/native";

const colors = {
  purple: "#733DBE",
};

const theme = {
  buttons: {
    primary: {
      backgroundColor: colors.purple,
      borderColor: colors.purple,
    }
  },
  colors: {
    puple: colors.purple,
  }
};

export default class ThemeWrapper extends Component {
  render() {
    const { children } = this.props;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
}