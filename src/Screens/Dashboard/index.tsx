import * as Styled from "./styles";
import styled, { useTheme } from "styled-components/native";

export default function DashBoard() {
  const theme = useTheme();

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
    </Styled.Container>
  )
} 