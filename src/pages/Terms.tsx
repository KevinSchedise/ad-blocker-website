
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="heading-1 mb-6">Terms of Service</h1>
              <p className="text-gray-600 mb-8">Last updated: April 9, 2025</p>

              <div className="prose prose-lg max-w-none">
                <p>
                  Please read these Terms of Service ("Terms") carefully before using the Ad Blocker by Schedise browser extension and website (the "Service") operated by Schedise ("us", "we", or "our").
                </p>

                <p className="mt-4">
                  By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Use of the Service</h2>
                <p>
                  Ad Blocker by Schedise is designed to block unwanted advertisements and trackers while browsing the web. By using our Service, you acknowledge that:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>You will not attempt to reverse engineer or modify the extension for malicious purposes</li>
                  <li>You will not use the extension to bypass legitimate security measures on websites</li>
                  <li>You understand that some websites may not function properly with ad blockers enabled</li>
                  <li>You acknowledge that the effectiveness of ad blocking may vary across websites</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Intellectual Property</h2>
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Schedise. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Limitations of Liability</h2>
                <p>
                  In no event shall Schedise, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Your access to or use of or inability to access or use the Service</li>
                  <li>Any conduct or content of any third party on the Service</li>
                  <li>Any content obtained from the Service</li>
                  <li>Unauthorized access, use or alteration of your transmissions or content</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclaimer</h2>
                <p>
                  Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Changes to Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
                <p>
                  If you have questions about these Terms, please contact us at:
                </p>
                <p className="font-medium">legal@schedise.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
