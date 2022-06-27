import React from "react"
import { StyleSheet, Image, Text, View, ScrollView, TextInput, TouchableHighlight } from "react-native"
import Styles from '../assets/stilos'

export default function Form6(props) {
  return (
    
    <View style={styles.container}>
        <ScrollView>
          <View style={Styles.top}>
            <Image
              style={Styles.Logo}
              source={require('../assets/logo.png')}
            />
            <Text style={Styles.titulo}>Formulário de amostragem de experiência</Text>
          </View>

      <View style={styles.meio}>
          
            <View style={styles.formulario}>
              <Text style={styles.Txt571}>Se você tivesse escolha... Com quem você estaria?</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite sua resposta"
              />
              
              <Text style={styles.Txt571}>O que você estaria fazendo?</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite sua resposta"
              />
              
              <Text style={styles.Txt571}>Desde a sua última notificação, aconteceu alguma coisa ou você fez
              alguma coisa que possa ter afetado a maneiracomo se sente?</Text>
              <TextInput
                style={styles.input}
                placeholder="Comente..."
              />
              
            </View>
         

          <TouchableHighlight
            style={styles.botao}
            onPress={() => props.navigation.navigate('TelaFinal')}
          >
            <Text style={styles.textoBotao}>Enviar</Text>
          </TouchableHighlight>
    </View>
    </ScrollView>
    </View>
   
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 10,
    backgroundColor: '#ffffff'
  },
  meio: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginTop: 30,
    borderRadius: 30,
  },
  formulario: {
    display: "flex",   
    paddingTop: 30,
  },
  Txt571: {
    fontSize: 15,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: -0.4,
    color: "rgba(0,0,0,1)",
    justifyContent: "center",
    marginBottom: 11,
  },
  input:{
    outline: 0,
    paddingVertical:10,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  botao: {
    width: 150,
    backgroundColor: '#21AEEF',
    height: 50,
    margin: 'auto',
    borderRadius: 5,
    display: 'flex',
    padding: 10
  },
  textoBotao:{
    fontSize: 18,
    color: '#fff',
    fontFamily: "Poppins, sans-serif",
    textAlign: 'center',
  },
})