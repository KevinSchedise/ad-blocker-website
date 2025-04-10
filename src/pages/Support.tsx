import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SupportKnowledgeBase from "@/components/SupportKnowledgeBase";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Banner from "@/components/Banner";
import {
  HelpCircle,
  Mail,
  Send,
  FileQuestion,
  MessageSquare,
  MessageCircle,
} from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";

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

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "How do I install Ad Blocker by Schedise?",
      answer:
        "Click the 'Add to Chrome' button on our website. Chrome will ask you to confirm the installation. Once you confirm, the extension will be installed automatically and start working immediately.",
    },
    {
      question: "Is Ad Blocker by Schedise really free?",
      answer:
        "Yes, our core ad blocking functionality is completely free. This includes our powerful filter-list blocking, website whitelisting, pause/play functionality, and right-click blocking improvement. We also offer a Premium version with additional features like distraction control, cookie consent management, and advanced statistics.",
    },
    {
      question: "Does it slow down my browser?",
      answer:
        "No, in fact, it's the opposite! Ad Blocker by Schedise makes your browsing faster by blocking resource-heavy ads and trackers, reducing the amount of data that needs to be downloaded.",
    },
    {
      question: "How can I report a website where ads aren't blocked?",
      answer:
        "Please contact us at support@schedise.com with the website URL and details about what ads you're seeing. We continuously update our filter lists based on user feedback. You can also use our right-click blocking feature to report specific elements that should be blocked.",
    },
    {
      question: "How can I allow ads on a specific website (whitelist)?",
      answer:
        "Click on the Ad Blocker icon in your browser toolbar, then click the toggle switch to disable blocking for the current site. Click it again to re-enable blocking. You can manage your whitelist in the extension options page.",
    },
    {
      question: "What data do you collect?",
      answer:
        "We collect minimal data required for the extension to function. We do NOT collect or store your browsing history. For full details, please see our Privacy Policy.",
    },
    {
      question: "How do I uninstall the extension?",
      answer:
        "Right-click on the Ad Blocker icon in your browser toolbar and select 'Remove from Chrome', or go to Chrome Menu > More Tools > Extensions, find Ad Blocker by Schedise and click 'Remove'.",
    },
    {
      question: "Does this work on YouTube ads?",
      answer:
        "We block many ads on various platforms, but some sites like YouTube use sophisticated ad delivery methods that are challenging to block consistently. We're continuously working to improve our blocking capabilities.",
    },
  ];

  const knowledgeBaseArticles = [
    {
      title: "Getting Started with Ad Blocker by Schedise",
      description:
        "Learn how to install, configure, and start using Ad Blocker by Schedise effectively.",
      url: "/knowledge/getting-started",
    },
    {
      title: "Guide: Whitelisting Websites",
      description:
        "Learn how to whitelist your favorite websites to support content creators while blocking ads elsewhere.",
      url: "/knowledge/whitelisting",
    },
    {
      title: "Understanding Ad Blocking Filter Lists",
      description:
        "How filter lists work and why they're essential for effective ad blocking.",
      url: "/knowledge/filter-lists",
    },
    {
      title: "How to Use the Right-Click Blocking Feature",
      description:
        "Improve your browsing experience by reporting ads and elements that should be blocked.",
      url: "/knowledge/right-click-blocking",
    },
    {
      title: "Troubleshooting Common Issues",
      description:
        "Solutions to the most frequent problems users encounter with ad blockers.",
      url: "/knowledge/troubleshooting",
    },
    {
      title: "Premium Features Explained",
      description:
        "Detailed overview of all the additional features available in Ad Blocker Premium.",
      url: "/knowledge/premium-features",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section - IMPROVED WITH GRAPHIC */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="heading-1 mb-6">Support Center</h1>
                <p className="text-xl text-black">
                  Find answers to common questions and get help with Ad Blocker
                  by Schedise.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-schedise-red/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-schedise-red/10 rounded-full"></div>

                  <div className="bg-white rounded-xl shadow-lg p-6 relative z-10 border border-gray-200">
                    <div className="flex justify-center mb-6">
                      <div className="h-16 w-16 bg-schedise-red/10 rounded-full flex items-center justify-center">
                        <HelpCircle size={32} className="text-schedise-red" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                        <div className="h-8 w-8 bg-schedise-red/10 rounded-full flex items-center justify-center">
                          <FileQuestion
                            size={16}
                            className="text-schedise-red"
                          />
                        </div>
                        <div className="text-sm text-black">
                          Browse knowledge base
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                        <div className="h-8 w-8 bg-schedise-red/10 rounded-full flex items-center justify-center">
                          <MessageSquare
                            size={16}
                            className="text-schedise-red"
                          />
                        </div>
                        <div className="text-sm text-black">
                          Ask questions in FAQ
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                        <div className="h-8 w-8 bg-schedise-red/10 rounded-full flex items-center justify-center">
                          <Mail size={16} className="text-schedise-red" />
                        </div>
                        <div className="text-sm text-black">
                          Contact support team
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Base Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <SupportKnowledgeBase articles={knowledgeBaseArticles} />
          </div>
        </section>

        {/* Final CTA */}
        <Banner
          title="Need More Help?"
          description="Our support team is here to assist you. Get in touch or explore our knowledge base for instant answers."
          primaryAction={{
            text: "Contact Support",
            href: "#contact-form",
          }}
          secondaryAction={{
            text: "Browse FAQs",
            href: "#faq-section",
          }}
        />

        {/* Contact Section - IMPROVED FORM */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-2 mb-4">Still Need Help?</h2>
                <p className="text-xl text-black">
                  If you couldn't find an answer to your question, our support
                  team is here to help.
                </p>
              </div>

              <div className="relative bg-gradient-to-b from-neutral-100 to-white p-8 md:p-12 rounded-3xl border border-neutral-200/50 shadow-sm overflow-hidden">
                <BackgroundGrid size={20} />

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-schedise-red/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-schedise-red/10 rounded-full"></div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="h-16 w-16 bg-schedise-red/10 rounded-full flex items-center justify-center">
                      <Mail size={28} className="text-schedise-red" />
                    </div>
                  </div>

                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-black mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200/50 shadow-sm transition-all duration-200 
                            focus:outline-none focus:ring-2 focus:ring-schedise-red/20 focus:border-schedise-red 
                            group-hover:border-schedise-red/50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="relative group">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-black mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200/50 shadow-sm transition-all duration-200 
                            focus:outline-none focus:ring-2 focus:ring-schedise-red/20 focus:border-schedise-red 
                            group-hover:border-schedise-red/50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-black mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200/50 shadow-sm transition-all duration-200 
                          focus:outline-none focus:ring-2 focus:ring-schedise-red/20 focus:border-schedise-red 
                          group-hover:border-schedise-red/50"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div className="relative group">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-black mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200/50 shadow-sm transition-all duration-200 
                          focus:outline-none focus:ring-2 focus:ring-schedise-red/20 focus:border-schedise-red 
                          group-hover:border-schedise-red/50"
                        placeholder="Please describe your issue in detail..."
                      ></textarea>
                    </div>

                    <div className="flex justify-center pt-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-8 py-4 bg-schedise-red text-white rounded-xl 
                          shadow-sm hover:bg-schedise-red/90 transition-all duration-200 transform hover:scale-[1.02] 
                          focus:outline-none focus:ring-2 focus:ring-schedise-red/20"
                      >
                        <Send size={18} className="mr-2" />
                        Send Message
                      </button>
                    </div>
                  </form>

                  {/* Contact Info */}
                  <div className="mt-12 pt-8 border-t border-neutral-200/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                      <div className="p-4 rounded-xl bg-white border border-neutral-200/50">
                        <div className="font-medium text-black mb-1">
                          Email Support
                        </div>
                        <div className="text-schedise-red">
                          support@schedise.com
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-neutral-200/50">
                        <div className="font-medium text-black mb-1">
                          Response Time
                        </div>
                        <div className="text-schedise-red">Within 24 Hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section - IMPROVED */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-schedise-red/10 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-sm relative z-10 border border-gray-200">
                    <div className="flex justify-center mb-4">
                      <MessageCircle size={48} className="text-schedise-red" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">
                        Have Questions?
                      </h3>
                      <p className="text-black text-sm">
                        Find answers to commonly asked questions about our Ad
                        Blocker.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
                <p className="text-lg text-black mb-8">
                  Get quick answers to the most common questions about Ad
                  Blocker by Schedise.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQ faqs={faqs} />
            </div>

            <div className="text-center mt-12">
              <p className="text-black mb-4">
                Can't find what you're looking for? Check out our complete{" "}
                <Link
                  to="/premium"
                  className="text-schedise-red hover:underline"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Premium features
                </Link>{" "}
                or contact our support team.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
