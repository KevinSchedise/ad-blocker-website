
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import FeatureCard from "@/components/FeatureCard";
import FAQ from "@/components/FAQ";
import { Check, Cookie, ImageIcon, CloudCog, Palette, BarChart, X, XCircle } from "lucide-react";

const Premium = () => {
  const premiumFaqs = [
    {
      question: "How does payment work?",
      answer: "We use secure payment processing through Stripe. Your payment information is never stored on our servers. You can pay using credit/debit cards or PayPal."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your premium features will continue until the end of your current billing period. We don't offer refunds for partial subscription periods."
    },
    {
      question: "Is there a free trial for Premium features?",
      answer: "We don't currently offer a free trial, but we do have a 14-day money-back guarantee if you're not satisfied with the Premium features."
    },
    {
      question: "How does Image Swap work?",
      answer: "Image Swap lets you replace ad spaces with images from categories you choose (nature, art, etc.) or custom images you upload. You can configure these preferences in the extension options page."
    },
    {
      question: "What happens to my settings if my subscription lapses?",
      answer: "Your settings will be saved locally for 30 days. If you renew within that period, all your custom settings will be restored. After 30 days, premium settings may be reset to defaults."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-1 mb-6">Upgrade to Premium</h1>
              <p className="text-xl text-gray-700">
                Take full control of your browsing experience with advanced features designed for power users.
              </p>
            </div>
          </div>
        </section>

        {/* Premium Features Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Premium Features</h2>
              <p className="text-xl text-gray-700 mb-8">
                Upgrade to Premium for these powerful additional features that take your ad-blocking experience to the next level.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<X size={24} />}
                title="Distraction Control"
                description="Block floating videos, newsletter pop-ups, notification dialogs, survey overlays, and other distracting elements."
                variant="premium"
              />
              <FeatureCard
                icon={<Cookie size={24} />}
                title="Cookie Consent Cutter"
                description="Automatically handle cookie consent banners based on your preferences for a smoother browsing experience."
                variant="premium"
              />
              <FeatureCard
                icon={<ImageIcon size={24} />}
                title="Image Swap"
                description="Replace blocked ad spaces with images of your choice, creating a more pleasant browsing experience."
                variant="premium"
              />
              <FeatureCard
                icon={<CloudCog size={24} />}
                title="Settings Backup & Sync"
                description="Back up your settings, whitelist, and custom rules to your account and sync them across browsers."
                variant="premium"
              />
              <FeatureCard
                icon={<Palette size={24} />}
                title="Custom Themes"
                description="Personalize your ad blocker interface with a variety of visual themes and styles."
                variant="premium"
              />
              <FeatureCard
                icon={<BarChart size={24} />}
                title="Advanced Statistics"
                description="Get detailed insights into your blocking activity with advanced stats and visualizations."
                variant="premium"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-spacing bg-gray-50">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-700 mb-8 text-center">
                Choose the plan that works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Monthly Plan */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold mb-2">Monthly</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">$4</span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                  <p className="text-gray-600 mt-2">Billed monthly</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>All Premium features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Cancel anytime</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <CTAButton 
                      href="#monthly-plan" 
                      variant="secondary"
                      className="w-full"
                    >
                      Choose Monthly
                    </CTAButton>
                  </div>
                </div>
              </div>

              {/* Yearly Plan */}
              <div className="bg-white rounded-lg border-2 border-schedise-indigo shadow-md transform md:-translate-y-4">
                <div className="bg-schedise-indigo text-white text-center py-2 text-sm font-medium rounded-t-md">
                  MOST POPULAR
                </div>
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold mb-2">Annual</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">$40</span>
                    <span className="text-gray-600 ml-1">/year</span>
                  </div>
                  <p className="text-green-600 mt-2">Save $8 (2 months free)</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>All Premium features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="font-medium">Best value</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <CTAButton 
                      href="#yearly-plan" 
                      variant="primary"
                      className="w-full"
                    >
                      Choose Annual
                    </CTAButton>
                  </div>
                </div>
              </div>

              {/* Lifetime Plan */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold mb-2">Lifetime</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">$79</span>
                    <span className="text-gray-600 ml-1">one-time</span>
                  </div>
                  <p className="text-amber-600 mt-2">Limited time offer</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>All Premium features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="font-medium">Pay once, use forever</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <CTAButton 
                      href="#lifetime-plan" 
                      variant="secondary"
                      className="w-full"
                    >
                      Choose Lifetime
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compare Free vs Premium */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Compare Plans</h2>
              <p className="text-xl text-gray-700 mb-8 text-center">
                See what's included in each plan to make the right choice for your needs.
              </p>
            </div>

            <div className="overflow-x-auto max-w-4xl mx-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-4 px-6 text-left border-b-2 border-gray-200 bg-gray-50">Features</th>
                    <th className="py-4 px-6 text-center border-b-2 border-gray-200 bg-gray-50">Free</th>
                    <th className="py-4 px-6 text-center border-b-2 border-gray-200 bg-gray-50 bg-schedise-indigo/5">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6">Core Blocking Engine</td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6">Filter-List Blocking</td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6">Website Whitelisting</td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6">Pause & Play Functionality</td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6">Right-Click Blocking</td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6">Basic Stats</td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6">Distraction Control</td>
                    <td className="py-3 px-6 text-center"><XCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6">Cookie Consent Cutter</td>
                    <td className="py-3 px-6 text-center"><XCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6">Image Swap</td>
                    <td className="py-3 px-6 text-center"><XCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6">Settings Backup & Sync</td>
                    <td className="py-3 px-6 text-center"><XCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6">Custom Themes</td>
                    <td className="py-3 px-6 text-center"><XCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6">Advanced Statistics</td>
                    <td className="py-3 px-6 text-center"><XCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6">Priority Support</td>
                    <td className="py-3 px-6 text-center"><XCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="py-3 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-spacing bg-gray-50">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <FAQ faqs={premiumFaqs} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-spacing bg-schedise-indigo text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-2 mb-6">Ready to Enhance Your Ad Blocking?</h2>
              <p className="text-xl mb-8">
                Upgrade to Premium today and take full control of your browsing experience.
              </p>
              <CTAButton 
                href="#premium-plans" 
                variant="primary"
                size="lg"
                className="bg-white text-schedise-indigo hover:bg-gray-100"
              >
                Upgrade to Premium
              </CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Premium;
