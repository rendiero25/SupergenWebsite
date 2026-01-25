import { useState, useEffect, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import productsData from '../data/products/products.json';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaHome, FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Types
interface Brand {
    id: string;
    name: string;
    category?: string;
    logo: string;
    'image-product': string | string[];
    description: string;
    keywords?: string[];
    [key: string]: unknown;
}

interface SubCategory {
    id: string;
    name: string;
    'image-banner'?: string;
    description: string;
    [key: string]: unknown;
}

const Products = () => {
    const location = useLocation();
    const [isGenSetOpen, setIsGenSetOpen] = useState(true);
    const [isBrushlessOpen, setIsBrushlessOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedHzTab, setSelectedHzTab] = useState(0);

    // Current path segments
    const pathSegments = location.pathname.split('/').filter(Boolean);

    const mainCategorySlug = pathSegments[1] || 'generator-set';
    const subCategorySlug = pathSegments[2] || 'open-type';
    const brandSlug = pathSegments[3] || null;

    // Find Mapping
    const mainCategory = productsData.find(p => 
        p.name.toLowerCase().replace(/\s+/g, '-') === mainCategorySlug
    );
    
    // Get current subcategory
    const currentSubCategory = useMemo<SubCategory | null>(() => {
        if (!mainCategory) return null;
        
        const found = mainCategory.type?.find(t => 
            t.name.toLowerCase().replace(/\s+/g, '-') === subCategorySlug
        );
        
        if (found) return found as SubCategory;
        
        if (mainCategory.type && mainCategory.type.length > 0) {
            return mainCategory.type[0] as SubCategory;
        }
        
        return null;
    }, [mainCategory, subCategorySlug]);

    // Get brands from subcategory
    const brands = useMemo<Brand[]>(() => {
        if (!currentSubCategory) return [];
        const keys = Object.keys(currentSubCategory);
        const typeKey = keys.find(k => k.endsWith('type-type') || (Array.isArray(currentSubCategory[k]) && k !== 'image-banner'));
        return typeKey ? (currentSubCategory[typeKey] as Brand[]) : [];
    }, [currentSubCategory]);
    
    // Find selected brand for product details
    const selectedBrand = useMemo<Brand | null>(() => {
        if (!brandSlug) return null;
        return brands.find(b => b.name.toLowerCase().replace(/\s+/g, '-') === brandSlug) || null;
    }, [brandSlug, brands]);

    // Reset selected image and tab when brand changes
    useEffect(() => {
        if (brandSlug) {
            setSelectedImageIndex(0);
            setSelectedHzTab(0);
        }
    }, [brandSlug]);

    // Get product images (handle both array and string)
    const productImages = useMemo<string[]>(() => {
        if (!selectedBrand) return [];
        const images = selectedBrand['image-product'];
        if (Array.isArray(images)) return images;
        if (typeof images === 'string') return [images];
        return [];
    }, [selectedBrand]);

    // Get related products (other brands in the same category, or from Generator Set for Brushless Alternator)
    const relatedProducts = useMemo<Brand[]>(() => {
        // If we have brands in current category, filter out current brand
        if (brands.length > 1) {
            return brands.filter(b => b.id !== selectedBrand?.id).slice(0, 4);
        }
        
        // For Brushless Alternator or when only 1 brand, get products from Generator Set Open Type
        const generatorSet = productsData.find(p => p.name === 'Generator Set');
        if (generatorSet && generatorSet.type) {
            const openType = generatorSet.type.find(t => t.name === 'Open Type');
            if (openType) {
                const keys = Object.keys(openType);
                const typeKey = keys.find(k => k.endsWith('type-type') || (Array.isArray(openType[k]) && k !== 'image-banner'));
                if (typeKey) {
                    return (openType[typeKey] as Brand[]).slice(0, 4);
                }
            }
        }
        
        return [];
    }, [brands, selectedBrand]);

    // Render brand list for sidebar
    const renderBrandList = (subCatSlug: string) => {
        if (subCategorySlug !== subCatSlug || mainCategorySlug !== 'generator-set' || brands.length === 0) {
            return null;
        }
        
        return (
            <div className="bg-gray-50 border-b border-gray-100">
                {brands.map((brand) => {
                    const brandSlugName = brand.name.toLowerCase().replace(/\s+/g, '-');
                    const isSelected = brandSlug === brandSlugName;
                    return (
                        <Link 
                            key={brand.id}
                            to={`/products/generator-set/${subCatSlug}/${brandSlugName}`}
                            className={`flex items-center gap-2 pl-10 pr-5 py-2 text-xs transition-colors ${
                                isSelected 
                                    ? 'text-[#E60013] font-medium bg-white' 
                                    : 'text-gray-500 hover:text-[#E60013]'
                            }`}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#E60013]' : 'bg-gray-300'}`}></span>
                            {brand.name}
                        </Link>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="bg-gray-50 min-h-screen font-outfit">
            {/* Product Details Banner - Only shows on product details page */}
            {selectedBrand && (
                <div className="w-full">
                    <img 
                        src="/images/products/productdetails-bg.jpg" 
                        alt="Product Details Banner" 
                        className="w-full h-55 object-cover"
                    />
                </div>
            )}
            
            {/* Breadcrumb */}
            <div className="w-full bg-white">
               <div className="container mx-auto bg-white px-4 py-7 mb-5 flex items-center text-sm text-black gap-1 flex-wrap">
                   <Link to="/" className="hover:text-red-600"><FaHome /></Link>
                   <IoIosArrowForward />
                   <Link to="/products" className="hover:text-red-600">Products</Link>
                   
                   {mainCategory && (
                        <>
                            <IoIosArrowForward />
                            <Link 
                                to={`/products/${mainCategorySlug}`}
                                className={!subCategorySlug && !brandSlug ? "text-red-600 font-bold" : "hover:text-red-600"}
                            >
                                {mainCategory.name}
                            </Link>
                        </>
                   )}

                   {currentSubCategory && mainCategorySlug === 'generator-set' && (
                        <>
                            <IoIosArrowForward />
                            <Link 
                                to={`/products/${mainCategorySlug}/${subCategorySlug}`}
                                className={!brandSlug ? "text-red-600 font-bold" : "hover:text-red-600"}
                            >
                                {currentSubCategory.name}
                            </Link>
                        </>
                   )}

                   {selectedBrand && (
                        <>
                            <IoIosArrowForward />
                            <span className="text-red-600 font-bold">
                                {selectedBrand.name}
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
                        <div className="flex flex-col items-start gap-2 bg-red py-7">
                            <h2 className="text-white font-bold px-6 uppercase text-3xl tracking-wide">
                                Products
                            </h2>
                            <div className="w-5 h-1 bg-white ml-6"></div>
                        </div>
                        <div className="bg-white shadow-sm border border-gray-200">
                             {/* Generator Set */}
                             <div>
                                <button 
                                    onClick={() => setIsGenSetOpen(!isGenSetOpen)}
                                    className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${
                                        isGenSetOpen || mainCategorySlug === 'generator-set' 
                                            ? 'bg-red/10 text-black' 
                                            : 'bg-white text-gray-700 hover:text-[#E60013]'
                                    }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <IoIosArrowForward className="text-sm" />
                                        <span className="font-medium">Generator Set</span>
                                    </span>
                                    <IoIosArrowDown className={`transition-transform duration-300 ${isGenSetOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                <div className={`overflow-hidden transition-all duration-300 ${isGenSetOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
                                    {/* Open Type */}
                                    <div>
                                        <Link to="/products/generator-set/open-type" 
                                            className={`flex items-center gap-2 px-5 py-3 text-sm transition-colors border-b border-gray-100 ${
                                                subCategorySlug === 'open-type' && mainCategorySlug === 'generator-set'
                                                    ? 'text-[#E60013] font-medium' 
                                                    : 'text-gray-600 hover:text-[#E60013]'
                                            }`}
                                        >
                                            <IoIosArrowForward className="text-xs" />
                                            Open Type
                                        </Link>
                                        {renderBrandList('open-type')}
                                    </div>
                                    
                                    {/* Silent Type */}
                                    <div>
                                        <Link to="/products/generator-set/silent-type" 
                                            className={`flex items-center gap-2 px-5 py-3 text-sm transition-colors border-b border-gray-100 ${
                                                subCategorySlug === 'silent-type' && mainCategorySlug === 'generator-set'
                                                    ? 'text-[#E60013] font-medium' 
                                                    : 'text-gray-600 hover:text-[#E60013]'
                                            }`}
                                        >
                                            <IoIosArrowForward className="text-xs" />
                                            Silent Type
                                        </Link>
                                        {renderBrandList('silent-type')}
                                    </div>
                                    
                                    {/* Container Type */}
                                    <div>
                                        <Link to="/products/generator-set/container-type" 
                                            className={`flex items-center gap-2 px-5 py-3 text-sm transition-colors border-b border-gray-100 ${
                                                subCategorySlug === 'container-type' && mainCategorySlug === 'generator-set'
                                                    ? 'text-[#E60013] font-medium' 
                                                    : 'text-gray-600 hover:text-[#E60013]'
                                            }`}
                                        >
                                            <IoIosArrowForward className="text-xs" />
                                            Container Type
                                        </Link>
                                        {renderBrandList('container-type')}
                                    </div>
                                </div>
                             </div>

                             {/* Brushless Alternator */}
                             <div className="border-t border-gray-200">
                                <button 
                                    onClick={() => setIsBrushlessOpen(!isBrushlessOpen)}
                                    className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${
                                        isBrushlessOpen || mainCategorySlug === 'brushless-alternator' 
                                            ? 'bg-red/10 text-black' 
                                            : 'bg-white text-gray-700 hover:text-[#E60013]'
                                    }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <IoIosArrowForward className="text-sm" />
                                        <span className="font-medium">Brushless Alternator</span>
                                    </span>
                                    <IoIosArrowDown className={`transition-transform duration-300 ${isBrushlessOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                <div className={`overflow-hidden transition-all duration-300 ${isBrushlessOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                                    {/* Yihua Product */}
                                    <Link 
                                        to="/products/brushless-alternator/brushless-alternator/yihua"
                                        className={`flex items-center gap-2 px-5 py-3 text-sm transition-colors border-b border-gray-100 ${
                                            mainCategorySlug === 'brushless-alternator' && brandSlug === 'yihua'
                                                ? 'text-[#E60013] font-medium' 
                                                : 'text-gray-600 hover:text-[#E60013]'
                                        }`}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full ${mainCategorySlug === 'brushless-alternator' && brandSlug === 'yihua' ? 'bg-[#E60013]' : 'bg-gray-300'}`}></span>
                                        Yihua Alternator
                                    </Link>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Help & Contact */}
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
                    {selectedBrand ? (
                        /* Product Details View */
                        <div className="bg-white">
                            {/* Product Details Header */}
                            <div className="p-6 border-b border-gray-100">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Image Gallery */}
                                    <div className="space-y-4">
                                        {/* Main Image */}
                                        <div className="border border-gray-200 p-4 bg-white">
                                            <img 
                                                src={productImages[selectedImageIndex]} 
                                                alt={selectedBrand.name}
                                                className="w-full h-80 object-contain"
                                            />
                                        </div>
                                        {/* Thumbnail Gallery */}
                                        {productImages.length > 1 && (
                                            <div className="flex gap-2 overflow-x-auto">
                                                {productImages.map((img, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => setSelectedImageIndex(idx)}
                                                        className={`flex-shrink-0 w-20 h-20 border-2 p-1 transition-colors ${
                                                            selectedImageIndex === idx 
                                                                ? 'border-[#E60013]' 
                                                                : 'border-gray-200 hover:border-gray-400'
                                                        }`}
                                                    >
                                                        <img 
                                                            src={img} 
                                                            alt={`${selectedBrand.name} ${idx + 1}`}
                                                            className="w-full h-full object-contain"
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Product Info */}
                                    <div className="space-y-6">
                                        <h1 className="text-2xl font-bold text-gray-900">{selectedBrand.name}</h1>
                                        
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {selectedBrand.description}
                                        </p>

                                        {/* Keywords */}
                                        {selectedBrand.keywords && selectedBrand.keywords.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {selectedBrand.keywords.map((keyword, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                                    >
                                                        {keyword}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Contact Icons */}
                                        <div className="flex items-center gap-4 py-4 border-t border-b border-gray-100">
                                            <span className="flex items-center gap-2 text-sm text-gray-600">
                                                <FaWhatsapp className="text-black w-7 h-7" />
                                                <span>Whatsapp: +86 18650536888</span>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <MdEmail className="text-black w-7 h-7" />
                                            <span>yihua@e-yihua.com</span>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4 pt-4">
                                            <a 
                                                href="mailto:yihua@e-yihua.com?subject=Inquiry about products"
                                                className="flex items-center gap-2 bg-[#E60013] hover:bg-red-700 text-white px-10 py-3 font-medium transition-colors"
                                            >
                                                <MdEmail />
                                                Inquiry
                                            </a>
                                            <a 
                                                href="#related"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-gray-900 hover:bg-green-600 text-white px-10 py-3 font-medium transition-colors"
                                            >
                                                {/* <FaWhatsapp /> */}
                                                Related
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Detailed Description Section */}
                            <div className="py-6 bg-gray-50">
                                {/* <h2 className="text-lg font-bold text-gray-900 mb-4 border-b-2 border-[#E60013] pb-2 inline-block">
                                    Description
                                </h2> */}
                                
                                {/* Get Hz-type data if available */}
                                {(() => {
                                    const keys = Object.keys(selectedBrand);
                                    const hzTypeKey = keys.find(k => k.endsWith('-type') && Array.isArray(selectedBrand[k]));
                                    const hzTypes = hzTypeKey ? (selectedBrand[hzTypeKey] as Record<string, unknown>[]) : [];
                                    
                                    if (hzTypes.length > 0) {
                                        const currentHz = hzTypes[selectedHzTab] || hzTypes[0];
                                        const descKeys = Object.keys(currentHz);
                                        const desc1Key = descKeys.find(k => k.includes('description1'));
                                        const desc2Key = descKeys.find(k => k.includes('description2'));
                                        const imageKey = descKeys.find(k => k.includes('image') && !k.includes('image1') && !k.includes('image2'));
                                        const image1Key = descKeys.find(k => k.includes('image1'));
                                        const image2Key = descKeys.find(k => k.includes('image2'));
                                        
                                        return (
                                            <div>
                                                {/* Tab Buttons */}
                                                <div className="flex bg-white px-6 pt-6">
                                                    {hzTypes.map((hz, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setSelectedHzTab(idx)}
                                                            className={`cursor-pointer px-8 py-4 mr-1 text-sm font-medium transition-colors relative ${
                                                                selectedHzTab === idx
                                                                    ? 'text-white bg-gray-700'
                                                                    : 'text-gray-600 hover:text-[#E60013] bg-gray-100'
                                                            }`}
                                                        >
                                                            {hz.name as string}
                                                            {selectedHzTab === idx && (
                                                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E60013]"></span>
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                                
                                                {/* Tab Content */}
                                                <div className="bg-white p-6">
                                                    {/* <h3 className="text-base font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                                        <span className="bg-[#E60013] text-white text-xs px-2 py-1 rounded">
                                                            {currentHz.name as string}
                                                        </span>
                                                        {currentSubCategory?.name} - {selectedBrand.name}
                                                    </h3> */}
                                                    
                                                    {desc1Key && currentHz[desc1Key] && (
                                                        <div className="text-sm text-black leading-relaxed whitespace-pre-line mb-4">
                                                            {currentHz[desc1Key] as string}
                                                        </div>
                                                    )}
                                                    
                                                    <div className="flex gap-4 my-4">
                                                        {imageKey && currentHz[imageKey] && (
                                                            <img 
                                                                src={currentHz[imageKey] as string} 
                                                                alt={currentHz.name as string}
                                                                className="w-full object-cover"
                                                            />
                                                        )}
                                                        {image1Key && currentHz[image1Key] && (
                                                            <img 
                                                                src={currentHz[image1Key] as string} 
                                                                alt={`${currentHz.name} 1`}
                                                                className="max-h-48 object-cover"
                                                            />
                                                        )}
                                                        {image2Key && currentHz[image2Key] && (
                                                            <img 
                                                                src={currentHz[image2Key] as string} 
                                                                alt={`${currentHz.name} 2`}
                                                                className="max-h-48 object-cover"
                                                            />
                                                        )}
                                                    </div>
                                                    
                                                    {desc2Key && currentHz[desc2Key] && (
                                                        <div className="text-sm text-black leading-relaxed whitespace-pre-line">
                                                            {currentHz[desc2Key] as string}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    }
                                    
                                    return (
                                        <p className="text-gray-600 leading-relaxed">
                                            {selectedBrand.description}
                                        </p>
                                    );
                                })()}
                            </div>
                        </div>
                    ) : currentSubCategory ? (
                        /* Category/Brand List View */
                        <div className="bg-white">
                            {/* Hero Banner */}
                            {currentSubCategory['image-banner'] && (
                                <div>
                                    <img 
                                        src={currentSubCategory['image-banner']} 
                                        alt={currentSubCategory.name} 
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            )}

                            {/* Description */}
                            <div className="mb-12 p-7">
                                <div className="text-black leading-relaxed text-lg whitespace-pre-line space-y-4">
                                     {currentSubCategory.description}
                                </div>
                            </div>

                            {/* Brand Grid */}
                            {brands.length > 0 && (
                                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 px-7 pb-7">
                                    {brands.map((brand) => (
                                        <Link 
                                            key={brand.id} 
                                            to={`/products/${mainCategorySlug}/${subCategorySlug}/${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="border border-gray-200 hover:shadow-lg transition-shadow bg-white flex flex-col p-1 items-center group cursor-pointer"
                                        >
                                            <div className="h-40 flex items-center justify-center mb-4 w-full">
                                                <img 
                                                     src={brand.logo} 
                                                     alt={brand.name} 
                                                     className="w-65 object-cover filter transition-all duration-300"
                                                />
                                            </div>
                                            <h3 className="text-sm font-bold uppercase text-gray-800">{brand.name}</h3>
                                            <span className="text-sm text-gray-400 px-5 py-2 my-2 group-hover:text-[#E60013] group-hover:bg-red group-hover:text-white transition-colors">Click Here</span>
                                        </Link>
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

            {/* Full Width Related Products - Only for Product Details */}
            {selectedBrand && relatedProducts.length > 0 && (
                <div 
                    className="w-full py-16 px-6 bg-cover bg-center bg-no-repeat relative"
                    style={{ backgroundImage: "url('/images/products/productrelated-bg.jpg')" }}
                >
                    <div id='related' className="relative z-10 container mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Related Products
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
                            {relatedProducts.map((brand) => {
                                const brandImages = brand['image-product'];
                                const firstImage = Array.isArray(brandImages) ? brandImages[0] : brandImages;
                                // Determine the correct URL based on whether this is from current category or Generator Set
                                const isFromCurrentCategory = brands.some(b => b.id === brand.id);
                                const linkUrl = isFromCurrentCategory 
                                    ? `/products/${mainCategorySlug}/${subCategorySlug}/${brand.name.toLowerCase().replace(/\s+/g, '-')}`
                                    : `/products/generator-set/open-type/${brand.name.toLowerCase().replace(/\s+/g, '-')}`;
                                return (
                                    <Link 
                                        key={brand.id}
                                        to={linkUrl}
                                        className="bg-white hover:shadow-xl transition-shadow group"
                                    >
                                        {/* Product Name Header */}
                                        <div className="text-center py-2 border-b border-gray-100">
                                            <span className="text-black text-md font-medium">
                                                {brand.name}
                                            </span>
                                        </div>
                                        {/* Product Image */}
                                        <div className="h-70 flex items-center justify-center p-4">
                                            <img 
                                                src={firstImage || brand.logo} 
                                                alt={brand.name}
                                                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                                            />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Full Width Inquiry Form - Only for Product Details */}
            {selectedBrand && (
                <div className="w-full py-15 px-6 bg-gray-100">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-1 text-center">
                            Inquiry
                        </h2>
                        <p className="text-sm text-black text-center mb-8">
                            We will reply you within <span className="text-[#E60013]">24 hours</span>.
                        </p>
                        
                        <form className="max-w-4xl mx-auto space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input 
                                    type="text"
                                    placeholder="Product Name:"
                                    defaultValue={selectedBrand?.name ? `Product Name:${selectedBrand.name}` : ''}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 text-sm text-gray-600 focus:outline-none focus:border-[#E60013]"
                                />
                                <input 
                                    type="email"
                                    placeholder="Email(*)"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 text-sm text-gray-600 focus:outline-none focus:border-[#E60013]"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input 
                                    type="text"
                                    placeholder="WhatsApp/Telegram/Viber..."
                                    className="w-full px-4 py-3 bg-white border border-gray-200 text-sm text-gray-600 focus:outline-none focus:border-[#E60013]"
                                />
                                <input 
                                    type="text"
                                    placeholder="Demanded Power (KVA)"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 text-sm text-gray-600 focus:outline-none focus:border-[#E60013]"
                                />
                            </div>
                            <textarea 
                                placeholder="Message(*)"
                                rows={4}
                                className="w-full px-4 py-3 bg-white border border-gray-200 text-sm text-gray-600 focus:outline-none focus:border-[#E60013] resize-none"
                            ></textarea>
                            <div className="text-center pt-2">
                                <button 
                                    type="submit"
                                    className="bg-[#E60013] hover:bg-red-700 text-white px-10 py-3 text-sm font-medium transition-colors"
                                >
                                    Get A Quote Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;