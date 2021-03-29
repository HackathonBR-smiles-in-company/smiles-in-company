import React from 'react';

import { Container, Option, Title, Img } from './styles';

import {baners} from '../../assets/Constants/index';

export default function Tips() {
  return (
    <Container>
      {baners.map((item) => (
        <Option key={item.key} >
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}