import { SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content:center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const TitleWrapper = styled.View`
  position: absolute;
  width: 100%;
  margin-top: 13px
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Form = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Slide = styled(ScrollView)`
  padding: 20px;
`;

export const SliderDot = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BORDER};
  width: 0px;
  height: 0px;
  border-radius: 7px;
  margin-left: 7px;
  margin-right: 7px;
`;

export const SliderActiveDot = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  width: 0px;
  height: 0px;
  border-radius: 7px;
  margin-left: 7px;
  margin-right: 7px;
`;