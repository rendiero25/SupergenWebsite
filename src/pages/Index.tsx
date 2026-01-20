import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import Data
import heroData from '../data/index/heroSlider.json';
import solutionData from '../data/index/solutiononhome.json';

const Index = () => {
    // Refs for custom navigation in Fueling section
    const fuelingPrevRef = useRef(null);
    const fuelingNextRef = useRef(null);

    const dedicationImages = [
        { name: 'Open Type Diesel Generator Set', img: '/images/index/section2images/opentype-.png' },
        { name: 'Silent Type Diesel Generator Set', img: '/images/index/section2images/silenttype-dieselgeneratorset.png' },
        { name: 'Container Type Diesel Generator Set', img: '/images/index/section2images/containertype-dieselgeneratorset.png' },
        { name: 'Brushless Alternator', img: '/images/index/section2images/brushless-generator.png' },
    ];

    return (
        <div className="font-outfit">
            {/* HERRO SECTION */}
            <section className="relative h-[600px] lg:h-[800px] w-full">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    effect="fade"
                    speed={1000}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    className="h-full w-full group"
                >
                    {heroData.map((slide) => (
                        <SwiperSlide key={slide.id} className="relative">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img 
                                    src={slide.image} 
                                    alt={slide.heading} 
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="relative h-full container mx-auto px-4 flex items-center">
                                <div className="max-w-2xl pt-20">
                                    <h1 className="text-4xl lg:text-5xl font-black text-[#1e1e1e] mb-6 leading-tight whitespace-pre-line">
                                        {slide.heading.replace('|', '\n')}
                                    </h1>
                                    <div className="w-12 h-1 bg-[#E60013] mb-6"></div>
                                    <p className="text-gray-800 text-lg mb-8 leading-relaxed font-medium max-w-xl">
                                        {slide.description}
                                    </p>
                                    <button className="bg-[#E60013] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg text-sm uppercase tracking-wide">
                                        {slide.buttonName}
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Custom Nav Buttons */}
                    <div className="swiper-button-prev !text-white !w-12 !h-12 !bg-gray-800/50 hover:!bg-[#E60013] !rounded-none !left-0 backdrop-blur-sm transition-colors after:!text-lg"></div>
                    <div className="swiper-button-next !text-white !w-12 !h-12 !bg-gray-800/50 hover:!bg-[#E60013] !rounded-none !right-0 backdrop-blur-sm transition-colors after:!text-lg"></div>
                </Swiper>
            </section>

            {/* DEDICATION SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-[#1e1e1e] uppercase tracking-wide mb-4">
                            Dedication to Shaping a More Powerful Future
                        </h2>
                        <div className="w-24 h-1 bg-[#1e1e1e] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {dedicationImages.map((item, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative overflow-hidden mb-6 flex justify-center items-center h-48">
                                    <img 
                                        src={item.img} 
                                        alt={item.name} 
                                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-center text-sm font-bold text-gray-500 uppercase group-hover:text-[#E60013] transition-colors">
                                    {item.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PIONEERING FUTURE SECTION */}
            <section className="py-20 pt-32 pb-32">
                 <div className="container mx-auto px-4 mb-20 text-center">
                    <h2 className="text-3xl font-black text-[#666666] uppercase tracking-wide mb-4">
                        Pioneering The Future
                    </h2>
                    <div className="w-24 h-1 bg-[#666666] mx-auto"></div>
                </div>
                
                <div 
                    className="relative w-full h-[500px] bg-cover bg-center bg-fixed flex items-center"
                    style={{ backgroundImage: "url('/images/index/bacground-pioneeringthefuture.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <h2 className="text-4xl font-black mb-6 leading-tight">
                                Relentlessly Pursuing Groundbreaking Power Solutions for Yihua's Highly Valued Clients
                            </h2>
                            <div className="space-y-4 text-gray-200 mb-8 font-light text-sm tracking-wide">
                                <p>A pioneer in power solutions, delivering high performance consistently.</p>
                                <p>Designed for continuous power and dependability.</p>
                                <p>Committed to supporting our clients and respecting the environment.</p>
                            </div>
                            <button className="bg-[#E60013] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-sm">
                                Embark on Our Journey
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FUELING PROGRESS SECTION */}
            <section className="py-20 bg-white mb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-[#1e1e1e] uppercase tracking-wide mb-4">
                            Fueling Your Progress and Growth with Our Energy Solutions
                        </h2>
                        <div className="w-24 h-1 bg-[#1e1e1e] mx-auto"></div>
                    </div>

                    <div className="relative group/slider">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 },
                            }}
                            onBeforeInit={(swiper) => {
                                // @ts-ignore
                                swiper.params.navigation.prevEl = fuelingPrevRef.current;
                                // @ts-ignore
                                swiper.params.navigation.nextEl = fuelingNextRef.current;
                            }}
                            className="h-[400px]"
                        >
                            {solutionData.map((item) => (
                                <SwiperSlide key={item.id} className="relative group cursor-pointer h-full overflow-hidden">
                                    <div className="relative w-full h-full">
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                                        
                                        <div className="absolute bottom-10 left-8 right-8 flex items-center gap-4 text-white">
                                            <img src={item.icon} alt="" className="w-8 h-8 object-contain filter brightness-0 invert" />
                                            <h3 className="text-xl font-bold tracking-wide">{item.name}</h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons for Fueling Section */}
                        <button ref={fuelingPrevRef} className="absolute top-1/2 left-4 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-[#E60013] backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover/slider:opacity-100">
                            <IoIosArrowBack />
                        </button>
                        <button ref={fuelingNextRef} className="absolute top-1/2 right-4 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-[#E60013] backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover/slider:opacity-100">
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;
