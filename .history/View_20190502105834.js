import React, {Component} from 'react';
import PropTypes from 'prop-types';
import App from './App';
import Select from './select';
import UserInput from './UserInput'
import Wallpaper from './Wallpaper';

export default class View extends Component {
    render() {
      return (
          <View>
        <Wallpaper>
          <App />
          <Select />
          <UserInput />
         </Wallpaper>
         </View>
        );
    }
}
          
        