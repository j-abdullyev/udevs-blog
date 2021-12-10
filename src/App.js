import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import HomePage from './components/home-page/homePage';
import ContentPage from './components/content/content-page';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/post/:id" element={<ContentPage />}></Route>
        </Routes>
     
     
      </BrowserRouter>
    </div>
  );
}

export default App;
