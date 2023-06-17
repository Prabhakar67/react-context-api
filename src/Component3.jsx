import React, { useContext } from 'react';
import { FirstNameContext, LastNameContext } from '../src/App'

function Component3(props) {
    let FirstName = useContext(FirstNameContext);
    let LastName = useContext(LastNameContext);

    return (
        <div>
            <h1>First Name is {FirstName} Last Name is {LastName}</h1>
        </div>
    );
}

export default Component3;