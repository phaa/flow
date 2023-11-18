import React from 'react';

import { Container, Title, Logo } from './styles';

type Props = {
  title: string;
};

export function AuthHeader({ title, ...rest }: Props) {
  return (
    <Container>
      <Logo source={require('./logo2_small.png')} />
      <Title>{title}</Title>
    </Container>
  );
}
