import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { IconButton } from '../../components/IconButton';
import { StepIndicator } from '../../components/StepIndicator';
import { Container, Header, Title, TitleWrapper } from './styles';

// Firebase authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { Form1 } from './forms/form1';
import { Form2 } from './forms/form2';
import { Form3 } from './forms/form3';
import { Form4 } from './forms/form4';
import { Form5 } from './forms/form5';
import { Form6 } from './forms/form6';
import { Button } from '../../components/Button';

export function FormTest() {
  const user: FirebaseAuthTypes.User = auth().currentUser;
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentHour, setCurrentHour] = useState(new Date());

  // Forms data
  const [form1Data, setForm1Data] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null,
  });

  const [form2Data, setForm2Data] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null,
  });

  const [form3Data, setForm3Data] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null, 
    q8: null, q9: null, q10: null, q11: null, q12: null, q13: null, q14: null,
  }); 
  
  const [form4Data, setForm4Data] = useState({
    q1: null,
    q2: "", // opcional
  });

  const [form5Data, setForm5Data] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null, 
    q8: null, q9: null, q10: null, q11: null, q12: null, q13: null, q14: null,
  });

  const [form6Data, setForm6Data] = useState({
    q1: null, q2: null, q3: null,
  });

  // verifica se o usuário respondeu todas as questões de cada formulário
  function checkAnswers() {
    console.log("Verificando...");
    let notAnswered = 0;
    Object.keys(form1Data).forEach((key, index) => {
      if (form1Data[key] == null) notAnswered++;
    });

    Object.keys(form2Data).forEach((key, index) => {
      if (form2Data[key] == null) notAnswered++;
    });

    Object.keys(form3Data).forEach((key, index) => {
      if (form3Data[key] == null) notAnswered++;
    });

    Object.keys(form4Data).forEach((key, index) => {
      if (form4Data[key] == null) notAnswered++;
    });

    Object.keys(form5Data).forEach((key, index) => {
      if (form5Data[key] == null) notAnswered++;
    });

    Object.keys(form6Data).forEach((key, index) => {
      if (form6Data[key] == null) notAnswered++;
    });
    
    if (notAnswered > 0) {
      Alert.alert(
        "Formulário",
        `Faltam ${notAnswered} questões para responder!`,
        [
          { text: "OK" }
        ]
      );
    } else {
      console.log("Formulário pronto para enviar")
      handleNewOrder();
    }
  }

  function handleNewOrder() {
    setIsLoading(true);

    firestore()
    .collection('forms')
    .add({
      form1: form1Data,
      form2: form2Data,
      form3: form3Data,
      form4: form4Data,
      form5: form5Data,
      form6: form6Data,
      status: 'finished', // pode ter finished ou pendente
      createdAt: firestore.FieldValue.serverTimestamp(),
      userId: user.uid
    })
    .then(() => {
      Alert.alert(
        "Formulário",
        "Formulário enviado com sucesso!",
        [
          { text: "OK", onPress: () => navigation.goBack() }
        ]
      );
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  function getHour() {
    const d = currentHour;
    return `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth()+1)).slice(-2)} - ${('0'+d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}`;
  }

  function goBack() {
    Alert.alert(
      "Formulário",
      "Deseja sair?\nSuas respostas não serão salvas.",
      [
        { text: "OK", onPress: () => navigation.goBack() },
        { text: "Ficar", onPress: () => {} }
      ]
    );
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>Novo Formulário ({getHour()})</Title>
        </TitleWrapper>
        <IconButton icon="chevron-left" onPress={goBack} />
        <StepIndicator 
          currentPosition={currentPage} 
          labels={['', '', '', '','','']} 
          stepCount={6}
          onPress={index => { setCurrentPage(index) }} 
        />
      </Header>

      <Swiper onIndexChanged={index => { setCurrentPage(index) }} scrollEnabled={false} index={currentPage} showsButtons={false} loop={false} showsPagination={false}>
        <Form1 formData={form1Data} setData={setForm1Data}/>
        <Form2 formData={form2Data} setData={setForm2Data}/>
        <Form3 formData={form3Data} setData={setForm3Data}/>
        <Form4 formData={form4Data} setData={setForm4Data}/>
        <Form5 formData={form5Data} setData={setForm5Data}/>
        <Form6 formData={form6Data} setData={setForm6Data} handleNewForm={checkAnswers} isLoading={isLoading}/>
      </Swiper>
    
    </Container>
  );
  //onIndexChanged={index => { setCurrentPage(index) }}
}
