import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'

function App() {
  const [count, setCount] = useState(0)
1
  return <>
  <Navbar/>
  <Hero/>
  <About/>
  </>
}

export default App;