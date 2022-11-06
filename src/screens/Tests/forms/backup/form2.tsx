import React from "react";
import { Form } from '../styles';
import { LoneLabel } from '../../../components/FormControls/Input';
import { Slider } from '../../../components/FormControls/Slider';

export const Form2: React.FC = () => {
  const captions: string[] = ['Pouco', 'Parcialmente', 'Bastante'];

  return (
    <Form>

      <LoneLabel label="1. Você estava bem concentrado?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="2. Estava dificil de se concentrar?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="3. Você estava consciente de si mesmo?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="4. Você estava se sentindo bem consigo mesmo?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="5. Você estava no controle da situação?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="6. Você estava correspondendo as suas próprias expectativas?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="7. Você estava correspondendo as expectativas dos outros?">
        <Slider captions={captions}/>
      </LoneLabel>
              
    </Form>
  );
}