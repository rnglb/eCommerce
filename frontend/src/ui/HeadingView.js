
import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`

font-family: Roboto,Arial,sans-serif;
margin: 5px;
`;
//color: ${props.color?props.color:'black'};
//font-size: ${props.Large?'3rem':(props.Medium?'1.5rem':'0.5rem')};

const HeadingView = (props) => {
    return(
        <Heading props={props}>{props.children}</Heading>
    )
}

export default HeadingView;