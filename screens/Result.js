// image
import albumcover1 from "../assets/album1.jpg"
import albumcover2 from "../assets/album2.jpg"
import albumcover3 from "../assets/album3.jpg"
import albumcover4 from "../assets/album4.png"
import albumcover5 from "../assets/album5.jpeg"

//styled
import { LogoContainer, LogoContent, LogoTitle } from "../theme/StyledMainPage";
import {ResultPageContainer} from "../theme/Common"
import { ResultboxContainer, TitleBox, ResultTitle, ResultTitleText, TitleText, ContentBox, ResultContent, ResultContentBox,TextContent,ResultContainer,Resultlist,AlbumCover, Songinfo, SongTitle, SongArtist} from "../theme/StyledResultPage"
import { getDiary, getRecommends } from "../api/api";
import { useEffect, useState } from 'react';
import { View, Button, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Result ({navigation, view, route}){
    const [diary, setDiary] = useState({});
    const [musicList, setMusicList] = useState([]);
    const diaryId =  route.params.diaryId;

    useEffect(()=>{
      const getDiaryData = async (token) => {
        await getDiary(token, diaryId).then(res => {
            setDiary(res);
        }).catch((e)=>{
          console.log('get-diary-failed',e);
        })
      }
      AsyncStorage.getItem('AccessToken').then(res =>{
        getDiaryData(res);
      })
    },[])

    useEffect(()=>{
        const getMusics = async (token) => {
          await getRecommends(token, diaryId).then(res => {
              setMusicList(res);
          }).catch((e)=>{
            console.log('get-recommend-failed',e);
          })
        }
        AsyncStorage.getItem('AccessToken').then(res =>{
            getMusics(res);
        })
      },[diary])

    const musicRecommendList = musicList.map((item) => {
        return (
            <Resultlist>
                <AlbumCover source={{uri: item.cover}}></AlbumCover>
                <Songinfo>
                    <SongTitle numberOfLines={2}>{item.title}</SongTitle>
                    <SongArtist>{item.artist}</SongArtist>
                </Songinfo>
            </Resultlist>
        );
    })

    // if(musicList.length == 0) return <Text>loading</Text>

    return (
        <ResultPageContainer onLayout={view}>
            <LogoContainer>
                <LogoTitle>나의 일기</LogoTitle>
                <LogoContent>일기와 음악을 추천해드려요</LogoContent>
            </LogoContainer>
            <ResultboxContainer>
                <TitleBox>
                    <ResultTitle>일기 제목</ResultTitle>
                    <ResultTitleText><TitleText>{diary.title}</TitleText></ResultTitleText>
                </TitleBox>
                <ContentBox>
                    <ResultContent>일기 내용</ResultContent>
                    <ResultContentBox>
                        <TextContent>{diary.content}</TextContent>
                    </ResultContentBox>
                </ContentBox>
                <ResultContainer>
                    {musicRecommendList}
                </ResultContainer>
            </ResultboxContainer>
        </ResultPageContainer>
    );
}