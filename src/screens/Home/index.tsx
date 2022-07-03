import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

import { Header } from '../../components/Header';
import { Orders } from '../../components/Orders';
import { FloatingButton } from '../../components/FloatingButton';

export function Home() {
  const navigation = useNavigation();

  function handleNewOrder() {
    navigation.navigate("form1");
  }

  return (
    <Container>
      <Header />
      <Orders />

      <FloatingButton icon="logout" onPress={handleNewOrder}/>
    </Container>
  );
}