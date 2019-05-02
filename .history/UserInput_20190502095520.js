
// SignUp.js
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

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
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Nome de Guerra'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('nome', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Cpf'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('cpf', val)}
        />
        <Button 
          title='Solicitar Atendimento'
          color='dark'
          onPress={this.signUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 5,
    color: 'white',
    borderRadius: 20,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botton: {
    borderRadius: 20
  }
})


