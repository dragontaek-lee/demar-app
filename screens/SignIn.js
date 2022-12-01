import { Text } from 'react-native';
import {
  AuthContainer, InputContainer, InputContent, InputText
} from '../theme/Common';
import {
  PrefaceContainer, PrefaceTitle, PrefaceContent,InnerText, ButtonContainer, ButtonContent, InputBackText, IconContent, ButtonInner
} from '../theme/StyledSignInPage';
import * as Progress from 'react-native-progress';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '@env';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export function SignIn({navigation, view}) {
    const [request, response, promptAsync] = useAuthRequest(
      {
        clientId: `${SPOTIFY_CLIENT_ID}`,
        scopes: ['user-read-email', 'playlist-modify-public','streaming'],
        usePKCE: false,
        redirectUri: Linking.createURL('SignIn'),
      },
      discovery
    );
    
    useEffect(() => {
      if (response?.type === 'success') {
          const { code } = response.params;
          // access code
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
          <InputContent placeholder="이메일을 입력해주세요." ></InputContent>
          <InputText>비밀번호</InputText>
          <InputContent placeholder="비밀번호를 입력해주세요." secureTextEntry={true}></InputContent>
          <InputText>비밀번호 확인</InputText>
          <InputContent placeholder="비밀번호를 입력해주세요." secureTextEntry={true}></InputContent>
          <InputText>닉네임</InputText>
          <InputContent placeholder="닉네임을 입력해주세요."></InputContent>
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