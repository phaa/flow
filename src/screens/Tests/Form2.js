import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';
// import ViewSlider from 'react-native-view-slider'
import Styles from '../assets/stilos'
import Slider from '@react-native-community/slider'

export default function Form2(props){
  return(
    <ScrollView>
    <View style={styles.Form2}>
        <View style={styles.top}>
          <Image
            style={styles.Logo}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.titulo}>Formulário de amostragem de experiencia</Text>
        </View>

          <View style={styles.pontuacao}>
            <Text>considere</Text>
            {/*<View style={styles.pontuacaoO}>
              <Text>De modo algum</Text><Text>Um pouco</Text>
            </View>
            <Text style={styles.pontuacaoN}>0 1 2 3 4 </Text>
            <View style={styles.pontuacaoO}>
              <Text>Bastante</Text><Text>Muito</Text>
            </View>
            <Text style={styles.pontuacaoN}>5 6 7 8 9</Text>*/}
            <View style={styles.pontuacaoO}>
              <Text>De modo algum</Text><Text>Um pouco</Text>
              <Text>Bastante</Text><Text>Muito</Text>
            </View>
            <Slider
            style={{width: 300, height: 40}}
            minimumValue={0}
            maximumValue={9}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
          />
          </View>
          

      <View>
          <View>
            <Text style={styles.pergunta}>1. Você estava bem concentrado?</Text>
            <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000"
            />
          </View>

          <View>
            <Text  style={styles.pergunta}>2. Estava dificil de se concentrar?</Text>
            <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000"
            />
          </View>

          <View>
            <Text  style={styles.pergunta}>3. Você estava consciente de si mesmo?</Text>
            <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000"
            />
          </View>

          <View>
            <Text  style={styles.pergunta}>4. Você estava se sentindo bem consigo mesmo?</Text>
          </View>

          <View>
            <Text  style={styles.pergunta}>5. Você estava no controle da situação?</Text>
            <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000"
            />
          </View>

          <View>
            <Text  style={styles.pergunta}>6. Você estava correspondendo as suas próprias expectativas?</Text>
            <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000"
            />
          </View>

          <View>
            <Text  style={styles.pergunta}>7. Você estava correspondendo as expectativas dos outros?</Text>
          </View>
          <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000"
            />
      </View>

      <View style={Styles.botoes}>
        <TouchableHighlight 
        style={styles.botao}
        onPress={() => props.navigation.navigate('Form1')}
        >
          <Image style={styles.Vector} source={ require('../assets/Vector.png')} />
        </TouchableHighlight>

        <TouchableHighlight 
        style={styles.botao}
        onPress={() => props.navigation.navigate('Form3')}
        >
          <Image style={styles.Vector} source={ require('../assets/Prox.png')} />
        </TouchableHighlight>
      </View>

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Form2:{
    padding: 3.5,
    backgroundColor: '#ffffff'
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 50,
    marginLeft: 20,    
  },  
  Logo: {
    marginRight: 10,
  },
  titulo: {
    fontSize: 20,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.4,
    color: '#000',
    textAlign: 'center',
    justifyContent: 'center',
  },
  pontuacao:{
    display: 'flex',
    padding: 5,
    textAlign: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 20,
  },  
  pontuacaoO:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    
  },
  pergunta:{
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'arial, sans-serif',
    marginBottom: 20
    
  },
  botao:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 9,
    paddingRight: 9,
    borderRadius: 121,
    backgroundColor: "rgba(8,173,248,1)",
    width: 50,
    height: 50,
    marginTop: 10,
    // position: "relative",
  },
  Vector: {
    width: 12,
    height: 20,
  },
  
})