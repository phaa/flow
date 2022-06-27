import styled from 'styled-components/native';
import { Image } from "react-native";

export const Container = styled.View`
  width: 100%;
  margin-top: 44px;
  margin-bottom: 40px;
`;

export const Greeting = styled.View``;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  align-self: center;
  margin-top: 10px;
`;

export const Logo = styled(Image)`
  position: absolute;
  margin-left: 20px;
`;