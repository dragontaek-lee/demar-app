import styled from 'styled-components/native';


export const LogoContainer = styled.View`
    position : absolute;
    top : 50px;
    left : 20px;
    overflow : auto;
    // border : 1px solid black;
`

export const LogoTitle = styled.Text`
    // border : 1px solid black;
    position: relative;
    width: 100px;
    height: 29px;

    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    display: flex;
    align-items: center;
    text-align: center;
    font-family : 'JejuMyeongjo'

    color: #3F3D56;

`
export const LogoContent = styled.Text`
    position: relative;
    width: 165px;
    height: 14px;
    // left: 21px;
    // top: 80px;

    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    font-family : 'JejuMyeongjo'

    color: #3F3D56;

`
export const DiaryTextComponent = styled.View`
    float : left;
    // border : 1px solid red; 
    box-sizing: border-box;
    width : 70%;
    height : 60px;
    display: inline-flex;
    margin: auto;
    margin-right : 0px;


`
export const DiaryDate = styled.Text`
// position: relative;
float : right;
height: 60px;
width: 25%;
margin : 2px;
margin-left : 0px;
// border-color : rgba(0, 0, 0, 0.2);
// border-left-width : 1px;
// border : 1px solid blue;
display : inline-flex;

line-height : 60px;
text-align: center;
font-size: 24px;
color: #3F3D56;
font-family : 'JejuMyeongjo'
`
export const DiaryTitle = styled.Text`
// position: relative;
// border : 1px solid black;
width: 70%
height: 30px;

font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
font-family : 'JejuMyeongjo'

color: #3F3D56;
`
export const DiaryContent = styled.Text`
// position: relative;
// left: 0%;
// top: 37.5%;
// bottom: 27.21%;
// border : 1px solid black;
// width: 70%
height: 30px;


font-family: 'JejuMyeongjo';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
display: flex;
align-items: center;

color: #000000;

`
export const DiaryAddButton = styled.Pressable`
    height: 80px;
    width: 80px;
    left: 75%;
    bottom : 0%;
    // top: 769px;
    border-radius: 1000px;
    border : 1px solid green;
    // filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));
    
    `

export const ImageInner = styled.Image`
    // position: absolute;
    width: 150px;
    height: 150px;
    max-width: 100%;
    max-height: 100%;
    display : block;


    // filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));
`

