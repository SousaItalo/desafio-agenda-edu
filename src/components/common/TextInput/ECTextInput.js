import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { color, height, fontSize, space, textStyle } from "styled-system";

const Wrapper = styled.View`
  flex-direction: column;
  width: 100%;
  ${space}
`;

const Label = styled.Text`
  margin-bottom: 8.5;
  ${textStyle}
`;

const IconWrapper = styled.View`
  position: absolute;
  right: 10;
  top: 43;
`;

Label.defaultProps = {
  textStyle: "label"
};

const Input = styled.TextInput`
  height: 50;
  border-radius: 3;
  border-color: ${props =>
    props.isFocused
      ? props.theme.colors.mainPurple
      : props.theme.colors.grays[1]};
  border-width: ${props =>
    props.isFocused
      ? props.theme.borderWidths[2]
      : props.theme.borderWidths[1]};
  ${color};
  ${fontSize};
  ${height};
  ${space};
  ${height};
`;

Input.defaultProps = {
  py: "3",
  pl: "6",
  pr: "4",
  Icon: null,
  fontSize: "3",
  color: "black",
  backgroundColor: "white",
  borderStyle: "solid",
  borderWidth: "1"
};

const ECTextInput = ({ label, Icon, ...props }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input {...props} />
    {Icon &&
      <IconWrapper>
        <Icon />
      </IconWrapper>
    }
  </Wrapper>
);

export default ECTextInput;
