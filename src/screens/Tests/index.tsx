
import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';



//import { Slider } from '@miblanchard/react-native-slider';




import Swiper from 'react-native-swiper'
import { CheckBox } from '../../components/CheckBox';
import { IconButton } from '../../components/IconButton';
import { Input } from '../../components/Input';
import { MyStepIndicator } from '../../components/StepIndicator';
import { Container, Header, Title, Form, TitleWrapper, Slide } from './styles';

export function Form1() {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [checkboxState, setCheckboxState] = useState(false);
  const labels: string[] = ['', '', '', '']; 

  function handleNewOrder() {
    navigation.navigate("home");
  }
  
  function onStepPress(position: number) {
    setCurrentPage(position);
  };

  function getHour() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.getMonth()+1;
    return `${('0' + day).slice(-2)}/${('0' + month).slice(-2)} - ${hour}:${minutes}`;
  };

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>Novo Formulário ({getHour()})</Title>
        </TitleWrapper>
        <IconButton icon="chevron-left" onPress={handleNewOrder} />
        <MyStepIndicator 
          currentPosition={currentPage} 
          labels={labels} 
          onPress={onStepPress} 
          stepCount={labels.length}
        />
      </Header>
      
      <Form >
          <Swiper
            showsButtons={false}
            loop={false} 
            index={currentPage} 
            autoplay={false}
            onIndexChanged={(page) => {
              setCurrentPage(page);
            }}
            dot={
              <View
                style={{
                  backgroundColor: '#97a2c7',
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#21AEEF',
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7
                }}
              />
            }
          >
            <Slide contentContainerStyle={{flexGrow: 1}}>
            
              <Input label="1 - Horario em que foi notificado:" />

              <Input label="2 - Quando você foi notificado, no que estava pensando?" />

              <Input label="3 - Onde voce estava?" />

              <Input label="4 - Qual era a PRINCIPAL coisa que você estava fazendo?" />

              <Input label="5 - Que outras coisas você estava fazendo?" />

              <Input label="6 - Por que você estava fazendo essa atividade especifica?" noInput={true}/>

              <CheckBox 
                text="Eu tinha quer fazer" 
                isChecked={checkboxState} 
                onPress={() => setCheckboxState(!checkboxState)}
              />
              <CheckBox 
                text="Eu queria fazer" 
                isChecked={checkboxState} 
                onPress={() => setCheckboxState(!checkboxState)}
              />
              <CheckBox 
                text="Eu não tinha outra coisa para fazer" 
                isChecked={checkboxState} 
                onPress={() => setCheckboxState(!checkboxState)}
              />

              <Input label="" noInput={true}/>
              <Input label="" noInput={true}/>
            </Slide>
            <Slide>
            <Text style={styles.text}>Página 2 do Formulário</Text>
            </Slide>
            <Slide>
            <Text style={styles.text}>Página 3 do Formulário</Text>
            </Slide>
            <Slide>
            <Text style={styles.text}>Página 4 do Formulário</Text>
            </Slide>
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
  },
})