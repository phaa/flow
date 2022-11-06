import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';

export const Container = styled.View`
  margin-bottom: 20px;
`;

export const Input = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SUBTEXT
})) <TextInputProps>`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0px;
  font-size: 16px;
  padding: 0 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER2}
  color: ${({ theme }) => theme.COLORS.TEXT};
`; 

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const FeedbackText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
