
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { ShieldX, CheckCircle2, TrendingUp, Lock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-1 mb-6">About Schedise</h1>
              <p className="text-xl text-gray-700">
                We're building tools to make your online experience better, faster, and more private.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section - WITH IMPROVED GRAPHIC */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-4">
                  At Schedise, we believe in a web that respects users. A web that's fast, clean, and puts you in control of your browsing experience.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  We built Ad Blocker by Schedise because we were tired of the increasingly intrusive advertisement ecosystem that slows down websites, consumes bandwidth, and tracks users across the internet.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our mission is simple: provide effective, easy-to-use tools that help people enjoy a better internet experience without technical complexity.
                </p>
                <p className="text-lg text-gray-700">
                  Ad Blocker by Schedise is proudly developed by Schedise, a programming agency dedicated to creating useful digital tools and enhancing online experiences. We develop multiple products and believe strongly in building solutions driven by user needs. Your feedback is invaluable – please don't hesitate to reach out via our Support page to help us improve this tool and others!
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative max-w-md">
                  {/* Circular background elements */}
                  <div className="absolute w-48 h-48 bg-gray-50 rounded-full -top-6 -right-6 z-0"></div>
                  <div className="absolute w-32 h-32 bg-schedise-red/10 rounded-full bottom-4 -left-6 z-0"></div>
                  
                  {/* Main content */}
                  <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 relative z-10">
                    {/* Central icon */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <div className="h-24 w-24 bg-schedise-red rounded-full flex items-center justify-center">
                          <ShieldX size={48} className="text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 h-8 w-8 bg-white rounded-full flex items-center justify-center border-2 border-schedise-red">
                          <span className="text-schedise-red font-bold text-xs">x</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Browser mockup */}
                    <div className="border border-gray-200 rounded-md bg-gray-50 mb-8">
                      <div className="px-4 py-2 border-b border-gray-200 flex items-center">
                        <div className="flex space-x-1.5">
                          <div className="h-2 w-2 rounded-full bg-red-400"></div>
                          <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                          <div className="h-2 w-2 rounded-full bg-green-400"></div>
                        </div>
                        <div className="h-4 bg-white rounded mx-auto w-1/2"></div>
                      </div>
                      <div className="p-4 flex justify-center">
                        <div className="flex flex-col items-center">
                          <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
                          <div className="w-3/4 h-2 bg-gray-200 rounded mb-1"></div>
                          <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats indicators */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-green-50 p-2 rounded text-center">
                        <div className="text-xs font-medium text-green-600">Faster</div>
                        <div className="text-green-700 font-bold">+80%</div>
                      </div>
                      <div className="bg-blue-50 p-2 rounded text-center">
                        <div className="text-xs font-medium text-blue-600">Cleaner</div>
                        <div className="text-blue-700 font-bold">+90%</div>
                      </div>
                      <div className="bg-purple-50 p-2 rounded text-center">
                        <div className="text-xs font-medium text-purple-600">Private</div>
                        <div className="text-purple-700 font-bold">+95%</div>
                      </div>
                    </div>
                    
                    <div className="text-center text-sm text-gray-500">
                      Transforming web browsing for everyone
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section - UPDATED WITH TIMELINE */}
        <section className="section-spacing bg-gray-50">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="heading-2 mb-6">The Ad Blocker Story</h2>
              <p className="text-lg text-gray-700">
                Schedise started with a simple frustration: browsing the web had become an exercise in dodging ads, closing pop-ups, and watching pages load slowly because of heavy tracking scripts.
              </p>
            </div>

            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-transparent before:via-schedise-red before:to-transparent md:before:mx-auto md:before:translate-x-0">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-schedise-red mb-2">Q1 2024</h3>
                    <h4 className="text-lg font-bold mb-2">The Beginning</h4>
                    <p className="text-gray-700">
                      Our team of web developers and privacy advocates came together with a shared vision: create a simple, effective ad blocker that anyone could use without technical expertise. We noticed the increasing problem of intrusive ads and tracking.
                    </p>
                  </div>
                </div>
                <div className="ml-5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-schedise-red text-white shadow md:ml-0 md:mr-0">
                  <Lock size={20} />
                </div>
                <div className="md:w-1/2 md:pl-8 md:text-left"></div>
              </div>

              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-1/2 md:pr-8 md:text-right"></div>
                <div className="ml-5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-schedise-red text-white shadow md:ml-0 md:mr-0">
                  <TrendingUp size={20} />
                </div>
                <div className="md:w-1/2 md:pl-8 md:text-left">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-schedise-red mb-2">Q2 2024</h3>
                    <h4 className="text-lg font-bold mb-2">Development Phase</h4>
                    <p className="text-gray-700">
                      We've been developing our ad blocker solution for several months now, focusing on creating a lightweight but powerful tool that can effectively block the modern web's most intrusive advertisements without slowing down browsing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-schedise-red mb-2">Today</h3>
                    <h4 className="text-lg font-bold mb-2">Ready to Launch</h4>
                    <p className="text-gray-700">
                      Ad Blocker by Schedise is now ready to help users around the world enjoy a faster, cleaner browsing experience. We're committed to continuously improving our extension based on community feedback.
                    </p>
                  </div>
                </div>
                <div className="ml-5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-schedise-red text-white shadow md:ml-0 md:mr-0">
                  <CheckCircle2 size={20} />
                </div>
                <div className="md:w-1/2 md:pl-8 md:text-left"></div>
              </div>

              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-1/2 md:pr-8 md:text-right"></div>
                <div className="ml-5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-schedise-indigo text-white shadow md:ml-0 md:mr-0">
                  <TrendingUp size={20} />
                </div>
                <div className="md:w-1/2 md:pl-8 md:text-left">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-schedise-indigo mb-2">Future</h3>
                    <h4 className="text-lg font-bold mb-2">Our Roadmap</h4>
                    <p className="text-gray-700">
                      We're working on expanding to more browsers, adding additional privacy features, premium enhancements, and creating even more effective blocking capabilities with anti-detection technology—all while keeping our core product free and accessible to everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section - IMPROVED DESIGN */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="heading-2 mb-6">Our Commitment</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                When you use Ad Blocker by Schedise, you can count on these promises:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 bg-green-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
                <div className="relative z-10">
                  <div className="h-12 w-12 flex items-center justify-center bg-green-100 text-green-600 rounded-xl mb-6">
                    <Lock size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Privacy First</h3>
                  <p className="text-gray-700">
                    We will never track your browsing history or sell your data. Your privacy is our priority.
                  </p>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 bg-blue-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
                <div className="relative z-10">
                  <div className="h-12 w-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-6">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Always Improving</h3>
                  <p className="text-gray-700">
                    We continually update our blocking rules to stay ahead of new ad technologies and ensure effective protection.
                  </p>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 bg-purple-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
                <div className="relative z-10">
                  <div className="h-12 w-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-xl mb-6">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Free Core Product</h3>
                  <p className="text-gray-700">
                    We're committed to keeping our core ad blocking functionality free and accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - WITH RED BACKGROUND */}
        <section className="section-spacing bg-schedise-red text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-2 mb-6">Join Our Mission</h2>
              <p className="text-xl mb-8">
                Help us create a better web experience by installing Ad Blocker by Schedise today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <CTAButton 
                  href="https://chrome.google.com/webstore" 
                  variant="primary"
                  size="lg"
                  className="bg-white text-schedise-red hover:bg-gray-100"
                >
                  Add to Chrome - It's Free
                </CTAButton>
                <CTAButton 
                  href="/support" 
                  variant="secondary"
                  size="lg"
                  className="bg-transparent border border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
