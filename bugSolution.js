```javascript
import * as Constants from 'expo-constants';
import { AsyncStorage } from 'react-native';
import uuid from 'react-native-uuid'; // Install: expo install react-native-uuid

const getDeviceIdAsync = async () => {
  let deviceId = Constants.deviceId;
  if (!deviceId || deviceId === '') {
    try {
      deviceId = await AsyncStorage.getItem('deviceId');
      if (!deviceId) {
        deviceId = uuid.v4();
        await AsyncStorage.setItem('deviceId', deviceId);
      }
    } catch (error) {
      console.error('Error retrieving or generating deviceId:', error);
      deviceId = uuid.v4(); //Fallback, generate a UUID
    }
  }
  return deviceId;
};

export default getDeviceIdAsync;
```