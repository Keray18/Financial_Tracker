import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import ProtectedLayout from './security/ProtectedLayout'
import Accounts from './pages/Accounts'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
