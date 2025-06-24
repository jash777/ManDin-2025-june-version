import './App.css'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import WhoWeServe from './components/WhoWeServe'
import Niche from './components/Niche'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { ContactProvider, useContact } from './hooks/contactHook'

const AppContent = () => {
  const { isContactOpen, toggleContact } = useContact();

  return (
    <>
      <Hero />
      <WhatWeDo />
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-accent"></div>
      </div>
      <WhoWeServe />
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-accent"></div>
      </div>
      <Niche />
      <Footer />
      
      {/* Contact Modal */}
      {isContactOpen && (
        <Contact 
          isVisible={isContactOpen} 
          onClose={toggleContact} 
        />
      )}
    </>
  )
}

function App() {
  return (
    <ContactProvider>
      <AppContent />
    </ContactProvider>
  )
}

export default App
