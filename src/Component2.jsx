import React, { useContext } from 'react';
// import Component3 from './Component3';
import { FirstNameContext } from './App';

function Component2(props) {
    let FirstName = useContext(FirstNameContext);
    return (
        <div>
            {/* <Component3 /> */}
            <h2>This is 2nd UseContext of First Name {FirstName}</h2>
        </div>
    );
}

export default Component2;