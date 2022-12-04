import { View, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Main({navigation, view}) {
    AsyncStorage.getItem('AccessToken').then(res =>
      console.log('Storage Token : ', res),
    );

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onLayout={view}>
        <Text style={{ fontFamily: 'JejuMyeongjo', fontSize: 30 }}>JejuMyeongjo</Text>
        <Button
            title="login 열기"
            onPress={()=> navigation.push('Login')}
        />
      </View>
    );
  }