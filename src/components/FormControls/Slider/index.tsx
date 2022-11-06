import React from 'react';
import { Slider as RawSlider } from '@miblanchard/react-native-slider';
import { useTheme } from 'styled-components/native';

import { CustomStyles3, Container, Caption, Row } from './styles';

type Props = {
  value?: number;
  captions?: string[];
  onValueChange?: (value: number | Array<number>) => void;
};

export function Slider({ value, onValueChange, captions }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container>

      <RawSlider
        value={value}
        minimumValue={0}
        maximumValue={captions.length-1}
        step={1}
        trackClickable={false}
        animateTransitions
        minimumTrackTintColor={COLORS.PRIMARY}
        thumbStyle={CustomStyles3.thumb}
        trackStyle={CustomStyles3.track}
        onValueChange={onValueChange}
      />

      <Row>
        {captions.map((caption) => (
          <Caption key={caption.toString()}>{caption}</Caption>
        ))}
      </Row>
      
    </Container>
    
  );
}