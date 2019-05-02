import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';

import bgSrc from './images/wallpaper.png';

export default class Wallpaper extends Component {
  render() {
    return (
    <Image style={styles.font}

        source={require('./images/wallpaper.png')}>
        
    </Image>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});