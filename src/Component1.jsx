import React from 'react';
import Component2 from './Component2';

function Component1(props) {
    return (
        <div>
            <h1>Learn UseContext Hook</h1>
            <h2>Pass a value directly without prop drilling</h2>
            <Component2 />
        </div>
    );
}

export default Component1;