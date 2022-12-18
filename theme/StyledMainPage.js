import styled from 'styled-components/native';


export const LogoContainer = styled.View`
    position : absolute;
    top : 50px;
    left : 20px;
    overflow : auto;
`

export const LogoTitle = styled.Text`
    position: relative;
    width: 110px;
    height: 29px;

    font-size: 24px;
    line-height: 29px;
    display: flex;
    font-family : 'JejuMyeongjo'

    color: #3F3D56;

`
export const LogoContent = styled.Text`
    position: relative;
    width: 165px;
    height: 14px;
    margin-top : 3px;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    font-family : 'JejuMyeongjo'
    color: #3F3D56;
`
export const DiaryTextComponent = styled.View`
    float : left;
    box-sizing: border-box;
    width : 70%;
    height : 60px;
    display: inline-flex;
    margin: auto;
    margin-right : 0px;
`
export const DiaryDate = styled.Text`
    float : right;
    height: 60px;
    width: 25%;
    margin : 2px;
    margin-left : 0px;
    display : inline-flex;

    line-height : 60px;
    text-align: center;
    font-size: 24px;
    color: #3F3D56;
    font-family : 'JejuMyeongjo'
`
export const DiaryTitle = styled.Text`
    width: 70%
    height: 30px;
    margin-top : 5px;

    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    font-family : 'JejuMyeongjo'

    color: #3F3D56;
`
export const DiaryContent = styled.Text`
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
    border-radius: 1000px;
 
`

export const ImageMainInner = styled.Image`
    width: 150px;
    height: 150px;
    max-width: 100%;
    max-height: 100%;
    display : block;
`

