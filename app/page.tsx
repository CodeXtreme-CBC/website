import Image from "next/image";
import Hero from "@/app/ui/hero";
import Footer from "@/app/ui/footer";
import { heroSlides } from "@/app/lib/data";
import WhatWeDo from "@/app/ui/what-we-do";

export default function Home() {
  return (
    <main className="scroll-container">
      <Hero
        slides={heroSlides}
        title="Discover and nurture talent. Build products. Power communities."
        description="<p>We discover and nurture early tech talent and founders, helping them build and ship real products to the world.</p>
        <p>Through <strong>Power of Code</strong>, we develop high-impact tech solutions for people and communities across Africa.</p>"
        tip="Why We Exist"
      />
      <WhatWeDo />

      {/* Services Section */}
      <section className="section-snap h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900">
        <div className="text-center px-4 max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600">Modern, responsive websites and web applications built with the latest technologies.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-4">Mobile Apps</h3>
              <p className="text-gray-600">Native and cross-platform mobile applications for iOS and Android.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-4">Training & Mentorship</h3>
              <p className="text-gray-600">Comprehensive training programs to develop the next generation of tech talent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-snap h-screen flex items-center justify-center bg-gradient-to-br from-green-800 to-blue-800 text-white">
        <div className="text-center px-4 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg md:text-xl mb-12">
            Ready to build something amazing together? Let's start the conversation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-xl mr-3">📧</span>
                  <span>hello@codextreme.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-3">📞</span>
                  <span>+234 (0) 123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-3">📍</span>
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4">Quick Message</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded-lg text-gray-900"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 rounded-lg text-gray-900"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4} 
                  className="w-full p-3 rounded-lg text-gray-900"
                ></textarea>
                <button className="bg-white text-green-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 w-full">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
