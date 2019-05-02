/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Select from './select';
import UserInput from './UserInput';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => UserInput);
