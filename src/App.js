import React from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { Home } from './modules/Home';
import { AppLayout } from './modules/Core/Layout/App/'
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <AppLayout /> }>
          <Route path="/" element={ <Home /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;