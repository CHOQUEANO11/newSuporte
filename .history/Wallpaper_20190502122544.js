import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';

import bgSrc from './images/wallpaper.png';

export default class Wallpaper extends Component {
  render() {
    return (
    <Image 
        source={require('./images/wallpaper.png')}>
        
    </Image>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});