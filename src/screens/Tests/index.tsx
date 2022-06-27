
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper'
import { StyleSheet, Text, View, } from 'react-native';

//import { Slider } from '@miblanchard/react-native-slider';
//import BouncyCheckbox from "react-native-bouncy-checkbox";


import { MyStepIndicator } from '../../components/StepIndicator';

import { IconButton } from '../../components/IconButton';
import { Container, Header, Title, Form, TitleWrapper } from './styles';

export function Form1() {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const labels: string[] = ['', '', '', '']; 

  function handleNewOrder() {
    navigation.navigate("home");
  }
  
  function onStepPress(position: number) {
    setCurrentPage(position);
  };

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>Novo Formulário</Title>
        </TitleWrapper>
        <IconButton icon="chevron-left" onPress={handleNewOrder} />
        <MyStepIndicator 
          currentPosition={currentPage} 
          labels={labels} 
          onPress={onStepPress} 
          stepCount={labels.length}
        />
      </Header>
      
      <Form>
        <Swiper
          showsButtons={false}
          loop={false} 
          index={currentPage} 
          autoplay={false}
          onIndexChanged={(page) => {
            setCurrentPage(page);
          }}
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>Página 1 do Formulário</Text>
          </View>
          <View style={styles.slide2}>
          <Text style={styles.text}>Página 2 do Formulário</Text>
          </View>
          <View style={styles.slide3}>
          <Text style={styles.text}>Página 3 do Formulário</Text>
          </View>
          <View style={styles.slide3}>
          <Text style={styles.text}>Página 4 do Formulário</Text>
          </View>
        </Swiper>
      </Form>
    </Container>
    
    
  );
}
const styles = StyleSheet.create({
  wrapper: {
    color:'#FF366A'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    color: '#999',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
