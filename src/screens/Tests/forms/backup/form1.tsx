import React, { useState } from "react";
import { Form } from '../styles';
import { Input, LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { IconButton } from "../../../components/IconButton";

export const Form1: React.FC = () => {
  const [form1Data, setForm1Data] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  });
  
  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(form1Data)} />
      <Input 
        label="1. Horario em que foi notificado:" 
        onChangeText={value => setForm1Data(prev => { return {...prev, q1: value} })}
      />
      <Input 
        label="2. Quando você foi notificado, no que estava pensando?" 
        onChangeText={value => setForm1Data(prev => { return {...prev, q2: value} })}
      />
      <Input 
        label="3. Qual era a PRINCIPAL coisa que você estava fazendo?" 
        onChangeText={value => setForm1Data(prev => { return {...prev, q3: value} })}
      />
      <Input 
        label="4. Que outras coisas você estava fazendo?" 
        onChangeText={value => setForm1Data(prev => { return {...prev, q4: value} })}
      />
      
      <LoneLabel label="5. Por que você estava fazendo essa atividade especifica?">
        <CheckBoxGroup 
          onChange={selectedItem => setForm1Data(prev => { return {...prev, q5: selectedItem.text} })}
          labels={[
            "Eu tinha que fazer", 
            "Eu queria fazer", 
            "Eu não tinha outra coisa para fazer"
          ]}
        />
      </LoneLabel>
      
    </Form>
  );
}