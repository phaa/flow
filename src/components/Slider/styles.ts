import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import THEME from '../../theme/index';

export const CustomStyles3 = StyleSheet.create({
  thumb: {
      backgroundColor: THEME.COLORS.TEXT,
      borderRadius: 60,
      height: 25,
      width: 25,
  },
  track: {
      backgroundColor: THEME.COLORS.BORDER,
      borderRadius: 5,
      height: 10,
  },
});

export const Container = styled.View`
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Caption = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;