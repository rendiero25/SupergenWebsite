import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import contactBanner from '/images/contact/contact-banner.jpg';

const HelpAndContact = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-outfit pb-20">
      {/* Banner */}
      <div className="relative w-full h-[250px] md:h-[350px]">
        <img 
          src={contactBanner} 
          alt="Contact Banner" 
          className="w-full h-full object-cover"
        />
        {/* Breadcrumb Overlay or separate? Design shows just image, breadcrumb below */}
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-xs text-gray-500 gap-1">
            <Link to="/" className="hover:text-red-600"><FaHome /></Link>
            <IoIosArrowForward />
            <span className="text-red-600 font-bold">Help & Contact</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#1e1e1e] mb-4 uppercase tracking-wide">Contact Form</h1>
          <Link to="/products" className="inline-block bg-[#E60013] text-white px-8 py-2 rounded-full font-bold hover:bg-red-700 transition-colors uppercase text-sm">
            View Products
          </Link>
        </div>

        {/* Contact Section */}
        <div className="bg-white shadow-lg flex flex-col lg:flex-row mb-12">
            {/* Form Side */}
            <div className="w-full lg:w-3/5 p-8 lg:p-12">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Partner With Us</h2>
                    <p className="text-gray-500 text-sm">Please fill out the form to contact an YIHUA expert.</p>
                </div>
                
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="email" placeholder="Email*" className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-[#E60013]" />
                        <input type="text" placeholder="Name" className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-[#E60013]" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <input type="text" placeholder="Whats App/Telegram/Viber..." className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-[#E60013]" />
                         <input type="text" placeholder="Demanded Power (kVA)" className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-[#E60013]" />
                    </div>
                    <textarea placeholder="Message*" rows={4} className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-[#E60013]"></textarea>
                    
                    <div className="text-center mt-6">
                        <button type="submit" className="bg-[#E60013] text-white px-10 py-2 rounded-full font-bold hover:bg-red-700 transition-colors uppercase text-sm shadow-md">
                            Send
                        </button>
                    </div>
                </form>
            </div>

            {/* Info Side */}
            <div className="w-full lg:w-2/5 bg-[#3c3c3b] text-white p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4">Headquarter</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        No. 16, Jinxin Road, Chengyang Town, Fuan City, Ningde City, Fujian Province, China
                    </p>
                </div>
                <div>
                     <h3 className="text-lg font-bold mb-4">Help&Contact</h3>
                     <div className="text-gray-300 text-sm space-y-2">
                        <p>Tel: 0086-593-6685366</p>
                        <p className="pl-6">0086-593-6382948</p>
                        <p>Fax: 0086-593-6582997</p>
                        <p>Mobile/WhatsApp: +86 18650536888</p>
                        <p>E-mail: yihua@e-yihua.com</p>
                     </div>
                </div>
            </div>
        </div>

        {/* Warehouses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
            {[
                {
                    title: "Bangladesh Warehouse",
                    address: "Address: Gouripur, Mudonpur, Bandar, Narayanganj",
                    mobile: "Mobile: +880-1911311116, +880-1768652697",
                    whatsapp: "Whatsapp/Wechat: +880-1711391979",
                    email: "Email: yihua@e-yihua.com"
                },
                {
                    title: "The Philippines Warehouse",
                    address: "Address: No. 1111, Dr. A.Santos, Stner J., Wagil St, Brgy. San Dionisio, Paranaque City",
                    mobile: "Mobile/Whatsapp/Viber: +63 917 714 5888",
                    email: "Email: yihua@e-yihua.com"
                },
                {
                    title: "Indonesia Warehouse",
                    address: "Address: Gudang Tunas Bitung No.7 Blok A2, Kadu, Curug, Tangerang, Banten",
                    mobile: "Mobile/Whatsapp/Viber: +62 812 9900 1888",
                    email: "Email: yihua@e-yihua.com"
                },
                {
                    title: "Dubai Warehouse",
                    address: "Address: Dubai DUBAI, UAE",
                    mobile: "Mobile/Whatsapp/Viber: +971 528221527", // Assuming incomplete from image, putting mock/placeholder or partial
                    email: "Email: yihua@e-yihua.com"
                },
                {
                    title: "Nigeria Warehouse",
                    address: "Address: Lagos, Nigeria",
                    mobile: "Mobile/Whatsapp: +234 903 005 9226",
                    email: "Email: yihua@e-yihua.com"
                }
            ].map((wh, idx) => (
                <div key={idx} className="bg-white px-8 py-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-gray-800 text-lg mb-4">{wh.title}</h3>
                    <div className="text-gray-500 text-xs space-y-2 leading-relaxed font-bold">
                        {wh.address && <p>{wh.address}</p>}
                        {wh.mobile && <p>{wh.mobile}</p>}
                        {wh.whatsapp && <p>{wh.whatsapp}</p>}
                        {wh.email && <p>{wh.email}</p>}
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default HelpAndContact;