import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  margin-top: 8px;
`;

export const Label = styled.Text`
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;

export const SelectedLabel = styled.Text`
font-size: 12px;
text-align: center;
font-weight: 500;
color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
