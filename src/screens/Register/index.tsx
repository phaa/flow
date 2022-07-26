import React, { useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Realm } from '@realm/react';
import { getRealmApp } from '../../realm';

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
  const app = getRealmApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authState, setAuthState] = useState(AuthState.None);

  // If the user presses "register" from the auth screen, try to register a
  // new account with the  supplied credentials and login as the newly created user
  const handleRegister = useCallback(async () => {
    setAuthState(AuthState.Loading);

    try {
      // Register the user...
      await app.emailPasswordAuth.registerUser({email, password});
      // ...then login with the newly created user
      const credentials = Realm.Credentials.emailPassword(email, password);

      await app.logIn(credentials);
      setAuthState(AuthState.None);
    } catch (e) {
      console.log('Error registering', e);
      setAuthState(AuthState.RegisterError);
    }
  }, [email, password, setAuthState, app]);

  const navigation = useNavigation();

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
            title="Entrar"
            onPress={handleRegister}
          />

          {authState === AuthState.RegisterError && (
            <Subtext>
              There was an error registering, <AltSubtext>please try again</AltSubtext>
            </Subtext>
          )}
        </Form>
      </RoundContainer>
    </Container>
  );
}