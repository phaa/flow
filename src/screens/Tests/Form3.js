import React from "react"
import { StyleSheet, Image, Text, View, ScrollView, TouchableHighlight } from "react-native"
import Styles from '../assets/stilos'
import Slider from '@react-native-community/slider'

export default function Form3(props) {
  return (    
    <View style={styles.Form3}>
    <ScrollView>

      <View style={Styles.top}>
          <Image
            style={Styles.Logo}
            source={require('../assets/logo.png')}
          />
          <Text style={Styles.titulo}>Formulário de amostragem de experiencia</Text>
        </View>
        
      <Text style={Styles.pergunta}>Descreva seu estado de espiríto ao ser notificado</Text>

      <View style={styles.resposta}>
        <Text style={Styles.opcao}>Alerta</Text>
        <Text style={Styles.opcao}>Solonento</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={9}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.resposta}>
        <Text style={Styles.opcao}>Feliz</Text>
        <Text style={Styles.opcao}>Triste</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={9}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.resposta}>
        <Text style={Styles.opcao}>Irritado</Text>
        <Text style={Styles.opcao}>Animado</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={9}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.resposta}>
        <Text style={Styles.opcao}>Forte</Text>
        <Text style={Styles.opcao}>Fraco</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={9}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.resposta}>
        <Text style={Styles.opcao}>Ativo</Text>
        <Text style={Styles.opcao}>Passivo</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={9}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.resposta}>
        <Text style={Styles.opcao}>Solitário</Text>
        <Text style={Styles.opcao}>Sociável</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={9}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.resposta}>
        <Text style={Styles.opcao}>Envergonhado</Text>
        <Text style={Styles.opcao}>Orgulhoso</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={9}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.resposta}>
        <Text style={Styles.opcao}>Envolvido</Text>
        <Text style={Styles.opcao}>Distante</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={9}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.resposta}>
        <Text style={Styles.opcao}>Entusiasmado</Text>
        <Text style={Styles.opcao}>Entendiado</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={9}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.resposta}>
        <Text style={Styles.opcao}>Fechado</Text>
        <Text style={Styles.opcao}>Aberto</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={9}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.resposta}>
        <Text style={Styles.opcao}>Claro</Text>
        <Text style={Styles.opcao}>Confuso</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={9}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.resposta}>
        <Text style={Styles.opcao}>Tenso</Text>
        <Text style={Styles.opcao}>Relaxado</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={9}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.resposta}>
        <Text style={Styles.opcao}>Competitivo</Text>
        <Text style={Styles.opcao}>Cooperativo</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={9}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <Text style={Styles.pergunta}>Dor ou desconforto geral?</Text>

      <View style={styles.pontuacao}>
        {/*<View style={styles.pontuacaoO}>
          <Text style={Styles.opcao}>Nenhum</Text><Text style={Styles.opcao}>Leve</Text>
        </View>
        <Text style={styles.pontuacaoN}>0 1 2 3 4 </Text>
        <View style={styles.pontuacaoO}>
          <Text style={Styles.opcao}>Algum incômodo</Text><Text style={Styles.opcao}>Severo</Text>
        </View>
        <Text style={styles.pontuacaoN}>5 6 7 8 9</Text>*/}
        <View style={styles.pontuacaoO}>
          <Text style={Styles.opcao}>Nenhum</Text><Text style={Styles.opcao}>Leve</Text><Text style={Styles.opcao}>Algum incômodo</Text><Text style={Styles.opcao}>Severo</Text>
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
        style={Styles.botao}
        onPress={() => props.navigation.navigate('Form2')}
        >
          <Image style={styles.Vector} source={require('../assets/Vector.png')} />
        </TouchableHighlight>

        <TouchableHighlight 
        style={Styles.botao}
        onPress={() => props.navigation.navigate('Form4')}
        >
          <Image style={styles.Vector} source={require('../assets/Prox.png')} />
        </TouchableHighlight>
      </View>

    </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
  Form3: {
    padding: 3.5,
    backgroundColor: '#ffffff'
  },
  resposta:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
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
  pontuacaoN:{
    letterSpacing: 27,
    marginBottom: 20,
  },
})
