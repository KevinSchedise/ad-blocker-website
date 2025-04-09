import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import CTAButton from "@/components/CTAButton";
import { ShieldCheck, Zap, Lock, LineChart, ChevronRight, CheckCircle2, BarChart, Shield, XCircle, PieChart, TrendingUp, ShieldX } from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section with Modern Design */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <div className="inline-block px-4 py-1.5 bg-schedise-indigo/10 rounded-full text-schedise-indigo font-medium text-sm mb-6">
                  Browse Faster. Browse Safer.
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-schedise-red block">Stop Seeing Ads.</span>
                  Start Enjoying the Web.
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Ad Blocker by Schedise removes annoying ads, pop-ups, and trackers. Experience websites as they were meant to be – clean, fast, and private.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton 
                    href="https://chrome.google.com/webstore" 
                    variant="primary" 
                    size="lg"
                  >
                    Add to Chrome - It's Free
                  </CTAButton>
                  <CTAButton 
                    href="/features" 
                    variant="secondary"
                    size="lg"
                  >
                    Learn More
                  </CTAButton>
                </div>
                
                <div className="mt-8 flex items-center flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span className="text-sm font-medium">100% Free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span className="text-sm font-medium">No Registration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span className="text-sm font-medium">Privacy Focused</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-10">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                  <div className="p-1 bg-gray-100 flex items-center">
                    <div className="flex space-x-1.5 ml-2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto text-xs text-gray-500 font-medium">Clean browsing experience</div>
                  </div>
                  <div className="relative p-4 flex">
                    <div className="flex-1">
                      {/* Simulated content elements with animations */}
                      <div className="mb-4 max-w-md">
                        <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                      </div>
                      <div className="flex space-x-4 mb-6">
                        <div className="w-32 h-24 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">
                          Content Image
                        </div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full"></div>
                          <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-5/6"></div>
                          <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-4/6"></div>
                        </div>
                      </div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full"></div>
                    </div>
                    <div className="w-48 relative">
                      {/* Blocked ad overlay */}
                      <div className="absolute inset-0 bg-red-50 border border-red-100 rounded-lg flex flex-col items-center justify-center text-center p-2 transform -translate-x-full opacity-0">
                        <XCircle size={24} className="text-schedise-red mb-2" />
                        <div className="text-sm font-medium text-schedise-red mb-1">Advertisement Blocked</div>
                        <div className="text-xs text-red-500">Ad Blocker by Schedise</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-schedise-red text-white text-xs px-3 py-1 rounded-full shadow-lg">
                    <div className="flex items-center">
                      <Shield size={14} className="mr-1" />
                      <span>Ads Blocked: 14</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/3 right-6 -mr-4 hidden lg:block">
                  <div className="bg-white p-3 rounded-full shadow-xl border border-gray-100">
                    <div className="h-12 w-12 bg-schedise-red rounded-full flex items-center justify-center">
                      <ShieldX size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - UPDATED STATS */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-schedise-red mb-2">10k+</div>
                <p className="text-sm text-gray-600">Ads Blocked Daily</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-schedise-red mb-2">5k+</div>
                <p className="text-sm text-gray-600">Early Users</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-schedise-red mb-2">2x</div>
                <p className="text-sm text-gray-600">Faster Browsing</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-schedise-red mb-2">98.5%</div>
                <p className="text-sm text-gray-600">Blocking Accuracy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Modern Cards */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our ad blocker provides the essential tools you need for a cleaner, faster, and more private browsing experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ShieldCheck size={24} />}
                title="Block All Ads"
                description="Effectively blocks banner ads, sidebar ads, pop-ups, and video ads across websites."
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<Zap size={24} />}
                title="Faster Browsing"
                description="Experience up to 2x faster page load times by blocking resource-heavy advertisements."
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<Lock size={24} />}
                title="Privacy Protection"
                description="Blocks basic trackers to protect your privacy while browsing the web."
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<LineChart size={24} />}
                title="Performance Insights"
                description="See how many ads have been blocked and how much bandwidth you've saved."
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<PieChart size={24} />}
                title="Easy Customization"
                description="Whitelist your favorite websites with just one click to support content creators."
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<TrendingUp size={24} />}
                title="Constantly Updated"
                description="Our filter lists are continuously updated to protect against the latest ad techniques."
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/features"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-schedise-indigo font-medium hover:underline"
              >
                View all features 
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section with Infographic */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Getting started with Ad Blocker by Schedise is simple and takes just seconds.
              </p>
            </div>
            
            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
              
              <div className="grid md:grid-cols-3 gap-12 relative z-10">
                <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <div className="w-16 h-16 bg-schedise-red rounded-full flex items-center justify-center text-white mb-6 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-4">Install the Extension</h3>
                  <p className="text-gray-700">
                    Add our extension to Chrome with just one click. No signup required.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <div className="w-16 h-16 bg-schedise-red rounded-full flex items-center justify-center text-white mb-6 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-4">Automatic Blocking</h3>
                  <p className="text-gray-700">
                    Our extension immediately begins blocking ads and trackers on all websites.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <div className="w-16 h-16 bg-schedise-red rounded-full flex items-center justify-center text-white mb-6 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-4">Enjoy Cleaner Browsing</h3>
                  <p className="text-gray-700">
                    Experience a faster, cleaner, and more private browsing experience instantly.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Performance Chart */}
            <div className="mt-20 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-center">Performance Improvement</h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Page Load Time</span>
                        <span className="text-green-600 font-medium">-58%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Data Usage</span>
                        <span className="text-green-600 font-medium">-63%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: '37%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">CPU Usage</span>
                        <span className="text-green-600 font-medium">-45%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: '55%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-sm">
                    <div className="flex items-center justify-center">
                      <BarChart className="h-48 w-48 text-schedise-indigo opacity-90" />
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      Based on tests across 1,000 popular websites
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section - IMPROVED WITH GRAPHIC */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">We Respect Your Privacy</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 h-24 w-24 bg-schedise-red/5 rounded-full -mr-6 -mt-6"></div>
                    <div className="absolute bottom-0 left-0 h-16 w-16 bg-schedise-indigo/5 rounded-full -ml-4 -mb-4"></div>
                    <p className="text-gray-700 relative z-10 font-medium">
                      We don't track your browsing history. Your data stays private, and our extension is designed to be lightweight, using minimal system resources.
                    </p>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-center space-x-4">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                          <div className="h-3 w-3 bg-schedise-red rounded-full"></div>
                          <div className="h-3 w-3 bg-schedise-indigo rounded-full"></div>
                        </div>
                        <div className="text-sm font-medium text-gray-600">No tracking cookies</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <CTAButton 
                      href="/privacy" 
                      variant="secondary"
                    >
                      Read Our Privacy Policy
                    </CTAButton>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative">
                    {/* Lock and Shield Illustration */}
                    <div className="bg-gray-100 p-8 rounded-lg relative">
                      <div className="flex flex-col items-center justify-center">
                        <div className="h-24 w-24 bg-schedise-red rounded-full flex items-center justify-center mb-4 shadow-lg">
                          <Lock size={48} className="text-white" />
                        </div>
                        <div className="h-16 w-16 bg-schedise-indigo absolute top-4 right-8 rounded-full flex items-center justify-center shadow-lg">
                          <Shield size={32} className="text-white" />
                        </div>
                        <div className="h-12 w-12 bg-green-500 absolute bottom-4 left-8 rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle2 size={24} className="text-white" />
                        </div>
                        
                        {/* Connection Lines */}
                        <div className="absolute h-1 w-20 bg-gray-300 top-16 right-24 transform rotate-45"></div>
                        <div className="absolute h-1 w-20 bg-gray-300 bottom-16 left-24 transform -rotate-45"></div>
                        
                        <div className="text-center mt-3 text-sm font-medium text-gray-700">Your data is protected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - WITH RED BACKGROUND */}
        <section className="py-16 bg-schedise-red text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Cleaner Web Experience?</h2>
              <p className="text-xl mb-8">
                Join thousands of users enjoying ad-free browsing. It's free, fast, and easy to install.
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
                  href="/premium" 
                  variant="secondary"
                  size="lg"
                  className="bg-transparent border border-white text-white hover:bg-white/10"
                >
                  Explore Premium
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

export default Index;
