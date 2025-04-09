
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const GettingStarted = () => {
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
            
            <h1 className="heading-1 mb-4">Getting Started with Ad Blocker</h1>
            <p className="text-gray-500 mb-6">Last updated: April 9, 2025</p>
            
            <div className="prose max-w-none">
              <h2>Installation</h2>
              <p>Follow these simple steps to start enjoying an ad-free browsing experience:</p>
              
              <ol className="list-decimal pl-5 space-y-4 my-6">
                <li>
                  <strong>Add the extension to Chrome:</strong> Click the "Add to Chrome" button on our website or visit the 
                  Chrome Web Store and search for "Ad Blocker by Schedise".
                </li>
                <li>
                  <strong>Confirm installation:</strong> Click "Add Extension" in the dialog box that appears.
                </li>
                <li>
                  <strong>Pin for easy access (optional):</strong> Click the puzzle piece icon in Chrome's toolbar, find Ad Blocker 
                  by Schedise, and click the pin icon.
                </li>
              </ol>
              
              <h2>Initial Configuration</h2>
              <p>
                Ad Blocker by Schedise works right out of the box with optimal default settings. However, you may want to customize 
                your experience with these options:
              </p>
              
              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Access settings:</strong> Click the Ad Blocker icon in your toolbar to see quick controls or click the gear 
                  icon to access the full settings page.
                </li>
                <li>
                  <strong>Filter lists:</strong> By default, we enable EasyList and other popular filter lists. You can enable or 
                  disable specific lists in the settings.
                </li>
                <li>
                  <strong>Whitelisting:</strong> Add websites to your whitelist if you wish to support them with ad revenue.
                </li>
                <li>
                  <strong>Statistics:</strong> Choose whether to collect anonymous usage statistics to help improve the extension.
                </li>
              </ul>
              
              <h2>Using Ad Blocker Features</h2>
              
              <h3>Basic Controls</h3>
              <p>
                The Ad Blocker icon in your toolbar shows the number of ads blocked on the current page. Clicking on it reveals 
                these controls:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <strong>Toggle switch:</strong> Enable or disable ad blocking for the current website.
                </li>
                <li>
                  <strong>Pause button:</strong> Temporarily disable ad blocking across all sites.
                </li>
                <li>
                  <strong>Statistics:</strong> View how many ads have been blocked today and in total.
                </li>
                <li>
                  <strong>Settings:</strong> Access the full options page.
                </li>
              </ul>
              
              <h3>Right-Click Blocking</h3>
              <p>
                If you encounter an ad that wasn't automatically blocked:
              </p>
              
              <ol className="list-decimal pl-5 space-y-2 my-4">
                <li>Right-click on the ad</li>
                <li>Select "Block Element" from the context menu</li>
                <li>Adjust the selection if needed</li>
                <li>Click "Block" to add it to your custom filters</li>
              </ol>
              
              <h2>Troubleshooting</h2>
              <p>
                If you experience any issues with Ad Blocker by Schedise:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <strong>Disable and re-enable:</strong> Click the Ad Blocker icon and toggle it off, then on again.
                </li>
                <li>
                  <strong>Update filter lists:</strong> Go to Settings {'>'}  Filter Lists {'>'} Update Now.
                </li>
                <li>
                  <strong>Check for conflicts:</strong> Temporarily disable other extensions to check for conflicts.
                </li>
                <li>
                  <strong>Contact support:</strong> If problems persist, visit our Support page.
                </li>
              </ul>
            </div>
            
            <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Ready to start blocking ads?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  href="https://chrome.google.com/webstore" 
                  variant="primary" 
                  size="lg"
                >
                  Add to Chrome - It's Free
                </CTAButton>
                <CTAButton 
                  href="/support" 
                  variant="secondary"
                  size="lg"
                >
                  Explore Support Center
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

export default GettingStarted;
