import React, { useState } from "react";
import { Form } from '../styles';
import { Input, LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form4 = ({formData, setData}: Props) => {
  const captions: string[] = ['Sozinho', 'Amigos(as)', 'Mãe', 'Pai', 'Irmão ou irmã', 'Estranho(s)', 'Outros'];

  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <LoneLabel label="1. Com quem você estava?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q1: selectedItem.text} })}
          labels={captions}
        />
        <Input 
          label="1.1 Se selecionar outros, especifique:" 
          onChangeText={value => setData(prev => { return {...prev, q2: value} })}
        />
      </LoneLabel>
    </Form>
  );
}