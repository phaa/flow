import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content:center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  width: 100%;
  padding-top: 28px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TitleWrapper = styled.View`
  position: absolute;
  width: 100%;
  margin-top: 41px
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Form = styled(ScrollView)`
  flex: 1;
  padding: 20px;
`;

export const BtnWrapper = styled.View`
  padding: 0px 20px;
  flexDirection: row;
  flexWrap: wrap;
  justify-content:space-between;
`;