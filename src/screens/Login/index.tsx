import React, { useCallback, useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../../providers/AuthProvider";

import { Container, RoundContainer, Form, Subtext, BottomWrapper, AltSubtext } from '../../components/BaseComponents/styles';

import { AuthHeader } from '../../components/AuthHeader';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export enum AuthState {
  None,
  Loading,
  LoginError,
  RegisterError,
}

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp, signIn, authState } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    // Se já houver um usuário logado, pular para a página dos formulários.
    if (user != null) {
      navigation.navigate("home");
    }
  }, [user]);

  function gotoPasswordRecovery() {
    navigation.navigate("new");
  }

  function handleLogin() {
    signIn(email, password);
    navigation.navigate("home");
  }

  function handleRegister() {
    signUp(email, password);
    navigation.navigate("home");
  }

  return (
    <Container>
      <AuthHeader title="Login"/>
      <RoundContainer>
        <Form>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCompleteType="email"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu email"
          />
          <Input
            label="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCompleteType="password"
            textContentType="password"
            placeholder="Digite sua senha"
          />
          
          <Button
            title="Login"
            onPress={handleLogin}
          />

          <Button
            title="Registrar"
            onPress={handleRegister}
          />

          {authState === AuthState.LoginError && (
            <Subtext>
              There was an error logging in, please try again
            </Subtext>
          )}
          {authState === AuthState.RegisterError && (
            <Subtext>
              There was an error registering, <AltSubtext>please try again</AltSubtext>
            </Subtext>
          )}
        
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