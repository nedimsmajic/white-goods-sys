import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#111', color: '#fff' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '32px' }}>
        <Routes>
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/parts" element={<h1>Parts</h1>} />
          <Route path="/appliances" element={<h1>Appliances</h1>} />
          <Route path="/buyers" element={<h1>Buyers</h1>} />
          <Route path="/service-customers" element={<h1>Service Customers</h1>} />
          <Route path="/suppliers" element={<h1>Suppliers</h1>} />
          <Route path="/reports" element={<h1>Reports</h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App