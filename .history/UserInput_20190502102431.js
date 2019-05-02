
// SignUp.js
import React from 'react'
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native'
import { Button } from 'react-native-elements';

export default class SignUp extends React.Component {
  state = {
    nome: '', cpf: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const {nome, cpf } = this.state
    try {
      // here place your signup logic
      console.log('Dados Enviados com Sucesso!: ', success)
    } catch (err) {
      console.log('Erro ao Enviar os Dados: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Nome de Guerra'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('nome', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Cpf'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeNu={val => this.onChangeText('cpf', val)}
        />
        <Button 
          title='Solicitar Atendimento'
          color='red'
          containerViewStyle = {{borderRadius: 25, marginTop: 10,  width: 250}} 
          buttonStyle = {{borderRadius: 25, marginTop: 10,  width: 250}}
          onPress={this.signUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 40,
    backgroundColor: '#e9967a',
    margin: 10,
    padding: 5,
    color: 'black',
    borderRadius: 20,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


