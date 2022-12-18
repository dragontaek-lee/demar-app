import styled from 'styled-components/native';

export const AuthContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #3F3D56;
    fontFamily: 'JejuMyeongjo';
`

export const InputContainer = styled.View`
    margin-top: 30px;
    width: 280px;
    height: 119px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputContent = styled.TextInput`
    height: 39px;
    width: 280px;
    background-color: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 20px;
    margin-bottom: 10px;
    padding: 8px;
`

export const InputText = styled.Text`
    fontFamily: 'JejuMyeongjo';
    margin-right: auto;
    font-size: 11px;
    margin-bottom: 3px;
    margin-left: 10px;
    color: white;
`

export const MainContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #3FEFCF3;
    fontFamily: 'JejuMyeongjo';
`
export const DiaryContainer = styled.View`
    box-sizing: border-box;
    position: relative;
    width: 327px;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
export const ErrorText = styled.Text`
    fontFamily: 'JejuMyeongjo';
    font-size: 11px;
    color: #E97777;
`