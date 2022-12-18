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


export function Result ({navigation, view}){
    return (
        <ResultPageContainer onLayout={view}>
            <LogoContainer>
                <LogoTitle>일기 작성</LogoTitle>
                <LogoContent>자동으로 음악을 추천해드려요</LogoContent>
            </LogoContainer>
            <ResultboxContainer>
                <TitleBox>
                    <ResultTitle>일기 제목</ResultTitle>
                    <ResultTitleText><TitleText>오늘은 기다리고 기다리던 면접 발표 날!</TitleText></ResultTitleText>
                </TitleBox>
                <ContentBox>
                    <ResultContent>일기 내용</ResultContent>
                    <ResultContentBox>
                        <TextContent text-indent="10px">오늘은 그동안  기다리고 기다린  삼성전자 1차 발표날이다. 너무너무 떨린다. 붙었으면 좋겠다. 붙으면 차도 사고 집도 사야지. 차는 제네시스 gv80으로 뽑고 집은 그래도 회사 근처 오피스텔 전세로 들어가서 매매로 전환해야겠다. 그러면 빨리 결혼하고 엄마아빠한테도 효도시켜드려야겠다. 라는 꿈을 꿨다. 내 성적에 삼전은 무슨. 취직이나 할 수 있으면 좋겠네.
                        </TextContent></ResultContentBox>
                </ContentBox>
                <ResultContainer>
                    <Resultlist>
                        <AlbumCover source={albumcover1}></AlbumCover>
                        <Songinfo>
                            <SongTitle>duality</SongTitle>
                            <SongArtist>slipknot</SongArtist>
                        </Songinfo>
                    </Resultlist>

                    <Resultlist>
                        <AlbumCover source={albumcover2}></AlbumCover>
                        <Songinfo>
                            <SongTitle>master of puppets</SongTitle>
                            <SongArtist>metallica</SongArtist>
                        </Songinfo>
                    </Resultlist>

                    <Resultlist>
                        <AlbumCover source={albumcover3}></AlbumCover>
                        <Songinfo>
                            <SongTitle>people=shit</SongTitle>
                            <SongArtist>slipknot</SongArtist>
                        </Songinfo>
                    </Resultlist>

                    <Resultlist>
                        <AlbumCover source={albumcover4}></AlbumCover>
                        <Songinfo>
                            <SongTitle>The hell song</SongTitle>
                            <SongArtist>sum41</SongArtist>
                        </Songinfo>
                    </Resultlist>

                    <Resultlist>
                        <AlbumCover source={albumcover5}></AlbumCover>
                        <Songinfo>
                            <SongTitle>stand by me</SongTitle>
                            <SongArtist>Oasis</SongArtist>
                        </Songinfo>
                    </Resultlist>
                </ResultContainer>
            </ResultboxContainer>
        </ResultPageContainer>
    );
}