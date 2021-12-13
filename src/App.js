import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import HomePage from './components/home-page/homePage';
import ContentPage from './components/content/content-page';
import ProfilePage from './components/profile-page/profile-page';
import PublishSettings from './components/publish-settings/publish-settings';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/post/:id" element={<ContentPage />}></Route> 
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/publish" element={<PublishSettings />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
