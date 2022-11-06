import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Input as StyledInput, Label, FeedbackText } from './styles';

type Props = TextInputProps & {
  label?: string;
  feedbackText?: string;
  noInput?: boolean;
};

export function Input({ label, feedbackText, noInput, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput {...rest} />
      { feedbackText != null && (
        <FeedbackText>{feedbackText}</FeedbackText>
      )}
      
    </Container>
  );
}

export function LoneLabel(props: any) {
  return (
    <Container>
      <Label>{props.label}</Label>
      { props.children }
    </Container>
  );
}