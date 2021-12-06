import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import BlogList from './components/home-page/blog-list/blog-list';
import HomePage from './components/home-page/homePage';
import Footer from './components/home-page/footer/footer';
import Header from './components/home-page/header/header';
import ContentPage from './components/content/content-page';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/post/:id" element={<ContentPage />}></Route>
        </Routes>
     
      {/* <HomePage /> */}
        {/* <div className="wrapper">
          <Header />
          <BlogList />
        </div>
        <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
