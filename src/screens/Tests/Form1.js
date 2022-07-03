
import * as React from 'react';
import { StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {CheckBox,} from 'react-native-elements'
import Styles from '../assets/stilos';
import Slider from '@react-native-community/slider';


export default function Form1(props) {
  return (
    <View style={styles.Form1}>
      <ScrollView>
        <View style={Styles.top}>
          <Image style={Styles.Logo} source={require('../assets/logo.png')} />
          <Text style={Styles.titulo}>
            Formulario de amostragem de experiencia
          </Text>
        </View>
        
        <View style={styles.delado}>
          <Text style={Styles.pergunta}>Data:</Text>
          <Text style={Styles.pergunta}>data aqui</Text>
          <Text style={Styles.pergunta}>Hora:</Text>
          <Text style={Styles.pergunta}>hora aqui</Text>
        </View>

        <Text style={Styles.pergunta}>Horario em que foi notificado</Text>
        <TextInput style={Styles.input} />

        <Text style={Styles.pergunta}>
          Quando você foi notificado...No que você estava pensando?
        </Text>
        <TextInput style={Styles.input} />

        <Text style={Styles.pergunta}>Onde voce estava?</Text>
        <TextInput style={Styles.input} />

        <Text style={Styles.pergunta}>
          Qual era a PRINCIPAL coisa que você estava fazendo?
        </Text>
        <TextInput style={Styles.input} />

        <Text style={Styles.pergunta}>
          Que outras coisas você estava fazendo?
        </Text>
        <TextInput style={Styles.input} />

        <Text style={Styles.pergunta}>
          Por que você estava fazendo essa atividade especifica?
        </Text>
        <TextInput style={Styles.input} />

        <View style={styles.lado}>
          <CheckBox style={Styles.check} />
          <Text style={Styles.pergunta}>eu tinha quer fazer</Text>
        </View>
        
        <View style={styles.lado}>
          <CheckBox style={Styles.check} />
          <Text style={Styles.pergunta}>eu queria fazer</Text>
        </View>

        <View style={styles.lado}>
          <CheckBox style={Styles.check} />
          <Text style={Styles.pergunta}>
            eu não tinha outra coisa para fazer
          </Text>
        </View>

        <View style={styles.botoes}>
          {/*<TouchableHighlight style={Styles.botao}>
            <Image
              style={Styles.Vector}
              source={require('../assets/Vector.png')}
              onPress={() => props.navigation.navigate('Cadastro')}
            />
          </TouchableHighlight>*/}

          <TouchableHighlight 
            style={Styles.botao}
            onPress={() => props.navigation.navigate('Form2')}
          >
            <Image
              style={Styles.Vector}
              source={require('../assets/Prox.png')}
              
            />
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Form1: {
    padding: 10,
    backgroundColor: '#ffffff'
  },
  delado: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  lado: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  botoes:{
    alignItems: 'flex-end',
    width: 300,
  },
});
