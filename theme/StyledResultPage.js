import styled from 'styled-components/native';

export const ResultContainer = styled.View`
    width: 319px;
    height: 350px;
    margin-top : 20px;
    background: #272727;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`
export const ResultboxContainer = styled.View`
    // box-sizing: border-box;
    margin-top : 80px;
    align-items: center;
    justify-content: center;
    // border : 1px solid black;
`
export const TitleBox = styled.View`
    box-sizing: border-box;
    margin: auto;
`
export const ResultTitle = styled.Text`
    width: 50px;
    height: 14px;

    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: #3F3D56;
    fontFamily: 'JejuMyeongjo';
`
export const ResultTitleText = styled.View`
    width: 340px;
    height: 38px;
    background: #FFFFFF;
    margin-top : 10px;
    box-shadow: 0px 0px 10px rgba(154, 154, 154, 0.1);
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`
export const TitleText = styled.Text`
    width : 330px;
    height : 38px;
    line-height : 38px;
    fontFamily: 'JejuMyeongjo';
`

export const ContentBox = styled.View`
box-sizing: border-box;
margin: auto;
`

export const ResultContent = styled.Text`
width: 50px;
height: 14px;
margin-top : 10px;

font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
color: #3F3D56;
fontFamily: 'JejuMyeongjo';

`
export const ResultContentBox = styled.View`
width: 340px;
height: 250px;
background: #FFFFFF;
margin-top : 10px;
box-shadow: 0px 0px 10px rgba(154, 154, 154, 0.1);
border-radius: 10px;
justify-content: center;
align-items: center;

`

export const TextContent = styled.Text`
width: 320px;
height: 230px;
// border : 1px solid black;
fontFamily: 'JejuMyeongjo';
line-height : 25%;
text-indent : 30px;

`

export const Resultlist = styled.View`
margin-top : 20px;
display : flex;
margin-right : auto;
flex-direction : row;
// border : 1px solid white;
`
export const AlbumCover = styled.Image`
width: 45px;
height: 45px;
margin-left : 20px;

`
export const Songinfo = styled.View`
margin-left : 15px;
margin-top : 8px;
// border : 1px solid white;
`
export const SongTitle = styled.Text`
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;

`
export const SongArtist = styled.Text`
font-weight: 300;
font-size: 10px;
line-height: 12px;
color: #FFFFFF;

`