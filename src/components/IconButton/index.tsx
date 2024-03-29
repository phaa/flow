import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  color?: any;
}

export function IconButton({ icon, color, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name={icon}
        size={28}
        color={(color == null) ? COLORS.SUBTEXT : color}
      />
    </Container>
  )
}
