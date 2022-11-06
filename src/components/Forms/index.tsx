import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

// Firebase Firestore
import firestore from '@react-native-firebase/firestore';

// Custom components
import { Load } from '../Load';
import { Filters } from '../Filters';
import { Container, Header, Title, Counter } from './styles';
import { FormCard } from '../FormCard';
import { FormItemProps } from '../FormCard';

type ManagerType = {
  userId: string;
}

export const FormsManager: React.FC<ManagerType> = ({ userId }) => {
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('pending');
  const [forms, setForms] = useState<FormItemProps[] | []>([]);

  useEffect(() => {
    setIsLoading(true);

    const subscribe = firestore()
    .collection("forms")
    .where('userId', '==', userId)
    .where('status', '==', status)
    .orderBy('createdAt', 'desc')
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id, // o Id está um nível acima
          ...doc.data() // desestrutura o documento 
        }
      }) as FormItemProps[];

      setForms(data);
      setIsLoading(false);
      
    });
    return () => subscribe();
  }, [status]);

  return (
    <Container>
      <Filters onFilter={setStatus} />

      <Header>
        <Title>Formulários preenchidos:</Title>
        <Counter>{forms.length}</Counter>
      </Header>

      {
        isLoading ? 
          <Load />
         : 
          <FlatList
            data={forms}
            keyExtractor={form => form.id}
            renderItem={({item}) => (
              <FormCard form={item} />
            )}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          />
      }
      
    </Container>
  );
}