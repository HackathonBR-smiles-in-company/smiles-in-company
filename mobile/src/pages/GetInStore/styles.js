import styled from 'styled-components/native';
import { Image, TouchableOpacity } from 'react-native';

export const PaymentMethods = styled.View`
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  margin-bottom: 18px;
`;

export const PaymentMethodsIcon = styled.View`
  margin-right: 11px;
`;

export const PaymentMethodsDescription = styled.View`
  width: 243px;
`;

export const PaymentMethodsDescriptionTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 4px;
`;

export const PaymentMethodsDescriptionType = styled.Text`
  font-size: 14px;
  line-height: 16px;
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
`;

export const BuyButton = styled(TouchableOpacity)`
  background-color: #e60014;
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const AskOpinionButton = styled(TouchableOpacity)`
  background-color: #fff;
  width: 343px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;
