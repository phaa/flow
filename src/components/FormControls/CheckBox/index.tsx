import React from 'react';
import { useTheme } from 'styled-components/native';
import BouncyCheckbox, { IBouncyCheckboxProps } from "react-native-bouncy-checkbox";

import { Container } from './styles';

export function CheckBox({...rest }: IBouncyCheckboxProps) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <BouncyCheckbox
        useNativeDriver={true}
        size={25}
        fillColor={ COLORS.PRIMARY }
        unfillColor={ COLORS.WHITE }
        iconStyle={{ borderRadius: 9, borderColor: COLORS.PRIMARY }}
        textStyle={{
          textDecorationLine: "none",
          color: COLORS.TEXT,
        }}
        {...rest}
      />
    </Container>
  );
}


