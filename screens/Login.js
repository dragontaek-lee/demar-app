import mainIcon from '../assets/mainIcon.png';
import { 
  ImageContainer, ImageContent, InnerText, ImageInner, ButtonContainer, ButtonContent
} from '../theme/StyledLoginPage';
import {
  AuthContainer, InputContainer, InputContent, InputText
} from '../theme/Common';
import { processLogind } from '../api/api';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Login({navigation, view}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('AccessToken', value);
        console.log('token saved successfully');
      } catch (e) {
        console.log('token saved error : Asynce Storage');
      }
    };

    const clickLogin = async (email, password) => {
      await processLogind(email, password).then(token=>{
        //TODO: input to session
        storeData(token);
        navigation.reset({routes: [{name: 'Main'}]})
      })
    }


    return (
      <AuthContainer onLayout={view}>
        <ImageContainer>
          <ImageInner>
            <ImageContent source={mainIcon}></ImageContent>
          </ImageInner>
        </ImageContainer>
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
        </InputContainer>
        <ButtonContainer>
            <ButtonContent onPress={()=> clickLogin(email,password)} color={'#FAF5E4'}>
              <InnerText color={'#000000'}>로그인</InnerText>
            </ButtonContent>
            <ButtonContent onPress={()=> navigation.push('SignIn')} color={'#E97777'}>
              <InnerText color={'#FFFFFF'}>가입하기</InnerText>
            </ButtonContent>
        </ButtonContainer>
      </AuthContainer>
    );
}