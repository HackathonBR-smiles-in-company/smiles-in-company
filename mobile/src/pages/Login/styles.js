import styled from 'styled-components/native';


export const Container = styled.SafeAreaView.attrs( () => ({
  flex: 1
}))`
  background: #F57921;
  max-height: 250px;
`;

export const Input = styled.TextInput`
width: 100%;
height: 40px;
background: #FFF;
`;

export const Header = styled.View`
flex: 1;
max-height: 550px;`


export const Label = styled.Text`
color: #FFF;
padding: 5px;
`;


export const ImageContainer = styled.ImageBackground.attrs( () => ({
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center" 
}))`
flex: 1;
justify-content: center;
align-items: center;

`; 

export const TextConatiner = styled.View`
flex: 1;
width: 80%;
justify-content: center;
align-items: flex-start;
`; 

export const PrimaryButton = styled.TouchableOpacity`
  background: #F57921; 
  color: #FFF;
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  margin: 35px 0 0;
`;


export const SecondaryButton = styled.TouchableOpacity`
  color: #FFF;
  border: 1px solid #F57921; 
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
`;