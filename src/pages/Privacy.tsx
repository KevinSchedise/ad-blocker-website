
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="heading-1 mb-6">Privacy Policy</h1>
              <p className="text-gray-600 mb-8">Last updated: April 9, 2025</p>

              <div className="prose prose-lg max-w-none">
                <p>
                  At Schedise, we take your privacy seriously. This Privacy Policy describes how we collect, use, and handle your personal information when you use our Ad Blocker extension and visit our website.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
                <p>
                  <strong>Extension Usage:</strong> We collect minimal anonymous usage data to help us improve our product, such as:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Installation, uninstallation, and update events</li>
                  <li>Basic extension interaction events (e.g., toggling the extension on/off)</li>
                  <li>Aggregate statistics on the number of ads blocked (without identifying specific websites you visit)</li>
                </ul>

                <p>
                  <strong>Website Usage:</strong> When you visit our website, we collect standard log information and use cookies to analyze traffic patterns and improve your experience.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">What We DON'T Collect</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Your browsing history</li>
                  <li>The specific websites you visit</li>
                  <li>Any personally identifiable information without your explicit consent</li>
                  <li>Any content of your web communications</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Improve and optimize our ad blocker's performance</li>
                  <li>Update and enhance our blocking rules</li>
                  <li>Understand how users interact with our extension</li>
                  <li>Respond to your support requests</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Data Sharing and Disclosure</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share anonymous, aggregated data with trusted analytics partners who help us understand usage patterns.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, or destruction.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
                <p>
                  Depending on your location, you may have rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>The right to access information we have about you</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to object to processing</li>
                  <li>The right to data portability</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="font-medium">privacy@schedise.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
