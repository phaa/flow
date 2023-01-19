import React, { useEffect, useRef, useState } from "react";Slider
import { Form } from '../styles';
import { LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { Slider } from '../../../components/FormControls/Slider';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form3 = ({formData, setData}: Props) => {
  const [q1, setQ1] = useState<number>(0); 
  const [q2, setQ2] = useState<number>(0);
  const [q3, setQ3] = useState<number>(0);
  const [q4, setQ4] = useState<number>(0);
  const [q5, setQ5] = useState<number>(0);
  const [q6, setQ6] = useState<number>(0);
  const [q7, setQ7] = useState<number>(0);
  const [q8, setQ8] = useState<number>(0);
  const [q9, setQ9] = useState<number>(0);
  const [q10, setQ10] = useState<number>(0);
  const [q11, setQ11] = useState<number>(0);
  const [q12, setQ12] = useState<number>(0);
  const [q13, setQ13] = useState<number>(0);
  const [q14, setQ14] = useState<string>(null);

  //Somente quando algum valor de um state muda que ele reseta o FormData
  useEffect(() => {
    setData({
      q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, q6: q6, q7: q7, 
      q8: q8, q9: q9, q10: q10, q11: q11, q12: q12, q13: q13, q14: q14
    })
  }, [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14]);

  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <LoneLabel label="1. Descreva seu estado de espiríto ao ser notificado:">
        <Slider 
          value={q1}
          captions={['Alerta', 'Sonolento']}
          onValueChange={value => { setQ1(value[0]) }}
        />
        <Slider 
          value={q2}
          captions={['Feliz', 'Triste']}
          onValueChange={value => { setQ2(value[0]) }}
        />
        <Slider 
          value={q3}
          onValueChange={value => { setQ3(value[0]) }}
          captions={['Irritado', 'Animado']}
        />
        <Slider 
          value={q4}
          onValueChange={value => { setQ4(value[0]) }}
          captions={['Forte', 'Fraco']}
        />
        <Slider 
          value={q5}
          onValueChange={value => { setQ5(value[0]) }}
          captions={['Ativo', 'Passivo']}
        />
        <Slider 
          value={q6}
          onValueChange={value => { setQ6(value[0]) }}
          captions={['Solitário', 'Sociável']}
        />
        <Slider 
          value={q7}
          onValueChange={value => { setQ7(value[0]) }}
          captions={['Envergonhado', 'Orgulhoso']}
        />
        <Slider 
          value={q8}
          onValueChange={value => { setQ8(value[0]) }}
          captions={['Envolvido', 'Distante']}
        />
        <Slider 
          value={q9}
          onValueChange={value => { setQ9(value[0]) }}
          captions={['Entusiasmado', 'Entendiado']}
        />
        <Slider
          value={q10}
          onValueChange={value => { setQ10(value[0]) }} 
          captions={['Fechado', 'Aberto']}
        />
        <Slider 
          value={q11}
          onValueChange={value => { setQ11(value[0]) }}
          captions={['Claro', 'Confuso']}
        />
        <Slider 
          value={q12}
          onValueChange={value => { setQ12(value[0]) }}
          captions={['Tenso', 'Relaxado']}
        />
        <Slider 
          value={q13}
          onValueChange={value => { setQ13(value[0]) }}
          captions={['Competitivo', 'Cooperativo']}
        />
      </LoneLabel>

      <LoneLabel label="2. Dor ou desconforto geral?">
        <CheckBoxGroup 
          onChange={selectedItem => { setQ14(selectedItem.text) }}
          labels={['Nenhum', 'Leve', 'Incômodo', 'Severo']}
        />
      </LoneLabel>
    </Form>
  );
}