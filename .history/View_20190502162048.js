import React, {Component} from 'react';
import App from './App';
import Select from './select';
import UserInput from './UserInput'
import Wallpaper from './Wallpaper';


export default class View extends Component {
    render() {
      return (
          <View style={{flex: 1}}>
              <App/>
              <Select/>
              <UserInput/>
              </View>
          );
      }
  }
        
         
          
        
    