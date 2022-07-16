import React from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import { useTheme } from 'styled-components/native';

import { CustomStyles3, Container, Caption, Row } from './styles';

type Props = {
  captions?: string[];
  maxValue?: number;
};

export function CustomSlider({ captions, maxValue, ...rest }: Props) {
  const { COLORS } = useTheme();
  const sliderSteps = maxValue || 10

  return (
    <Container>
      <Slider
        value={0}
        minimumValue={0}
        maximumValue={sliderSteps}
        step={1}
        trackClickable={false}
        animateTransitions
        minimumTrackTintColor={COLORS.PRIMARY}
        thumbStyle={CustomStyles3.thumb}
        trackStyle={CustomStyles3.track}
      />
      <Row>
        {captions.map((caption) => (
          <Caption key={caption.toString()}>{caption}</Caption>
        ))}
      </Row>
      
    </Container>
    
  );
}