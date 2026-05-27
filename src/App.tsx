import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CV from './pages/CV'
import CertChamps from './pages/projects/CertChamps'
import CleanerGrid from './pages/projects/CleanerGrid'
import HongKong from './pages/projects/HongKong'
import Portababe from './pages/projects/Portababe'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cv" element={<CV />} />
        <Route path="projects/certchamps" element={<CertChamps />} />
        <Route path="projects/cleaner-grid" element={<CleanerGrid />} />
        <Route path="projects/hongkong" element={<HongKong />} />
        <Route path="projects/portababe" element={<Portababe />} />
      </Route>
    </Routes>
  )
}
