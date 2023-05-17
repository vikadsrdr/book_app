import React from 'react';
import Header from "./components/Header/Header";
import { ThemeProvider } from './providers/ThemeProvider';
import Layout from './components/Layout/Layout';
import Navbar from './components/Header/Navbar';


function App() {


  return (
    <ThemeProvider>
      <Layout>


        <Header />
        <Navbar />


      </Layout>
    </ThemeProvider>
  );
}

export default App;
