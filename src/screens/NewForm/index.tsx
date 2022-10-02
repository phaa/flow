import React, { useState, useCallback } from 'react';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

// Firebase authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Custom components
import { Container, Header, Title, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { IconButton } from '../../components/IconButton';

export const NewForm: React.FC = () => {
  const navigation = useNavigation();
  const user: FirebaseAuthTypes.User = auth().currentUser;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [questionCount, setQuestionCount] = useState<string>('');

  function handleBack() {
    navigation.goBack();
  }

  function handleNewForm() {
    setIsLoading(true);

    firestore()
    .collection('forms')
    .add({
      description,
      questionCount,
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
    })
  }

  return (
    <Container>
      
      <Header>

        <Title>Novo formulário:</Title>

        <IconButton icon="close" onPress={handleBack} />

      </Header>

      <Form>

        <Input
          placeholder="Descrição"
          onChangeText={setDescription}
        />

        <Input
          placeholder="Numero de questões"
          onChangeText={setQuestionCount}
        />

      </Form>

      <Button
        title="Enviar formulário"
        isLoading={isLoading}
        onPress={handleNewForm}
      />

    </Container>
  );
}