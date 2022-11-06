import React, { useState } from "react";
import { Form } from '../styles';
import { Slider } from '../../../components/FormControls/Slider';
import { LoneLabel } from '../../../components/FormControls/Input';

export const Form5: React.FC = () => {
  return (
    <Form>

      <LoneLabel label="1. Nível de desafio da atividade">
        <Slider captions={['Fácil', 'Difícil']}/>
      </LoneLabel>

      <LoneLabel label="2. Seu nível de habilidade na atividade:">
        <Slider captions={['Pouco', 'Habilidoso(a)']}/>
      </LoneLabel>

      <LoneLabel label="3. Essa atividade era importante para você?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

      <LoneLabel label="4. Essa atividade era importante para outras pessoas?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

      <LoneLabel label="5. Você estava tendo sucesso no que estava fazendo?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

      <LoneLabel label="6. Você gostaria de esta fazendo outra coisa?">
        <Slider captions={['Pouco', 'Bastante']}/>
      </LoneLabel>

      <LoneLabel label="7. Você estava satisfeito com seu desempenho?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

      <LoneLabel label="8. Quão importante era essa atividade em relação aos seus objetivos gerais?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

    </Form>
  );
}