
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import FeatureCard from "@/components/FeatureCard";
import { ShieldCheck, Zap, Lock, LineChart, Check, AlertTriangle, X, Clock, Filter, PlayCircle, MousePointer, BarChart, Settings, Cookie, ImageIcon, CloudCog, Palette } from "lucide-react";

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const freeFeaturesFaqs = [
    {
      question: "How does the Core Blocking Engine work?",
      answer: "Our blocking engine uses efficient regular expression (Regex) patterns combined with community-maintained filter lists to identify and block ads. This approach ensures high performance while effectively removing unwanted content."
    },
    {
      question: "What are Filter Lists?",
      answer: "Filter lists are community-maintained collections of rules that tell the ad blocker which elements to block. We use EasyList (https://easylist.to) and other trusted sources that are regularly updated to ensure effective blocking against the latest ad techniques."
    },
    {
      question: "How do I whitelist a website?",
      answer: "To whitelist a website, simply click on the Ad Blocker icon in your browser toolbar and toggle the switch to disable blocking for the current site. To enable blocking again, just toggle the switch back on."
    },
    {
      question: "Can I temporarily disable the ad blocker?",
      answer: "Yes! The Pause feature allows you to temporarily disable the ad blocker on any website. Simply click the Ad Blocker icon and use the pause button. You can resume blocking anytime with one click."
    },
    {
      question: "How does the Right-Click Blocking feature work?",
      answer: "When you encounter an ad that wasn't automatically blocked, right-click on it and select 'Block Element' from the context menu. This adds the element to your custom block list, improving blocking for that specific site in the future."
    }
  ];

  const premiumFeaturesFaqs = [
    {
      question: "What's included in Distraction Control?",
      answer: "Distraction Control blocks floating videos, newsletter sign-up pop-ups, notification permission dialogs, survey overlays, iframes, and other distracting elements that interrupt your browsing experience."
    },
    {
      question: "How does Cookie Consent Cutter work?",
      answer: "Cookie Consent Cutter automatically handles cookie consent banners based on your preferences. You can configure it to either hide them completely or automatically dismiss them with your preferred settings."
    },
    {
      question: "What is Image Swap and how do I use it?",
      answer: "Image Swap replaces blocked ad spaces with images of your choice. You can select categories (like nature, art, or pets) or upload your own images. This creates a more pleasant browsing experience by filling empty spaces with content you actually want to see."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block px-4 py-1.5 bg-schedise-indigo/10 rounded-full text-schedise-indigo font-medium text-sm mb-6">
                Feature Overview
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Features & Benefits</h1>
              <p className="text-xl text-gray-700">
                Ad Blocker by Schedise is designed to give you a faster, cleaner, and more private browsing experience. Here's how we help you take control of your web experience.
              </p>
            </div>
          </div>
        </section>

        {/* Free Features Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Free Features</h2>
              <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                Our free ad blocker includes powerful features to enhance your browsing experience without costing you a penny.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ShieldCheck size={24} />}
                title="Core Blocking Engine"
                description="Advanced blocking engine using Regex patterns to efficiently identify and remove advertisements from websites."
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<Filter size={24} />}
                title="Filter-List Blocking"
                description="Leverages community-maintained filter lists like EasyList to stay updated against the latest ad technologies."
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<Check size={24} />}
                title="Website Whitelisting"
                description="Easily disable ad blocking on websites you want to support, with just one click in the toolbar."
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<PlayCircle size={24} />}
                title="Pause & Play Functionality"
                description="Temporarily disable the ad blocker on any site and resume blocking whenever you want."
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<MousePointer size={24} />}
                title="Right-Click Blocking"
                description="Improve blocking by right-clicking on any ad to add it to your personal block list."
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<BarChart size={24} />}
                title="Real-Time Stats"
                description="See how many ads have been blocked and receive monthly notifications summarizing your blocking activity."
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<Settings size={24} />}
                title="Options Page"
                description="Customize your ad blocking experience with an intuitive options page to configure all settings."
                className="md:col-start-2 lg:col-start-auto transform transition-all duration-300 hover:translate-y-[-5px]"
              />
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <FAQ faqs={freeFeaturesFaqs} title="Frequently Asked Questions: Free Features" />
            </div>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">See the Difference</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Experience cleaner, faster websites with our ad blocker enabled.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Without Ad Blocker */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-300 hover:shadow-xl">
                <div className="p-4 bg-gray-100 flex justify-between items-center border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <AlertTriangle className="text-amber-500" size={20} />
                    </div>
                    <span className="font-medium">Without Ad Blocker</span>
                  </div>
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Ads Visible</span>
                </div>
                <div className="p-6">
                  <div className="bg-gray-100 p-4 mb-4 rounded">
                    <div className="w-3/4 h-4 bg-gray-300 mb-4 rounded"></div>
                    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="bg-amber-100 p-4 mb-4 rounded text-center text-amber-800 text-sm border border-amber-200">
                    <div className="font-bold mb-1">ADVERTISEMENT</div>
                    <div className="text-xs opacity-75">300x250 banner</div>
                  </div>
                  <div className="bg-gray-100 p-4 mb-4 rounded">
                    <div className="w-full h-4 bg-gray-300 mb-2 rounded"></div>
                    <div className="w-full h-4 bg-gray-300 mb-2 rounded"></div>
                    <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="bg-amber-100 p-4 text-center text-amber-800 text-sm border border-amber-200 rounded sticky bottom-0 left-0 right-0">
                    <div className="font-bold mb-1">POP-UP AD</div>
                    <div className="text-xs opacity-75">Sign up for our newsletter</div>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 flex items-center justify-between border-t border-gray-200">
                  <div className="flex items-center">
                    <Clock className="text-gray-700 mr-2" size={16} />
                    <span className="text-sm">Load time: 8.5 seconds</span>
                  </div>
                  <span className="text-xs text-gray-500">5 ad requests</span>
                </div>
              </div>
              
              {/* With Ad Blocker */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-300 hover:shadow-xl">
                <div className="p-4 bg-gray-100 flex justify-between items-center border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <Check className="text-green-500" size={20} />
                    </div>
                    <span className="font-medium">With Ad Blocker</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Ads Blocked</span>
                </div>
                <div className="p-6">
                  <div className="bg-gray-100 p-4 mb-4 rounded">
                    <div className="w-3/4 h-4 bg-gray-300 mb-4 rounded"></div>
                    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="bg-gray-100 p-4 mb-4 rounded">
                    <div className="w-full h-4 bg-gray-300 mb-2 rounded"></div>
                    <div className="w-full h-4 bg-gray-300 mb-2 rounded"></div>
                    <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 flex items-center justify-between border-t border-gray-200">
                  <div className="flex items-center">
                    <Clock className="text-gray-700 mr-2" size={16} />
                    <span className="text-sm">Load time: 3.2 seconds</span>
                  </div>
                  <span className="text-xs text-green-600 font-medium">5 ads blocked</span>
                </div>
              </div>
            </div>
            
            {/* Key Metrics */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-schedise-red mb-2">62%</div>
                  <p className="text-sm text-gray-600">Faster Loading</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-schedise-red mb-2">58%</div>
                  <p className="text-sm text-gray-600">Less Data Used</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-schedise-red mb-2">100%</div>
                  <p className="text-sm text-gray-600">More Pleasant</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Premium Features</h2>
              <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                Upgrade to Premium for enhanced control, customization options, and additional blocking capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<X size={24} />}
                title="Distraction Control"
                description="Block floating videos, newsletter pop-ups, notification dialogs, survey overlays, and other distracting elements."
                variant="premium"
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<Cookie size={24} />}
                title="Cookie Consent Cutter"
                description="Automatically handle cookie consent banners based on your preferences for a smoother browsing experience."
                variant="premium"
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<ImageIcon size={24} />}
                title="Image Swap"
                description="Replace blocked ad spaces with images of your choice, creating a more pleasant browsing experience."
                variant="premium"
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<CloudCog size={24} />}
                title="Settings Backup & Sync"
                description="Back up your settings, whitelist, and custom rules to your account and sync them across browsers."
                variant="premium"
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<Palette size={24} />}
                title="Custom Themes"
                description="Personalize your ad blocker interface with a variety of visual themes and styles."
                variant="premium"
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
              <FeatureCard
                icon={<LineChart size={24} />}
                title="Advanced Statistics"
                description="Get detailed insights into your blocking activity with advanced stats and visualizations."
                variant="premium"
                className="transform transition-all duration-300 hover:translate-y-[-5px]"
              />
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <FAQ faqs={premiumFeaturesFaqs} title="Frequently Asked Questions: Premium Features" />
            </div>

            <div className="text-center mt-12">
              <CTAButton
                href="/premium" 
                variant="primary"
                size="lg"
              >
                Upgrade to Premium
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Core Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Core Benefits</h2>
              <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                Here's why thousands of users choose Ad Blocker by Schedise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 transform transition-all duration-300 hover:shadow-md">
                <div>
                  <div className="p-3 rounded-full bg-schedise-indigo/10 w-fit">
                    <Zap className="text-schedise-indigo" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Speed</h3>
                  <p className="text-gray-700">
                    Significantly faster page load times as fewer requests are made and less data is downloaded. Websites can load up to twice as fast without ads and trackers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 transform transition-all duration-300 hover:shadow-md">
                <div>
                  <div className="p-3 rounded-full bg-schedise-indigo/10 w-fit">
                    <ShieldCheck className="text-schedise-indigo" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Clean Experience</h3>
                  <p className="text-gray-700">
                    Focus on the content you care about without visual distractions. Enjoy a clutter-free browsing experience with clean webpage layouts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 transform transition-all duration-300 hover:shadow-md">
                <div>
                  <div className="p-3 rounded-full bg-schedise-indigo/10 w-fit">
                    <Lock className="text-schedise-indigo" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Privacy</h3>
                  <p className="text-gray-700">
                    Blocking trackers helps protect your privacy online by preventing companies from collecting data about your browsing habits and building profiles.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 transform transition-all duration-300 hover:shadow-md">
                <div>
                  <div className="p-3 rounded-full bg-schedise-indigo/10 w-fit">
                    <LineChart className="text-schedise-indigo" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Simplicity</h3>
                  <p className="text-gray-700">
                    Simple installation with no complex configuration needed. Our ad blocker works right out of the box with sensible defaults.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-schedise-red to-schedise-indigo text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Better Browsing Today</h2>
              <p className="text-xl mb-8">
                It takes just seconds to install Ad Blocker by Schedise and start enjoying a cleaner, faster web.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <CTAButton 
                  href="https://chrome.google.com/webstore" 
                  variant="primary"
                  size="lg"
                  className="bg-white text-schedise-indigo hover:bg-gray-100"
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

export default Features;
