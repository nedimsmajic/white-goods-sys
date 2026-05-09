import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Wrench,
  WashingMachine,
  Users,
  UserCog,
  Truck,
  BarChart2
} from 'lucide-react'

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/parts', label: 'Parts', icon: Wrench },
  { to: '/appliances', label: 'Appliances', icon: WashingMachine },
  { to: '/buyers', label: 'Buyers', icon: Users },
  { to: '/service-customers', label: 'Service Customers', icon: UserCog },
  { to: '/suppliers', label: 'Suppliers', icon: Truck },
  { to: '/reports', label: 'Reports', icon: BarChart2 },
  
  
]

function Sidebar() {
  return (
    <div style={{
      width: '220px',
      minHeight: '100vh',
      background: '#1a1a1a',
      padding: '24px 0',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ padding: '0 24px 32px', color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
        ⚙️ White Goods
      </div>
      {links.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 24px',
            color: isActive ? '#fff' : '#888',
            background: isActive ? '#2a2a2a' : 'transparent',
            textDecoration: 'none',
            fontSize: '14px',
            borderLeft: isActive ? '3px solid #f97316' : '3px solid transparent',
          })}
        >
          <Icon size={18} />
          {label}
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar
