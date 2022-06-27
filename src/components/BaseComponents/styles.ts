import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #21AEEF;
`;

export const RoundContainer = styled.View`
  background-color: #fff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  flex: 1;
`;

export const Form = styled.View`
  padding: 30px 30px;
  flex: 1;
`;

export const Subtext = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  align-self: center;
  margin-top: 20px;
`;

export const AltSubtext = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  align-self: center;
  margin-top: 20px;
`;

export const BottomWrapper = styled.View`
  flex: 1;
  justifyContent: flex-end;
`;


//padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px ;