import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 51px;
  height: 51px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

//background-color: ${({ theme }) => theme.COLORS.PRIMARY};