import { ButtonContainer, ButtonContent, InnerText } from "../theme/StyledLoginPage";
import { LogoContainer, LogoContent, LogoTitle } from "../theme/StyledMainPage";
import {WriteContainer} from "../theme/Common"
import {WriteBoxContainer, TitleBox, WriteTitle ,WriteTitleBox, ContentBox, WriteContent, WriteContentBox, CautionMent} from "../theme/StyledWritePage"

import { PostDiary } from "../api/api"
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



export function Write ({navigation, view}){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isfailed, setIsFailed] = useState(false);
    const [token, setToken] = useState('');

    AsyncStorage.getItem('AccessToken').then(res =>
        setToken(res)
    );

    const chkinputs = () => {
        if(title.length > 0 && content.length > 0){
            return false;
        }
        return true;
    }
  
    const clicWrite = async (title,content) => {
        console.log("test");
        await PostDiary(title,content,token).then(res=>{
          navigation.reset({routes: [{name: 'Result'}]})
          console.log(res);
        }).catch((e)=>{
          console.log('Diary-upload-failed', e);
          setIsFailed(true);
        })
      }

    return (
        <WriteContainer onLayout={view}>
            <LogoContainer>
                <LogoTitle>일기 작성</LogoTitle>
                <LogoContent>자동으로 음악을 추천해드려요</LogoContent>
            </LogoContainer>
            <WriteBoxContainer>
                <TitleBox>
                    <WriteTitle>일기 제목</WriteTitle>
                    <WriteTitleBox 
                    placeholder="일기의 제목을 입력해주세요"
                    onChangeText={(title) => setTitle(title)}
                    ></WriteTitleBox>
                </TitleBox>
                <ContentBox>
                    <WriteContent>일기 내용</WriteContent>
                    <WriteContentBox 
                    placeholder="일기의 내용을 입력해주세요"
                    onChangeText={(content) => setContent(content)}></WriteContentBox>
                    { isfailed? <CautionMent>모든 정보를 입력해주세요</CautionMent>:""}
                </ContentBox>
                <ButtonContainer>
                    <ButtonContent color ={'#3F3D56'}>
                        <InnerText color={'#FFFFFF'} 
                        onPress={()=>clicWrite(title,content)}
                        disabled={chkinputs()}
                        >저장하기</InnerText>
                    </ButtonContent>
                    <ButtonContent  color="#E97777">
                        <InnerText color={'#FFFFFF'}
                        onPress={()=> navigation.push('Main')}
                        >뒤로가기</InnerText>
                    </ButtonContent>
                </ButtonContainer>
            </WriteBoxContainer>
        </WriteContainer>
    );
}