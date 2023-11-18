import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Image)`
  margin-right: 15px;
  width: 60px;
  height: 60px;
  border-radius: 70px;
`;

export const Container2 = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Greeting = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;
