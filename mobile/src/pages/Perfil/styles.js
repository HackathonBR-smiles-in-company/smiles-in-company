import styled from 'styled-components/native';


export const Container = styled.View`
height:200px;
background:#FFF;`;
export const CardPerfil = styled.View`
height:150px;
margin:auto;  
`;
export const ImagePerfil = styled.Image`
margin:auto;`;
export const StartPerfil = styled.View `
flex-direction: row;
margin:auto;`;
export const NamePerfil = styled.Text`
margin:auto;`;
export const OpnionsPerfil = styled.Text`
margin:auto;`;
export const OptionsContainer = styled.View``;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8E8E93;
  text-transform: uppercase;
`;


export const PaymentList = styled.FlatList`
padding:10px;`; 

export const PaymentItem = styled.TouchableOpacity`
border-bottom-color: #BDBDBD;
border-bottom-width: 1px;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px;
`;

export const PaymentTitle = styled.Text`
font-weight: 700;
font-size: 14px;
color: #333333;`;

export const PaymentDescription = styled.Text`
font-style: normal;
font-weight: normal;
padding: 5px 1px;
font-size: 14px;
line-height: 16px;
color: #4F4F4F;
`;

export const PaymentHeader = styled.View`
min-width:250px;
max-width:250px;
`;
export const PaymentImage = styled.Image``;

