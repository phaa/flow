import React from "react";
import { useTheme } from 'styled-components/native';
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
import { Container } from './styles';

type Props = {
  labels: string[];
  onChange: (selectedItem: ICheckboxButton) => void;
};

export function CheckBoxGroup({labels, onChange, ...rest }: Props) {
  const { COLORS } = useTheme();

  const staticData: ICheckboxButton[] = [];

  labels.forEach((label, index) => {
    staticData.push({
      id: index,
      text: label,
      textStyle: { textDecorationLine: "none" },
      fillColor: COLORS.PRIMARY,
      unfillColor: COLORS.PRIMARY_FADED,
      iconStyle: {
        height: 30,
        width: 30,
        borderRadius: 25,
        borderColor: COLORS.WHITE,
      },
      style: { marginTop: 16 },
      iconImageStyle: { height: 15, width: 15 },
    });
  });

  //initial={0}
  return (
    <Container>
      <BouncyCheckboxGroup
        data={staticData}
        onChange={onChange}
        style={{ flexDirection: "column" }}
        {...rest}
      />
    </Container>
  );
}


