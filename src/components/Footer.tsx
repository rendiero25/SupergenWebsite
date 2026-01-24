import { Link } from 'react-router-dom';
import iconFacebook from '../assets/footer/icon-facebook.png';
import iconInstagram from '../assets/footer/icon-instagram.png';
import iconLinkedin from '../assets/footer/icon-linkedin.png';
import iconTwitter from '../assets/footer/icon-twitter.png';
import iconYoutube from '../assets/footer/icon-youtube.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 font-outfit">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-10">
                    {/* Left Column - Brand Info */}
                    <div className="lg:col-span-4">
                        <h2 className="text-4xl font-black mb-1 tracking-wide">YIHUA GENSET</h2>
                        <p className="text-xl font-bold mb-6 text-white tracking-wider">We Will Always Near The Best</p>
                        
                        <p className="text-white text-sm mb-8 leading-relaxed w-full max-w-5xl">
                            Yihua Genset is a top-tier generator set manufacturer with 30 years of expertise in China, 
                            driven by innovation and reliability to deliver efficient energy solutions for a sustainable 
                            future. As a client-focused and results-driven company, we strive to provide exceptional service, 
                            empowering partners worldwide with dependable power generation. Trust in us to energize your success.
                        </p>
                        
                        <Link to="/contact" className="inline-block bg-red hover:bg-red-700 text-white text-md font-bold py-3 px-8 rounded-full transition-colors uppercase">
                            Help & Contact
                        </Link>
                    </div>

                    {/* Right Columns - Links */}
                    <div className="w-1/2 flex flex-col justify-between items-start gap-10 w-full">
                        {/* Products */}
                        <div>
                            <h3 className="font-bold mb-1 text-lg uppercase tracking-wide">Products</h3>
                            <ul className="text-md text-white flex flex-row gap-10">
                                <li><Link to="/products/generator-set" className="hover:text-white transition-colors">Generator Set</Link></li>
                                <li><Link to="/products/brushless-alternator" className="hover:text-white transition-colors">Brushless Alternator</Link></li>
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                            <h3 className="font-bold mb-1 text-lg uppercase tracking-wide">Solutions</h3>
                            <ul className="text-md text-white flex flex-row gap-10">
                                <li><Link to="/solutions/mining" className="hover:text-white transition-colors">Mining</Link></li>
                                <li><Link to="/solutions/construction" className="hover:text-white transition-colors">Construction</Link></li>
                                <li><Link to="/solutions/oil-gas" className="hover:text-white transition-colors">Oil & Gas</Link></li>
                                <li><Link to="/solutions/power-plants" className="hover:text-white transition-colors">Power Plants</Link></li>
                                <li><Link to="/solutions/data-centers" className="hover:text-white transition-colors">Data Centers</Link></li>
                                <li><Link to="/solutions/telecom" className="hover:text-white transition-colors">Telecom</Link></li>
                            </ul>
                        </div>

                        {/* About Yihua */}
                        <div>
                            <h3 className="font-bold mb-1 text-lg uppercase tracking-wide">About Yihua</h3>
                            <ul className="text-md text-white flex flex-row gap-10">
                                <li><Link to="/about/corporate-profile" className="hover:text-white transition-colors">Corporate Profile</Link></li>
                                <li><Link to="/about/factory-overview" className="hover:text-white transition-colors">Factory Overview</Link></li>
                                <li><Link to="/about/certificates" className="hover:text-white transition-colors">Certificates</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-white flex flex-col md:flex-row gap-2 md:gap-8 text-center md:text-left">
                        <p>© 2024 Fujian Yihua Electrical Machinery Co., Ltd. &nbsp; &nbsp; &nbsp; SEO label &nbsp; &nbsp; &nbsp; Powered by www.300.cn</p>
                        <p>ICP 12345678-1</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:opacity-80 transition-opacity"><img src={iconFacebook} alt="Facebook" className="w-8 h-8" /></a>
                        <a href="#" className="hover:opacity-80 transition-opacity"><img src={iconInstagram} alt="Instagram" className="w-8 h-8" /></a>
                        <a href="#" className="hover:opacity-80 transition-opacity"><img src={iconLinkedin} alt="LinkedIn" className="w-8 h-8" /></a>
                        <a href="#" className="hover:opacity-80 transition-opacity"><img src={iconTwitter} alt="Twitter" className="w-8 h-8" /></a>
                        <a href="#" className="hover:opacity-80 transition-opacity"><img src={iconYoutube} alt="Youtube" className="w-8 h-8" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
