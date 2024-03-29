import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export type FormStyleProps = {
  status: 'pending' | 'finished';
};

export const Container = styled(Pressable)`
  width: 100%;
  height: 94px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  flex: 1;
  height: 94px;
  padding: 0 15px;
  justify-content: center;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Status = styled.View<FormStyleProps>`
  width: 11px;
  height: 94px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background-color: ${({ theme, status }) => status === 'finished' ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY};
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 18px;
  font-weight: 500;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;


export const Label = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};  
  margin-left: 3px;
`;

export const MarginLabel = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};  
  margin-right: 3px;
`;