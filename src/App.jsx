import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interest'

function App() {

  return (
    <div className='container'>
      <div className='card-container'>
        <Info />
        <About />
        <Interest />
      </div>
    </div>
  )
}

export default App