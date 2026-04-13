import { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Luganda Quran – Sheikh Nkata Audio",
  description:
    "Privacy Policy for lugandaquran.online. Learn how we collect, use, and protect your information when you use our Luganda Quran audio website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page" style={{ paddingTop: "140px" }}>
        <div className="legal-container">
          <div className="legal-header">
            <p className="legal-breadcrumb">
              <a href="/">Quran Luganda</a> / Privacy Policy
            </p>
            <h1>Privacy Policy</h1>
            <p className="legal-updated">Last updated: April 14, 2026</p>
          </div>

          <div className="legal-body">
            <p>
              This Privacy Policy explains how <strong>lugandaquran.online</strong>{" "}
              (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects
              information when you visit our website. We are committed to
              protecting your privacy and being transparent about our practices.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We do not require you to create an account or provide personal
              information to use this website. However, certain information may
              be collected automatically when you visit:
            </p>
            <ul>
              <li>
                <strong>Usage data:</strong> Pages visited, surahs played, time
                spent on the site, and how you navigate the website.
              </li>
              <li>
                <strong>Device information:</strong> Browser type, operating
                system, screen size, and device type.
              </li>
              <li>
                <strong>IP address:</strong> Your approximate geographic location
                derived from your IP address.
              </li>
              <li>
                <strong>Cookies:</strong> Small text files stored on your device
                by your browser. See Section 4 for details.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information collected to:</p>
            <ul>
              <li>Operate and improve the website and audio player.</li>
              <li>
                Understand how visitors use the site so we can serve you better.
              </li>
              <li>
                Display relevant advertisements through Google AdSense (see
                Section 5).
              </li>
              <li>Diagnose technical problems and ensure website security.</li>
              <li>
                Comply with legal obligations where applicable.
              </li>
            </ul>

            <h2>3. Information We Do Not Collect</h2>
            <p>
              We do not collect your name, email address, phone number, or any
              other personally identifiable information unless you voluntarily
              contact us. We do not sell, trade, or rent your personal information
              to any third party.
            </p>

            <h2>4. Cookies</h2>
            <p>
              This website uses cookies to enhance your browsing experience.
              Cookies may be set by:
            </p>
            <ul>
              <li>
                <strong>Our website:</strong> To remember your preferences, such
                as the last surah you listened to.
              </li>
              <li>
                <strong>Google Analytics:</strong> To collect anonymous usage
                statistics so we can understand how the site is being used.
              </li>
              <li>
                <strong>Google AdSense:</strong> To serve relevant advertisements
                based on your browsing activity. These are third-party cookies
                controlled by Google.
              </li>
            </ul>
            <p>
              You can control or disable cookies through your browser settings.
              Please note that disabling cookies may affect the functionality of
              this website. For more information about how Google uses cookies,
              visit{" "}
              <a
                href="https://policies.google.com/technologies/cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Cookie Policy
              </a>
              .
            </p>

            <h2>5. Google AdSense and Advertising</h2>
            <p>
              We use Google AdSense to display advertisements on this website.
              Google AdSense uses cookies and web beacons to serve ads based on
              your prior visits to this website and other websites on the
              internet.
            </p>
            <p>
              Google&apos;s use of advertising cookies enables it and its partners
              to serve ads to you based on your visit to our site and/or other
              sites on the internet. You may opt out of personalised advertising
              by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Ads Settings
              </a>
              .
            </p>
            <p>
              We have no control over the cookies used by Google AdSense. Please
              refer to{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Privacy Policy
              </a>{" "}
              for more information.
            </p>

            <h2>6. Google Analytics</h2>
            <p>
              We use Google Analytics to analyse website traffic. Google
              Analytics collects anonymous information about how visitors use our
              website, including which pages are visited most often and how
              visitors move between pages. This data is aggregated and does not
              identify individual users.
            </p>
            <p>
              You can opt out of Google Analytics tracking by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              This website may contain links to external websites such as app
              stores or related Islamic resources. We are not responsible for the
              privacy practices of those websites and encourage you to review
              their privacy policies before providing any personal information.
            </p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>
              This website is intended for general audiences and does not
              knowingly collect personal information from children under the age
              of 13. If you believe a child has provided us with personal
              information, please contact us and we will take steps to delete it.
            </p>

            <h2>9. Data Security</h2>
            <p>
              We take reasonable precautions to protect your information. However,
              no method of transmission over the internet is 100% secure. We
              cannot guarantee the absolute security of any information
              transmitted to or from this website.
            </p>

            <h2>10. Your Rights</h2>
            <p>
              Depending on your location, you may have rights regarding your
              personal data, including the right to access, correct, or request
              deletion of information we hold about you. To exercise any of these
              rights, please contact us using the details in Section 12.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we will update the &quot;last updated&quot; date at the top of this page.
              We encourage you to review this page periodically to stay informed
              about how we protect your information.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at:{" "}
              <a href="/contact">lugandaquran.online/contact</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
