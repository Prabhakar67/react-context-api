import { createContext } from 'react';
import './App.css';
import Component1 from './Component1';

let FirstNameContext = createContext();
let LastNameContext = createContext();

function App() {
  let FirstName = 'Alex';
  let LastName = 'Hales';
  return (
    <div className="App">
      <FirstNameContext.Provider value={FirstName}>
        <LastNameContext.Provider value={LastName}>
          <Component1 />
        </LastNameContext.Provider>
      </FirstNameContext.Provider>
    </div>
  );
}

export { FirstNameContext, LastNameContext };
export default App;
