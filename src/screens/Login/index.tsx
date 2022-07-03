import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Container, RoundContainer, Form, Subtext, BottomWrapper, AltSubtext } from '../../components/BaseComponents/styles';

import { AuthHeader } from '../../components/AuthHeader';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Login() {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("home");
  }

  function gotoPasswordRecovery() {
    navigation.navigate("new");
  }

  function gotoRegister() {
    navigation.navigate("register");
  }

  return (
    <Container>
      <AuthHeader title="Login"/>
      <RoundContainer>
        <Form>
          <Input
            label="Email"
            placeholder="Digite seu email"
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />
          <Button
            title="Entrar"
            onPress={handleGoHome}
          />
          <Subtext>Esqueceu a senha? <AltSubtext>Recupere aqui</AltSubtext></Subtext>
        
          <BottomWrapper>
            <TouchableOpacity onPress={gotoRegister}>
              <Subtext>Não tem cadastro? <AltSubtext>Clique aqui</AltSubtext>
              </Subtext>
            </TouchableOpacity>
          </BottomWrapper>
        </Form>
      </RoundContainer>
    </Container>
  );
}