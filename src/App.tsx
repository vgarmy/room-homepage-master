import './App.css'
import Header from './components/Header'
import InfoSection from './components/InfoSection'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className='main max-w-[1440px] w-full mx-auto' role="main">  
      <Header />
      <Showcase />
      <InfoSection />
    </div>
  )
}

export default App
