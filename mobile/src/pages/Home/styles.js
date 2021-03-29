import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background: #FFF;
flex:1;
`;

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