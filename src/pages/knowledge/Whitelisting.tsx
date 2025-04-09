
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Whitelisting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            <Link to="/support" className="flex items-center text-schedise-indigo mb-6 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Support
            </Link>
            
            <h1 className="heading-1 mb-4">Guide: Whitelisting Websites</h1>
            <p className="text-gray-500 mb-6">Last updated: April 9, 2025</p>
            
            <div className="prose max-w-none">
              <h2>Why Whitelist Websites?</h2>
              <p>
                While blocking ads improves your browsing experience, some websites rely on ad revenue to provide free content. 
                Whitelisting allows you to support content creators you value while still blocking ads elsewhere.
              </p>
              
              <h2>How to Whitelist a Website</h2>
              
              <h3>Method 1: Using the Toolbar Icon (Quick Method)</h3>
              <ol className="list-decimal pl-5 space-y-4 my-6">
                <li>
                  <strong>Navigate to the website</strong> you wish to whitelist.
                </li>
                <li>
                  <strong>Click the Ad Blocker icon</strong> in your browser toolbar.
                </li>
                <li>
                  <strong>Toggle the switch</strong> to disable blocking for the current site.
                </li>
                <li>
                  The page will reload with ads enabled, and a notification will confirm the site has been whitelisted.
                </li>
              </ol>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
                <h4 className="font-bold mb-2">Pro Tip</h4>
                <p>
                  The ad blocker icon will appear dimmed or with a different color on whitelisted sites, 
                  helping you easily recognize when a site is whitelisted.
                </p>
              </div>
              
              <h3>Method 2: Using the Settings Page</h3>
              <ol className="list-decimal pl-5 space-y-4 my-6">
                <li>
                  <strong>Click the Ad Blocker icon</strong> in your browser toolbar.
                </li>
                <li>
                  <strong>Select the gear icon</strong> to open the Settings page.
                </li>
                <li>
                  <strong>Navigate to the "Whitelist" tab</strong> in the settings.
                </li>
                <li>
                  <strong>Add a website domain</strong> by typing it in the input field (e.g., "example.com").
                </li>
                <li>
                  <strong>Click "Add to Whitelist"</strong> to save your changes.
                </li>
              </ol>
              
              <h2>Managing Your Whitelist</h2>
              
              <h3>Viewing Whitelisted Sites</h3>
              <p>
                To view all your whitelisted sites:
              </p>
              <ol className="list-decimal pl-5 space-y-2 my-4">
                <li>Open the Settings page by clicking the Ad Blocker icon and selecting the gear icon.</li>
                <li>Navigate to the "Whitelist" tab.</li>
                <li>You'll see a list of all whitelisted domains.</li>
              </ol>
              
              <h3>Removing Sites from Whitelist</h3>
              <p>
                To remove a site from your whitelist:
              </p>
              <ol className="list-decimal pl-5 space-y-2 my-4">
                <li>Open the Settings page and navigate to the "Whitelist" tab.</li>
                <li>Find the site you want to remove.</li>
                <li>Click the "X" or trash icon next to the domain name.</li>
                <li>The site will be removed immediately, and ads will be blocked again on your next visit.</li>
              </ol>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
                <h4 className="font-bold text-blue-800 mb-2">Alternative Method</h4>
                <p className="text-blue-700">
                  You can also remove a site from your whitelist by visiting the site and clicking the Ad Blocker icon, 
                  then toggling the switch to enable blocking again.
                </p>
              </div>
              
              <h2>Whitelist Patterns and Advanced Features</h2>
              <p>
                Ad Blocker by Schedise supports advanced whitelist patterns for more granular control:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <strong>Specific pages:</strong> Enter "example.com/specific-page" to whitelist only that page.
                </li>
                <li>
                  <strong>Subdomains:</strong> Enter "*.example.com" to whitelist all subdomains of example.com.
                </li>
                <li>
                  <strong>Multiple domains:</strong> Add each domain separately to whitelist multiple websites.
                </li>
              </ul>
              
              <h2>Temporary Whitelisting</h2>
              <p>
                If you only want to temporarily allow ads on a website:
              </p>
              <ol className="list-decimal pl-5 space-y-2 my-4">
                <li>Click the Ad Blocker icon in your browser toolbar.</li>
                <li>Click the "Pause" button instead of the toggle switch.</li>
                <li>Select a duration (5 minutes, 30 minutes, or 1 hour).</li>
                <li>Blocking will automatically resume after the selected period.</li>
              </ol>
            </div>
            
            <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Have more questions?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="/support" 
                  variant="primary" 
                  size="lg"
                >
                  Return to Support Center
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

export default Whitelisting;
