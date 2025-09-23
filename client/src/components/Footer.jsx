import React from "react";

const Footer = () => {
  // Social Icons
  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
  const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  );
  const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2A51 51 0 0 0 12 4.17a51 51 0 0 0-8.62.25 2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.5a29 29 0 0 0 .54 5.08 2.78 2.78 0 0 0 1.94 2 51 51 0 0 0 9.5-.25 51 51 0 0 0 9.5.25 2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.5a29 29 0 0 0-.46-5.08z"></path>
      <polygon points="10 8 16 11.5 10 15 10 8"></polygon>
    </svg>
  );

  return (
    <footer className="relative bg-[#0F172A] text-gray-200">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 font-sans">
        <div className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-12">
          {/* About */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-4 tracking-wide text-white">
              Godrej Majesty
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Discover unparalleled luxury at Godrej Majesty. We offer
              meticulously designed 3 and 4 BHK residences with world-class
              amenities and breathtaking views in Greater Noida West.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-100">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {["home", "offers", "highlights", "location", "amenities", "pricing", "gallery"].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="hover:text-green-300 transition-colors duration-300 capitalize"
                  >
                    {id.replace("-", " ")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-100">
              Contact Us
            </h4>
            <address className="not-italic text-sm text-gray-400 space-y-2">
              <p className="flex items-center gap-2">
                <span>📍 Sector-12, Greater Noida West, UP</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞 +91 9990989295</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📧 info@godrejmajesty.com</span>
              </p>
            </address>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-100">
              Follow Us
            </h4>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/GodrejRealEstate" className="text-gray-400 hover:text-blue-500 transition-colors duration-300"><FacebookIcon /></a>
              <a href="https://www.instagram.com/godrejrealestate/" className="text-gray-400 hover:text-pink-500 transition-colors duration-300"><InstagramIcon /></a>
              <a href="https://twitter.com/GodrejRealEstate" className="text-gray-400 hover:text-sky-400 transition-colors duration-300"><TwitterIcon /></a>
              <a href="https://youtube.com/@GodrejRealEstate" className="text-gray-400 hover:text-red-500 transition-colors duration-300"><YoutubeIcon /></a>
            </div>
          </div>
        </div>

        {/* SEO & Disclaimer Section */}
        <div className="text-gray-500 text-xs px-6 md:px-20 pt-6 pb-10 leading-relaxed border-t border-gray-700 space-y-4 font-light">
          <p>
            Looking for{" "}
            <strong className="text-gray-300">apartments in Greater Noida West</strong>? Explore{" "}
            <strong className="text-gray-300">3 BHK and 4 BHK flats</strong> at Godrej Majesty,
            a premier residential project offering premium amenities, world-class design,
            and excellent investment potential.
          </p>
          <div className="space-y-3">
            <p>
              The information provided on this website is for general guidance only and does not
              constitute an offer or contract. Prices and availability are subject to change
              without prior notice. Project ID: UPRERAPRJ531916/06/2025.
            </p>
            <p>
              Images and visuals are for illustration purposes and may differ from actual
              construction. This website functions as an authorized marketing partner and may
              share customer details with RERA-registered brokers for necessary processing.
            </p>
            <p>
              By submitting your details on this site, you agree to our Privacy Policy and Terms
              of Use. For the most accurate and updated details, please connect directly with our
              official sales team.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-xs text-gray-500 border-t border-gray-700 py-6">
          © {new Date().getFullYear()} Property Expert Realtor Pvt. Ltd. (RERA ID: UPRERAAGT23257).<br />
          Authorized Channel Partner for (Projects Rera : UPRERAPRJ250823).
        </div>
      </div>
    </footer>
  );
};

export default Footer;
