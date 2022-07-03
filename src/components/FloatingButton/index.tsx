import React from 'react';
import ActionButton from 'react-native-action-button';
import { useTheme } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

//import { Container, Fab } from './styles';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
};

export function FloatingButton({ icon, onPress }: Props) {
  const { COLORS } = useTheme();
  return (
    <ActionButton buttonColor={COLORS.PRIMARY} onPress={onPress} >
        <MaterialIcons
          name={icon}
          size={28}
          color={COLORS.WHITE}
        />
    </ActionButton>  
  )
}