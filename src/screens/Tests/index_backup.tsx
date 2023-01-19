import React, { useState } from 'react';
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { IconButton } from '../../components/IconButton';
import { StepIndicator } from '../../components/StepIndicator';
import { Container, Header, Title, TitleWrapper, BtnWrapper } from './styles';

import { Form1 } from './forms/form1';
import { Form2 } from './forms/form2';
import { Form3 } from './forms/form3';
import { Form4 } from './forms/form4';
import { Form5 } from './forms/form5';
import { Form6 } from './forms/form6';
import { Button } from '../../components/Button';

export function FormTest() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentHour, setCurrentHour] = useState(new Date());

  // Forms data
  const [form1Data, setForm1Data] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  });

  const [form2Data, setForm2Data] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
  });

  function handleNewOrder() {
    navigation.navigate("home");
  }

  function getHour() {
    const d = currentHour;
    return `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth()+1)).slice(-2)} - ${('0'+d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}`;
  };

  function renderForm() {
    switch (currentPage) {
      case 0:
        return <Form1 formData={form1Data} setData={setForm1Data}/>;
      case 1:
        return <Form2 formData={form2Data} setData={setForm2Data}/>;
      case 2:
        return <Form3/>;
      case 3:
        return <Form4/>;
      case 4:
        return <Form5/>;
      case 5:
        return <Form6/>;
    }
  }

  /**
   * A fazer:
   * - Setar Formik e Yup
   * - Ver a possibilidade de separar cada formulário em um arquivo
   * - Utilizar um método para mudar o Swiper e o StepIndicator ao mesmo tempo (para igualar as animações)
   */

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>Novo Formulário ({currentPage+1})</Title>
        </TitleWrapper>
        <IconButton icon="chevron-left" onPress={handleNewOrder} />
        <StepIndicator 
          currentPosition={currentPage} 
          labels={['', '', '', '','','']} 
          stepCount={6}
          onPress={index => { setCurrentPage(index) }} 
        />
      </Header>

      <Swiper onIndexChanged={index => { setCurrentPage(index) }} index={currentPage} showsButtons={false} loop={false} showsPagination={false}>
        <Form1 formData={form1Data} setData={setForm1Data}/>
        <Form2 formData={form2Data} setData={setForm2Data}/>
        <Form3/>
        <Form4/>
        <Form5/>
        <Form6/>
      </Swiper>

      <BtnWrapper>
        <Button title="Próximo" onPress={() => {}} />
      </BtnWrapper>
    
    </Container>
  );
  //{renderForm()}
}
