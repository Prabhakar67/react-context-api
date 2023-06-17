import { createContext } from 'react';
import './App.css';
import Component3 from './Component3';
import Component2 from './Component2';
import Component1 from './Component1';

let FirstNameContext = createContext();
let LastNameContext = createContext();

function App() {
  let FirstName = 'Alex';
  let LastName = 'Hales';
  return (
    <div className="App">
      <Component1/>
      <FirstNameContext.Provider value={FirstName}>
        <LastNameContext.Provider value={LastName}> 
          <Component3 />
          <Component2 />
        </LastNameContext.Provider>
      </FirstNameContext.Provider>
    </div>
  );
}

export { FirstNameContext,LastNameContext };
export default App;
