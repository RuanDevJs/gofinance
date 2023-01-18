import { Feather } from "@expo/vector-icons";

import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import Animated from "react-native-reanimated";
import { Device } from "../../global/device";
import { FlatList } from "react-native";

const ITEM_SIZE = Device.width * 0.82;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(Animated.View)`
  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.shape};
  `}
`;

export const UserName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.shape};
  `}
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled(Animated.FlatList)`
  width: 100%;
  position: relative;
  top: -${RFValue(42)}px;
  z-index: 10;
` as unknown as typeof Animated.FlatList;

export const Spacer = styled.View`
  width: ${(Device.width - ITEM_SIZE) / 2}px;
`;

export const Transactions = styled.View`
  flex: 5;
  padding: 0 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.regular};
    margin-bottom: 16px;
  `}
`;
