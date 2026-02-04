import { Link, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import solutionDataEn from "../data/products/solution.json";
import solutionDataId from "../data/products/solution-id.json";
import solutionBanner from "/images/solution/solution-banner.jpg";
import { useLanguage } from "../context/LanguageContext";

const Solutions = () => {
  const location = useLocation();
  const { t, language } = useLanguage();

  // Select data based on language
  const solutionData =
    language === "Indonesia" ? solutionDataId : solutionDataEn;

  // Path parsing: /solutions/mining
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const activeSlug = pathSegments[1] || "mining"; // Default to first one or handle empty

  // Find active solution
  const activeSolution = solutionData.find(
    (s) =>
      s.name.toLowerCase().replace(/\s+/g, "").replace("&", "") ===
        activeSlug.replace("-", "").replace("&", "") ||
      s.name.toLowerCase().replace(/\s+/g, "-") === activeSlug,
  );

  // Fallback if not found (or redirect logic could go here)
  const currentSolution = activeSolution || solutionData[0];

  // Map solution names with translations
  const getSolutionName = (name: string) => {
    const nameMap: { [key: string]: string } = {
      Mining: t("solutions.mining"),
      Construction: t("solutions.construction"),
      "Oil & Gas": t("solutions.oilGas"),
      "Power Plants": t("solutions.powerPlants"),
      "Data Centers": t("solutions.dataCenters"),
      Telecom: t("solutions.telecom"),
      Healthcare: t("solutions.healthcare"),
      Utilities: t("solutions.utilities"),
    };
    return nameMap[name] || name;
  };

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
        <div className="container mx-auto bg-white px-4 md:px-8 lg:px-15 xl:px-15 2xl:px-20 3xl:px-0 py-7 mb-5 flex items-center text-sm text-black gap-1">
          <Link to="/" className="hover:text-red-600">
            <FaHome />
          </Link>
          <IoIosArrowForward />
          <Link to="/solutions" className="hover:text-red">
            {t("solutions.title")}
          </Link>
          <IoIosArrowForward />
          <span className="">{getSolutionName(currentSolution.name)}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-15 xl:px-15 2xl:px-20 3xl:px-0 grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* SIDEBAR */}
        <div className="lg:col-span-1 space-y-6 lg:space-y-8">
          {/* Solutions Menu */}
          <div>
            <div className="flex flex-col items-start gap-2 bg-red py-7">
              <h2 className="text-white font-bold px-6 uppercase text-3xl tracking-wide">
                {t("solutions.title")}
              </h2>
              <div className="w-5 h-1 bg-white ml-6"></div>
            </div>

            <div className="bg-white border border-gray-100">
              {solutionData.map((sol) => {
                const slug = sol.name.toLowerCase().replace(/\s+/g, "-");
                // Simple active check
                const isActive = currentSolution.id === sol.id;

                return (
                  <Link
                    key={sol.id}
                    to={`/solutions/${slug}`}
                    className={`block px-6 py-3 text-sm border-b border-gray-100 hover:text-[#E60013] transition-colors
                                            ${isActive ? "text-[#E60013] font-semibold" : "text-gray-700"}
                                        `}
                  >
                    <span className="flex items-center gap-3">
                      <IoIosArrowForward className="text-sm text-black" />
                      <div className="text-black text-lg">
                        {getSolutionName(sol.name)}
                      </div>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Help & Contact (Reused) */}
          <div>
            <div className="bg-white p-6 border border-gray-100 text-sm text-gray-600 space-y-4">
              <h2 className="font-bold text-3xl mb-6 text-black uppercase border-b-2 border-gray-200 pb-2 inline-block">
                {t("navigation.helpContact")}
              </h2>

              <p>
                <strong className="block text-gray-800 mb-1">
                  {t("contactInfo.address")}:
                </strong>
                {t("contactInfo.headquarterAddress")}
              </p>
              <p>
                <strong className="block text-gray-800 mb-1">
                  {t("contactInfo.tel")}:
                </strong>
                0086-593-6668988
                <br />
                0086-593-6382918
              </p>
              <p>
                <strong className="text-gray-800 mb-1">
                  {t("contactInfo.fax")}:{" "}
                </strong>
                0086 593 6582997
              </p>
              <p>
                <strong className="text-gray-800 mb-1">
                  {t("contactInfo.mobileWhatsapp")}:{" "}
                </strong>
                +86 18650536888
              </p>
              <p>
                <strong className="text-gray-800 mb-1">
                  {t("contactInfo.email")}:{" "}
                </strong>
                Supergen@e-Supergen.com
              </p>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="lg:col-span-3">
          <div className="bg-white p-4 sm:p-6 lg:p-8">
            {/* If data exists */}
            {currentSolution.data &&
              currentSolution.data.map((item, index) => (
                <div key={index} className="">
                  {/* Section 1: Text Left, Image Right */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <p className="py-5 text-black leading-tight text-md whitespace-pre-line text-justify">
                      {item.description1}
                    </p>
                    <div className="h-80 overflow-hidden">
                      <img
                        src={item.image1}
                        alt={currentSolution.name}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Section 2: Image Left, Text Right */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 h-80 overflow-hidden">
                      <img
                        src={item.image2}
                        alt={currentSolution.name}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="py-5 order-1 md:order-2 text-black leading-tight text-md whitespace-pre-line text-justify">
                      {item.description2}
                    </p>
                  </div>

                  {/* Section 3: Text Left, Image Right */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <p className="py-5 text-black leading-tight text-md whitespace-pre-line text-justify">
                      {item.description3}
                    </p>
                    <div className="h-80 overflow-hidden">
                      <img
                        src={item.image3}
                        alt={currentSolution.name}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
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
