import React from 'react';
import { StyleSheet, Text, View, Picker, Button, Modal, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: 'Default value!',
      pickerDisplayed: false
    }
  }

  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue
    })

    this.togglePicker();
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  render() {
    const pickerValues = [
      {
        title: 'Impressora',
        value: 'impressora'
      },
      {
        title: 'Internet',
        value: 'internet'
      },
      {
        title: 'Nobreak',
        value: 'nobreak'
      },
      {
        title: 'Programas',
        value: 'programas'
      },
      {
        title: 'Telefone',
        value: 'telefone'
      }
    ]

    return (
      <View style={styles.container}>
        <Text>Seleção de Serviço { this.state.pickerSelection }</Text>
        <Button onPress={() => this.togglePicker()} title={ "Selecione um Serviço" } />
        { <Picker
          style={{ backgroundColor: '#fafafa', position: 'absolute', bottom: 0, left: 0, right: 0 }}
          selectedValue={ this.state.pickerSelection }
          onValueChange={(itemValue, itemIndex) => this.setState({ pickerSelection: itemValue})}>
          <Picker.Item label="Impressora" value="   impressora" /> 
          <Picker.Item label="Internet" value="internet" />
          <Picker.Item label="Nobreak" value="nobreak" />
          <Picker.Item label="Programas" value="programas" />
          <Picker.Item label="Telefone" value="telefone" />
        </Picker>}

        <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>
          <View style={{ margin: 20, padding: 20,
            backgroundColor: '#efefef',
            bottom: 20,
            left: 20,
            right: 20,
            alignItems: 'center',
            position: 'absolute' }}> 
            <Text>Please pick a value</Text>
            { pickerValues.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4, position: 'absolute' }}>
                <Text>{ value.title }</Text>
                </TouchableHighlight> 
            })}

            
            <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ color: '#999' }}>Cancel</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
