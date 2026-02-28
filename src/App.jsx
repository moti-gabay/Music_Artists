import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './components/searchPage/SearchPage'
import ArtistDetail from './components/ArtistDetail/ArtistDetail'

function App() {

  return (

    <Routes>
      <Route path='/' element={<SearchPage />} />
      <Route path='/artistDetails/:name' element={<ArtistDetail />} />
    </Routes>
  )
}

export default App
