import mainIcon from '../assets/mainIcon.png';
import { 
  ImageContainer, ImageContent, InnerText, ImageInner, ButtonContainer, ButtonContent
} from '../theme/StyledLoginPage';
import {
  LoginContainer, InputContainer, InputContent, InputText
} from '../theme/Common';

export function Login({navigation, view}) {
    return (
      <LoginContainer onLayout={view}>
        <ImageContainer>
          <ImageInner>
            <ImageContent source={mainIcon}></ImageContent>
          </ImageInner>
        </ImageContainer>
        <InputContainer>
          <InputText>아이디</InputText>
          <InputContent placeholder="아이디를 입력해주세요" ></InputContent>
          <InputText>비밀번호</InputText>
          <InputContent placeholder="비밀번호를 입력해주세요" secureTextEntry={true}></InputContent>
        </InputContainer>
        <ButtonContainer>
            <ButtonContent onPress={()=> navigation.push('Login')} color={'#FAF5E4'}>
              <InnerText color={'#000000'}>로그인</InnerText>
            </ButtonContent>
            <ButtonContent onPress={()=> navigation.push('SignIn')} color={'#E97777'}>
              <InnerText color={'#FFFFFF'}>가입하기</InnerText>
            </ButtonContent>
        </ButtonContainer>
      </LoginContainer>
    );
}