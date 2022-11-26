import { View, Text, Image } from 'react-native';
import mainIcon from '../assets/mainIcon.png';

export function Login({navigation, view}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onLayout={view}>
        <Image style={{height:500, width:300}} source={mainIcon}></Image>
        <Text>Login</Text>
      </View>
    );
}