import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Firebase Authentication
import auth from '@react-native-firebase/auth';

// Custom components
import { Container, RoundContainer, Form, Subtext, AltSubtext } from '../../components/BaseComponents/styles';
import { AuthHeader } from '../../components/AuthHeader';
import { Button } from '../../components/Button';
import { Input } from '../../components/FormControls/Input';

export const Register: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleRegister() {
    if (name === '' || email === '' || password === '') {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);

    auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      return result.user.updateProfile({
        // É possivel colocar outros campos, ver documentação
        // https://rnfirebase.io/reference/auth/user
        displayName: name
      })
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        setError("Esse e-mail já está cadastrado.");
      }

      if (error.code === "auth/invalid-email") {
        setError("E-mail inválido.");
      }

      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
    
  }

  function handleRedirectToLogin() {
    navigation.navigate("login")
  }

  return (
    <Container>

      <AuthHeader title="Registrar"/>

      <RoundContainer>

        <Form>

          <Input
            label="Nome"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            autoCorrect={false}
            placeholder="Digite seu primeiro nome ou apelido"
          />
 
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
            title="Registrar"
            onPress={handleRegister}
            isLoading={isLoading}
          />

          {error !== '' && (
            <AltSubtext>{error}</AltSubtext>
          )}
          <TouchableOpacity onPress={handleRedirectToLogin}>

            <Subtext>Já tem uma conta? <AltSubtext>Faça login</AltSubtext></Subtext>

          </TouchableOpacity>

        </Form>

      </RoundContainer>
      
    </Container>
  );
}