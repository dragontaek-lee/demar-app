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
    margin-bottom: 3px;
    margin-left: 10px;
    color: white;
`
export const MainContainer = styled.View`
    display: flex;
    justify-content: center;
    margin-top : 20px;
    width: 100%;
    height: 100%;
    background-color: #FEFCF3;
    fontFamily: 'JejuMyeongjo';
`
export const DiaryListContainer = styled.View`
    height : 70%
    weight : 100%
    display : inline-block;
    margin-top : 30px;
    overflow : auto;
`
export const DiaryContainer = styled.Pressable`
    box-sizing: content-box;
    position: relative;
    border-color : rgba(0, 0, 0, 0.2);
    border-bottom-width : 1px;
    text-align : center;
    margin-top : 20px;

    display: flex;
    flex-direction : row;
    justify-content: center;
`
export const WriteContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #FEFCF3;
    fontFamily: 'JejuMyeongjo';
`
export const ErrorText = styled.Text`
    fontFamily: 'JejuMyeongjo';
    font-size: 11px;
    color: #E97777;
`
export const ResultPageContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #FEFCF3;
    fontFamily: 'JejuMyeongjo';
`