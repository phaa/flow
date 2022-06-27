import React from 'react';

import { Container, Greeting, Title, Logo } from './styles';

type Props = {
  title: string;
};

export function AuthHeader({ title, ...rest}: Props) {
  return (
    <Container>
      <Greeting>
        <Logo source={require('./logo.png')}/>
        <Title>{title}</Title>
      </Greeting>
    </Container>
  );
}
