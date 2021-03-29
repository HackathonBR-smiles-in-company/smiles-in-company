import styled from 'styled-components/native';
import SearchInput from 'react-native-search-filter';
export const Container = styled.SafeAreaView`
background: #FFF;
flex:1;
`;

export const SearchContainer = styled.View`
margin: 0 15px;`;

export const SearchText = styled(SearchInput).attrs({
  caseSensitive: true,
})`
padding: 25px;
font-size: 20px;
color: #E60014;
font-weight: 400;
background: #F2F2F2;
border-bottom-width: 2px;
border-bottom-color: #E60014;`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 5px;
  border-bottom-color: #FAFAFA;
`; 

export const HeaderIconsRight = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
`;

export const Wrapper = styled.SafeAreaView``;