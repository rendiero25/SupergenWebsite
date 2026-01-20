import { Link } from 'react-router-dom';
import iconFacebook from '../assets/footer/icon-facebook.png';
import iconInstagram from '../assets/footer/icon-instagram.png';
import iconLinkedin from '../assets/footer/icon-linkedin.png';
import iconTwitter from '../assets/footer/icon-twitter.png';
import iconYoutube from '../assets/footer/icon-youtube.png';

const Footer = () => {
    return (
        <footer className="bg-[#1e1e1e] text-white pt-16 pb-8 font-outfit">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Left Column - Brand Info */}
                    <div className="lg:col-span-4">
                        <h2 className="text-2xl font-bold mb-2 tracking-wide">YIHUA GENSET</h2>
                        <p className="text-sm font-semibold mb-6 text-gray-300 tracking-wider">We Will Always Near The Best</p>
                        
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-md">
                            Yihua Genset is a leading power generation manufacturer with 30 years of expertise in China. 
                            We specialize in power solutions, offering a wide range of diesel generators and alternators. 
                            Our commitment to quality and innovation ensures reliable power generation for various industries worldwide.
                        </p>
                        
                        <Link to="/contact" className="inline-block bg-[#E60013] hover:bg-red-700 text-white text-xs font-bold py-3 px-8 rounded-full transition-colors uppercase tracking-wider">
                            Help & Contact
                        </Link>
                    </div>

                    {/* Right Columns - Links */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Products */}
                        <div>
                            <h3 className="font-bold mb-6 text-sm uppercase tracking-wide">Products</h3>
                            <ul className="space-y-3 text-xs text-gray-400">
                                <li><Link to="/products/generator-set" className="hover:text-white transition-colors">Generator Set</Link></li>
                                <li><Link to="/products/brushless-alternator" className="hover:text-white transition-colors">Brushless Alternator</Link></li>
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                            <h3 className="font-bold mb-6 text-sm uppercase tracking-wide">Solutions</h3>
                            <ul className="space-y-3 text-xs text-gray-400">
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
                            <h3 className="font-bold mb-6 text-sm uppercase tracking-wide">About Yihua</h3>
                            <ul className="space-y-3 text-xs text-gray-400">
                                <li><Link to="/about/corporate-profile" className="hover:text-white transition-colors">Corporate Profile</Link></li>
                                <li><Link to="/about/factory-overview" className="hover:text-white transition-colors">Factory Overview</Link></li>
                                <li><Link to="/about/certificates" className="hover:text-white transition-colors">Certificates</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-[10px] text-gray-500 flex flex-col md:flex-row gap-2 md:gap-8 text-center md:text-left">
                        <p>© 2024 Fujian Yihua Machinery Co., Ltd. All rights reserved.</p>
                        <p>ICP 12345678-1</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:opacity-80 transition-opacity"><img src={iconFacebook} alt="Facebook" className="w-5 h-5 opacity-80" /></a>
                        <a href="#" className="hover:opacity-80 transition-opacity"><img src={iconInstagram} alt="Instagram" className="w-5 h-5 opacity-80" /></a>
                        <a href="#" className="hover:opacity-80 transition-opacity"><img src={iconLinkedin} alt="LinkedIn" className="w-5 h-5 opacity-80" /></a>
                        <a href="#" className="hover:opacity-80 transition-opacity"><img src={iconTwitter} alt="Twitter" className="w-5 h-5 opacity-80" /></a>
                        <a href="#" className="hover:opacity-80 transition-opacity"><img src={iconYoutube} alt="Youtube" className="w-5 h-5 opacity-80" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
