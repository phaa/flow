import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Load } from '../Load';
import { Filters } from '../Filters';
import { Order, OrderProps } from '../Order';

import { Container, Header, Title, Counter } from './styles';

export function Orders() {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      _id: '1',
      patrimony: 'MInha casa',
      equipment: 'Formulário 1',
      status: 'closed',
      description: 'Desrição',
      created_at: new Date()
    },
    {
      _id: '2',
      patrimony: 'MInha casa',
      equipment: 'Formulário 2',
      status: 'open',
      description: 'Desrição',
      created_at: new Date()
    },
    {
      _id: '3',
      patrimony: 'MInha casa',
      equipment: 'Formulário 3',
      status: 'closed',
      description: 'Desrição',
      created_at: new Date()
    },
    {
      _id: '4',
      patrimony: 'MInha casa',
      equipment: 'Formulário 4',
      status: 'closed',
      description: 'Desrição',
      created_at: new Date()
    },
  ]);
  const [status, setStatus] = useState('open');

  //{status === 'open' ? 'aberto' : 'encerrado'}

  return (
    <Container>
      <Filters onFilter={setStatus} />

      <Header>
        
        <Title>Formulários preenchidos:</Title>
        <Counter>{orders.length}</Counter>
      </Header>

      {
        isLoading ?
          <Load />
          : <FlatList
            data={orders}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <Order data={item} />
            )}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          />
      }
    </Container>
  );
}