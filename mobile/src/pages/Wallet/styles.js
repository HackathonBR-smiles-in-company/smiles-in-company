import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  background: #4D4A4A;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 200px;  
  background: #4D4A4A;
`;


export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  width:100px;
  text-align: center;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 38px;
  color: #fff;
  font-weight: 200;

`;

export const Bold = styled.Text`
  font-weight: bold;
`;



export const UseBalance = styled.View`
  background: #FFF;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  color: #FFF;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
  background: #4D4A4A;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8E8E93;
  text-transform: uppercase;
  color: #FFF;
`;


export const PaymentList = styled.FlatList`
padding:10px;`; 

export const PaymentItem = styled.TouchableOpacity`
border-bottom-width: 1px;
border-color: #F57921;
; 
border-radius:6;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 15px;
color: #FFF;
background: #F57921; 
margin-bottom:10px;
`;

export const PaymentTitle = styled.Text`
font-weight: 700;
font-size: 18px;
color:#FFF;`;

export const PaymentDescription = styled.Text`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color:#FFF;
`;

export const PaymentHeader = styled.View`
color:#FFF;
justify-content: space-between;
`;
export const PaymentImage = styled.Image``;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const ExtractList = styled.FlatList.attrs(() => ({
showsVerticalScrollIndicator: false,
inverted: true,

}))`
margin-top: 0px;
padding:10px;
max-height:200px;`;

export const ExtractHeader = styled.View`
`; 

export const ExtractTitle = styled.Text`
font-weight: 700;
font-size: 13px;
min-width:150px;
color: #333333;`;

export const ExtractDate  = styled.Text`font-size: 14px;`;
export const ExtractValue = styled.Text`
color: ${(({color}) => color)};
font-size: 14px;`; 
export const ExtractItem  = styled.View`
padding:16px;
flex-direction: row;
justify-content: space-between;
align-items: center;`;

export const Image = styled.Image`
  width: 65px;
  height: 65px;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
`;
