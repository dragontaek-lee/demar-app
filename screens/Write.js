import { ButtonContainer, ButtonContent, InnerText } from "../theme/StyledLoginPage";
import { LogoContainer, LogoContent, LogoTitle } from "../theme/StyledMainPage";
import {WriteContainer} from "../theme/Common"
import {WriteBoxContainer, TitleBox, WriteTitle ,WriteTitleBox, ContentBox, WriteContent, WriteContentBox, CautionMent} from "../theme/StyledWritePage"


export function Write ({navigation, view}){
    return (
        <WriteContainer onLayout={view}>
            <LogoContainer>
                <LogoTitle>일기 작성</LogoTitle>
                <LogoContent>자동으로 음악을 추천해드려요</LogoContent>
            </LogoContainer>
            <WriteBoxContainer>
                <TitleBox>
                    <WriteTitle>일기 제목</WriteTitle>
                    <WriteTitleBox placeholder="일기의 제목을 입력해주세요"></WriteTitleBox>
                </TitleBox>
                <ContentBox>
                    <WriteContent>일기 내용</WriteContent>
                    <WriteContentBox placeholder="일기의 내용을 입력해주세요"></WriteContentBox>
                    <CautionMent>모든 정보를 입력해주세요</CautionMent>
                </ContentBox>
                <ButtonContainer>
                    <ButtonContent color ={'#3F3D56'}>
                        <InnerText color={'#FFFFFF'} onPress={()=>navigation.push('Result')}>저장하기</InnerText>
                    </ButtonContent>
                    <ButtonContent onPress={()=>navigation.push('Main')} color="#E97777">
                        <InnerText color={'#FFFFFF'}>뒤로가기</InnerText>
                    </ButtonContent>
                </ButtonContainer>
            </WriteBoxContainer>
        </WriteContainer>
    );
}