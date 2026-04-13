import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>Quran Luganda</h3>
            <p>
              The definitive app for Luganda Quran Audio by Sheikh Sulaiman Nkata
              and Translation by Sheikh Abdurazak Matovu.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Quran Luganda Audio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
