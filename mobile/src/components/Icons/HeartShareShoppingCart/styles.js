import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #fff;
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderIconsRight = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
`;
