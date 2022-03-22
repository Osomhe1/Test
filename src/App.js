import { Box } from '@chakra-ui/react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import SearchMovie from './components/SearchMovie'

function App() {
  return (
    <Box className='App'>
      <Header />
      <Hero />
      <SearchMovie />
    </Box>
  )
}

export default App
