import { useState } from 'react'
import logo from '../assets/Logo.png'
import bg2 from '../assets/2288.mp4'
import { useContact } from '../hooks/contactHook'
import './Hero.css'

const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const { toggleContact } = useContact();

    const navItems = [
        { name: 'Home', href: '#home', external: false },
        { name: 'What We Do', href: '#whatwedo', external: false },
        // { name: 'Who We Serve', href: '#whoweserve', external: false },
        { name: 'Our Niche', href: '#niche', external: false },
        { name: 'NEONPAY', href: 'https://neonpay.app', external: true }
    ];

    return (
        <div className="hero-container">
            {/* Background Video */}
            <video
                className={`hero-video ${videoLoaded ? 'loaded' : ''}`}
                src={bg2}
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setVideoLoaded(true)}
                onCanPlay={() => setVideoLoaded(true)}
            />
            
            {/* Video Overlay */}
            <div className="hero-overlay"></div>
            
            {/* Logo */}
            <div className={`hero-logo ${videoLoaded ? 'loaded' : ''}`}>
                <img src={logo} alt="ManDin Studios" />
            </div>

            {/* Mobile navigation removed - desktop nav only */}

            {/* Desktop Navigation */}
            <nav className={`hero-nav ${videoLoaded ? 'loaded' : ''}`}>
                <ul className="nav-links desktop-nav">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.href} 
                                className="nav-link"
                                target={item.external ? '_blank' : '_self'}
                                rel={item.external ? 'noopener noreferrer' : undefined}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Hero Content */}
            <div className={`hero-content ${videoLoaded ? 'loaded' : ''}`}>
                <h1 className={`hero-title ${videoLoaded ? 'loaded' : ''}`}>
                    Where Expertise Meets Artistry
                </h1>
                <h2 className={`hero-subtitle ${videoLoaded ? 'loaded' : ''}`}>
                    You're Witnessing Brilliance Unfold.
                </h2>
                <p className={`hero-description ${videoLoaded ? 'loaded' : ''}`}>
                    You're watching Master at Work
                </p>
                <button 
                    className={`hero-button ${videoLoaded ? 'loaded' : ''}`}
                    onClick={toggleContact}
                >
                    Meet Us →
                </button>
            </div>
        </div>
    )
}

export default Hero