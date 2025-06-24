import './OurNiche.css'
import nicheImg from '../assets/Niche.jpg'

const OurNiche = () => {
    return (
        <section id='our-niche' className='max-w-[1300px] mx-auto relative mt-[4rem] lg:mt-[6rem]'>
            <h2 className='text-center text-white text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[1] font-semibold mb-[4rem] lg:mb-[6rem] font-["Denton-Bold"] relative z-10'>Our Niche</h2>
            
            {/* Single Wide Card */}
            <div className='group cursor-pointer transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/20 backdrop-blur-sm'>
                {/* Background Image */}
                <div 
                    className='absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105'
                    style={{ 
                        backgroundImage: `url(${nicheImg})`
                    }}
                ></div>
                
                {/* Enhanced Overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/70 transition-all duration-300'></div>
                
                {/* Content */}
                <div className='relative z-10 p-[2rem] md:p-[3rem] lg:p-[4rem]'>
                    {/* Main Title Section */}
                    <div className='text-center md:text-left mb-[3rem] lg:mb-[4rem]'>
                        <h2 className='text-white text-[2.5rem] md:text-[3.5rem] lg:text-[4.7rem] leading-[1.1] font-semibold font-["Denton-Bold"] mb-[0.5rem]'>Solve your largest</h2>
                        <h2 className='text-orange text-[2rem] md:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] font-semibold font-["Denton-Bold"] mb-[1.5rem] lg:mb-[2rem]'>security headaches</h2>
                        <p className='text-white/90 text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] max-w-2xl mx-auto md:mx-0 leading-relaxed font-["Gilroy-Regular"]'>
                            We create transformative digital solutions. From fintech innovations to AI-driven automation, our solutions are engineered for performance, scalability, and real-world impact.
                        </p>
                    </div>

                    {/* Three Columns */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-[2.5rem] lg:gap-[4rem]'>
                        <div className='text-center md:text-left group/item'>
                            <h3 className='text-white text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-[1.1] font-semibold font-["Denton-Bold"] mb-[1rem] lg:mb-[1.5rem] group-hover/item:text-orange transition-colors duration-300'>Branding</h3>
                            <p className='text-white/80 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] leading-relaxed font-["Gilroy-Regular"] group-hover/item:text-white/90 transition-colors duration-300'>
                                We create transformative digital solutions. From fintech innovations to AI-driven automation, our solutions are engineered for performance, scalability, and real-world impact.
                            </p>
                        </div>

                        <div className='text-center md:text-left group/item'>
                            <h3 className='text-white text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-[1.1] font-semibold font-["Denton-Bold"] mb-[1rem] lg:mb-[1.5rem] group-hover/item:text-orange transition-colors duration-300'>Products</h3>
                            <p className='text-white/80 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] leading-relaxed font-["Gilroy-Regular"] group-hover/item:text-white/90 transition-colors duration-300'>
                                We create transformative digital solutions. From fintech innovations to AI-driven automation, our solutions are engineered for performance, scalability, and real-world impact.
                            </p>
                        </div>

                        <div className='text-center md:text-left group/item'>
                            <h3 className='text-white text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-[1.1] font-semibold font-["Denton-Bold"] mb-[1rem] lg:mb-[1.5rem] group-hover/item:text-orange transition-colors duration-300'>Experiences</h3>
                            <p className='text-white/80 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] leading-relaxed font-["Gilroy-Regular"] group-hover/item:text-white/90 transition-colors duration-300'>
                                We create transformative digital solutions. From fintech innovations to AI-driven automation, our solutions are engineered for performance, scalability, and real-world impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurNiche 