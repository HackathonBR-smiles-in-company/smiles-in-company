import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const DivisorLine = styled.View`
  background-color: #a2a2a2;
  height: 1px;
  margin-bottom: 16px;
  width: 320px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const ButtonSale = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const BuyButton = styled(TouchableOpacity)`
  background-color: #e60014;
  width: 163px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-left: 10px;
`;

export const AskOpinionButton = styled(TouchableOpacity)`
  background-color: #fff;
  width: 343px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;
