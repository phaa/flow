import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { IconButton } from '../IconButton';

import { Container, Greeting, Title, SubTitle } from './styles';

export function Header() {
  const navigation = useNavigation();

  function handleLogout() {
    navigation.navigate("login");
  }

  return (
    <Container>
      <Greeting>
        <Title>Bem vindo, Pedro</Title>
        <SubTitle>Acompanhe suas respostas aos formulários</SubTitle>
      </Greeting>

      <IconButton icon="logout" onPress={handleLogout}/>
    </Container>
  );
}
