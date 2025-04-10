import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { GridPattern } from "@/components/ui/grid-pattern";
import {
  AlertTriangle,
  Check,
  ChevronRight,
  Clock,
  Download,
  Filter,
  LineChart,
  Lock,
  MousePointer,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const freeFeaturesFaqs = [
    {
      question: "How does the Core Blocking Engine work?",
      answer:
        "Our blocking engine uses efficient regular expression (Regex) patterns combined with community-maintained filter lists to identify and block ads. This approach ensures high performance while effectively removing unwanted content.",
    },
    {
      question: "What are Filter Lists?",
      answer:
        "Filter lists are community-maintained collections of rules that tell the ad blocker which elements to block. We use EasyList (https://easylist.to) and other trusted sources that are regularly updated to ensure effective blocking against the latest ad techniques.",
    },
    {
      question: "How do I whitelist a website?",
      answer:
        "To whitelist a website, simply click on the Ad Blocker icon in your browser toolbar and toggle the switch to disable blocking for the current site. To enable blocking again, just toggle the switch back on.",
    },
    {
      question: "Can I temporarily disable the ad blocker?",
      answer:
        "Yes! The Pause feature allows you to temporarily disable the ad blocker on any website. Simply click the Ad Blocker icon and use the pause button. You can resume blocking anytime with one click.",
    },
    {
      question: "How does the Right-Click Blocking feature work?",
      answer:
        "When you encounter an ad that wasn't automatically blocked, right-click on it and select 'Block Element' from the context menu. This adds the element to your custom block list, improving blocking for that specific site in the future.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-8 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block px-4 py-1.5 bg-schedise-indigo/10 rounded-full text-schedise-indigo font-medium text-sm mb-6">
                Feature Overview
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Features & Benefits
              </h1>
              <p className="text-xl text-gray-700">
                Ad Blocker by Schedise is designed to give you a faster,
                cleaner, and more private browsing experience. Here's how we
                help you take control of your web experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center pt-5 gap-4">
            <Link
              to="https://chrome.google.com/webstore"
              className="group flex items-center justify-center gap-2 py-3 text-gray-900 transition-all duration-300 hover:text-schedise-red"
            >
              <Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Add to Chrome - It's Free</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/features"
              className="group flex items-center justify-center gap-2 px-6 py-3 text-gray-900 transition-all duration-300 hover:text-schedise-red"
            >
              <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Upgrade to Premium</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Free Features Section */}
        <section className="pb-20 bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Free Features
              </h2>
              <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                Our free ad blocker includes powerful features to enhance your
                browsing experience without costing you a penny.
              </p>
            </div>

            <BentoGrid className="lg:grid-rows-3">
              <BentoCard
                icon={ShieldCheck}
                name="Core Blocking Engine"
                description="Advanced blocking engine using Regex patterns to efficiently identify and remove advertisements from websites."
                className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
              <BentoCard
                icon={Filter}
                name="Filter-List Blocking"
                description="Leverages community-maintained filter lists like EasyList to stay updated against the latest ad technologies."
                className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
              <BentoCard
                icon={Check}
                name="Website Whitelisting"
                description="Easily disable ad blocking on websites you want to support, with just one click in the toolbar."
                className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
              <BentoCard
                icon={PlayCircle}
                name="Pause & Play Functionality"
                description="Temporarily disable the ad blocker on any site and resume blocking whenever you want."
                className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
              <BentoCard
                icon={MousePointer}
                name="Right-Click Blocking"
                description="Improve blocking by right-clicking on any ad to add it to your personal block list."
                className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
            </BentoGrid>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="py-20 bg-white-50">
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
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                    Ads Visible
                  </span>
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
                    <div className="text-xs opacity-75">
                      Sign up for our newsletter
                    </div>
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
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Ads Blocked
                  </span>
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
                  <span className="text-xs text-green-600 font-medium">
                    5 ads blocked
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features Section */}
        <Banner
          title="Ready to Experience Ad-Free Browsing?"
          description="Get started with our powerful ad blocker and enjoy a cleaner, faster web experience today."
          primaryAction={{
            text: "Install Free Version",
            href: "https://chrome.google.com/webstore",
          }}
          secondaryAction={{
            text: "Upgrade to Premium",
            href: "/premium",
          }}
        />

        {/* Core Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Core Benefits
              </h2>
              <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                Here's why thousands of users choose Ad Blocker by Schedise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-200 transform transition-all duration-300 hover:shadow-md relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden">
                <BackgroundGrid size={20} />
                <div className="relative z-10">
                  <div className="p-3 rounded-full bg-schedise-indigo/10 w-fit">
                    <Zap className="text-schedise-indigo" size={24} />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Speed</h3>
                  <p className="text-gray-700">
                    Significantly faster page load times as fewer requests are
                    made and less data is downloaded. Websites can load up to
                    twice as fast without ads and trackers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-200 transform transition-all duration-300 hover:shadow-md relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden">
                <BackgroundGrid size={20} />
                <div className="relative z-10">
                  <div className="p-3 rounded-full bg-schedise-indigo/10 w-fit">
                    <ShieldCheck className="text-schedise-indigo" size={24} />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Clean Experience</h3>
                  <p className="text-gray-700">
                    Focus on the content you care about without visual
                    distractions. Enjoy a clutter-free browsing experience with
                    clean webpage layouts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-200 transform transition-all duration-300 hover:shadow-md relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden">
                <BackgroundGrid size={20} />
                <div className="relative z-10">
                  <div className="p-3 rounded-full bg-schedise-indigo/10 w-fit">
                    <Lock className="text-schedise-indigo" size={24} />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Privacy</h3>
                  <p className="text-gray-700">
                    Blocking trackers helps protect your privacy online by
                    preventing companies from collecting data about your
                    browsing habits and building profiles.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-200 transform transition-all duration-300 hover:shadow-md relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden">
                <BackgroundGrid size={20} />
                <div className="relative z-10">
                  <div className="p-3 rounded-full bg-schedise-indigo/10 w-fit">
                    <LineChart className="text-schedise-indigo" size={24} />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Simplicity</h3>
                  <p className="text-gray-700">
                    Simple installation with no complex configuration needed.
                    Our ad blocker works right out of the box with sensible
                    defaults.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="my-16 max-w-3xl mx-auto">
          <FAQ
            faqs={freeFeaturesFaqs}
            title="Frequently Asked Questions: Free Features"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
