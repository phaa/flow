import React from "react"
import { StyleSheet, Image, Text, View, TouchableHighlight, ScrollView } from "react-native"
import Styles from '../assets/stilos'
import Slider from '@react-native-community/slider'

export default function Form5(props) {
  return (
    <View style={styles.Form5}>
      <ScrollView>
      <View style={Styles.top}>
          <Image
            style={Styles.Logo}
            source={require('../assets/logo.png')}
          />
          <Text style={Styles.titulo}>Formulário de amostragem de experiencia</Text>
        </View>
        <View>
        <Text style={Styles.pergunta}>Indique como você se sentiu em relação a sua atividade:</Text>

        <Text style={Styles.pergunta}>Nível de desafio da atividade</Text>
        <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />

        {/*<View>
          <Text>Baixo</Text>
          <Text>Alto</Text>
        </View>*/}

        <Text style={Styles.pergunta}>Suas habilidades na atividade</Text>
        <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
        {/*<Text>De modo algum</Text>*/}

        <Text style={Styles.pergunta}>Essa atividade era importante para você?</Text>
        <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />


        <Text style={Styles.pergunta}>Essa atividade era importante para outras pessoas?</Text>
        <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />


        <Text style={Styles.pergunta}>você estava tendo sucesso no que estava fazendo?</Text>
        <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />

        <Text style={Styles.pergunta}>você gostaria de esta fazendo outra coisa?</Text>
        <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />

        <Text style={Styles.pergunta}>você estava satisfeito com seu desempenho?</Text>
        <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />

        <Text style={Styles.pergunta}>Quão importante era essa atividade em relação aos seus objetivos gerais?</Text>
        <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={9}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />

      </View>



        <View style={Styles.botoes}>
          <TouchableHighlight 
            style={Styles.botao}
            onPress={() => props.navigation.navigate('Form4')}
            >
          <Image style={Styles.Vector} source={require('../assets/Vector.png')} />
          </TouchableHighlight>

          <TouchableHighlight 
            style={Styles.botao}
            onPress={() => props.navigation.navigate('Form6')}
          >
          <Image style={Styles.Vector} source={require('../assets/Prox.png')} />
        </TouchableHighlight>
      </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Form5:{
    padding: 10,
    backgroundColor: '#ffffff'
  },
})