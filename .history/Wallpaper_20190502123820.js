import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

import bgSrc from './images/wallpaper.png';

export default class Wallpaper extends Component {
  render() {
    return (
        <Image style={styles.picture} source={bgSrc}>
        {this.props.children}
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