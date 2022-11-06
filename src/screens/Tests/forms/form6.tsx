import React, { useState } from "react";
import { Form, NextBtnWrapper } from '../styles';
import { Input } from '../../../components/FormControls/Input';
import { Button } from "../../../components/Button";

type Props = {
  formData: any;
  setData: any;
  isLoading: boolean;
  handleNewForm: any;
};

export const Form6 = ({formData, setData, isLoading, handleNewForm}: Props) => {
  return (
    <Form>
      <Input 
        label="1. Se tivesse escolha, com quem estaria?" 
        onChangeText={value => setData(prev => { return {...prev, q1: value} })}
      />
      <Input 
        label="2. O que você estaria fazendo?" 
        onChangeText={value => setData(prev => { return {...prev, q2: value} })}
      />
      <Input 
        label="3. Desde a sua última notificação, aconteceu alguma coisa ou você fez alguma coisa que possa ter afetado a maneira como se sente?" 
        onChangeText={value => setData(prev => { return {...prev, q3: value} })}
      />
      
      <Button
        title="Salvar formulário"
        isLoading={isLoading}
        onPress={handleNewForm}
      />
    </Form>
  );
}