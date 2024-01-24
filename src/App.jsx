import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar'

function App() {

  return (
    <div className='max-w-screen-xl mx-auto px-2 w-screen'>
      <Navbar />
      <main className='mt-8 min-h-screen'>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>

  )
}

export default App
