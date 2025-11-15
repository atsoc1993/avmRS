import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MarketPage from './pages/MarketPage.tsx'
import CraftingPage from './pages/CraftingPage.tsx'
import BattlePage from './pages/BattlePage.tsx'
import CharacterPage from './pages/CharacterPage.tsx'
import ResourcesPage from './pages/ResourcesPage.tsx'
import { items, type CharacterSet } from './pages/constants.tsx'


function Main() {
  const character: CharacterSet = {
    helm: items.helms.dragon_helm,
    body: items.bodies.bronze_platebody,
    legs: items.legs.mithril_platelegs,
    boots: items.boots.rune_boots,
    sword: items.swords.dragon_sword,
    shield: items.shields.dragon_shield
  }

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CharacterPage characterSet={character}/>}/>
      <Route path='/resources' element={<ResourcesPage />}/>
      <Route path='/crafting' element={<CraftingPage />}/>
      <Route path='/battle' element={<BattlePage />}/>
      <Route path='/market' element={<MarketPage />}/>
    </Routes>
  </BrowserRouter>
  )
}
createRoot(document.getElementById('root')!).render(<Main/>)
