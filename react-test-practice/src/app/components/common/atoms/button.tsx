import * as React from 'react';

type Props = {
    onClick: ()=> void,
    text:string,
}


const Button = (props:Props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    );
};

export default Button;

// this is from ....
// https://rafaelquintanilha.com/react-testing-library-common-scenarios/