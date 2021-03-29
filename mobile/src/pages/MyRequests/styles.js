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


export const Option = styled.TouchableOpacity`
margin-left:5px;
`;

export const MessageContainer = styled.FlatList.attrs(() => ({
  horizontal: false,
  showsHorizontalScrollIndicator: false,
}))`
padding:10px;`; 

export const MessageItem = styled.TouchableOpacity`
flex-direction: row;
align-items:center;
justify-content: space-between;
padding: 5px;
margin: 3px 0px 5px;
border-bottom-color:#BDBDBD;
border-bottom-width: 1px;`;


export const MessageImagem = styled.Image.attrs(() => ({
}))`
height:30px;`;

export const Value = styled.Text`
font-size:14px;
padding: 4px 0;
font-weight:700; 
color: ${({ativo}) => ativo == "1" ? '#4F4F4F' : '#CCC'};
text-decoration-line: ${({ativo}) => ativo == "1" ? 'none' : 'line-through'};
`;

export const MessageProduct = styled.View`
padding:16px;`;

export const MessageName = styled.Text`
font-size:14px;
font-weight:700;
margin-bottom: 5px;
color: 
${({ativo,avaliation}) => { 
    if(ativo == 1)
    {
        if(avaliation == 1)
            return '#219653';
        else 
            return '#E60014'
    }
    else
        return '#CCC';

}};
text-decoration-line: ${({ativo}) => ativo == "1" ? 'none' : 'line-through'};
`;

export const MessageDate = styled.Text`
color: #828282;
margin-right: 35px;`;

export const MessageDescription = styled.Text`
font-size:16px;
line-height: 16px;
font-weight:500;
min-width:230px;
max-width:230px;
align-items: center;
margin-bottom: 5px;
color: ${({ativo}) => ativo == "1" ? '#4F4F4F' : '#CCC'};
text-decoration-line: ${({ativo}) => ativo == "1" ? 'none' : 'line-through'};
`;

