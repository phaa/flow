import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Container, RoundContainer, Form } from '../../components/BaseComponents/styles';

import { AuthHeader } from '../../components/AuthHeader';
import { Button } from '../../components/Button';
import { Datepicker } from '../../components/Datepicker';
import { Input } from '../../components/Input';

export function Register() {
  const navigation = useNavigation();
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [feedback, setFeedback] = useState('');

  function handleNewOrder() {
    navigation.navigate("new");
  }

  function comparePasswords() {
    let pwd1 = password1.toString();
    let pwd2 = password2.toString();
    let feed = pwd1!==pwd2 ? "As senhas não coincidem" : "";
    setFeedback(feed);
  }

  return (
    <ScrollView>
      <Container>
        <AuthHeader title="Cadastro"/>
        <RoundContainer>
          <Form>
            <Input
              label="Nome"
              placeholder="Digite seu nome"
            />
            <Input
              label="Email"
              placeholder="Digite seu email"
            />
            <Input
              label="Senha"
              placeholder="Digite uma senha"
              feedbackText={password1}
              onChangeText={newPassword1 => setPassword1(newPassword1)}
              secureTextEntry={false}
            />
            <Input
              label="Confirme a senha"
              placeholder="Digite novamente a senha"
              feedbackText={feedback}
              onChangeText={newPassword2 => {setPassword2(newPassword2); comparePasswords();}}
              secureTextEntry={false}
            />
            <Datepicker 
              label='Data de nascimento'
            />
            <Button
              title="Cadastrar"
              onPress={handleNewOrder}
            />
          </Form>
        </RoundContainer>
      </Container>
    </ScrollView>
    
  );
}