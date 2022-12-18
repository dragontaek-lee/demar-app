import DiaryAddBtn from '../assets/DiaryAddBtn.png';

import {MainContainer, DiaryContainer}from '../theme/Common';
import { ImageInner } from '../theme/StyledLoginPage';
import {LogoContainer, LogoTitle, LogoContent, DiaryTextComponent,DiaryContent,DiaryTitle, DiaryDate} from '../theme/StyledMainPage';
import { View, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Main({navigation, view, DiaryTitle_props, DiartText_props}) {
    AsyncStorage.getItem('AccessToken').then(res =>
      console.log('Storage Token : ', res),
    );

    return (
      <MainContainer onLayout={view}>
        <LogoContainer>
          <LogoTitle>일기 작성</LogoTitle>
          <LogoContent>자동으로 음악을 추천해드려요</LogoContent>
        </LogoContainer>
        <DiaryContainer>
          <DiaryTextComponent>
            <DiaryTitle>일기제목 {DiaryTitle_props}</DiaryTitle>
            <DiaryContent>일기내용블라블라블라블라{DiartText_props}</DiaryContent>
          </DiaryTextComponent>
          <DiaryDate>11/25</DiaryDate>
        </DiaryContainer>
        <DiaryAddBtn onPress={()=> navigation.push('Write')}>
          <ImageInner source={DiaryAddBtn}></ImageInner>
        </DiaryAddBtn>
      </MainContainer>
    );
  }