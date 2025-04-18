import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CheckCircle2, Lock, ShieldX, TrendingUp } from "lucide-react";
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

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-white to-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-1 mb-6">About Schedise</h1>
              <p className="text-xl text-black">
                We're building tools to make your online experience better,
                faster, and more private.
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
                <p className="text-lg text-black mb-4">
                  At Schedise, we believe in a web that respects users. A web
                  that's fast, clean, and puts you in control of your browsing
                  experience.
                </p>
                <p className="text-lg text-black mb-4">
                  We built Ad Blocker by Schedise because we were tired of the
                  increasingly intrusive advertisement ecosystem that slows down
                  websites, consumes bandwidth, and tracks users across the
                  internet.
                </p>
                <p className="text-lg text-black mb-4">
                  Our mission is simple: provide effective, easy-to-use tools
                  that help people enjoy a better internet experience without
                  technical complexity.
                </p>
                <p className="text-lg text-black">
                  Ad Blocker by Schedise is proudly developed by Schedise, a
                  programming agency dedicated to creating useful digital tools
                  and enhancing online experiences. We develop multiple products
                  and believe strongly in building solutions driven by user
                  needs. Your feedback is invaluable – please don't hesitate to
                  reach out via our Support page to help us improve this tool
                  and others!
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative max-w-md">
                  {/* Circular background elements */}
                  <div className="absolute w-48 h-48 bg-white rounded-full -top-6 -right-6 z-0"></div>
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
                          <span className="text-schedise-red font-bold text-xs">
                            x
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Browser mockup */}
                    <div className="border border-gray-200 rounded-md bg-white mb-8">
                      <div className="px-4 py-2 border-b border-gray-200 flex items-center">
                        <div className="flex space-x-1.5">
                          <div className="h-2 w-2 rounded-full bg-schedise-red"></div>
                          <div className="h-2 w-2 rounded-full bg-schedise-red/50"></div>
                          <div className="h-2 w-2 rounded-full bg-schedise-red/30"></div>
                        </div>
                        <div className="h-4 bg-white rounded mx-auto w-1/2"></div>
                      </div>
                      <div className="p-4 flex justify-center">
                        <div className="flex flex-col items-center">
                          <div className="w-full h-2 bg-white rounded mb-1"></div>
                          <div className="w-3/4 h-2 bg-white rounded mb-1"></div>
                          <div className="w-1/2 h-2 bg-white rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Stats indicators */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-schedise-red/10 p-2 rounded text-center">
                        <div className="text-xs font-medium text-schedise-red">
                          Faster
                        </div>
                        <div className="text-schedise-red font-bold">+80%</div>
                      </div>
                      <div className="bg-schedise-red/10 p-2 rounded text-center">
                        <div className="text-xs font-medium text-schedise-red">
                          Cleaner
                        </div>
                        <div className="text-schedise-red font-bold">+90%</div>
                      </div>
                      <div className="bg-schedise-red/10 p-2 rounded text-center">
                        <div className="text-xs font-medium text-schedise-red">
                          Private
                        </div>
                        <div className="text-schedise-red font-bold">+95%</div>
                      </div>
                    </div>

                    <div className="text-center text-sm text-black">
                      Transforming web browsing for everyone
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section - UPDATED WITH TIMELINE */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="heading-2 mb-6">The Ad Blocker Story</h2>
              <p className="text-lg text-black">
                Schedise started with a simple frustration: browsing the web had
                become an exercise in dodging ads, closing pop-ups, and watching
                pages load slowly because of heavy tracking scripts.
              </p>
            </div>

            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-transparent before:via-schedise-red before:to-transparent md:before:mx-auto md:before:translate-x-0">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-schedise-red mb-2">
                      Q1 2024
                    </h3>
                    <h4 className="text-lg font-bold mb-2">The Beginning</h4>
                    <p className="text-black">
                      Our team of web developers and privacy advocates came
                      together with a shared vision: create a simple, effective
                      ad blocker that anyone could use without technical
                      expertise. We noticed the increasing problem of intrusive
                      ads and tracking.
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
                    <h3 className="text-xl font-bold text-schedise-red mb-2">
                      Q2 2024
                    </h3>
                    <h4 className="text-lg font-bold mb-2">
                      Development Phase
                    </h4>
                    <p className="text-black">
                      We've been developing our ad blocker solution for several
                      months now, focusing on creating a lightweight but
                      powerful tool that can effectively block the modern web's
                      most intrusive advertisements without slowing down
                      browsing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-schedise-red mb-2">
                      Today
                    </h3>
                    <h4 className="text-lg font-bold mb-2">Ready to Launch</h4>
                    <p className="text-black">
                      Ad Blocker by Schedise is now ready to help users around
                      the world enjoy a faster, cleaner browsing experience.
                      We're committed to continuously improving our extension
                      based on community feedback.
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
                <div className="ml-5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-schedise-red text-white shadow md:ml-0 md:mr-0">
                  <TrendingUp size={20} />
                </div>
                <div className="md:w-1/2 md:pl-8 md:text-left">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-schedise-red mb-2">
                      Future
                    </h3>
                    <h4 className="text-lg font-bold mb-2">Our Roadmap</h4>
                    <p className="text-black">
                      We're working on expanding to more browsers, adding
                      additional privacy features, premium enhancements, and
                      creating even more effective blocking capabilities with
                      anti-detection technology—all while keeping our core
                      product free and accessible to everyone.
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
              <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
                When you use Ad Blocker by Schedise, you can count on these
                promises:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative bg-gradient-to-b from-neutral-100 to-white p-8 rounded-3xl overflow-hidden border border-neutral-200/50 shadow-sm transform transition-all duration-300 hover:shadow-md">
                <BackgroundGrid size={20} />
                <div className="relative z-10">
                  <div className="p-3 rounded-full bg-schedise-red/10 w-fit">
                    <Lock className="text-schedise-red" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 mt-6">Privacy First</h3>
                  <p className="text-black">
                    We will never track your browsing history or sell your data.
                    Your privacy is our priority.
                  </p>
                </div>
              </div>

              <div className="relative bg-gradient-to-b from-neutral-100 to-white p-8 rounded-3xl overflow-hidden border border-neutral-200/50 shadow-sm transform transition-all duration-300 hover:shadow-md">
                <BackgroundGrid size={20} />
                <div className="relative z-10">
                  <div className="p-3 rounded-full bg-schedise-red/10 w-fit">
                    <TrendingUp className="text-schedise-red" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 mt-6">
                    Always Improving
                  </h3>
                  <p className="text-black">
                    We continually update our blocking rules to stay ahead of
                    new ad technologies and ensure effective protection.
                  </p>
                </div>
              </div>

              <div className="relative bg-gradient-to-b from-neutral-100 to-white p-8 rounded-3xl overflow-hidden border border-neutral-200/50 shadow-sm transform transition-all duration-300 hover:shadow-md">
                <BackgroundGrid size={20} />
                <div className="relative z-10">
                  <div className="p-3 rounded-full bg-schedise-red/10 w-fit">
                    <CheckCircle2 className="text-schedise-red" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 mt-6">
                    Free Core Product
                  </h3>
                  <p className="text-black">
                    We're committed to keeping our core ad blocking
                    functionality free and accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <Banner
          title="Join Our Mission"
          description="Help us create a better web experience for everyone. Install Ad Blocker by Schedise today."
          primaryAction={{
            text: "Add to Chrome - It's Free",
            href: "https://chromewebstore.google.com/detail/ad-blocker-schedise/cefmjbpojmcoagdhbhbaefcidbblngjg",
          }}
          secondaryAction={{
            text: "Learn More",
            href: "/features",
          }}
        />
      </main>

      <Footer />
    </div>
  );
};

export default About;
