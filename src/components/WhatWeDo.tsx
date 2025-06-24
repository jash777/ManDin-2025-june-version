import { ArrowRight, DollarSign, Bot, Smartphone, Lock } from 'lucide-react'
import { useContact } from '../hooks/contactHook'
import './WhatWeDo.css'

const FEATURES = [
    {
        title: 'Fintech Innovation',
        content: 'We build next-generation financial platforms with seamless payment processing, digital wallets, and real-time transaction systems. Our solutions integrate advanced security protocols and regulatory compliance to transform how businesses handle financial operations.',
        icon: DollarSign,
    },
    {
        title: 'AI-Driven Automation',
        content: 'Transform your business processes with intelligent automation powered by machine learning and natural language processing. We develop custom AI solutions that reduce operational costs, enhance decision-making, and scale your business operations efficiently.',
        icon: Bot,
    },
    {
        title: 'Web & Mobile Applications',
        content: 'Create powerful, scalable applications that deliver exceptional user experiences across all platforms. From progressive web apps to native mobile solutions, we build responsive, fast, and intuitive applications that drive user engagement and business growth.',
        icon: Smartphone,
    },
    {
        title: 'Information Security',
        content: 'Zero Trust is our strategy. We implement comprehensive cybersecurity frameworks that protect your digital assets with multi-layered defense systems, continuous monitoring, and advanced threat detection to ensure your business stays secure in an evolving threat landscape.',
        icon: Lock,
    },
];

const WhatWeDo = () => {
    const { toggleContact } = useContact();

    return (
        <div id='what-we-do' className='what-we-do-container'>
            <div className='what-we-do-bg-elements'>
                <div className='bg-line-1'></div>
                <div className='bg-line-2'></div>
                <div className='bg-accent-1'></div>
                <div className='bg-accent-2'></div>
            </div>

            <h2 className='what-we-do-title'>What We Do</h2>
            
            <div className='what-we-do-hero'>
                <h2 className='what-we-do-hero-title-orange'>We don't just</h2>
                <h2 className='what-we-do-hero-title-white'>Build Products</h2>
                <p className='what-we-do-hero-description'>
                    We create transformative digital solutions. from fintech
                    innovations to AI-driven automation, our solutions are
                    engineered for performance, scalability, and real-world impact.
                </p>
                <div className='what-we-do-hero-cta' onClick={() => toggleContact()}>
                    <p className='what-we-do-cta-text'>Make the Switch</p>
                    <ArrowRight className='what-we-do-cta-arrow' />
                </div>
            </div>

            <div className='features-grid'>
                {FEATURES.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <div
                            key={index}
                            className={`feature-card feature-card-${index + 1}`}
                        >
                            <div className='feature-icon'>
                                <IconComponent size={32} />
                            </div>
                            
                            <h3 className='feature-title'>{feature.title}</h3>
                            
                            <div className='feature-border'>
                                <div className='border-line'></div>
                                <div className='border-gradient'></div>
                            </div>
                            
                            <p className='feature-content'>{feature.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default WhatWeDo 