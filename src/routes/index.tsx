import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';

// Firebase Authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// Stacks para cada situação de usuário
import { AuthStack } from './authStack';
import { UserStack } from './userStack';

export const Routes: React.FC = () => {
  const firebase = auth();
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = firebase.onAuthStateChanged(setUser);
    return subscriber; // retorna uma função de limpeza para subscriber
  }, []);

  return (
    <NavigationContainer>
      {user ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
}