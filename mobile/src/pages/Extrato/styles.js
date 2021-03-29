import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.ScrollView`
  background: #4D4A4A;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 200px;  background: #4D4A4A;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  width:100px;
  text-align: center;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
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
  background: #4D4A4A;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #FFF;
  text-transform: uppercase;
`;


export const PaymentList = styled.FlatList`
padding:10px;`; 

export const PaymentItem = styled.View`
border-bottom-color: #FFF;
border-bottom-width: 1px;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px;
`;

export const PaymentTitle = styled.Text`
font-weight: 700;
font-size: 14px;
color: #FFF;`;

export const PaymentDescription = styled.Text`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
color: #FFF;
`;

export const PaymentHeader = styled.View`
`;
export const PaymentImage = styled.Image``;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const ExtractList = styled.FlatList.attrs(() => ({
showsVerticalScrollIndicator: false,
inverted: true,

}))`
margin-top: 5px;
padding:10px;`;

export const ExtractHeader = styled.View`
`; 

export const ExtractTitle = styled.Text`
font-weight: 700;
font-size: 13px;
min-width:150px;
color: #FFF;`;

export const ExtractDate  = styled.Text`
color: #FFF;
font-size: 14px;`;
export const ExtractValue = styled.Text`
color: ${(({color}) => color)};
font-size: 16px;`; 
export const ExtractItem  = styled.View`
padding:16px 0;
flex-direction: row;
justify-content: space-between;
align-items: center;`;