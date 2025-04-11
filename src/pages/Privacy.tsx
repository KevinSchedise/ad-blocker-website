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
              <p className="text-gray-600 mb-8">Last updated: May 20, 2023</p>

              <div className="prose prose-lg max-w-none">
                <p>
                  At Schedise, we prioritize your privacy and data security.
                  This Privacy Policy describes how our Ad Blocker extension
                  operates and our strict no-collection policy regarding your
                  personal information.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  No Data Collection Policy
                </h2>
                <p>
                  We are committed to privacy by design. Our Ad Blocker
                  extension:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Does NOT collect your browsing history</li>
                  <li>Does NOT track the websites you visit</li>
                  <li>
                    Does NOT collect any personally identifiable information
                  </li>
                  <li>Does NOT transmit your data to any external servers</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  Required Permissions
                </h2>
                <p>
                  Our extension requires certain permissions to function
                  effectively:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    <strong>&lt;all_urls&gt;:</strong> Required to detect and
                    block ads across websites you visit
                  </li>
                  <li>
                    <strong>Scripting:</strong> Needed to apply ad-blocking
                    rules on web pages
                  </li>
                  <li>
                    <strong>Tabs:</strong> Used to apply ad-blocking when you
                    navigate between tabs
                  </li>
                </ul>
                <p>
                  These permissions are used exclusively for providing
                  ad-blocking functionality and are not used to collect,
                  transmit, or store your browsing activity.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  Local Data Storage
                </h2>
                <p>The only data stored by our extension is:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Ad-blocking statistics (total number of ads blocked)</li>
                  <li>Extension settings and preferences you configure</li>
                </ul>
                <p>
                  This data is stored locally on your device using Chrome's
                  storage.sync API, which may sync this information across your
                  devices if you're signed into Chrome. This data never leaves
                  your Google account and is not accessible to us or any third
                  parties.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  No Data Sharing
                </h2>
                <p>
                  We do not share, sell, rent, or trade any information with
                  third parties. Since we don't collect your data, there is
                  simply nothing to share.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
                <p>
                  As we don't collect your personal data, there is no need to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Request access to your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of data collection</li>
                </ul>
                <p>You remain in complete control of your data at all times.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or for legal, operational, or
                  regulatory reasons. We will notify you of any material changes
                  by posting the new Privacy Policy on this page and updating
                  the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our privacy
                  practices, please contact us at:
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
