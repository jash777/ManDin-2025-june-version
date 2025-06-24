import './Niche.css'
import NicheImage from '../assets/Niche.jpg'

const Niche = () => {
    return (
        <div id='our-niche' className='niche-container'>
            <h2 className='niche-title'>Our Niche</h2>
            
            {/* Header Section - Same as WhatWeDo and WhoWeServe */}
            {/* <div className='niche-header'>
                <h2 className='niche-title-orange'>We don't just</h2>
                <h2 className='niche-title-white'>Solve Problems</h2>
                <p className='niche-description'>
                    We build lasting security partnerships. From startups to enterprises, 
                    our solutions drive protection, innovation, and digital transformation 
                    across diverse industries and business models.
                </p>
            </div> */}

            {/* Main Content Card - Full Width */}
            <div className='niche-content'>
                <div className='niche-card'>
                    <div className='niche-card-background'>
                        <img src={NicheImage} alt="Security Solutions" className='niche-bg-image' />
                        <div className='niche-overlay'></div>
                    </div>
                    
                    <div className='niche-card-content'>
                        {/* Titles and Description inside the card */}
                        <div className='niche-card-header'>
                            <h2 className='niche-card-title-main'>Solve your largest</h2>
                            <h2 className='niche-card-title-accent'>security headaches</h2>
                            <p className='niche-card-description'>
                                We build lasting security partnerships. From startups to enterprises, 
                                our solutions drive protection, innovation, and digital transformation 
                                across diverse industries and business models.
                            </p>
                        </div>

                        {/* Three Columns */}
                        <div className='niche-columns'>
                            <div className='niche-column'>
                                <h3>Branding</h3>
                                <p>We craft impactful brand identities that resonate in a crowded digital landscape. By blending strategic positioning with cutting-edge design, we ensure every visual element aligns with your mission, values, and market vision.</p>
                            </div>
                            <div className='niche-column'>
                                <h3>Products</h3>
                                <p>From fintech platforms to AI-powered automation tools, we build products that solve real problems. Designed for performance, security, and scale, our tech stack empowers startups and enterprises to innovate without limits.</p>
                            </div>
                            <div className='niche-column'>
                                <h3>Experiences</h3>
                                <p>We deliver digital experiences that are intuitive, secure, and deeply human-centric. Whether it's a finance app, AI dashboard, or enterprise tool—our design-first mindset ensures engagement, trust, and lasting impact.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Niche 