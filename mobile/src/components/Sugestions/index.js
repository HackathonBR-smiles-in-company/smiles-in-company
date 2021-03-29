import React, { useState } from 'react';

import { Container, Option, Img, Label, OptionHeader, OptionButton, OptionText } from './styles';


import {sugestions} from '../../assets/Constants/index';

export default function Sugestions() {
  const [focused, setFocused] = useState(true);
  const onFocus = "tomato";
  const offFocus = "gray";


  upButtonHandler = () => {
     ListView_Ref.scrollTo({x: 0, y: 0, animated: true});
    setFocused(true);
  };

  downButtonHandler = () => {
     ListView_Ref.scrollToEnd({ animated: true });
     //ListView_Ref.scrollTo({x: 0, y: 0, animated: true});
    setFocused(false);
  };

  return (
    <>
      <OptionHeader>
        <OptionButton
          onPress={ () => upButtonHandler() } 
          focus={(focused ? onFocus : offFocus)}>
          <OptionText 
          focus={(focused ? onFocus : offFocus)}
          >Departamentos</OptionText>
        </OptionButton>
        <OptionButton 
        onPress={ () => downButtonHandler() }
        focus={(!focused ? onFocus : offFocus)}>
          <OptionText
          focus={!focused ? onFocus : offFocus }
           >Sugestões</OptionText>
        </OptionButton>
      </OptionHeader>
      <Container
      ref={(ref) => {
        ListView_Ref = ref;
      }}
      onScrollToTop={true}
      >    
      {
        sugestions.map((item)=> ( item.category === focused ? 
          
          <Option key={item.key}>
            <Img source={item.img}/>
          </Option>
        :
         null
        ))

      }
      </Container>
   </>
  );
}
