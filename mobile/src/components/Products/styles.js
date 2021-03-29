import styled from 'styled-components/native';

/*
margin-top:50px;
color: #000;
flex: 1;
background-color:"lightgray";
justify-content: "space-between";
text-align: "center";
*/

export const ProductList = styled.FlatList`
margin-top:20px;
padding:16px;`;

export const ProductItem = styled.TouchableOpacity`
background: #FAFAFA;
flex: 1;
margin:0px 5px 15px;

`;


export const ProductImage= styled.Image`
margin: 0 auto;
`;

export const Description = styled.Text`
text-align: left;
font-size:16px;
padding-left: 10px;
padding-right: 10px;`;

export const Stars = styled.Text`
padding: 5px 10px;`;

export const Value = styled.Text`
padding: 0px 10px;
font-size: 16px;
font-weight: 700`;