import React from 'react';
import { Container, Greeting, Title, SubTitle, Container2, Logo } from './styles';

type HeaderType = {
  userName: string;
  userEmail: string;
}

export const Header: React.FC<HeaderType> = ({ userName, userEmail }) => {

  return (
    <Container>
      <Container2>
        <Logo source={require('./logo.jpg')} />
        <Greeting>
          <Title>{userName}enrique</Title>
          <SubTitle>{userEmail}</SubTitle>
        </Greeting>
      </Container2>
    </Container>
  );
}
