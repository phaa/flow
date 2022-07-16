
import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//Formulario 2





import Swiper from 'react-native-swiper'
import { CheckBox } from '../../components/CheckBox';
import { IconButton } from '../../components/IconButton';
import { Input, BareLabel } from '../../components/Input';
import { MyStepIndicator } from '../../components/StepIndicator';
import { CustomSlider } from '../../components/Slider';
import { Container, Header, Title, Form, TitleWrapper, Slide, SliderDot, SliderActiveDot } from './styles';

export function Form1() {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [checkboxState, setCheckboxState] = useState(false);
  const [currentHour, setCurrentHour] = useState(new Date());
  const labels: string[] = ['', '', '', '','','']; 


  const slide1Captions: string[] = ['Pouco', 'Parcialmente', 'Bastante'];


  function handleNewOrder() {
    navigation.navigate("home");
  }
  
  function onStepPress(position: number) {
    setCurrentPage(position);
  };

  function getHour() {
    const d = currentHour;
    return `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth()+1)).slice(-2)} - ${('0'+d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}`;
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
              onStepPress(page);
            }}
            dot={ <SliderDot/> }
            activeDot={ <SliderActiveDot/> }
          >
            <Slide contentContainerStyle={{flexGrow: 1}}>
              <Input label="1. Horario em que foi notificado:" />
              <Input label="2. Quando você foi notificado, no que estava pensando?" />
              <Input label="4. Qual era a PRINCIPAL coisa que você estava fazendo?" />
              <Input label="5. Que outras coisas você estava fazendo?" />
              <Input label="6. Por que você estava fazendo essa atividade especifica?" noInput={true}/>

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
            </Slide>
            <Slide>

              <BareLabel label="1. Você estava bem concentrado?">
                <CustomSlider captions={slide1Captions}/>
              </BareLabel>

              <BareLabel label="2. Estava dificil de se concentrar?">
                <CustomSlider captions={slide1Captions}/>
              </BareLabel>

              <BareLabel label="3. Você estava consciente de si mesmo?">
                <CustomSlider captions={slide1Captions}/>
              </BareLabel>

              <BareLabel label="4. Você estava se sentindo bem consigo mesmo?">
                <CustomSlider captions={slide1Captions}/>
              </BareLabel>

              <BareLabel label="5. Você estava no controle da situação?">
                <CustomSlider captions={slide1Captions}/>
              </BareLabel>

              <BareLabel label="6. Você estava correspondendo as suas próprias expectativas?">
                <CustomSlider captions={slide1Captions}/>
              </BareLabel>

              <BareLabel label="7. Você estava correspondendo as expectativas dos outros?">
                <CustomSlider captions={slide1Captions}/>
              </BareLabel>

              <Input label="" noInput={true}/>
            </Slide>
            <Slide>
              <BareLabel label="1. Descreva seu estado de espiríto ao ser notificado:">
                <CustomSlider captions={['Alerta', 'Sonolento']}/>
                <CustomSlider captions={['Feliz', 'Triste']}/>
                <CustomSlider captions={['Irritado', 'Animado']}/>
                <CustomSlider captions={['Forte', 'Fraco']}/>
                <CustomSlider captions={['Ativo', 'Passivo']}/>
                <CustomSlider captions={['Solitário', 'Sociável']}/>
                <CustomSlider captions={['Envergonhado', 'Orgulhoso']}/>
                <CustomSlider captions={['Envolvido', 'Distante']}/>
                <CustomSlider captions={['Entusiasmado', 'Entendiado']}/>
                <CustomSlider captions={['Fechado', 'Aberto']}/>
                <CustomSlider captions={['Claro', 'Confuso']}/>
                <CustomSlider captions={['Tenso', 'Relaxado']}/>
                <CustomSlider captions={['Competitivo', 'Cooperativo']}/>
              </BareLabel>

              <BareLabel label="2. Dor ou desconforto geral?">
                <CustomSlider maxValue={3} captions={['Nenhum', 'Leve', 'Incômodo', 'Severo']}/>
              </BareLabel>

              <Input label="" noInput={true}/>
            </Slide>
            <Slide>
              <Input label="1. Com que você estava?" noInput={true} />
              <CheckBox 
                text="Sozinho" 
                isChecked={checkboxState} 
                onPress={() => setCheckboxState(!checkboxState)}
              />
              <CheckBox 
                text="Amigo" 
                isChecked={checkboxState} 
                onPress={() => setCheckboxState(!checkboxState)}
              />
              <CheckBox 
                text="Mãe" 
                isChecked={checkboxState} 
                onPress={() => setCheckboxState(!checkboxState)}
              />
              <CheckBox 
                text="Pai" 
                isChecked={checkboxState} 
                onPress={() => setCheckboxState(!checkboxState)}
              />
              <CheckBox 
                text="Irmão ou irmã" 
                isChecked={checkboxState} 
                onPress={() => setCheckboxState(!checkboxState)}
              />
              <CheckBox 
                text="Estranho" 
                isChecked={checkboxState} 
                onPress={() => setCheckboxState(!checkboxState)}
              />
              <CheckBox 
                text="Outros" 
                isChecked={checkboxState} 
                onPress={() => setCheckboxState(!checkboxState)}
              />
              <Input label="Se selecionar outros, especifique:" />
              <Input label="" noInput={true}/>
            </Slide>
            <Slide>
              <BareLabel label="1. Nível de desafio da atividade">
                <CustomSlider captions={['Fácil', 'Difícil']}/>
              </BareLabel>

              <BareLabel label="2. Seu nível de habilidade na atividade:">
                <CustomSlider captions={['Pouco', 'Habilidoso(a)']}/>
              </BareLabel>

              <BareLabel label="3. Essa atividade era importante para você?">
                <CustomSlider captions={['Pouco', 'Muito']}/>
              </BareLabel>

              <BareLabel label="4. Essa atividade era importante para outras pessoas?">
                <CustomSlider captions={['Pouco', 'Muito']}/>
              </BareLabel>

              <BareLabel label="5. Você estava tendo sucesso no que estava fazendo?">
                <CustomSlider captions={['Pouco', 'Muito']}/>
              </BareLabel>

              <BareLabel label="6. Você gostaria de esta fazendo outra coisa?">
                <CustomSlider captions={['Pouco', 'Bastante']}/>
              </BareLabel>

              <BareLabel label="7. Você estava satisfeito com seu desempenho?">
                <CustomSlider captions={['Pouco', 'Muito']}/>
              </BareLabel>

              <BareLabel label="8. Quão importante era essa atividade em relação aos seus objetivos gerais?">
                <CustomSlider captions={['Pouco', 'Muito']}/>
              </BareLabel>
              
              <Input label="" noInput={true}/>
            </Slide>
            <Slide>
              <Input label="1. Se você tivesse escolha... Com quem você estaria?" />
              <Input label="2. O que você estaria fazendo?" />
              <Input label="3. Desde a sua última notificação, aconteceu alguma coisa ou você fez alguma coisa que possa ter afetado a maneira como se sente?" />
            </Slide>
          </Swiper>
        </Form>
    </Container>
  );
}
const styles = StyleSheet.create({
  text: {
    color: '#999',
    fontSize: 30,
    fontWeight: 'bold'
  },
})