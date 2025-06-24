import { ArrowRight, ExternalLink } from 'lucide-react'
import './WhoWeServe.css'

const CARDS = [
    {
        title: "Radio Maria",
        description: "Digital transformation for religious broadcasting with modern streaming solutions and community engagement platforms.",
        metrics: "50,000+ active listeners",
        impact: "",
        website: "https://radiomaria.org",
        appStore: "https://apps.apple.com/app/radio-maria",
        playStore: "https://play.google.com/store/apps/details?id=com.radiomaria"
    },
    {
        title: "Culinary Artist",
        description: "Revolutionary food delivery platform connecting local chefs with food enthusiasts through AI-powered matching.",
        metrics: "Hyderabad's first nutrition centric platform",
        impact: "80% faster delivery times",
        website: "https://culinaryartist.com",
        appStore: "https://apps.apple.com/app/culinary-artist",
        playStore: "https://play.google.com/store/apps/details?id=com.culinaryartist"
    },
    {
        title: "Neon Pay",
        description: "Next-generation fintech solution providing seamless payment processing and digital wallet services.",
        metrics: "",
        impact: "upcoming Genz-friendly app",
        website: "https://neonpay.com",
        appStore: "coming-soon",
        playStore: "coming-soon"
    },
    {
        title: "TeluguTies",
        description: "Teluguties is a dedicated Telugu matrimonial app made only for Telugu people. With AI-powered agents, it offers smart, personalized match suggestions tailored to your culture, language, and lifestyle. Simple, secure, and truly Telugu.",
        metrics: "1000+ users",
        impact: "95% user satisfaction rate",
        website: "https://teluguties.in",
        appStore: "coming-soon",
        playStore: "coming-soon"
    },
]

const WhoWeServe = () => {
    return (
        <div id='who-we-serve' className='who-we-serve-container'>
            <h2 className='who-we-serve-title'>Who We Serve</h2>
            
            {/* Header Section - Moved to Top */}
            <div className='who-we-serve-header'>
                <h2 className='who-we-serve-title-orange'>We don't just</h2>
                <h2 className='who-we-serve-title-white'>Serve Clients</h2>
                <p className='who-we-serve-description'>
                    We build lasting partnerships. From startups to enterprises, 
                    our solutions drive growth, innovation, and digital transformation 
                    across diverse industries and business models.
                </p>
            </div>

            {/* Cards Section */}
            <div className='who-we-serve-content'>
                {/* Mobile Horizontal Scroll */}
                <div className='cards-mobile-scroll'>
                    <div className='cards-scroll-container'>
                        {CARDS.map((card, index) => (
                            <div
                                key={index}
                                className={`card-mobile ${index === 2 ? 'neon-pay' : ''}`}
                            >
                                <div className="card-content">
                                    <div className="card-metrics">
                                        <p className="card-metrics-main">{card.metrics}</p>
                                        <p className="card-metrics-impact">{card.impact}</p>
                                    </div>

                                    <h3 className="card-title">{card.title}</h3>
                                    <p className="card-description">{card.description}</p>

                                    <div className="card-links">
                                        <div className="card-website-link ">
                                            <ExternalLink size={14} className="text-orange flex-shrink-0 " />
                                            <a 
                                                href={card.website} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                 Visit Website 
                                            </a>
                                        </div>

                                        <div className="card-app-links">
                                            {card.appStore && (
                                                <div className="app-link">
                                                    {card.appStore === "coming-soon" ? (
                                                        <div className="coming-soon">
                                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                                            </svg>
                                                            <span>Soon</span>
                                                        </div>
                                                    ) : (
                                                        <a 
                                                            href={card.appStore} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                                            </svg>
                                                            <span>iOS</span>
                                                        </a>
                                                    )}
                                                </div>
                                            )}

                                            {card.playStore && (
                                                <div className="app-link">
                                                    {card.playStore === "coming-soon" ? (
                                                        <div className="coming-soon">
                                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                                            </svg>
                                                            <span>Soon</span>
                                                        </div>
                                                    ) : (
                                                        <a 
                                                            href={card.playStore} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                                            </svg>
                                                            <span>Android</span>
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {index === 2 && (
                                            <div className="card-story-button">
                                                <button className="story-button">
                                                    Read story
                                                    <ArrowRight size={12} />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="scroll-indicator">
                        <p>← Scroll to see more →</p>
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className='cards-desktop-grid'>
                    <div className='cards-grid'>
                        {CARDS.map((card, index) => (
                            <div
                                key={index}
                                className={`card-desktop ${index === 2 ? 'neon-pay' : ''}`}
                            >
                                <div className="card-desktop-content">
                                    <div className="card-desktop-metrics">
                                        <p className="card-desktop-metrics-main">{card.metrics}</p>
                                        <p className="card-desktop-metrics-impact">{card.impact}</p>
                                    </div>

                                    <h3 className="card-desktop-title">{card.title}</h3>
                                    <p className="card-desktop-description">{card.description}</p>

                                    <div className="card-desktop-links">
                                        <div className="card-desktop-website">
                                            <ExternalLink size={18} className="text-orange flex-shrink-0" />
                                            <a 
                                                href={card.website} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Visit Website
                                            </a>
                                        </div>

                                        <div className="card-desktop-apps">
                                            {card.appStore && (
                                                <div className="desktop-app-link">
                                                    {card.appStore === "coming-soon" ? (
                                                        <div className="coming-soon">
                                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                                            </svg>
                                                            <span>Coming Soon</span>
                                                        </div>
                                                    ) : (
                                                        <a 
                                                            href={card.appStore} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                                            </svg>
                                                            <span>App Store</span>
                                                        </a>
                                                    )}
                                                </div>
                                            )}

                                            {card.playStore && (
                                                <div className="desktop-app-link">
                                                    {card.playStore === "coming-soon" ? (
                                                        <div className="coming-soon">
                                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                                            </svg>
                                                            <span>Coming Soon</span>
                                                        </div>
                                                    ) : (
                                                        <a 
                                                            href={card.playStore} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                                            </svg>
                                                            <span>Play Store</span>
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {index === 2 && (
                                        <div className="card-desktop-story">
                                            <button className="desktop-story-button">
                                                Read story
                                                <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeServe 