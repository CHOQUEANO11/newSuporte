import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

export default class Wallpaper extends Component {
  render() {
    return (
    <ImageBackground style={styles.font}
        source={require('./images/wallpaper.png')}
        { ...this.props }
    />
    );
  }
}

const styles = StyleSheet.create({
  font: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  }
})
