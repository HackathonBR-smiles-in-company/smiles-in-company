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

export const BuyButton = styled(TouchableOpacity)`
  background-color: #E60014;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 90%;
  margin: 0 auto 100px;
`;