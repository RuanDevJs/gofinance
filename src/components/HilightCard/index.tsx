import { Dimensions } from "react-native";

import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";

import { Device } from "../../global/device";
import * as Styled from "./styles";

interface HighlightCardProps {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total';
  animated: {
    index: number;
    translateValue: Animated.SharedValue<number>;
    type: 'scroll' | 'carrousel'
  }
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export default function HighlightCard({
  title="Entradas",
  amount="R$ 0,00",
  lastTransaction="Última entrada dia 13 de Abril.",
  type="down",
  animated
}: HighlightCardProps) {
  const ITEM_SIZE = Device.width * 0.82;
  const inputRange = [(animated.index - 2) * ITEM_SIZE, (animated.index - 1) * ITEM_SIZE, ITEM_SIZE * animated.index]

  const rSContainer = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(animated.translateValue.value, inputRange, [50, 0, 50])
        }
      ],
      opacity: interpolate(animated.translateValue.value, inputRange, [0.8, 1, 0.8])
    }
  })

  return (
    <Styled.AnimatedContainer>
      <Styled.Container type={type} style={rSContainer}>
        <Styled.Header>
          <Styled.Title type={type}>{title}</Styled.Title>
          <Styled.Icon name={icon[type]} type={type} />
        </Styled.Header>
        <Styled.Footer>
          <Styled.Amount type={type}>{amount} {'\n'}</Styled.Amount>
          <Styled.LastTransaction type={type}> {lastTransaction}</Styled.LastTransaction>
        </Styled.Footer>
      </Styled.Container>
    </Styled.AnimatedContainer>
  )
}