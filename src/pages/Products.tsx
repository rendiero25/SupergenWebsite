import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import productsData from '../data/products/products.json';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";

const Products = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isGenSetOpen, setIsGenSetOpen] = useState(true);

    // Current path segments
    const pathSegments = location.pathname.split('/').filter(Boolean);
    // pathSegments[0] is 'products'
    // pathSegments[1] should be 'generator-set' or 'brushless-alternator'
    // pathSegments[2] should be 'open-type', 'silent-type', etc.

    const mainCategorySlug = pathSegments[1] || 'generator-set';
    const subCategorySlug = pathSegments[2] || 'open-type';

    // Find Mapping
    const mainCategory = productsData.find(p => 
        p.name.toLowerCase().replace(/\s+/g, '-') === mainCategorySlug
    );
    
    // Default to first sub if not found, but we want 'open-type' specifically for Generator Set
    let currentSubCategory = null; 
    
    if (mainCategory) {
         currentSubCategory = mainCategory.type?.find(t => 
             t.name.toLowerCase().replace(/\s+/g, '-') === subCategorySlug
         );
         
         // If no subcategory match found (e.g. just /products/generator-set), default to first
         if (!currentSubCategory && mainCategory.type && mainCategory.type.length > 0) {
             currentSubCategory = mainCategory.type[0];
         }
    }

    // Identify the specific key for brands (e.g., 'opentype-type')
    // Since keys are inconsistent, we find the array property that ends in '-type' or contains brands
    const getBrands = (subCat: any) => {
        if (!subCat) return [];
        // Look for keys like 'opentype-type', 'silenttype-type'
        const keys = Object.keys(subCat);
        const typeKey = keys.find(k => k.endsWith('type-type') || Array.isArray(subCat[k]) && k !== 'image-banner');
        return typeKey ? subCat[typeKey] : [];
    };

    const brands = getBrands(currentSubCategory);

    return (
        <div className="bg-gray-50 min-h-screen font-outfit pb-20">
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
               <div className="flex items-center text-xs text-gray-500 gap-1">
                   <Link to="/" className="hover:text-red-600"><FaHome /></Link>
                   <IoIosArrowForward />
                   <Link to="/products" className="hover:text-red-600">Products</Link>
                   
                   {mainCategory && (
                        <>
                            <IoIosArrowForward />
                            <span className={!subCategorySlug ? "text-red-600 font-bold" : ""}>
                                {mainCategory.name}
                            </span>
                        </>
                   )}

                   {currentSubCategory && mainCategorySlug === 'generator-set' && (
                        <>
                            <IoIosArrowForward />
                            <span className="text-red-600 font-bold">
                                {currentSubCategory.name}
                            </span>
                        </>
                   )}
               </div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* SIDEBAR */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Products Menu */}
                    <div>
                        <h2 className="bg-[#E60013] text-white font-bold py-3 px-6 uppercase text-lg tracking-wide">
                            Products
                        </h2>
                        <div className="bg-white shadow-sm border border-gray-100">
                             {/* Generator Set */}
                             <div className="border-b border-gray-100">
                                <button 
                                    onClick={() => setIsGenSetOpen(!isGenSetOpen)}
                                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:text-[#E60013] transition-colors"
                                >
                                    <span className="font-semibold text-gray-700">Generator Set</span>
                                    <IoIosArrowDown className={`transition-transform duration-300 ${isGenSetOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${isGenSetOpen ? 'max-h-96' : 'max-h-0'}`}>
                                    <Link to="/products/generator-set/open-type" 
                                        className={`block px-8 py-3 text-sm hover:text-[#E60013] transition-colors border-l-4 ${subCategorySlug === 'open-type' ? 'border-[#E60013] text-[#E60013] bg-white' : 'border-transparent text-gray-600'}`}
                                    >
                                        &gt; Open Type
                                    </Link>
                                    <Link to="/products/generator-set/silent-type" 
                                        className={`block px-8 py-3 text-sm hover:text-[#E60013] transition-colors border-l-4 ${subCategorySlug === 'silent-type' ? 'border-[#E60013] text-[#E60013] bg-white' : 'border-transparent text-gray-600'}`}
                                    >
                                        &gt; Silent Type
                                    </Link>
                                    <Link to="/products/generator-set/container-type" 
                                        className={`block px-8 py-3 text-sm hover:text-[#E60013] transition-colors border-l-4 ${subCategorySlug === 'container-type' ? 'border-[#E60013] text-[#E60013] bg-white' : 'border-transparent text-gray-600'}`}
                                    >
                                        &gt; Container Type
                                    </Link>
                                </div>
                             </div>

                             {/* Brushless Alternator */}
                             <div className="border-b border-gray-100">
                                 <Link to="/products/brushless-alternator" 
                                    className={`block w-full px-6 py-4 text-left font-semibold hover:text-[#E60013] transition-colors ${mainCategorySlug === 'brushless-alternator' ? 'text-[#E60013]' : 'text-gray-700'}`}
                                 >
                                    Brushless Alternator
                                 </Link>
                             </div>
                        </div>
                    </div>

                    {/* Help & Contact */}
                    <div>
                         <h2 className="font-bold text-xl mb-6 text-[#1e1e1e] uppercase border-b-2 border-gray-200 pb-2 inline-block">
                             Help & Contact
                         </h2>
                         <div className="bg-white p-6 shadow-sm border border-gray-100 text-sm text-gray-600 space-y-4">
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
                                 <strong className="block text-gray-800 mb-1">Fax:</strong>
                                 0086 593 6582997
                             </p>
                             <p>
                                 <strong className="block text-gray-800 mb-1">Mobile/WhatsApp:</strong>
                                 +86 18650536888
                             </p>
                             <p>
                                 <strong className="block text-gray-800 mb-1">E-mail:</strong>
                                 yihua@e-yihua.com
                             </p>
                         </div>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="lg:col-span-3">
                    {currentSubCategory ? (
                        <div className="bg-white shadow-sm p-8">
                            {/* Hero Banner */}
                            {currentSubCategory['image-banner'] && (
                                <div className="mb-8">
                                    <img 
                                        src={currentSubCategory['image-banner']} 
                                        alt={currentSubCategory.name} 
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            )}

                            {/* Description */}
                            <div className="mb-12">
                                <h1 className="text-3xl font-bold mb-6 text-[#1e1e1e] uppercase opacity-0 animate-fadeIn" style={{ animationFillMode: 'forwards' }}>
                                    {/* Usually the description starts with the name, so we might not need an H1 if it's integrated, but design shows header maybe? 
                                       Actually design shows "Products" header red bar, but content area title is implied.
                                       Let's render description paragraphs.
                                    */}
                                </h1>
                                <div className="text-gray-600 leading-relaxed text-sm whitespace-pre-line space-y-4">
                                     {currentSubCategory.description}
                                </div>
                            </div>

                            {/* Brand Grid */}
                            {brands && brands.length > 0 && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {brands.map((brand: any) => (
                                        <div key={brand.id} className="border border-gray-200 hover:shadow-lg transition-shadow bg-white flex flex-col items-center p-6 group cursor-pointer">
                                            <div className="h-20 flex items-center justify-center mb-4 w-full">
                                                <img 
                                                     src={brand.logo} 
                                                     alt={brand.name} 
                                                     className="max-h-full max-w-full object-contain filter transition-all duration-300"
                                                />
                                            </div>
                                            <h3 className="text-xs font-bold uppercase text-gray-800 mb-2">{brand.name}</h3>
                                            <span className="text-[10px] text-gray-400 group-hover:text-[#E60013] transition-colors">Click Here</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="bg-white shadow-sm p-8 text-center text-gray-500">
             
                            Category not found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;