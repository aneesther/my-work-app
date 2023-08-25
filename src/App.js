// import './App.css';
// import { Outlet, ScrollRestoration } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <Outlet/>
//       <ScrollRestoration/>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import { createContext, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
export let NameContext = createContext("");


function App() {
  const [name, setName] = useState("");
  return(
    <div className="App">
      <NameContext.Provider className="App" value={{name, setName }}>
        <Outlet/>
        <ScrollRestoration/>
      </NameContext.Provider>
      </div>
  );
}

export default App;