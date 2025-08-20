import React from 'react';

const KeyFeatures = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Project Highlights Section */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-12 animate-fade-in-up">
          Discover Our Premium Project Highlights
        </h1>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Item 1 */}
            <div className="flex items-start bg-gray-50 p-6 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 7V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6zm16-4h-5v-4h5v4z"/>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Fully Equipped Kitchen</h3>
                <p className="text-md text-gray-600 mt-1">Modular kitchen with Hob, chimney, and pre-fitted cabinets.</p>
              </div>
            </div>

            {/* Feature Item 2 */}
            <div className="flex items-start bg-gray-50 p-6 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Luxurious Flooring</h3>
                <p className="text-md text-gray-600 mt-1">Elegant Italian marble in living and dining areas for a sophisticated feel.</p>
              </div>
            </div>
            
            {/* Feature Item 3 */}
            <div className="flex items-start bg-gray-50 p-6 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Premium Wooden Flooring</h3>
                <p className="text-md text-gray-600 mt-1">Warm and durable laminated wooden flooring in all bedrooms.</p>
              </div>
            </div>

            {/* Feature Item 4 */}
            <div className="flex items-start bg-gray-50 p-6 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 6h-4V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H2v15h20V6zm-4 13H6V7h12v12z"/>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Seamless Glass Balconies</h3>
                <p className="text-md text-gray-600 mt-1">Enjoy uninterrupted, panoramic views with modern all-glass balconies.</p>
              </div>
            </div>

            {/* Feature Item 5 */}
            <div className="flex items-start bg-gray-50 p-6 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 8h-2V4h-2v4h-2V4h-2v4H9V4H7v4H5V4H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4h-2v4z"/>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Pre-Installed ACs</h3>
                <p className="text-md text-gray-600 mt-1">Stay comfortable year-round with air conditioners in every room.</p>
              </div>
            </div>

            {/* Feature Item 6 */}
            <div className="flex items-start bg-gray-50 p-6 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 16H7V5h10v14z"/>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Spacious Wardrobes</h3>
                <p className="text-md text-gray-600 mt-1">Select units come with sleek, pre-fitted wardrobes in all bedrooms.</p>
              </div>
            </div>

            {/* Feature Item 7 */}
            <div className="flex items-start bg-gray-50 p-6 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm6 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Sprawling Gated Community</h3>
                <p className="text-md text-gray-600 mt-1">A secure, high-rise community spread across acres of lush greenery.</p>
              </div>
            </div>

            {/* Feature Item 8 */}
            <div className="flex items-start bg-gray-50 p-6 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 5.69l5.66 5.66c-.73.49-1.52.88-2.39 1.15-.87.27-1.81.42-2.77.42-2.21 0-4.32-.97-5.78-2.67l-1.33-1.33c-.1-.1-.1-.26 0-.36l1.24-1.24c.1-.1.26-.1.36 0l5.44 5.44c.1.1.26.1.36 0l1.24-1.24c.1-.1.1-.26 0-.36L12 5.69zM19.78 2.22l-1.41 1.41-1.41-1.41-1.41 1.41-1.41-1.41-1.41 1.41-1.41-1.41-1.41 1.41-1.41-1.41L3.22 8.78l1.41 1.41c-2.34 2.82-3.11 6.81-2.12 10.43l.89 3.28c.11.41.52.65.93.54l3.28-.89c3.62.99 7.61.22 10.43-2.12l1.41 1.41z"/>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Stunning Sky Decks</h3>
                <p className="text-md text-gray-600 mt-1">Experience city life from above with breathtaking panoramic views.</p>
              </div>
            </div>

            {/* Feature Item 9 */}
            <div className="flex items-start bg-gray-50 p-6 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-2 0c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8 8-3.59 8-8z"/>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Sustainable Living</h3>
                <p className="text-md text-gray-600 mt-1">An IGBC-Certified Green Building, committed to a sustainable future.</p>
              </div>
            </div>

            {/* Feature Item 10 */}
            <div className="flex items-start bg-gray-50 p-6 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z"/>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Exceptional ROI</h3>
                <p className="text-md text-gray-600 mt-1">Benefit from high appreciation potential and an excellent return on investment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Godrej Section */}
        <div className="mt-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-12 animate-fade-in-up">
            Why Choose Godrej Sector 12, Greater Noida West?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-emerald-500 transition-all duration-300 hover:shadow-xl hover:border-t-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Reputation You Can Trust</h3>
              <p className="text-md text-gray-600 leading-relaxed">
                Backed by Godrej Properties, a renowned name synonymous with innovation, trust, and quality nationwide.
              </p>
            </div>
            {/* Benefit Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-emerald-500 transition-all duration-300 hover:shadow-xl hover:border-t-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Strategic Prime Location</h3>
              <p className="text-md text-gray-600 leading-relaxed">
                Seamless connectivity in Sector 12, Greater Noida West, with swift access to highways, metro, and key business hubs.
              </p>
            </div>
            {/* Benefit Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-emerald-500 transition-all duration-300 hover:shadow-xl hover:border-t-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Smart Investment Choice</h3>
              <p className="text-md text-gray-600 leading-relaxed">
                Invest in a rapidly developing area offering high rental yields and promising capital appreciation.
              </p>
            </div>
            {/* Benefit Card 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-emerald-500 transition-all duration-300 hover:shadow-xl hover:border-t-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Sustainable & Smart Living</h3>
              <p className="text-md text-gray-600 leading-relaxed">
                Experience a lifestyle designed for sustainability and efficiency, blending modern comfort with environmental responsibility.
              </p>
            </div>
            {/* Benefit Card 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-emerald-500 transition-all duration-300 hover:shadow-xl hover:border-t-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Unmatched Construction Quality</h3>
              <p className="text-md text-gray-600 leading-relaxed">
                Built with superior materials, intelligent floor plans, and meticulous attention to every single detail.
              </p>
            </div>
            {/* Benefit Card 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-emerald-500 transition-all duration-300 hover:shadow-xl hover:border-t-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Customer-First Approach</h3>
              <p className="text-md text-gray-600 leading-relaxed">
                Enjoy transparent pricing, special pre-launch offers, and dedicated customer support at every step.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;