//This is an example code to Scan QR code//
import React, { Component } from 'react';
//import react in our code.
import { Text, View, Linking, Modal, Picker, TouchableHighlight, PermissionsAndroid, Platform, StyleSheet, ImageBackground} from 'react-native';
// import all basic components
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
//import CameraKitCameraScreen we are going to use.

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      //variable to hold the qr value
      qrvalue: '',
      opneScanner: false,
      pickerSelection: 'Default value!',
      pickerDisplayed: false
    };

   
  }
  onOpenlink() {
    //Function to open URL, If scanned 
    Linking.openURL(this.state.qrvalue);
    //Linking used to open the URL in any browser that you have installed
  }
  onBarcodeScan(qrvalue) {
    //called after te successful scanning of QRCode/Barcode
    this.setState({ qrvalue: qrvalue });
    this.setState({ opneScanner: false });
  }
  onOpneScanner() {
    var that =this;
    //To Start Scanning
    if(Platform.OS === 'android'){
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,{
              'title': 'CameraExample App Camera Permission',
              'message': 'CameraExample App needs access to your camera '
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If CAMERA Permission is granted
            that.setState({ qrvalue: '' });
            that.setState({ opneScanner: true });
          } else {
            alert("CAMERA permission denied");
          }
        } catch (err) {
          alert("Camera permission err",err);
          console.warn(err);
        }
      }
      //Calling the camera permission function
      requestCameraPermission();
    }else{
      that.setState({ qrvalue: '' });
      that.setState({ opneScanner: true });
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
    let displayModal;
    //If qrvalue is set then return this view
    if (!this.state.opneScanner) {
      return (
        <View style={styles.container}>
        <ImageBackground source={require('./images/wallpaper.png')} style={{width: '100%', height: '100%'}}>
            <Text style={styles.heading }>Identificar Seção</Text>
            <Text style={styles.simpleText}>{this.state.qrvalue ? 'Scanned QR Code: '+this.state.qrvalue : ''}</Text>
            {this.state.qrvalue === '' ? 
            <TouchableHighlight
              onPress={() => this.onOpneScanner()}
              style={styles.button}>
                <Text style={{ color: '#FFFFFF', fontSize: 14 }}>
                Abrir Scanner
                </Text>
            </TouchableHighlight>
            :null}
          </ImageBackground>
        </View>
        
      );
      const pickerValues = [
        {
          title: 'Chicken',
          value: 'chicken'
        },
        {
          title: 'Eggs',
          value: 'eggs'
        },
        {
          title: 'Vegetables',
          value: 'vegetables'
        }
      ]
    }
    return (
      <View style={{ flex: 1 }}>
        <CameraKitCameraScreen
          showFrame={false}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'blue'}
          //Color can be of your choice
          frameColor={'yellow'}
          //If frame is visible then frame color
          colorForScannerFrame={'black'}
          //Scanner Frame color
          onReadCode={event =>
            this.onBarcodeScan(event.nativeEvent.codeStringValue)
          }
        />
        <Text>The default value is { this.state.pickerSelection }</Text>
        <Button onPress={() => this.togglePicker()} title={ "Select a value!" } />
        {/* <Picker
          style={{ backgroundColor: '#fafafa', position: 'absolute', bottom: 0, left: 0, right: 0 }}
          selectedValue={ this.state.pickerSelection }
          onValueChange={(itemValue, itemIndex) => this.setState({ pickerSelection: itemValue})}>
          <Picker.Item label="Chicken" value="chicken" />
          <Picker.Item label="Eggs" value="eggs" />
          <Picker.Item label="Vegetables" value="vegetables" />
        </Picker> */}

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
              return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#4682b4',
    justifyContent: 'flex-start'
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: 'blue',
    padding: 20,
    width:300,
    marginTop:20
  }, 
  heading: { 
    color: '#ffe4e1', 
    fontSize: 24, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop:30
  
  },
  simpleText: { 
    color: 'black', 
    fontSize: 20, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 16,
    textAlign: 'center'
  },
  antendimento: {
    textAlign: 'center'
  }
});