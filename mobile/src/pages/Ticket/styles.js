import styled from 'styled-components/native';


export const ProductList = styled.FlatList.attrs(() => ({
  showsVerticalScrollIndicator: false,
  vertical: true,  
}))`
margin-top:20px;
padding:16px;`;

export const ProductItem = styled.TouchableOpacity`
background: #FAFAFA;
flex-direction: row;
text-align: center;
justify-content:space-between;
margin:0px 5px 15px;
`;

export const ProductImage= styled.Image`
`;

export const Description = styled.Text`
text-align: left;
font-size:20px;`;

export const Stars = styled.Text`
padding: 5px 0px;
`;

export const Value = styled.Text`
font-size: 16px;
font-weight: 700;`;

export const ProductContainer = styled.View`
flex:1;
padding:16px;
`;

export const OldValue = styled.Text`
color: #4F4F4F;
text-decoration-line: line-through;
font-size:14px;`;

export const DiscountContainer = styled.View`
background: #E60014;
margin: 10px 20px 10px 0px;
border-radius:8px;
padding: 5px;`;

export const Discount = styled.Text`
color: #FFF;
font-size:14px;
`;

export const TitleContainer= styled.View`
  padding: 20px;
  background:#FFF;
`;

export const Title = styled.Text`
  color: #333;
  font-size:18px;
  text-transform: uppercase;
`;