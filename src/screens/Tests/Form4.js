import React from "react"
import { StyleSheet, Image, Text, View, TextInput, TouchableHighlight, ScrollView } from "react-native"
import {CheckBox,} from 'react-native-elements'
import Styles from '../assets/stilos'

export default function Form4(props) {
  return (
    <View style={styles.Form4}>
      <ScrollView>
      <View style={Styles.top}>
        <Image
          style={Styles.Logo}
          source={require('../assets/logo.png')}
        />
        <Text style={Styles.titulo}>Formulário de amostragem de experiência</Text>
      </View>

      <View>
        <Text style={Styles.pergunta}>Por favor, especifique</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
        />
        
        <Text style={Styles.pergunta}>Com quem você estava?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
        />

        <View style={styles.opcoes}>
          <View style={styles.opcao}>
            <CheckBox style={Styles.check}/><Text style={Styles.pergunta}>Sozinho</Text>
          </View>
          <View style={styles.opcao}>
            <CheckBox style={Styles.check}/><Text style={Styles.pergunta}>Amigo(a)</Text>
          </View>
          <View style={styles.opcao}>
            <CheckBox style={Styles.check}/><Text style={Styles.pergunta}>Mãe</Text>
          </View>
          <View style={styles.opcao}>
            <CheckBox style={Styles.check}/><Text style={Styles.pergunta}>Pai</Text>
          </View>
          <View style={styles.opcao}>
            <CheckBox style={Styles.check}/><Text style={Styles.pergunta}>Irmã(s) ou Irmão(s)</Text>
          </View>
          <View style={styles.opcao}>
            <CheckBox style={Styles.check}/><Text style={Styles.pergunta}>Estranho</Text>
          </View>
          <View style={styles.opcao}>
            <CheckBox style={Styles.check}/><Text style={Styles.pergunta}>Outros</Text>            
          </View>
          <TextInput style={styles.input} placeholder="Resposta para outros"/>

          <View style={styles.opcao}>
            <Text style={Styles.pergunta}>Quantos?</Text>            
          </View>
          <TextInput style={styles.input} placeholder="Quantidade" />
        </View>        
      </View>

      <View style={Styles.botoes}>
        <TouchableHighlight 
        style={Styles.botao}
        onPress={() => props.navigation.navigate('Form3')}
        >
          <Image style={Styles.Vector} source={require('../assets/Vector.png')} />
        </TouchableHighlight>

        <TouchableHighlight 
        style={Styles.botao}
        onPress={() => props.navigation.navigate('Form5')}
        >
          <Image style={Styles.Vector} source={require('../assets/Prox.png')} />
        </TouchableHighlight>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Form4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 20,
    paddingBottom: 54,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  input:{
    outline: 0,
    paddingVertical:0,
    borderBottomWidth: 1,
    marginBottom: 10,
    // width: '100%',
  },
  opcoes:{
    width: 200,
  },
  opcao:{
    display: 'flex',
    flexDirection: 'row',
  },
})
