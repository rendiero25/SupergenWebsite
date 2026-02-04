import { Link } from "react-router-dom";
import iconFacebook from "../assets/footer/icon-facebook.png";
import iconInstagram from "../assets/footer/icon-instagram.png";
import iconLinkedin from "../assets/footer/icon-linkedin.png";
import iconTwitter from "../assets/footer/icon-twitter.png";
import iconYoutube from "../assets/footer/icon-youtube.png";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white pt-16 pb-8 font-outfit">
      <div className="container mx-auto px-4 md:px-8 lg:px-15 xl:px-15 2xl:px-20 3xl:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-10">
          {/* Left Column - Brand Info */}
          <div className="lg:col-span-4 w-full lg:w-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 tracking-wide">
              {t("footer.brandName")}
            </h2>
            <p className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white tracking-wider">
              {t("footer.tagline")}
            </p>

            <p className="text-white text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed w-full max-w-5xl">
              {t("footer.description")}
            </p>

            <Link
              to="/contact"
              className="inline-block bg-red hover:bg-red-700 text-white text-sm sm:text-md font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-colors uppercase"
            >
              {t("navigation.helpContact")}
            </Link>
          </div>

          {/* Right Columns - Links */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between items-start gap-6 sm:gap-8 lg:gap-10">
            {/* Products */}
            <div>
              <h3 className="font-bold mb-1 text-base sm:text-lg uppercase tracking-wide">
                {t("navigation.products")}
              </h3>
              <ul className="text-sm sm:text-md text-white flex flex-row gap-2 sm:gap-10">
                <li>
                  <Link
                    to="/products/generator-set"
                    className="hover:text-white transition-colors"
                  >
                    {t("products.generatorSet")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/brushless-alternator"
                    className="hover:text-white transition-colors"
                  >
                    {t("products.brushlessAlternator")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-bold mb-1 text-base sm:text-lg uppercase tracking-wide">
                {t("navigation.solutions")}
              </h3>
              <ul className="text-sm sm:text-md text-white flex flex-row gap-2 sm:gap-6 lg:gap-10 flex-wrap">
                <li>
                  <Link
                    to="/solutions/mining"
                    className="hover:text-white transition-colors"
                  >
                    {t("solutions.mining")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/construction"
                    className="hover:text-white transition-colors"
                  >
                    {t("solutions.construction")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/oil-gas"
                    className="hover:text-white transition-colors"
                  >
                    {t("solutions.oilGas")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/power-plants"
                    className="hover:text-white transition-colors"
                  >
                    {t("solutions.powerPlants")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/data-centers"
                    className="hover:text-white transition-colors"
                  >
                    {t("solutions.dataCenters")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/telecom"
                    className="hover:text-white transition-colors"
                  >
                    {t("solutions.telecom")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/healthcare"
                    className="hover:text-white transition-colors"
                  >
                    {t("solutions.healthcare")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/utilities"
                    className="hover:text-white transition-colors"
                  >
                    {t("solutions.utilities")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Supergen */}
            <div>
              <h3 className="font-bold mb-1 text-base sm:text-lg uppercase tracking-wide">
                {t("navigation.aboutSupergen")}
              </h3>
              <ul className="text-sm sm:text-md text-white flex flex-row gap-2 sm:gap-10">
                <li>
                  <Link
                    to="/about/corporate-profile"
                    className="hover:text-white transition-colors"
                  >
                    {t("about.corporateProfile")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/factory-overview"
                    className="hover:text-white transition-colors"
                  >
                    {t("about.factoryOverview")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/certificates"
                    className="hover:text-white transition-colors"
                  >
                    {t("about.certificates")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs sm:text-sm text-white flex flex-col md:flex-row gap-2 md:gap-8 text-center md:text-left">
            <p>
              {t("footer.copyright")} &nbsp; &nbsp; &nbsp;{" "}
              {t("footer.seoLabel")} &nbsp; &nbsp; &nbsp;{" "}
              {t("footer.poweredBy")}
            </p>
            <p>ICP 12345678-1</p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src={iconFacebook}
                alt="Facebook"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src={iconInstagram}
                alt="Instagram"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src={iconLinkedin}
                alt="LinkedIn"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src={iconTwitter}
                alt="Twitter"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src={iconYoutube}
                alt="Youtube"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
