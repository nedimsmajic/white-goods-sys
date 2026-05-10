import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import { useAuth } from './context/AuthContext'

function Layout() {
  const { user } = useAuth()

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#111', color: '#fff' }}>
      {user && <Sidebar />}
      <div style={{ flex: 1, padding: '32px' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><h1>Dashboard</h1></ProtectedRoute>} />
          <Route path="/parts" element={<ProtectedRoute><h1>Parts</h1></ProtectedRoute>} />
          <Route path="/appliances" element={<ProtectedRoute><h1>Appliances</h1></ProtectedRoute>} />
          <Route path="/buyers" element={<ProtectedRoute><h1>Buyers</h1></ProtectedRoute>} />
          <Route path="/service-customers" element={<ProtectedRoute><h1>Service Customers</h1></ProtectedRoute>} />
          <Route path="/suppliers" element={<ProtectedRoute><h1>Suppliers</h1></ProtectedRoute>} />
          <Route path="/reports" element={<ProtectedRoute><h1>Reports</h1></ProtectedRoute>} />
        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  )
}

export default App