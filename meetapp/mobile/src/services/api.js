import axios from 'axios';
import {Platform} from 'react-native';

let localIP = 'http://10.0.2.2:3333';

if (Platform.OS === 'ios') {
  localIP = 'http://localhost:3333';
}

const api = axios.create({
  baseURL: localIP,
});

export default api;
