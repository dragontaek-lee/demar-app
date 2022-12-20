import DiaryAddBtn from '../assets/DiaryAddBtn.png';
import { MainContainer, DiaryContainer, DiaryListContainer } from '../theme/Common';
import { LogoContainer, LogoTitle, LogoContent, DiaryTextComponent,DiaryContent, DiaryDateComponent,DiaryTitle, DiaryDate, DiaryAddButton, ImageMainInner} from '../theme/StyledMainPage';
import { View, Button, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DiaryList } from "../api/api"
import { useEffect, useState } from 'react';
import dayjs from "dayjs";


export function Main({navigation, view, DiaryTitle_props, DiartText_props}) {
    const [list, setlist] = useState([]);

    useEffect(()=>{
      const DiaryGetList = async (token) => {
        await DiaryList(token).then(res => {
          setlist(res);
        }).catch((e)=>{
          console.log('get-list-failed',e);
        })
      }
      AsyncStorage.getItem('AccessToken').then(res =>
        DiaryGetList(res)
      );
      DiaryGetList();
    },[])

    const diaryList = list.map((item) => {
      return (
        <DiaryContainer onPress={()=> navigation.push('Result', {diaryId : item.id})}>
        <DiaryTextComponent>
          <DiaryTitle key={item.title}>{item.title}</DiaryTitle>
          <DiaryContent key={item.content}>{item.content}</DiaryContent>
        </DiaryTextComponent>
        <DiaryDate key={item.createdAt}>{dayjs(item.createdAt).format("MM/DD")}</DiaryDate>
      </DiaryContainer>
      );
    })

     return (
        <MainContainer onLayout={view}>
          <LogoContainer>
            <LogoTitle>일기 List</LogoTitle>
            <LogoContent>자동으로 음악을 추천해드려요</LogoContent>
          </LogoContainer>
          <DiaryListContainer>
            { diaryList }
          </DiaryListContainer>
          <DiaryAddButton onPress={()=> navigation.push('Write')}>
            <ImageMainInner source={DiaryAddBtn}></ImageMainInner>
          </DiaryAddButton>
        </MainContainer>
    );
  }

  export default Main;