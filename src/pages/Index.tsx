import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import Data
import heroData from "../data/index/heroSlider.json";
import solutionData from "../data/index/solutiononhome.json";
import { useLanguage } from "../context/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  const dedicationImages = [
    {
      name: t("productTypes.openTypeDiesel"),
      img: "/images/index/section2images/opentype-.png",
    },
    {
      name: t("productTypes.silentTypeDiesel"),
      img: "/images/index/section2images/silenttype-dieselgeneratorset.png",
    },
    {
      name: t("productTypes.containerTypeDiesel"),
      img: "/images/index/section2images/containertype-dieselgeneratorset.png",
    },
    {
      name: t("productTypes.brushlessAlternator"),
      img: "/images/index/section2images/brushless-generator.png",
    },
  ];

  // Map hero slider data with translations
  const getHeroSlideContent = (slideId: string) => {
    const slideMap: {
      [key: string]: {
        heading: string;
        description: string;
        buttonName: string;
      };
    } = {
      heroslider1: {
        heading: t("heroSlider.slide1.heading"),
        description: t("heroSlider.slide1.description"),
        buttonName: t("heroSlider.slide1.buttonName"),
      },
      heroslider2: {
        heading: t("heroSlider.slide2.heading"),
        description: t("heroSlider.slide2.description"),
        buttonName: t("heroSlider.slide2.buttonName"),
      },
      heroslider3: {
        heading: t("heroSlider.slide3.heading"),
        description: t("heroSlider.slide3.description"),
        buttonName: t("heroSlider.slide3.buttonName"),
      },
      heroslider4: {
        heading: t("heroSlider.slide4.heading"),
        description: t("heroSlider.slide4.description"),
        buttonName: t("heroSlider.slide4.buttonName"),
      },
    };
    return (
      slideMap[slideId] || { heading: "", description: "", buttonName: "" }
    );
  };

  // Map solution data with translations
  const getSolutionName = (solutionName: string) => {
    const nameMap: { [key: string]: string } = {
      Mining: t("solutionHome.mining"),
      Construction: t("solutionHome.construction"),
      "Oil & Gas": t("solutionHome.oilGas"),
      "Power Plants": t("solutionHome.powerPlants"),
      "Data Centers": t("solutionHome.dataCenters"),
      Telecomunication: t("solutionHome.telecommunication"),
      Healthcare: t("solutionHome.healthcare"),
      Utilities: t("solutionHome.utilities"),
    };
    return nameMap[solutionName] || solutionName;
  };

  return (
    <div className="font-outfit">
      {/* HERO SECTION */}
      <section className="relative h-[300px] sm:h-[500px] md:h-[600px] lg:h-[850px] w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          speed={1000}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          className="h-full w-full group"
        >
          {heroData.map((slide) => {
            const content = getHeroSlideContent(slide.id);
            return (
              <SwiperSlide key={slide.id} className="relative">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={content.heading}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  {/* <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/40 to-transparent"></div> */}
                </div>

                {/* Content */}
                <div className="relative h-full container mx-auto px-4 md:px-8 lg:px-15 xl:px-15 2xl:px-20 3xl:px-0 flex items-center">
                  <div className="max-w-60 sm:max-w-70 md:max-w-2xl lg:pt-20">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black mb-4 sm:mb-6 leading-tight whitespace-pre-line">
                      {content.heading.replace("|", "\n")}
                    </h1>
                    <div className="w-8 sm:w-12 h-1 bg-red mb-4 sm:mb-6"></div>
                    <p className="hidden sm:flex text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed font-medium max-w-xl md:max-w-sm lg:max-w-xl">
                      {content.description}
                    </p>
                    <button className="cursor-pointer bg-red hover:bg-red-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg text-xs sm:text-sm uppercase tracking-wide">
                      {content.buttonName}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Bottom Controls Container - Inside slider with highest z-index */}
        <div className="hidden sm:flex absolute bottom-8 left-0 right-0 z-50 pointer-events-none">
          <div className="container mx-auto px-4 md:px-8 lg:px-15 xl:px-15 2xl:px-20 3xl:px-0">
            <div className="flex items-center justify-between">
              {/* Custom Pagination - Left */}
              <div className="custom-pagination flex gap-2 pointer-events-auto [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-gray-400 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-black [&_.swiper-pagination-bullet]:cursor-pointer [&_.swiper-pagination-bullet]:transition-colors [&_.swiper-pagination-bullet]:hover:bg-gray-600"></div>

              {/* Custom Nav Buttons - Right */}
              <div className="flex gap-4 pointer-events-auto">
                <button
                  className="cursor-pointer swiper-button-prev static! w-10! h-10! mt-0! hover:bg-red border border-white hover:border-red transition-colors"
                  style={{
                    ["--swiper-navigation-color" as string]: "white",
                    ["--swiper-navigation-size" as string]: "10px",
                  }}
                ></button>
                <button
                  className="cursor-pointer swiper-button-next static! w-10! h-10! mt-0! hover:bg-red border border-white hover:border-red transition-colors"
                  style={{
                    ["--swiper-navigation-color" as string]: "white",
                    ["--swiper-navigation-size" as string]: "10px",
                  }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATION SECTION */}
      <section className="py-10 sm:py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-15 xl:px-15 2xl:px-20 3xl:px-0">
          <div className="text-center mb-10 sm:mb-16 md:mb-20 lg:mb-30">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black/80 uppercase tracking-wide mb-3 sm:mb-4">
              {t("index.dedicationTitle")}
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-black/80 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {dedicationImages.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4 sm:mb-6 flex justify-center items-center h-32 sm:h-40 md:h-48">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full max-w-80 sm:max-w-120 md:max-w-160 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-center text-sm sm:text-base md:text-lg font-normal text-black transition-colors group-hover:scale-105">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIONEERING FUTURE SECTION */}
      <section className="pt-10 sm:pt-14 md:pt-20 pb-6 sm:pb-8 md:pb-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-15 xl:px-15 2xl:px-20 3xl:px-0 mb-10 sm:mb-14 md:mb-20 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black/80 uppercase tracking-wide mb-3 sm:mb-4">
            {t("index.pioneeringTitle")}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-black/80 mx-auto"></div>
        </div>

        <div
          className="relative w-full min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[559px] bg-cover bg-center md:bg-fixed flex items-center py-10 sm:py-16 md:py-0"
          style={{
            backgroundImage:
              "url('/images/index/bacground-pioneeringthefuture.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#000000]/60"></div>
          <div className="container mx-auto px-4 md:px-8 lg:px-15 xl:px-15 2xl:px-20 3xl:px-0 relative z-10">
            <div className="max-w-4xl text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 leading-normal">
                {t("index.pioneeringHeading")}
              </h2>
              <div className="space-y-3 sm:space-y-4 text-white mb-6 sm:mb-8 font-light text-sm sm:text-base md:text-lg tracking-wide">
                <p>{t("index.pioneeringDesc1")}</p>
                <p>{t("index.pioneeringDesc2")}</p>
                <p>{t("index.pioneeringDesc3")}</p>
              </div>
              <button className="cursor-pointer bg-red hover:bg-red-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-colors text-sm sm:text-md">
                {t("index.embarkJourney")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FUELING PROGRESS SECTION */}
      <section className="pt-5 bg-white">
        <div className="">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 md:px-8 lg:px-15 xl:px-15 2xl:px-20 3xl:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black/80 uppercase tracking-wide mb-3 sm:mb-4">
              {t("index.fuelingTitle")}
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="flex flex-wrap xl:flex-nowrap">
            {solutionData.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer w-1/2 sm:w-1/2 md:w-1/4 h-[280px] lg:h-[350px] overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={getSolutionName(item.name)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>

                  <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 flex flex-col items-start gap-2 sm:gap-3 md:gap-4 text-white">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain filter brightness-0 invert"
                    />
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wide">
                      {getSolutionName(item.name)}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
