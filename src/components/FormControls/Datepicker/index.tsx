import React, { useState } from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, Label, DateInputWrapper, DateInput, DateInputText } from './styles';

type Props = TouchableOpacityProps & {
  label: string;
};

export function Datepicker({ label, ...rest }: Props) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const getFormattedDate = () => {
    return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  };

  return (
    <Container>
      <Label>{label}</Label>
      <DateInputWrapper onPress={showDatepicker} {...rest}>
        <DateInput>
          <DateInputText>
            {getFormattedDate()}
          </DateInputText>
        </DateInput>
      </DateInputWrapper>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </Container>
  );
}