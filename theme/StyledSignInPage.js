import styled from 'styled-components/native';

export const PrefaceContainer = styled.View`
    margin-top:80px;
    width: 280px;
    height: 180px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: left;
`

export const PrefaceTitle = styled.Text`
    fontFamily: 'JejuMyeongjo';
    font-size: 25px;
    color: #FFFFFF;
    margin-bottom: 7px;
`

export const PrefaceContent = styled.Text`
    fontFamily: 'JejuMyeongjo';
    color: #FFFFFF;
`

export const ButtonContainer = styled.View`
    margin-top: 177px;
    width: 280px;
    height: 152px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonContent = styled.Pressable`
    height: 41px;
    width: 280px;
    border-radius: 20px;
    background-color: black;
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
`

export const ButtonInner = styled.View`
    display: flex;
`

export const InnerText = styled.Text`
    color: white;
    fontFamily: 'JejuMyeongjo';
`

export const InputBackText = styled.Text`
    color: white;
    fontFamily: 'JejuMyeongjo';
    font-size: 12px;
`

export const Icon = styled.Image`
    width: 28px;
    height: 29px;
`