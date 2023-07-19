import React from 'react';

import { Container, Greeting, Title, Logo } from './styles';

type Props = {
  title: string;
};

export function AuthHeader({ title, ...rest}: Props) {
  return (
    <Container>
      <Greeting>
        <Logo source={require('./logo2_small.png')}/>
        <Title>{title}</Title>
      </Greeting>
    </Container>
  );
}
