import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, CustomInput, Label, FeedbackText } from './styles';

type Props = TextInputProps & {
  label: string;
  feedbackText?: string;
  noInput?: boolean;
};

export function Input({ label, feedbackText="", noInput, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      { !noInput && (
        <CustomInput {...rest} />
      )}
      
      { feedbackText!="" && (
        <FeedbackText>{feedbackText}</FeedbackText>
      )}
      
    </Container>
    
  );
}

export function BareLabel(props) {
  return (
    <Container>
      <Label>{props.label}</Label>
      { props.children }
    </Container>
    
  );
}