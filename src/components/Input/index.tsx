import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, CustomInput, Label, FeedbackText } from './styles';

type Props = TextInputProps & {
  label: string;
  feedbackText?: string;
};

export function Input({ label, feedbackText="", ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <CustomInput {...rest} />
      { feedbackText!="" && (
        <FeedbackText>{feedbackText}</FeedbackText>
      )}
      
    </Container>
    
  );
}