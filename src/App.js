import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from './providers/ThemeProvider';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import BookList from './components/Booklist/BookList';
import Oops from './components/notFound/notFound';
// import BookDetails from './components/BookDetails/BokDetails';
import Header from './components/Header/Header';
import { AppProvider } from './providers/AppContext';

function App() {

  return (
    <AppProvider>
      <ThemeProvider>
        <Layout>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path="about" element={<About />} /> */}
            {/* <Route path="book" element={<BookList />} /> */}
            {/* <Route path="/book/:id" element={<BookDetails />} /> */}
            <Route path="*" element={<Oops />} />
          </Routes>
        </Layout>
      </ThemeProvider>
     </AppProvider>
  );
}

export default App;
