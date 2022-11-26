import { View, Button, Text } from 'react-native';

export function Main({navigation, view}) {
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