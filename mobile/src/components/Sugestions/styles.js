import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    contentContainerStyle:{
    alignItems: 'center',
    paddingLeft: 16,
    }
}))`
    background: #EAEAEA;
    height: 250px;
`;

export const Option = styled.TouchableOpacity`
    width: 90px;
    margin-right:16px;
    align-items:center;`;

export const Label = styled.Text`
    color: #000;
    font-weight:700;
    margin-top:8px;
    font-size:12px;
    flex-wrap:nowrap;
    text-align:center;`;

export const Img = styled.Image``;

export const OptionHeader = styled.View`
flex-direction: row;
padding: 16px;`;

export const OptionButton = styled.TouchableOpacity`
margin-right: 15px;
border-bottom-color: ${({focus}) => focus };
border-bottom-width: 2px;
`;

export const OptionText = styled.Text`
color: ${({focus}) => focus };
margin-bottom: 5px`;