import React from 'react';
import Header from "./Pages/Header/Header";
import AppRoutes from "./Routs/AppRoutes";
import { BrowserRouter } from 'react-router-dom';
import Footer from "./Pages/Footer/Footer";

function App() {

  return (
      <BrowserRouter>
          <div >
              <Header/>
              <AppRoutes/>
              <Footer/>
          </div>

      </BrowserRouter>
  );
}

export default App;
