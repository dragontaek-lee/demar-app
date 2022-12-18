import DiaryAddBtn from '../assets/DiaryAddBtn.png';

import {MainContainer, DiaryContainer, DiaryListContainer}from '../theme/Common';

import {LogoContainer, LogoTitle, LogoContent, DiaryTextComponent,DiaryContent, DiaryDateComponent,DiaryTitle, DiaryDate, DiaryAddButton, ImageInner} from '../theme/StyledMainPage';


export function Main({navigation, view, DiaryTitle_props, DiartText_props}) {
    return (
      <MainContainer onLayout={view}>
        <LogoContainer>
          <LogoTitle>일기 List</LogoTitle>
          <LogoContent>자동으로 음악을 추천해드려요</LogoContent>
        </LogoContainer>
        <DiaryListContainer>
          <DiaryContainer>
            <DiaryTextComponent>
              <DiaryTitle>일기제목 {DiaryTitle_props}</DiaryTitle>
              <DiaryContent>일기내용블라블라블라블라{DiartText_props}</DiaryContent>
            </DiaryTextComponent>
            <DiaryDate>11/22</DiaryDate>
          </DiaryContainer>
          <DiaryContainer>
            <DiaryTextComponent>
              <DiaryTitle>일기제목1 {DiaryTitle_props}</DiaryTitle>
              <DiaryContent>일기내용블라블라블라블라{DiartText_props}</DiaryContent>
            </DiaryTextComponent>
            <DiaryDate>11/22</DiaryDate>
          </DiaryContainer>
        </DiaryListContainer>

        <DiaryAddButton onPress={()=> navigation.push('Write')}>
          <ImageInner source={DiaryAddBtn}></ImageInner>
        </DiaryAddButton>
      </MainContainer>
    );
  }