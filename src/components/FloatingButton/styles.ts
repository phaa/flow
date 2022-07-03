import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  border: 1px solid black;
`;

export const Fab = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
