import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Firebase Authentication
import auth from '@react-native-firebase/auth';

// Styled Components
import { Container, RoundContainer, Form, Subtext, BottomWrapper, AltSubtext } from '../../components/BaseComponents/styles';

// Custom components
import { AuthHeader } from '../../components/AuthHeader';
import { Button } from '../../components/Button';
import { Input } from '../../components/FormControls/Input';

export const Login: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleSignIn() {
    if (email === "" || password === "") {
      setError("Preencha os campos de e-mail e senha.");
      return;
    }

    setIsLoading(true);

    auth().signInWithEmailAndPassword(email, password)
    .then(() => {
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  function handleForgotPassword() {
    if (email === "") {
      Alert.alert("Redefinir senha", "Digite um e-mail válido");
      return;
    }

    auth().sendPasswordResetEmail(email)
    .then(() => {
      Alert.alert("Redefinir senha", "Enviaremos um e-mail para voçê");
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function handleRedirectToRegister() {
    navigation.navigate("register");
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
            title="Entrar"
            onPress={handleSignIn}
          />

          {error !== '' && (
            <Subtext>
              Ocorreu um erro ao tentar fazer login
              <AltSubtext>{error}</AltSubtext>
            </Subtext>
          )}
          <BottomWrapper>
            <TouchableOpacity onPress={handleRedirectToRegister}>
              <Subtext>Não tem cadastro? <AltSubtext>Clique aqui</AltSubtext>
              </Subtext>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleForgotPassword}>
              <AltSubtext>Esqueci a senha</AltSubtext>
            </TouchableOpacity>
          </BottomWrapper>
        </Form>
      </RoundContainer>
    </Container>
  );
}