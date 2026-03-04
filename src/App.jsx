import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Navbar />

      <main>
        <Hero />
        {/* Placeholder for future sections */}
        <div className="h-40"></div>
      </main>
    </div>
  )
}

export default App
