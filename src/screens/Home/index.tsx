import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

// Custom Components
import { Container } from './styles'; 
import { Header } from '../../components/Header';
import { FormsManager } from '../../components/Forms';
import { Button } from '../../components/Button';

// Firebase Authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Pressable } from 'react-native';
import { IconButton } from '../../components/IconButton';

export const Home: React.FC = () => {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const firebase = auth();
  const user: FirebaseAuthTypes.User = firebase.currentUser;

  function handleGotoNewForm() {
    navigation.navigate("formtest");
  }

  function handleLogout() {
    firebase.signOut();
  }

  useEffect(() => {
    navigation.setOptions({
			headerRight: () => (
				<Pressable onPress={handleLogout} style={{ marginRight: -15 }} >
					<IconButton icon="logout" onPress={handleLogout} color={COLORS.WHITE}/>
				</Pressable>
			),
		})
  }, []);

  return (
    <Container>

      <Header userName={user.displayName} userEmail={user.email}/>

      <FormsManager userId={user.uid}/>

      <Button title="Novo" onPress={handleGotoNewForm} />
      
    </Container>
  );
}