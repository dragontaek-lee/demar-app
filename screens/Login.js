import { View, Text, Image } from 'react-native';
import mainIcon from '../assets/mainIcon.png';
import { 
  LoginContainer, ImageContainer, ImageContent, InnerText, ImageInner, ButtonContainer, ButtonContent
} from '../theme/StyledLoginPage';

export function Login({navigation, view}) {
    return (
      <LoginContainer onLayout={view}>
        <ImageContainer>
          <ImageInner>
            <ImageContent source={mainIcon}></ImageContent>
          </ImageInner>
        </ImageContainer>
          <ButtonContainer>
            <ButtonContent onPress={()=> navigation.push('Login')} color={'#3F3D56'}>
              <InnerText>시작하기</InnerText>
            </ButtonContent>
            <ButtonContent onPress={()=> navigation.push('Login')} color={'#E97777'}>
              <InnerText>가입하기</InnerText>
            </ButtonContent>
          </ButtonContainer>
      </LoginContainer>
    );
}