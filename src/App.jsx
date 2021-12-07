import './App.css'
import './css/normalize.css'
import './css/variables.css'
import './css/typography.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Content from './components/Content/Content'

function App() {
  return (
    <div className='App'>
      <Content />
      <Navbar />
    </div>
  )
}

export default App
