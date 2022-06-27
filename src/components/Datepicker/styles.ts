import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const DateInputWrapper = styled(TouchableOpacity)`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER}
  
`;

export const DateInput = styled.View`
  flex: 1;  
  justify-content: center;
`;

export const DateInputText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

/**
export const CustomInput = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SUBTEXT
})) <TextInputProps>`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0px;
  font-size: 14px;
  padding: 0 0;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER}
  color: ${({ theme }) => theme.COLORS.TEXT};
`; */

