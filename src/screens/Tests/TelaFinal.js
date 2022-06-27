import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import Styles from '../assets/stilos';

export default function TelaFinal(props){
  return (
    <View style={styles.Apresentacao}>

      <View style={styles.top}>
        <Image source={require('../assets/logo.png')}/>
      </View>

      <View  style={styles.down}>
        <Text style={styles.obg}>OBRIGADO!</Text>
        <TouchableHighlight
          style={styles.botao}
          onPress={() => props.navigation.navigate('Login')}
        >
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableHighlight>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  Apresentacao:{
    flex: 1,
    backgroundColor: '#21AEEF',
    
  },
  top:{
    display: 'flex',
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',
  },
  obg:{
    color: '#21AEEF',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50
  },
  down:{
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: 250,
    textAlign: 'center',
    backgroundColor: '#21AEEF',
    height: 45,
    margin: 'auto',
    display: 'flex',
    padding: 10,
    borderRadius: 30,
  },
  textoBotao:{
    fontSize: 18,
    color: '#ffffff',
    fontFamily: "Poppins, sans-serif",
    textAlign: 'center',
  },
})