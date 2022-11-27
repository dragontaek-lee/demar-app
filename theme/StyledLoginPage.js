import styled from 'styled-components/native';

export const LoginContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: white;
`

export const ImageContainer = styled.View`
    margin-top: 0px;
    width: 337px;
    height: 391px;
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
    margin-top: 134px;
    max-width: 100%;
    max-height: 100%;
`

export const ButtonContainer = styled.View`
    margin-top: 196px;
    width: 280px;
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const InnerText = styled.Text`
    color: white;
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