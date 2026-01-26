import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import corporateProfileImage from '/images/about/image-corporateprofile.jpg';
import aboutBanner from '/images/solution/solution-banner.jpg';
import ImageGalleryModal from '../components/ImageGalleryModal';
import { useLanguage } from '../context/LanguageContext';

// Helper to generate factory images array
const factoryImages = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    src: `/images/about/image-factory${i + 1}.jpg`,
    alt: `Factory Image ${i + 1}`
}));

const About = () => {
    const location = useLocation();
    const { t } = useLanguage();
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);
    
    // Path parsing: /about/corporate-profile or /about/factory-overview
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const activeSlug = pathSegments[1] || 'corporate-profile';

    const renderContent = () => {
        switch (activeSlug) {
            case 'factory-overview':
                return (
                     <div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center uppercase tracking-wide">{t('about.factoryOverview')}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {factoryImages.map((img, index) => (
                                <div 
                                    key={img.id} 
                                    className="relative group overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                    onClick={() => {
                                        setGalleryInitialIndex(index);
                                        setIsGalleryOpen(true);
                                    }}
                                >
                                    <img 
                                        src={img.src} 
                                        alt={img.alt} 
                                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                     </div>
                );
            case 'news-center': // Stub
                return (
                    <div>
                         <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center uppercase tracking-wide">{t('about.newsCenter')}</h2>
                         <p className="text-gray-500 text-center">{t('common.comingSoon')}</p>
                    </div>
                );
            case 'corporate-profile':
            default:
                return (
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">{t('about.corporateProfile')}</h2>
                        
                        <div className="space-y-6 text-black text-md leading-relaxed text-justify mb-8">
                            <p>
                                {t('about.corporateDescription1')}
                            </p>
                            <p>
                                {t('about.mainProductsTitle')}
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>{t('about.mainProductsList1')}</li>
                                <li>{t('about.mainProductsList2')}</li>
                            </ul>
                            <p>
                                {t('about.corporateDescription2')}
                            </p>
                        </div>

                        <div className="w-full">
                            <img 
                                src={corporateProfileImage} 
                                alt="Corporate Profile" 
                                className="w-full"
                            />
                        </div>
                    </div>
                );
        }
    };

    const getPageTitle = () => {
         switch (activeSlug) {
            case 'factory-overview': return t('about.factoryOverview');
            case 'news-center': return t('about.newsCenter');
            case 'corporate-profile': default: return t('about.corporateProfile');
         }
    };

    return (
        <div className="bg-gray min-h-screen font-outfit pb-20">
            {/* Hero Banner */}
            <div className="relative w-full h-[300px] md:h-[430px]">
                <img 
                    src={aboutBanner} 
                    alt="About Banner" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Breadcrumb */}
            <div className="w-full bg-white">
               <div className="container mx-auto bg-white px-4 py-7 mb-5 flex items-center text-sm text-black gap-1">
                   <Link to="/" className="hover:text-red-600"><FaHome /></Link>
                   <IoIosArrowForward />
                   <Link to="/about" className="hover:text-red">{t('navigation.aboutYihua')}</Link>
                   <IoIosArrowForward />
                   <span className="">
                        {getPageTitle()}
                   </span>
               </div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* SIDEBAR */}
                <div className="lg:col-span-1 space-y-8">
                     {/* Menu */}
                     <div>
                        <h2 className="bg-[#E60013] text-white font-bold py-3 px-6 uppercase text-lg tracking-wide">
                            {t('navigation.aboutYihua')}
                        </h2>
                        <div className="bg-white shadow-sm border border-gray-100">
                             {[
                                 { name: t('about.corporateProfile'), slug: 'corporate-profile' },
                                 { name: t('about.factoryOverview'), slug: 'factory-overview' }
                             ].map((item) => (
                                 <Link 
                                    key={item.slug}
                                    to={`/about/${item.slug}`}
                                    className={`block px-6 py-4 text-sm border-b border-gray-100 hover:text-[#E60013] transition-colors relative
                                        ${activeSlug === item.slug ? 'text-[#E60013] font-bold bg-gray-50' : 'text-gray-700'}
                                    `}
                                 >
                                    <span className="flex items-center justify-between">
                                        {item.name}
                                        <IoIosArrowForward className="text-xs" />
                                    </span>
                                 </Link>
                             ))}
                        </div>
                     </div>

                     {/* Help & Contact (Reused) */}
                     <div>
                         <div className="bg-white p-6 border border-gray-100 text-sm text-gray-600 space-y-4">
                             <h2 className="font-bold text-3xl mb-6 text-black uppercase border-b-2 border-gray-200 pb-2 inline-block">
                                 {t('navigation.helpContact')}
                             </h2>
                             
                             <p>
                                 <strong className="block text-gray-800 mb-1">{t('contactInfo.address')}:</strong>
                                 {t('contactInfo.headquarterAddress')}
                             </p>
                             <p>
                                 <strong className="block text-gray-800 mb-1">{t('contactInfo.tel')}:</strong>
                                 0086-593-6668988<br/>
                                 0086-593-6382918
                             </p>
                             <p>
                                 <strong className="text-gray-800 mb-1">{t('contactInfo.fax')}: </strong>
                                 0086 593 6582997
                             </p>
                             <p>
                                 <strong className="text-gray-800 mb-1">{t('contactInfo.mobileWhatsapp')}: </strong>
                                 +86 18650536888
                             </p>
                             <p>
                                 <strong className="text-gray-800 mb-1">{t('contactInfo.email')}: </strong>
                                 yihua@e-yihua.com
                             </p>
                         </div>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="lg:col-span-3">
                    <div className="bg-white shadow-sm p-8 min-h-[500px]">
                        {renderContent()}
                    </div>
                </div>
            </div>

            {/* Image Gallery Modal */}
            <ImageGalleryModal
                images={factoryImages.map((img) => ({
                    src: img.src,
                    alt: img.alt
                }))}
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
                initialIndex={galleryInitialIndex}
            />
        </div>
    );
};

export default About;
