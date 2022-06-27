import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import theme from '../../theme';

import { Container, Label, SelectedLabel } from './styles';

type LabelControl =  {
  position: number;
  stepStatus: string;
  label: string;
  currentPosition: number;
};

export function MyStepIndicator({ ...rest }) {
  const [position, setPosition] = useState<number>(0);

  // Se a posição for alterada devido a uma modificação nas props, atualize
  useEffect(() => {
  });
  
  const firstIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: theme.COLORS.PRIMARY,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: theme.COLORS.PRIMARY,
    stepStrokeUnFinishedColor: theme.COLORS.BORDER,
    separatorFinishedColor: theme.COLORS.PRIMARY,
    separatorUnFinishedColor: theme.COLORS.BORDER,
    stepIndicatorFinishedColor: theme.COLORS.PRIMARY,
    stepIndicatorUnFinishedColor: theme.COLORS.BORDER,
    stepIndicatorCurrentColor: theme.COLORS.WHITE,
    stepIndicatorLabelFontSize: 14,
    currentStepIndicatorLabelFontSize: 14,
    stepIndicatorLabelCurrentColor: theme.COLORS.TEXT,
    stepIndicatorLabelFinishedColor: theme.COLORS.WHITE,
    stepIndicatorLabelUnFinishedColor: theme.COLORS.SUBTEXT,
    labelColor: '#999999',
    labelSize: 12,
    currentStepLabelColor: theme.COLORS.PRIMARY,
  };

  // Se a posição for alterada por um clique no step, atualize
  function onStepPress (position: number) {
    setPosition(position);
  };

  function renderLabel({ position, label, currentPosition }: LabelControl) {
    return (
      <View>
        { position === currentPosition 
          ? <SelectedLabel>{label}</SelectedLabel> 
          : <Label>{label}</Label>
        }
      </View>
    );
  };

  return (
    <Container>
      <StepIndicator
          customStyles={firstIndicatorStyles}
          renderLabel={renderLabel}
          {...rest}
        />
    </Container>
  );
}