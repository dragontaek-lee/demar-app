import { Text } from 'react-native';
import {
  AuthContainer, InputContainer, InputContent, InputText
} from '../theme/Common';
import {
  PrefaceContainer, PrefaceTitle, PrefaceContent,InnerText, ButtonContainer, ButtonContent, InputBackText, IconContent, ButtonInner
} from '../theme/StyledSignInPage';
import * as Progress from 'react-native-progress';

export function SignIn({navigation, view}) {
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
          <ButtonContent>
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