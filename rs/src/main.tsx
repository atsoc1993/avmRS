import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MarketPage from './pages/MarketPage.tsx'
import CraftingPage from './pages/CraftingPage.tsx'
import BattlePage from './pages/BattlePage.tsx'
import CharacterPage from './pages/CharacterPage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<CharacterPage />}/>
      <Route path='/market' element={<MarketPage />}/>
      <Route path='/crafting' element={<CraftingPage />}/>
      <Route path='/battle' element={<BattlePage />}/>
    </Routes>
  </BrowserRouter>
)
