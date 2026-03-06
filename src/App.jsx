import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import { ThemeProvider } from './components/ThemeContext'
import GlobalBackground from './components/GlobalBackground'
import { ReactLenis } from 'lenis/react'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-300 relative">
        <GlobalBackground />
        <CustomCursor />
        <Navbar />

        <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
          <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-24 pb-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

              {/* Global Sticky Left Sidebar */}
              <Sidebar />

              {/* Global Scrolling Right Content Area */}
              <div className="flex-1 min-w-0 flex flex-col w-full gap-40">
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Contact />
              </div>

            </div>
          </main>
        </ReactLenis>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
