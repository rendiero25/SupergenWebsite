import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import solutionData from '../data/products/solution.json';
import solutionBanner from '/images/solution/solution-banner.jpg';

const Solutions = () => {
    const location = useLocation();
    
    // Path parsing: /solutions/mining
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const activeSlug = pathSegments[1] || 'mining'; // Default to first one or handle empty

    // Find active solution
    const activeSolution = solutionData.find(s => 
        s.name.toLowerCase().replace(/\s+/g, '').replace('&', '') === activeSlug.replace('-', '').replace('&', '') ||
        s.name.toLowerCase().replace(/\s+/g, '-') === activeSlug
    );

    // Fallback if not found (or redirect logic could go here)
    const currentSolution = activeSolution || solutionData[0];

    return (
        <div className="bg-gray min-h-screen font-outfit pb-20">
             {/* Hero Banner */}
             <div className="relative w-full h-[300px] md:h-[430px]">
                <img 
                    src={solutionBanner} 
                    alt="Solutions Banner" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Breadcrumb */}
            <div className="w-full bg-white">
               <div className="container mx-auto bg-white px-4 py-7 mb-5 flex items-center text-sm text-black gap-1">
                   <Link to="/" className="hover:text-red-600"><FaHome /></Link>
                   <IoIosArrowForward />
                   <Link to="/solutions" className="hover:text-red">Solutions</Link>
                   <IoIosArrowForward />
                   <span className="">
                        {currentSolution.name}
                   </span>
               </div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* SIDEBAR */}
                <div className="lg:col-span-1 space-y-8">
                     {/* Solutions Menu */}
                     <div>
                        <div className="flex flex-col items-start gap-2 bg-red py-7">
                            <h2 className="text-white font-bold px-6 uppercase text-3xl tracking-wide">
                                Solutions
                                
                            </h2>
                            <div className="w-5 h-1 bg-white ml-6"></div>
                        </div>
                        
                        <div className="bg-white border border-gray-100">
                             {solutionData.map((sol) => {
                                 const slug = sol.name.toLowerCase().replace(/\s+/g, '-');
                                 // Simple active check
                                 const isActive = currentSolution.id === sol.id;
                                 
                                 return (
                                     <Link 
                                        key={sol.id}
                                        to={`/solutions/${slug}`}
                                        className={`block px-6 py-3 text-sm border-b border-gray-100 hover:text-[#E60013] transition-colors
                                            ${isActive ? 'text-[#E60013] font-semibold' : 'text-gray-700'}
                                        `}
                                     >
                                        <span className="flex items-center gap-3">
                                            <IoIosArrowForward className="text-sm text-black" />
                                            <div className="text-black text-lg">{sol.name}</div>
                                        </span>
                                     </Link>
                                 );
                             })}
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
                    <div className="bg-white p-8">
                        {/* If data exists */}
                        {currentSolution.data && currentSolution.data.map((item, index) => (
                            <div key={index} className="">
                                {/* Section 1: Text Left, Image Right */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <p className="text-black leading-tight text-md whitespace-pre-line text-justify">
                                        {item.description1}
                                    </p>
                                    <div className="h-[20rem] overflow-hidden">
                                        <img src={item.image1} alt={currentSolution.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>

                                {/* Section 2: Image Left, Text Right */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div className="order-2 md:order-1 h-[20rem] overflow-hidden">
                                        <img src={item.image2} alt={currentSolution.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <p className="order-1 md:order-2 text-black leading-tight text-md whitespace-pre-line text-justify">
                                        {item.description2}
                                    </p>
                                </div>

                                {/* Section 3: Text Left, Image Right */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <p className="text-black leading-tight text-md whitespace-pre-line text-justify">
                                        {item.description3}
                                    </p>
                                    <div className="h-[20rem] overflow-hidden">
                                        <img src={item.image3} alt={currentSolution.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;