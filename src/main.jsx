import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Homepage from './routes/homepage/Homepage.jsx'
import Createpage from './routes/createpage/Createpage.jsx'
import Postpage from './routes/postpage/Postpage.jsx'
import AuthPage from './routes/authPage/AuthPage.jsx'
import ProfilePage from './routes/profielpage/ProfilePage.jsx'
import SearchPage from './routes/searchpage/SearchPage.jsx'
import MainLayout from './routes/layouts/mainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/create' element={<Createpage />} />
          <Route path='/pin/:id' element={<Postpage />} />
          <Route path='/:username' element={<ProfilePage />} />
          <Route path='/search' element={<SearchPage />} />
        </Route>
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
