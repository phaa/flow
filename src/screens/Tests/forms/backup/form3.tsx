import React from "react";Slider
import { Form } from '../styles';
import { LoneLabel } from '../../../components/FormControls/Input';
import { Slider } from '../../../components/FormControls/Slider';

export const Form3: React.FC = () => {
  return (
    <Form>
      <LoneLabel label="1. Descreva seu estado de espiríto ao ser notificado:">
        <Slider captions={['Alerta', 'Sonolento']}/>
        <Slider captions={['Feliz', 'Triste']}/>
        <Slider captions={['Irritado', 'Animado']}/>
        <Slider captions={['Forte', 'Fraco']}/>
        <Slider captions={['Ativo', 'Passivo']}/>
        <Slider captions={['Solitário', 'Sociável']}/>
        <Slider captions={['Envergonhado', 'Orgulhoso']}/>
        <Slider captions={['Envolvido', 'Distante']}/>
        <Slider captions={['Entusiasmado', 'Entendiado']}/>
        <Slider captions={['Fechado', 'Aberto']}/>
        <Slider captions={['Claro', 'Confuso']}/>
        <Slider captions={['Tenso', 'Relaxado']}/>
        <Slider captions={['Competitivo', 'Cooperativo']}/>
      </LoneLabel>

      <LoneLabel label="2. Dor ou desconforto geral?">
        <Slider maxValue={3} captions={['Nenhum', 'Leve', 'Incômodo', 'Severo']}/>
      </LoneLabel>
    </Form>
  );
}