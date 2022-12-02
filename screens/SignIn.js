import {
  AuthContainer, InputContainer, InputContent, InputText
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

    const requestSignUp = async (email, password, nickname, access_token) => {
      return await signUp(email, password, nickname, access_token);
    }
    
    useEffect(() => {
      if (response?.type === 'success') {
          const { access_token } = response.params;
          requestSignUp(email, password, nickname, access_token).then(token=>{
            //TODO: input to session
            console.log(token);
            navigation.push('Main');
          })
        }
    }, [response]);

    return (
      <AuthContainer onLayout={view}>
        <Progress.Bar progress={0.3} width={360} color={'#E97777'}/>
        <PrefaceContainer>
          <PrefaceTitle>회원가입</PrefaceTitle>
          <PrefaceContent>간단한 정보만 입력하고,</PrefaceContent>
          <PrefaceContent>다양한 기능을 사용해보세요,</PrefaceContent>
        </PrefaceContainer>
        <InputContainer>
          <InputText>이메일</InputText>
          <InputContent 
            placeholder="이메일을 입력해주세요." 
            onChangeText={(email) => setEmail(email)}
          />
          <InputText>비밀번호</InputText>
          <InputContent
            placeholder="비밀번호를 입력해주세요." 
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <InputText>비밀번호 확인</InputText>
          <InputContent
            placeholder="비밀번호를 입력해주세요."
            secureTextEntry={true}
            onChangeText={(secondPassword) => setSecondPassword(secondPassword)}
          />
          <InputText>닉네임</InputText>
          <InputContent
            placeholder="닉네임을 입력해주세요."
            onChangeText={(nickname) => setNickname(nickname)}
          />
        </InputContainer>
        <ButtonContainer>
          <ButtonContent onPress={()=>promptAsync()}>
            <ButtonInner>
              <InnerText>
                Spotify 연동하고 가입하기
              </InnerText>
            </ButtonInner>
          </ButtonContent>
          <InputBackText onPress={()=> navigation.push('Login')}>가입하지 않고 뒤로가기</InputBackText>
        </ButtonContainer>
    </AuthContainer>
    );
  }