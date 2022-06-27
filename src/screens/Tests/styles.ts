import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content:center;
`;

export const Header = styled.View`
  width: 100%;
  padding-top: 13px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
`;

export const IconWrapper = styled.View`
  position: absolute;
  
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
  margin-bottom: 25px;
`;

export const Form = styled(ScrollView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;