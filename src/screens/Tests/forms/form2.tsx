import React from "react";
import { Form } from '../styles';
import { LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form2 = ({formData, setData}: Props) => {
  const captions: string[] = ['Pouco', 'Parcialmente', 'Bastante'];

  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <LoneLabel label="1. Você estava bem concentrado?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q1: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="2. Estava dificil de se concentrar?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q2: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="3. Você estava consciente de si mesmo?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q3: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="4. Você estava se sentindo bem consigo mesmo?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q4: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="5. Você estava no controle da situação?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q5: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="6. Você estava correspondendo as suas próprias expectativas?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q6: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="7. Você estava correspondendo as expectativas dos outros?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q7: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>
              
    </Form>
  );
}