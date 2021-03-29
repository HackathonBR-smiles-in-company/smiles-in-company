import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  border-radius: 8px;
  height: 176px;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Img = styled.Image`
  border-radius: 2px;
  width: 343px;
  height: 176px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  padding-left: 16px;
  justify-content: center;
  text-align: left;
  font-size: 18px;
  line-height: 21px;
`;

export const Rating = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: auto;
  margin-top: 25px;
  margin-left: 14px;
`;

export const PriceInfo = styled.View`
  margin-top: 24px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Value = styled.View`
  margin-left: 16px;
`;

export const Discount = styled.Text`
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: line-through;
`;

export const Price = styled.Text`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`;

export const CashBack = styled.View`
  margin-right: 16px;
  padding: 10px;
  align-self: center;
  align-items: center;
  justify-content: center;
  line-height: 16px;
  background-color: #170085;
  border-radius: 4px;
`;

export const CashBackText = styled.Text`
  color: #ffffff;
  align-self: center;
  font-size: 14px;
`;

export const PaymentMethods = styled.View`
  margin-top: 24px;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
`;

export const PaymentMethodsIcon = styled.View`
  margin-right: 11px;
`;

export const PaymentMethodsDescription = styled.View``;

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

export const MorePaymentMethodsLink = styled(TouchableOpacity)`
  margin-top: 16px;
  align-items: flex-start;
  width: 100%;
  margin-left: 107px;
`;

export const DivisorLine = styled.View`
  background-color: #a2a2a2;
  height: 1px;
  margin-top: 16px;
  width: 320px;
`;

export const PaymentMethodsInfo = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
  align-self: center;
  flex: 1;
`;

export const MoreInfo = styled.View`
  margin: 16px 16px 8px;
`;

export const DivisorLineInfo = styled.View`
  background-color: #a2a2a2;
  height: 1px;
  margin-top: 16px;
  margin-bottom: -16px;
  width: 320px;
`;

export const RateComments = styled.View`
  margin-top: 24px;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const RatingComments = styled.View`
  flex-direction: row;
`;

export const DivisionRateComments = styled.View`
  margin-left: 16px;
`;

export const IconsLike = styled.View`
  flex-direction: row;
  width: 100%;
  margin-right: 20px;
  justify-content: flex-end;
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
  width: 179px;
  height: 56px;
  align-items: center;
  justify-content: center;
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

export const Stars = styled.Text`
padding: 5px 10px;`;