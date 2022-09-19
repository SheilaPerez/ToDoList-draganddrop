import React, {useState} from 'react';
import ToDo from './Pages/ToDo';
import { OptionContextProvider } from './Context/OptionsContext';

function App() {
  const [option, setOption] = useState<string>("");
  
  return (
    <OptionContextProvider value={{ option, setOption }}>
      <ToDo></ToDo>
    </OptionContextProvider>
  );
}

export default App;
