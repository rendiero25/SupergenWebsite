import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import contactBanner from "/images/contact/contact-banner.jpg";
import { useLanguage } from "../context/LanguageContext";

const HelpAndContact = () => {
  const { t } = useLanguage();

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
      <div className="container mx-auto px-4 md:px-8 lg:px-15 xl:px-15 2xl:px-20 3xl:px-0 py-4">
        <div className="flex items-center text-xs text-black gap-1">
          <Link to="/" className="hover:text-red-600">
            <FaHome />
          </Link>
          <IoIosArrowForward />
          <span className="text-black font-bold">
            {t("navigation.helpContact")}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-15 xl:px-15 2xl:px-20 3xl:px-0">
        {/* Page Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4 uppercase tracking-wide">
            {t("contact.title")}
          </h1>
          <Link
            to="/products"
            className="inline-block bg-[#E60013] text-white px-6 sm:px-8 py-2 rounded-full font-bold hover:bg-red-700 transition-colors uppercase text-xs sm:text-sm"
          >
            {t("common.viewProducts")}
          </Link>
        </div>

        {/* Contact Section */}
        <div className="bg-white flex flex-col lg:flex-row mb-8 sm:mb-12">
          {/* Form Side */}
          <div className="w-full lg:w-3/5 p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2">
                {t("contact.partnerWithUs")}
              </h2>
              <p className="text-black text-sm sm:text-md">
                {t("contact.formDescription")}
              </p>
            </div>

            <form className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  className="w-full border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 rounded text-sm focus:outline-none focus:border-[#E60013]"
                />
                <input
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-[#E60013]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t("contact.whatsappPlaceholder")}
                  className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-[#E60013]"
                />
                <input
                  type="text"
                  placeholder={t("contact.demandedPowerPlaceholder")}
                  className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-[#E60013]"
                />
              </div>
              <textarea
                placeholder={t("contact.messagePlaceholder")}
                rows={4}
                className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-[#E60013]"
              ></textarea>

              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-[#E60013] text-white px-10 py-2 rounded-full font-bold hover:bg-red-700 transition-colors uppercase text-sm shadow-md"
                >
                  {t("common.send")}
                </button>
              </div>
            </form>
          </div>

          {/* Info Side */}
          <div className="w-full lg:w-2/5 bg-[#3c3c3b] text-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">
                {t("contact.headquarters")}
              </h3>
              <p className="text-white text-md leading-relaxed">
                {t("contactInfo.headquarterAddress")}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">
                {t("navigation.helpContact")}
              </h3>
              <div className="text-white text-md space-y-2">
                <p>{t("contactInfo.mobileWhatsapp")}: +62 0812 9158 1499</p>
                {/* <p>{t("contactInfo.tel")}: 0086-593-6685366</p>
                <p className="pl-6">0086-593-6382948</p>
                <p>{t("contactInfo.fax")}: 0086-593-6582997</p> */}
                <p>{t("contactInfo.email")}: supergensale@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Warehouses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
          {[
            {
              title: t("contact.bangladeshWarehouse"),
              address: "Address: Gouripur, Mudonpur, Bandar, Narayanganj",
              mobile: "Mobile: +880-1911311116, +880-1768652697",
              whatsapp: "Whatsapp/Wechat: +880-1711391979",
              email: "Email: Supergen@e-Supergen.com",
            },
            {
              title: t("contact.philippinesWarehouse"),
              address:
                "Address: No. 1111, Dr. A.Santos, Stner J., Wagil St, Brgy. San Dionisio, Paranaque City",
              mobile: "Mobile/Whatsapp/Viber: +63 917 714 5888",
              email: "Email: Supergen@e-Supergen.com",
            },
            {
              title: t("contact.indonesiaWarehouse"),
              address:
                "Address: Gudang Tunas Bitung No.7 Blok A2, Kadu, Curug, Tangerang, Banten",
              mobile: "Mobile/Whatsapp/Viber: +62 812 9900 1888",
              email: "Email: Supergen@e-Supergen.com",
            },
            {
              title: t("contact.dubaiWarehouse"),
              address: "Address: Dubai DUBAI, UAE",
              mobile: "Mobile/Whatsapp/Viber: +971 528221527",
              email: "Email: Supergen@e-Supergen.com",
            },
            {
              title: t("contact.nigeriaWarehouse"),
              address: "Address: Lagos, Nigeria",
              mobile: "Mobile/Whatsapp: +234 903 005 9226",
              email: "Email: Supergen@e-Supergen.com",
            },
          ].map((wh, idx) => (
            <div
              key={idx}
              className="bg-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 border border-gray-100 transition-shadow"
            >
              <h3 className="font-bold text-black text-lg sm:text-xl mb-3 sm:mb-4">
                {wh.title}
              </h3>
              <div className="text-black text-sm sm:text-md space-y-1.5 sm:space-y-2 leading-relaxed font-bold">
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
