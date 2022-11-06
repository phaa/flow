import React, { useEffect, useState } from "react";
import { Form } from '../styles';
import { Slider } from '../../../components/FormControls/Slider';
import { LoneLabel } from '../../../components/FormControls/Input';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form5 = ({formData, setData}: Props) => {
  const [q1, setQ1] = useState<number>(0);
  const [q2, setQ2] = useState<number>(0);
  const [q3, setQ3] = useState<number>(0);
  const [q4, setQ4] = useState<number>(0);
  const [q5, setQ5] = useState<number>(0);
  const [q6, setQ6] = useState<number>(0);
  const [q7, setQ7] = useState<number>(0);
  const [q8, setQ8] = useState<number>(0);

  useEffect(() => {
    setData({
      q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, q6: q6, q7: q7, q8: q8
    })
  }, [q1, q2, q3, q4, q5, q6, q7, q8]);

  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <LoneLabel label="1. Nível de desafio da atividade">
        <Slider 
          value={q1}
          captions={['Fácil', 'Difícil']}
          onValueChange={value => { setQ1(value[0]) }}
        />
      </LoneLabel>

      <LoneLabel label="2. Seu nível de habilidade na atividade:">
        <Slider 
          value={q2}
          captions={['Pouco', 'Habilidoso(a)']}
          onValueChange={value => { setQ2(value[0]) }}
        />
      </LoneLabel>

      <LoneLabel label="3. Essa atividade era importante para você?">
        <Slider 
          value={q3}
          onValueChange={value => { setQ3(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

      <LoneLabel label="4. Essa atividade era importante para outras pessoas?">
        <Slider 
          value={q4}
          onValueChange={value => { setQ4(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

      <LoneLabel label="5. Você estava tendo sucesso no que estava fazendo?">
        <Slider 
          value={q5}
          onValueChange={value => { setQ5(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

      <LoneLabel label="6. Você gostaria de esta fazendo outra coisa?">
        <Slider 
          value={q6}
          onValueChange={value => { setQ6(value[0]) }}
          captions={['Pouco', 'Bastante']}
        />
      </LoneLabel>

      <LoneLabel label="7. Você estava satisfeito com seu desempenho?">
        <Slider 
          value={q7}
          onValueChange={value => { setQ7(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

      <LoneLabel label="8. Quão importante era essa atividade em relação aos seus objetivos gerais?">
        <Slider 
          value={q8}
          onValueChange={value => { setQ8(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

    </Form>
  );
}