import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MarketPage from './pages/MarketPage.tsx'
import CraftingPage from './pages/CraftingPage.tsx'
import BattlePage from './pages/BattlePage.tsx'
import CharacterPage from './pages/CharacterPage.tsx'
import ResourcesPage from './pages/ResourcesPage.tsx'
import { wearables, type CharacterSet } from './constants.tsx'


function Main() {
  const character: CharacterSet = {
    helm: wearables.helms.dragon_helm,
    body: wearables.bodies.bronze_platebody,
    legs: wearables.legs.mithril_platelegs,
    boots: wearables.boots.rune_boots,
    sword: wearables.swords.dragon_sword,
    shield: wearables.shields.dragon_shield
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
