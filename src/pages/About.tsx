import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import corporateProfileImage from '/images/about/image-corporateprofile.jpg';
import aboutBanner from '/images/solution/solution-banner.jpg';

// Helper to generate factory images array
const factoryImages = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    src: `/images/about/image-factory${i + 1}.jpg`,
    alt: `Factory Image ${i + 1}`
}));

const About = () => {
    const location = useLocation();
    
    // Path parsing: /about/corporate-profile or /about/factory-overview
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const activeSlug = pathSegments[1] || 'corporate-profile';

    const renderContent = () => {
        switch (activeSlug) {
            case 'factory-overview':
                return (
                     <div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center uppercase tracking-wide">Factory Overview</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {factoryImages.map((img) => (
                                <div key={img.id} className="relative group overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
                         <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center uppercase tracking-wide">News Center</h2>
                         <p className="text-gray-500 text-center">Coming Soon...</p>
                    </div>
                );
            case 'corporate-profile':
            default:
                return (
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Corporate Profile</h2>
                        
                        <div className="space-y-6 text-black text-md leading-relaxed text-justify mb-8">
                            <p>
                                Fujian Yihua Electrical Machinery Co., Ltd. was founded in 1994, located in "Generator City of China"– Fu'an City, which is the national key base for all kinds of generators. We are a key enterprise in Fu'an, having our own right of exporting the products. Our company is committed to pursuing technology innovation, developing and manufacturing various generators and generator sets for decades.
                            </p>
                            <p>
                                Our main products include the following items:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Land & marine used A.C. synchronous generators (ST&STC series single/three phase third-harmonic excitation synchronous generator; TFX series three-phase compound excitation synchronous generator; TFW2 series three phase brushless synchronous generator);</li>
                                <li>Diesel generator sets (open type, silent type, trailer type and automatic start/stop diesel generator set). These products sell well both at home and abroad. The TFKX-H three phase compound excitation and TFW-H series brushless synchronous generators have obtained the certifications of China Classification Society (CCS) as well as Register of Fishing Vessel of the People's Republic of China (ZY). Besides, the land used brush, brushless generators and the diesel generators have got the "CE" certification.</li>
                            </ul>
                            <p>
                                Our company actively implements ISO9001:2000 international quality administration system and we operate the company with the spirit of "Devotion & Creation & Teamwork & Credit". We focus on the development strategy, take complete quality administration system as the foundation, technology creation as the method and market creation as the target, which leads to a sustainable development of the company. Our company continues to improve our products, and has obtained more than 20 national patents. Our products have won the title of "Outstanding New Products in Fujian Province", "Customers Satisfied Products in Fujian Province" and "Famous Brand of Fujian Province".
                            </p>
                        </div>

                        <div className="w-full">
                            <img 
                                src={corporateProfileImage} 
                                alt="Corporate Profile" 
                                className="w-full w-80"
                            />
                        </div>
                    </div>
                );
        }
    };

    const getPageTitle = () => {
         switch (activeSlug) {
            case 'factory-overview': return 'Factory Overview';
            case 'news-center': return 'News Center';
            case 'corporate-profile': default: return 'Corporate Profile';
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
                   <Link to="/about" className="hover:text-red">About Yihua</Link>
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
                            About Yihua
                        </h2>
                        <div className="bg-white shadow-sm border border-gray-100">
                             {[
                                 { name: 'Corporate Profile', slug: 'corporate-profile' },
                                 { name: 'Factory Overview', slug: 'factory-overview' }
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
                             <h2 className="font-bold text-3xl mb-6 text-[#1e1e1e] uppercase border-b-2 border-gray-200 pb-2 inline-block">
                                 Help & Contact
                             </h2>
                             
                             <p>
                                 <strong className="block text-gray-800 mb-1">Address:</strong>
                                 No. 16, Jinxin Road, Chengyang Town, Fu'an City, Ningde City, Fujian Province, China
                             </p>
                             <p>
                                 <strong className="block text-gray-800 mb-1">Tel:</strong>
                                 0086-593-6668988<br/>
                                 0086-593-6382918
                             </p>
                             <p>
                                 <strong className="text-gray-800 mb-1">Fax: </strong>
                                 0086 593 6582997
                             </p>
                             <p>
                                 <strong className="text-gray-800 mb-1">Mobile/WhatsApp: </strong>
                                 +86 18650536888
                             </p>
                             <p>
                                 <strong className="text-gray-800 mb-1">E-mail: </strong>
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
        </div>
    );
};

export default About;
