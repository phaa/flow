import React from 'react';

// Firebase Authentication
import auth from '@react-native-firebase/auth';

import { IconButton } from '../IconButton';
import { Container, Greeting, Title, SubTitle } from './styles';

type HeaderType = {
  userName: string;
  userEmail: string;
}

export const Header: React.FC<HeaderType> = ({ userName, userEmail }) => {
  
  function handleLogout() {
    auth().signOut();
  }

  return (
    <Container>
      <Greeting>
        <Title>{userName}</Title>
        <SubTitle>{userEmail}</SubTitle>
      </Greeting>

      <IconButton icon="logout" onPress={handleLogout}/>
    </Container>
  );
}
