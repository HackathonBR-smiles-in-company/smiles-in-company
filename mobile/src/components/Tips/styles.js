import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
    paddingRight: 16,
  },
}))`
  margin-top: 15px;
  height:250px
`;

export const Option = styled.TouchableOpacity`
margin-left:5px;
`;

export const Img = styled.Image`
`;
