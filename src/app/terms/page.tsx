import { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Luganda Quran – Sheikh Ismail Sulaiman Nkata Audio",
  description:
    "Terms of Service for lugandaquran.online. Read the terms and conditions governing your use of our free Luganda Quran audio website.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page" style={{ paddingTop: "140px" }}>
        <div className="legal-container">
          <div className="legal-header">
            <p className="legal-breadcrumb">
              <a href="/">Quran Luganda</a> / Terms of Service
            </p>
            <h1>Terms of Service</h1>
            <p className="legal-updated">Last updated: April 14, 2026</p>
          </div>

          <div className="legal-body">
            <p>
              Please read these Terms of Service carefully before using{" "}
              <strong>lugandaquran.online</strong> (&quot;the Site&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or
              using this website, you agree to be bound by these terms. If you do
              not agree, please do not use this website.
            </p>

            <h2>1. About This Website</h2>
            <p>
              lugandaquran.online is a free Islamic resource
              providing access to the audio Quran translated in Luganda by Sheikh
              Ismail Sulaiman Nkata (Rahmatullāh ʿAlayh) and the written Luganda
              translation by Sheikh Abdurazak Matovu. The site is provided as a
              sadaqah jariyah — a continuous charity — for the benefit of the
              Muslim community.
            </p>

            <h2>2. Permitted Use</h2>
            <p>
              You are permitted to use this website for personal, non-commercial,
              religious, and educational purposes. This includes:
            </p>
            <ul>
              <li>Listening to Quran audio in Luganda for personal benefit.</li>
              <li>
                Reading and studying the Luganda Quran translation for learning
                purposes.
              </li>
              <li>
                Sharing the website link with family, friends, and the Muslim
                community.
              </li>
            </ul>

            <h2>3. Prohibited Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the website or its content for any commercial purpose without
                prior written permission.
              </li>
              <li>
                Reproduce, distribute, or republish the audio recordings or
                translations in any format without permission.
              </li>
              <li>
                Attempt to scrape, copy, or mirror the website&apos;s content in
                bulk.
              </li>
              <li>
                Use automated bots or scripts to access the website in a manner
                that places an unreasonable load on our servers.
              </li>
              <li>
                Interfere with or disrupt the operation of the website or its
                infrastructure.
              </li>
              <li>
                Use this website in any way that violates applicable laws or
                regulations.
              </li>
              <li>
                Modify, reverse-engineer, or create derivative works based on the
                website without permission.
              </li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              The audio translations of the Quran by Sheikh Ismail Sulaiman Nkata
              and the written translations by Sheikh Abdurazak Matovu are provided
              for personal, religious, and educational use by the Muslim community.
              Please contact us if you have a question about content attribution,
              permissions, or corrections.
            </p>
            <p>
              The website design, code, and original written content on this site
              are owned by lugandaquran.online. You may not reproduce them without
              permission.
            </p>

            <h2>5. Advertising</h2>
            <p>
              This website displays advertisements served by Google AdSense and
              potentially other advertising networks to help cover the costs of
              running the site. We do not endorse the products or services
              advertised. The appearance of an advertisement on this site does
              not constitute our recommendation or endorsement.
            </p>
            <p>
              We are not responsible for the content of advertisements. All
              advertising content is governed by Google&apos;s advertising policies.
            </p>

            <h2>6. Disclaimer of Warranties</h2>
            <p>
              This website is provided &quot;as is&quot; and &quot;as available&quot; without any
              warranties of any kind, either express or implied. We do not
              warrant that:
            </p>
            <ul>
              <li>The website will be available at all times without interruption.</li>
              <li>The website will be free of errors or technical issues.</li>
              <li>
                The audio or text content will be free of errors or omissions,
                though we strive for accuracy.
              </li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, lugandaquran.online and its
              operators shall not be liable for any direct, indirect, incidental,
              special, or consequential damages arising from your use of or
              inability to use this website, even if we have been advised of the
              possibility of such damages.
            </p>

            <h2>8. External Links</h2>
            <p>
              This website may contain links to third-party websites, including
              app stores and other Islamic resources. These links are provided for
              your convenience only. We have no control over the content of those
              sites and accept no responsibility for them or for any loss or
              damage that may arise from your use of them.
            </p>

            <h2>9. Privacy</h2>
            <p>
              Your use of this website is also governed by our{" "}
              <a href="/privacy">Privacy Policy</a>, which is incorporated into
              these Terms by reference. By using this website, you consent to the
              practices described in the Privacy Policy.
            </p>

            <h2>10. Changes to These Terms</h2>
            <p>
              We reserve the right to update or modify these Terms of Service at
              any time. Changes will be effective immediately upon posting to the
              website. Your continued use of the website after any changes
              constitutes your acceptance of the new terms. We encourage you to
              review these terms periodically.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of Uganda. Any disputes relating to these terms shall
              be subject to the jurisdiction of the courts of Uganda.
            </p>

            <h2>12. Contact</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at: <a href="/contact">lugandaquran.online/contact</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
