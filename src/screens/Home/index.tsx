import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Custom Components
import { Container } from './styles'; 
import { Header } from '../../components/Header';
import { FormsManager } from '../../components/Forms';
import { Button } from '../../components/Button';

// Firebase Authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const Home: React.FC = () => {

  const navigation = useNavigation();
  const user: FirebaseAuthTypes.User = auth().currentUser;

  function handleGotoNewForm() {
    navigation.navigate("formtest");
  }

  return (
    <Container>

      <Header userName={user.displayName} userEmail={user.email}/>

      <FormsManager userId={user.uid}/>

      <Button title="Novo" onPress={handleGotoNewForm} />
      
    </Container>
  );
}