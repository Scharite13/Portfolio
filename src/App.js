import React, { useState } from 'react';
import NavBar from './components/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import  Burger  from './components/Burger/Burger';
import  Menu  from './components/Menu/Menu';
import './App.css';

function App(){
const [open, setOpen] = useState(false);
    return (
      <ThemeProvider theme={theme}>
        
          <GlobalStyles/>
          <div>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open} setOpen={setOpen}/>
          </div>
          {/* <NavBar click={openHandler} /> */}
        
      </ThemeProvider>
    );
  
}

export default App;
