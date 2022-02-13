import React from 'react';
import Header from "./Pages/Header/Header";
import AppRoutes from "./Routs/AppRoutes";
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
      <BrowserRouter>
          <div >
              <Header/>
              <AppRoutes/>
          </div>

      </BrowserRouter>
  );
}

export default App;
