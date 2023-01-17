import HighlightCard from "../../components/HilightCard";

import { useTheme } from "styled-components/native";
import * as Styled from "./styles";

import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { Device } from "../../global/device";

type ItemProps = {
  title?: string;
  amount?: string;
  lastTransaction?: string;
  type?: 'up' | 'down' | 'total';
  key?: 'left' | 'right'
};

const ITEMS: ItemProps[] = [
  {
    key: 'left'
  },
  {
    title: 'Entradas',
    amount: 'R$ 17.400,00',
    lastTransaction: 'Última entrada dia 13 de Abril',
    type: 'up'
  },
  {
    title: 'Entradas',
    amount: 'R$ 12.250,00',
    lastTransaction: 'Última entrada dia 13 de Abril',
    type: 'down'
  },
  {
    title: 'Entradas',
    amount: 'R$ 8.233,00',
    lastTransaction: 'Última entrada dia 13 de Abril',
    type: 'total'
  },
  {
    key: 'right'
  },
]

export default function DashBoard() {
  const translateX = useSharedValue(0);
  const ITEM_SIZE = Device.width * 0.82;

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });
  const theme = useTheme();

  if(!ITEMS.length){
    return null;
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.UserWrapper>
          <Styled.UserInfo>
            <Styled.Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/82915279?v=4' }}
              resizeMode='cover'
            />
            <Styled.User>
              <Styled.UserGreeting>Olá,</Styled.UserGreeting>
              <Styled.UserName>Ruan Vitor</Styled.UserName>
            </Styled.User>
          </Styled.UserInfo>
          <Styled.Icon
            name="power"
          />
        </Styled.UserWrapper>
      </Styled.Header>
      <Styled.HighlightCards
        data={ITEMS}
        keyExtractor={(_, index) => `$key=${index}`}
        renderItem={({ item, index }) => {
          if(item.key){
            return <Styled.Spacer />
          }
          
          return (
            <HighlightCard
              title={item.title}
              amount={item.amount}
              lastTransaction={item.lastTransaction}
              type={item.type}
              animated={
                {
                  index: index,
                  translateValue: translateX,
                  type: 'carrousel'
                }
              }
            />
          )
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={ITEM_SIZE}
        bounces={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      />
    </Styled.Container >
  )
} 