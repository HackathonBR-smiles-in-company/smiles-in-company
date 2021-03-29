import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';



export const PaymentMethods = styled.View`
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
`;

export const PaymentMethodsIcon = styled.View`
  margin-right: 11px;
`;

export const PaymentMethodsDescription = styled.View`
  width: 243px;
`;

export const PaymentMethodsDescriptionTitle = styled.Text`
  font-size: 14px;
  line-height: 16px;
`;

export const PaymentMethodsDescriptionType = styled.Text`
  font-size: 14px;
  line-height: 16px;
  margin: 0 auto;
`;

export const PaymentMethodsInfo = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
  align-self: center;
  flex: 1;
`;

export const DivisorLine = styled.View`
  background-color: #a2a2a2;
  height: 1px;
  margin-bottom: 16px;
  width: 320px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const BuyButton = styled(TouchableOpacity)`
  background-color: #E60014;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const ViewGetProduct = styled.View`
  background-color: #E60014;
  margin-top: 8px;
  align-self: center;
  margin-bottom: 5px;
  width: 90%;
  border-radius: 8px;
  display: ${({avaliation,tipo}) => tipo !== 'op_recebidas' && avaliation == 0 ? 'flex' : 'none' };
`;

export const ViewAssessmentProduct = styled.View`
  background-color: #E60014;
  margin-top: 8px;
  align-self: center;
  margin-bottom: 5px;
  width: 90%;
  border-radius: 8px;
  display: ${({avaliation}) => avaliation == 1 ? 'flex' : 'none' };
`;


export const Stars = styled.Text`
padding: 0px 10px;
margin: 0 auto;`;

export const ViewAssessmentContainer = styled.View`
border-bottom-width: 3px;
width: 400px;
border-bottom-color: #CCC;
padding:5px;
`;

export const AvaliationInput = styled.TextInput`
padding:16px;
color: #000;`;

export const ViewAssessment = styled.View`
display: ${({avaliation}) => avaliation == 1 ? 'flex' : 'none' }; `;