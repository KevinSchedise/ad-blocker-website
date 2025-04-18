import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  CreativePricing,
  type PricingTier,
} from "@/components/ui/creative-pricing";
import {
  Check,
  ChevronRight,
  Clock,
  CloudCog,
  Cookie,
  Download,
  ImageIcon,
  Infinity,
  Palette,
  Sparkles,
  X,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Premium = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: "Monthly",
      icon: <Clock className="w-6 h-6" />,
      price: 4,
      description: "Perfect for trying out Premium features",
      color: "black",
      features: [
        "All Premium features",
        "Cancel anytime",
        "Priority support",
        "14-day money-back guarantee",
      ],
      buttonText: "Choose Monthly",
      buttonHref: "#monthly-plan",
    },
    {
      name: "Annual",
      icon: <Sparkles className="w-6 h-6" />,
      price: 40,
      period: "/year",
      description: "Save $8 (2 months free)",
      color: "black",
      features: [
        "All Premium features",
        "Priority support",
        "Best value",
        "14-day money-back guarantee",
      ],
      popular: true,
      buttonText: "Choose Annual",
      buttonHref: "#yearly-plan",
    },
    {
      name: "Lifetime",
      icon: <Infinity className="w-6 h-6" />,
      price: 79,
      period: "one-time",
      description: "Limited time offer",
      color: "purple",
      features: [
        "All Premium features",
        "Priority support",
        "Pay once, use forever",
        "14-day money-back guarantee",
      ],
      buttonText: "Choose Lifetime",
      buttonHref: "#lifetime-plan",
    },
  ];

  const premiumFaqs = [
    {
      question: "How does payment work?",
      answer:
        "We use secure payment processing through Stripe. Your payment information is never stored on our servers. You can pay using credit/debit cards or PayPal.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. Your premium features will continue until the end of your current billing period. We don't offer refunds for partial subscription periods.",
    },
    {
      question: "Is there a free trial for Premium features?",
      answer:
        "We don't currently offer a free trial, but we do have a 14-day money-back guarantee if you're not satisfied with the Premium features.",
    },
    {
      question: "How does Image Swap work?",
      answer:
        "Image Swap lets you replace ad spaces with images from categories you choose (nature, art, etc.) or custom images you upload. You can configure these preferences in the extension options page.",
    },
    {
      question: "What happens to my settings if my subscription lapses?",
      answer:
        "Your settings will be saved locally for 30 days. If you renew within that period, all your custom settings will be restored. After 30 days, premium settings may be reset to defaults.",
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
                Premium Features
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Upgrade to Premium
              </h1>
              <p className="text-xl text-gray-700">
                Take full control of your browsing experience with advanced
                features designed for power users.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center pt-5 gap-4">
            <Link
              to="https://chromewebstore.google.com/detail/ad-blocker-schedise/cefmjbpojmcoagdhbhbaefcidbblngjg"
              className="group flex items-center justify-center gap-2 py-3 text-gray-900 transition-all duration-300 hover:text-schedise-red"
            >
              <Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Add to Chrome - It's Free</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="#yearly-plan"
              className="group flex items-center justify-center gap-2 px-6 py-3 text-gray-900 transition-all duration-300 hover:text-schedise-red"
            >
              <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Upgrade to Premium</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Premium Features Section */}
        <section className="pb-20 bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Premium Features
              </h2>
              <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                Upgrade to Premium for enhanced control, customization options,
                and additional blocking capabilities.
              </p>
            </div>

            <BentoGrid className="lg:grid-rows-3">
              <BentoCard
                icon={X}
                name="Distraction Control"
                description="Block floating videos, newsletter pop-ups, notification dialogs, survey overlays, and other distracting elements."
                className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
              <BentoCard
                icon={Cookie}
                name="Cookie Consent Cutter"
                description="Automatically handle cookie consent banners based on your preferences for a smoother browsing experience."
                className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
              <BentoCard
                icon={ImageIcon}
                name="Image Swap"
                description="Replace blocked ad spaces with images of your choice, creating a more pleasant browsing experience."
                className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
              <BentoCard
                icon={CloudCog}
                name="Settings Backup & Sync"
                description="Back up your settings, whitelist, and custom rules to your account and sync them across browsers."
                className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
              <BentoCard
                icon={Palette}
                name="Custom Themes"
                description="Personalize your ad blocker interface with a variety of visual themes and styles."
                className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
            </BentoGrid>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <CreativePricing
            title="Choose Your Plan"
            description="Get all Premium features at a price that works for you"
            tiers={pricingTiers}
          />
        </section>

        {/* Compare Free vs Premium */}
        <section className="section-spacing bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 bg-schedise-indigo/10 rounded-full text-schedise-indigo font-medium text-sm">
                Plan Comparison
              </div>
              <h2 className="text-4xl font-bold mb-6">Compare Plans</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                See what's included in each plan to make the right choice for
                your needs.
              </p>
            </div>

            <div className="overflow-x-auto max-w-4xl mx-auto">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-6 px-8 text-left bg-white border-b border-gray-100">
                        <span className="text-lg font-bold text-gray-900">
                          Features
                        </span>
                      </th>
                      <th className="py-6 px-8 text-center bg-white border-b border-gray-100">
                        <span className="text-lg font-bold text-gray-900">
                          Free
                        </span>
                        <p className="text-sm text-gray-500 font-normal mt-1">
                          Get started now
                        </p>
                      </th>
                      <th className="py-6 px-8 text-center bg-schedise-indigo/5 border-b border-gray-100">
                        <span className="text-lg font-bold text-schedise-indigo">
                          Premium
                        </span>
                        <p className="text-sm text-gray-500 font-normal mt-1">
                          Most popular
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8">Core Blocking Engine</td>
                      <td className="py-4 px-8 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-4 px-8 text-center bg-schedise-indigo/5">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8">Filter-List Blocking</td>
                      <td className="py-4 px-8 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-4 px-8 text-center bg-schedise-indigo/5">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8">Website Whitelisting</td>
                      <td className="py-4 px-8 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-4 px-8 text-center bg-schedise-indigo/5">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8">Pause & Play Functionality</td>
                      <td className="py-4 px-8 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-4 px-8 text-center bg-schedise-indigo/5">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8">Right-Click Blocking</td>
                      <td className="py-4 px-8 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-4 px-8 text-center bg-schedise-indigo/5">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8">Basic Stats</td>
                      <td className="py-4 px-8 text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-4 px-8 text-center bg-schedise-indigo/5">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8">Distraction Control</td>
                      <td className="py-4 px-8 text-center">
                        <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                      </td>
                      <td className="py-4 px-8 text-center bg-schedise-indigo/5">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8">Cookie Consent Cutter</td>
                      <td className="py-4 px-8 text-center">
                        <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                      </td>
                      <td className="py-4 px-8 text-center bg-schedise-indigo/5">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8">Image Swap</td>
                      <td className="py-4 px-8 text-center">
                        <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                      </td>
                      <td className="py-4 px-8 text-center bg-schedise-indigo/5">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8">Settings Backup & Sync</td>
                      <td className="py-4 px-8 text-center">
                        <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                      </td>
                      <td className="py-4 px-8 text-center bg-schedise-indigo/5">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8">Custom Themes</td>
                      <td className="py-4 px-8 text-center">
                        <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                      </td>
                      <td className="py-4 px-8 text-center bg-schedise-indigo/5">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8">Advanced Statistics</td>
                      <td className="py-4 px-8 text-center">
                        <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                      </td>
                      <td className="py-4 px-8 text-center bg-schedise-indigo/5">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-8">Priority Support</td>
                      <td className="py-4 px-8 text-center">
                        <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                      </td>
                      <td className="py-4 px-8 text-center bg-schedise-indigo/5">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <Banner
          title="Unlock Premium Features Today"
          description="Experience the full power of Ad Blocker with advanced features, customization options, and priority support."
          primaryAction={{
            text: "Get Premium Now",
            href: "#yearly-plan",
          }}
          secondaryAction={{
            text: "Compare Plans",
            href: "#pricing",
          }}
        />
        {/* FAQ Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <FAQ faqs={premiumFaqs} title="Frequently Asked Questions" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Premium;
