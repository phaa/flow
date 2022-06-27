import { StyleSheet} from 'react-native'

export default StyleSheet.create({
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
  pergunta:{
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'arial, sans-serif',
    marginBottom: 20,
  },
  botoes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
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
  },
  Vector: {
    width: 12,
    height: 20,
  },
  input:{
    outline: 0,
    paddingVertical:0,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  check:{
    paddingRight: 5,
  },
  opcao:{
    fontSize: 15,
    
  }
})