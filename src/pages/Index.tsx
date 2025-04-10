import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { GridPattern } from "@/components/ui/grid-pattern";
import {
  BarChart,
  CheckCircle2,
  ChevronRight,
  LineChart,
  Lock,
  PieChart,
  Shield,
  ShieldCheck,
  ShieldX,
  TrendingUp,
  XCircle,
  Zap,
  Download,
  Sparkles,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Spotlight } from "@/components/ui/spotlight";
import Banner from "@/components/Banner";

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
                  <span className="text-schedise-red block">
                    Stop Seeing Ads.
                  </span>
                  Start Enjoying the Web.
                </h1>

                <div className="flex flex-col sm:flex-row mb-4 gap-4">
                  <Link
                    to="https://chrome.google.com/webstore"
                    className="group flex items-center justify-center gap-2 py-3 text-gray-900 transition-all duration-300 hover:text-schedise-red"
                  >
                    <Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium">
                      Add to Chrome - It's Free
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/features"
                    className="group flex items-center justify-center gap-2 px-6 py-3 text-gray-900 transition-all duration-300 hover:text-schedise-red"
                  >
                    <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium">Learn More</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Ad Blocker by Schedise removes annoying ads, pop-ups, and
                  trackers. Experience websites as they were meant to be –
                  clean, fast, and private.
                </p>
              

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
                    <div className="mx-auto text-xs text-gray-500 font-medium">
                      Clean browsing experience
                    </div>
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
                        <div className="text-sm font-medium text-schedise-red mb-1">
                          Advertisement Blocked
                        </div>
                        <div className="text-xs text-red-500">
                          Ad Blocker by Schedise
                        </div>
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
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-xl bg-white/40 backdrop-blur-sm shadow-[inset_0px_0px_20px_rgba(255,255,255,0.5)] hover:shadow-[inset_0px_0px_40px_rgba(255,255,255,0.8),0px_0px_20px_rgba(255,255,255,0.8)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="text-3xl md:text-4xl font-bold text-schedise-red mb-2">
                  10k+
                </div>
                <p className="text-sm text-gray-600">Ads Blocked Daily</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/40 backdrop-blur-sm shadow-[inset_0px_0px_20px_rgba(255,255,255,0.5)] hover:shadow-[inset_0px_0px_40px_rgba(255,255,255,0.8),0px_0px_20px_rgba(255,255,255,0.8)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="text-3xl md:text-4xl font-bold text-schedise-red mb-2">
                  5k+
                </div>
                <p className="text-sm text-gray-600">Early Users</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/40 backdrop-blur-sm shadow-[inset_0px_0px_20px_rgba(255,255,255,0.5)] hover:shadow-[inset_0px_0px_40px_rgba(255,255,255,0.8),0px_0px_20px_rgba(255,255,255,0.8)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="text-3xl md:text-4xl font-bold text-schedise-red mb-2">
                  2x
                </div>
                <p className="text-sm text-gray-600">Faster Browsing</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/40 backdrop-blur-sm shadow-[inset_0px_0px_20px_rgba(255,255,255,0.5)] hover:shadow-[inset_0px_0px_40px_rgba(255,255,255,0.8),0px_0px_20px_rgba(255,255,255,0.8)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="text-3xl md:text-4xl font-bold text-schedise-red mb-2">
                  98.5%
                </div>
                <p className="text-sm text-gray-600">Blocking Accuracy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Bento Grid */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our ad blocker provides the essential tools you need for a
                cleaner, faster, and more private browsing experience.
              </p>
            </div>

            <BentoGrid className="lg:grid-rows-3">
              <BentoCard
                icon={ShieldCheck}
                name="Block All Ads"
                description="Effectively blocks banner ads, sidebar ads, pop-ups, and video ads across websites."
                className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4"
              />
              <BentoCard
                icon={Zap}
                name="Faster Browsing"
                description="Experience up to 2x faster page load times by blocking resource-heavy advertisements."
                className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
              />
              <BentoCard
                icon={Lock}
                name="Privacy Protection"
                description="Blocks basic trackers to protect your privacy while browsing the web."
                className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
              />
              <BentoCard
                icon={LineChart}
                name="Performance Insights"
                description="See how many ads have been blocked and how much bandwidth you've saved."
                className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
              />
              <BentoCard
                icon={PieChart}
                name="Easy Customization"
                description="Whitelist your favorite websites with just one click to support content creators."
                className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
              />
            </BentoGrid>

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

        {/* How It Works Section with Modern Design */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Getting started with Ad Blocker by Schedise is simple and takes
                just seconds.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 max-w-7xl mx-auto">
              <div className="relative bg-gradient-to-b from-neutral-100 to-white p-8 rounded-3xl overflow-hidden border border-neutral-200/50 shadow-sm">
                <BackgroundGrid size={20} />
                <div className="w-16 h-16 bg-schedise-red rounded-full flex items-center justify-center text-white mb-6 text-xl font-bold relative z-20">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 text-neutral-800 relative z-20">
                  Install the Extension
                </h3>
                <p className="text-neutral-600 relative z-20">
                  Add our extension to Chrome with just one click. No signup
                  required.
                </p>
              </div>

              <div className="relative bg-gradient-to-b from-neutral-100 to-white p-8 rounded-3xl overflow-hidden border border-neutral-200/50 shadow-sm">
                <BackgroundGrid size={20} />
                <div className="w-16 h-16 bg-schedise-red rounded-full flex items-center justify-center text-white mb-6 text-xl font-bold relative z-20">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 text-neutral-800 relative z-20">
                  Automatic Blocking
                </h3>
                <p className="text-neutral-600 relative z-20">
                  Our extension immediately begins blocking ads and trackers on
                  all websites.
                </p>
              </div>

              <div className="relative bg-gradient-to-b from-neutral-100 to-white p-8 rounded-3xl overflow-hidden border border-neutral-200/50 shadow-sm">
                <BackgroundGrid size={20} />
                <div className="w-16 h-16 bg-schedise-red rounded-full flex items-center justify-center text-white mb-6 text-xl font-bold relative z-20">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 text-neutral-800 relative z-20">
                  Enjoy Cleaner Browsing
                </h3>
                <p className="text-neutral-600 relative z-20">
                  Experience a faster, cleaner, and more private browsing
                  experience instantly.
                </p>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="mt-20 bg-white p-12 rounded-3xl overflow-hidden border border-neutral-200/50 shadow-lg relative">
              <div className="absolute inset-0 bg-grid-neutral-100/25 [mask-image:radial-gradient(white,transparent_70%)]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <TrendingUp className="w-96 h-96 text-schedise-red transform rotate-12" />
              </div>
              <BackgroundGrid size={20} />
              <div className="relative z-20">
                <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                  <div className="flex-1 space-y-8">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-schedise-red/10 rounded-lg">
                            <Zap className="h-5 w-5 text-schedise-red" />
                          </div>
                          <span className="font-medium text-black">
                            Page Performance
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-schedise-red font-semibold text-lg">
                            Optimized
                          </span>
                          <TrendingUp className="h-4 w-4 text-schedise-red" />
                        </div>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-neutral-100 h-3 rounded-full overflow-hidden">
                          <div
                            className="bg-schedise-red h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ width: "90%" }}
                          >
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer" />
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-neutral-600">
                          Maintains smooth page loading without impacting
                          performance
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-schedise-red/10 rounded-lg">
                            <BarChart className="h-5 w-5 text-schedise-red" />
                          </div>
                          <span className="font-medium text-black">
                            Data Efficiency
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-schedise-red font-semibold text-lg">
                            Reduced
                          </span>
                          <TrendingUp className="h-4 w-4 text-schedise-red" />
                        </div>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-neutral-100 h-3 rounded-full overflow-hidden">
                          <div
                            className="bg-schedise-red h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ width: "85%" }}
                          >
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer" />
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-neutral-600">
                          Saves data by blocking unnecessary ad content
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-schedise-red/10 rounded-lg">
                            <PieChart className="h-5 w-5 text-schedise-red" />
                          </div>
                          <span className="font-medium text-black">
                            Resource Usage
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-schedise-red font-semibold text-lg">
                            Efficient
                          </span>
                          <TrendingUp className="h-4 w-4 text-schedise-red" />
                        </div>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-neutral-100 h-3 rounded-full overflow-hidden">
                          <div
                            className="bg-schedise-red h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ width: "95%" }}
                          >
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer" />
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-neutral-600">
                          Lightweight extension with minimal CPU impact
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200/50 flex flex-col items-center justify-center">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 bg-schedise-red/10 rounded-full animate-spin-slow" />
                      <div className="absolute inset-4 bg-white rounded-full" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Shield className="h-16 w-16 text-schedise-red mx-auto mb-4" />
                          <div className="text-xl font-bold text-black mb-2">
                            Safe & Fast
                          </div>
                          <div className="text-neutral-600">
                            Browsing Experience
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-sm text-neutral-600 mt-6 max-w-sm">
                      Our extension is designed to enhance your browsing
                      experience while maintaining optimal performance and
                      privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="w-full h-[500px] bg-white relative overflow-hidden rounded-2xl shadow-xl border border-neutral-200/50">
                <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  fill="schedise-red"
                  size={400}
                />

                <div className="flex h-full">
                  {/* Left content */}
                  <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                      We Respect Your Privacy
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-lg text-lg">
                      We don't track your browsing history. Your data stays
                      private, and our extension is designed to be lightweight,
                      using minimal system resources.
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex items-center gap-3 bg-green-50 rounded-full px-4 py-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-700">
                          No tracking cookies
                        </span>
                      </div>
                      <div className="flex items-center gap-3 bg-schedise-red/10 rounded-full px-4 py-2">
                        <div className="h-2 w-2 bg-schedise-red rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-700">
                          Data protected
                        </span>
                      </div>
                    </div>
                    <div className="mt-8">
                      <CTAButton
                        href="/privacy"
                        variant="secondary"
                        className="bg-transparent hover:bg-transparent text-gray-900 hover:text-schedise-red border-0 shadow-none flex items-center gap-2 transition-colors"
                      >
                        Read Our Privacy Policy
                        <ChevronRight size={18} />
                      </CTAButton>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="flex-1 relative hidden md:block">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Main lock icon */}
                        <div className="h-32 w-32 bg-gray-100 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Lock size={64} className="text-gray-900" />
                        </div>

                        {/* Orbiting elements */}
                        <div className="absolute -top-12 -right-12 h-16 w-16 bg-schedise-red/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Shield size={32} className="text-schedise-red" />
                        </div>
                        <div className="absolute -bottom-8 -left-8 h-12 w-12 bg-green-100 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <CheckCircle2 size={24} className="text-green-600" />
                        </div>

                        {/* Connection lines */}
                        <div className="absolute h-px w-24 bg-gradient-to-r from-gray-200/0 via-gray-200 to-gray-200/0 top-8 -right-8 rotate-45"></div>
                        <div className="absolute h-px w-20 bg-gradient-to-r from-gray-200/0 via-gray-200 to-gray-200/0 bottom-12 -left-4 -rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Using Banner Component */}
        <Banner
          title="Ready for a Cleaner Web Experience?"
          description="Join thousands of users enjoying ad-free browsing. It's free, fast, and easy to install."
          primaryAction={{
            text: "Add to Chrome - It's Free",
            href: "https://chrome.google.com/webstore",
          }}
          secondaryAction={{
            text: "Explore Premium",
            href: "/premium",
          }}
        />
      </main>

      <Footer />
    </div>
  );
};

const BackgroundGrid = ({
  pattern,
  size,
}: {
  pattern?: [number, number][];
  size?: number;
}) => {
  const p =
    pattern ??
    ([
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ] as [number, number][]);
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-100/30 to-zinc-300/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export default Index;
