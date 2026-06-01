import Image from "next/image";
import Link from "next/link";
import { quickLinks, servicesLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top section */}
      <div className="footer__top">
        <div className="footer__brand">
          <Link href="/">
            <Image
              src="/logos/HUB_Plumbing_logo.png"
              alt="Hub Plumbing & Mechanical Logo"
              width={239}
              height={58}
              className="footer__logo"
              style={{ height: "auto" }}
            />
          </Link>
          <p className="footer__desc">
            <strong>Hub Plumbing &amp; Mechanical</strong> — licensed NYC plumbers serving
            Manhattan, Brooklyn &amp; Queens since 1999. Red Carpet Service, upfront pricing,
            and available 24/7 emergency repairs. Master Plumber Lic. #2305.
          </p>
          <p className="footer__desc" style={{ marginTop: "0.5rem" }}>
            103 Charles Street, New York, NY 10014<br />
            <a href="tel:9176348888" style={{ color: "inherit" }}>(917) 634-8888</a>
          </p>
          <div className="footer__socials">
            <a href="https://www.facebook.com/pages/Hub-Plumbing-NYC/208105895896448" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
              <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
            </a>
            <a href="https://twitter.com/hub_plumbing" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="footer__social-link">
              <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
            </a>
            <a href="https://www.youtube.com/user/hubplumbingtest" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer__social-link">
              <svg viewBox="0 0 576 512" width="20" height="20" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <div className="footer__divider" />
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Our Services</h4>
          <div className="footer__divider" />
          <ul className="footer__links">
            {servicesLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">Copyright 2026 Hub Plumbing &amp; Mechanical. All rights reserved.</p>
        <div className="footer__legal">
          <Link href="/terms-of-use/" className="footer__legal-link">Terms of Service</Link>
          <Link href="/privacy-coockie-policy/" className="footer__legal-link">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
