import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <Provider store={store}>
      <div className='max-w-screen-xl mx-auto px-2'>
        <Navbar />
        <main className='mt-8 min-h-screen'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  )
}

export default App
