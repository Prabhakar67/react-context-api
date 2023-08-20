import React, { useContext } from 'react';
import Component3 from './Component3';
import { FirstNameContext } from './App';

function Component2(props) {
    let FirstName = useContext(FirstNameContext);
    return (
        <div>
            <Component3 />
            <h2>This is FirstName in Comp2: {FirstName}</h2>
        </div>
    );
}

export default Component2;