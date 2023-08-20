import React, { useContext } from 'react';
import { FirstNameContext, LastNameContext } from '../src/App'

function Component3(props) {
    let FirstName = useContext(FirstNameContext);
    let LastName = useContext(LastNameContext);

    return (
        <div>
            <h2>This is FirstName and LastName in Comp3: {FirstName} {LastName}</h2>
        </div>
    );
}

export default Component3;