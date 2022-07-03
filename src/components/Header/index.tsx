import React from 'react';

import { IconButton } from '../IconButton';

import { Container, Greeting, Title, SubTitle } from './styles';

export function Header() {

  return (
    <Container>
      <Greeting>
        <Title>Bem vindo, Pedro</Title>
        <SubTitle>Acompanhe suas respostas aos formulários</SubTitle>
      </Greeting>

      <IconButton icon="logout" />
    </Container>
  );
}
