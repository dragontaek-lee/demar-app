import styled from 'styled-components/native';

export const ImageContainer = styled.View`
    width: 337px;
    height: 300px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;

`
export const ImageInner = styled.View`
    width: 176px;
    height: 253px;
`

export const ImageContent = styled.Image`
    margin-top: 30px;
    max-width: 100%;
    max-height: 100%;
`

export const ButtonContainer = styled.View`
    margin-top: 93px;
    width: 280px;
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonContent = styled.Pressable`
    height: 39px;
    width: 280px;
    border-radius: 20px;
    background-color: ${(props) => props.color}
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
`

export const InnerText = styled.Text`
    color: white;
    fontFamily: 'JejuMyeongjo';
    color: ${(props) => props.color}
`