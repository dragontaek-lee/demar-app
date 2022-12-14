import {
  AuthContainer, InputContainer, InputContent, InputText, ErrorText
} from '../theme/Common';
import {
  PrefaceContainer, PrefaceTitle, PrefaceContent,InnerText, ButtonContainer, ButtonContent, InputBackText, IconContent, ButtonInner
} from '../theme/StyledSignInPage';
import * as Progress from 'react-native-progress';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '@env';
import { ResponseType, useAuthRequest } from 'expo-auth-session';
import { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { signUp } from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export function SignIn({navigation, view}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [isfailed, setIsFailed] = useState(false);

    const chkinputs = () => {
        if(email.length > 0 && password.length > 0 && secondPassword.length > 0 && nickname.length > 0){
            return false;
        }
        return true;
    }

    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('AccessToken', value);
        console.log('token saved successfully');
      } catch (e) {
        console.log('token saved error : Asynce Storage');
      }
    };

    const [request, response, promptAsync] = useAuthRequest(
      {
        responseType: ResponseType.Token,
        clientId: `${SPOTIFY_CLIENT_ID}`,
        scopes: [
          "user-read-recently-played",
          "user-read-playback-state",
          "user-read-currently-playing",
          "user-top-read",
          "user-modify-playback-state",
          "streaming",
          "user-read-private",
          "user-read-email"
        ],
        usePKCE: false,
        redirectUri: Linking.createURL('SignIn'),
      },
      discovery
    );

    // console.log(SPOTIFY_CLIENT_ID);
    // console.log(Linking.createURL('SignIn'));

    const requestSignUp = async (email, password, nickname, access_token) => {
      return await signUp(email, password, nickname, access_token);
    }
    
    useEffect(() => {
      if (response?.type === 'success') {
          const { access_token } = response.params;
          //console.log(access_token);
          requestSignUp(email, password, nickname, access_token).then(token=>{
            storeData(token);
            navigation.reset({routes: [{name: 'Main'}]})
          }).catch(e=>{
            console.log("sign-up error", e);
            setIsFailed(true);
          })
        }
    }, [response]);

    return (
      <AuthContainer onLayout={view}>
        <Progress.Bar progress={0.4} width={360} color={'#E97777'}/>
        <PrefaceContainer>
          <PrefaceTitle>????????????</PrefaceTitle>
          <PrefaceContent>????????? ????????? ????????????,</PrefaceContent>
          <PrefaceContent>????????? ????????? ??????????????????,</PrefaceContent>
        </PrefaceContainer>
        <InputContainer>
          <InputText>?????????</InputText>
          <InputContent 
            placeholder="???????????? ??????????????????." 
            onChangeText={(email) => setEmail(email)}
          />
          <InputText>????????????</InputText>
          <InputContent
            placeholder="??????????????? ??????????????????." 
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <InputText>???????????? ??????</InputText>
          <InputContent
            placeholder="??????????????? ??????????????????."
            secureTextEntry={true}
            onChangeText={(secondPassword) => setSecondPassword(secondPassword)}
          />
          <InputText>?????????</InputText>
          <InputContent
            placeholder="???????????? ??????????????????."
            onChangeText={(nickname) => setNickname(nickname)}
          />
          { isfailed? <ErrorText>???????????? ???????????????. ?????? ??????????????????</ErrorText>:""}
        </InputContainer>
        <ButtonContainer>
          <ButtonContent onPress={()=>promptAsync()} disabled={chkinputs()}>
            <ButtonInner>
              <InnerText>
                Spotify ???????????? ????????????
              </InnerText>
            </ButtonInner>
          </ButtonContent>
          <InputBackText onPress={()=> navigation.push('Login')}>???????????? ?????? ????????????</InputBackText>
        </ButtonContainer>
    </AuthContainer>
    );
  }