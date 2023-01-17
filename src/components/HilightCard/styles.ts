import { Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";

import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Device } from "../../global/device";

type TypeProps = {
  type: "up" | "down" | "total";
};

const ITEM_SIZE = Device.width * 0.82;

export const AnimatedContainer = styled(Animated.View)`
  width: ${ITEM_SIZE}px;
`;

export const Container = styled(Animated.View)<TypeProps>`
  ${({ type }) => type === "total" && css`color: ${({ theme }) => theme.colors.shape}`}
  background-color: ${({ theme, type }) => type === 'total' ? theme.colors.secundary : theme.colors.shape};

  height: 234px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;

  margin: 0 12px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark}
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  ${({ type }) => type === "up" && css`color: ${({ theme }) => theme.colors.success}`}
  ${({ type }) => type === "down" && css`color: ${({ theme }) => theme.colors.attention}`}
  ${({ type }) => type === "total" && css`color: ${({ theme }) => theme.colors.shape}`}
`;

export const Footer = styled.Text`
  margin-top: 38px;
`;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark}
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text}
`;
