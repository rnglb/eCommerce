
import React from 'react';
import styled from 'styled-components';

const Heading = (props) => {
  const HeadingView = styled.h1`
  color: ${props.color?props.color:'black'};
  font-size: ${props.Large?'3rem':(props.Medium?'1.5rem':'0.5rem')};
  font-family: Roboto,Arial,sans-serif;
  margin: 5px;
`;
    return(
        <HeadingView>{props.children}</HeadingView>
    )
}

export default Heading;