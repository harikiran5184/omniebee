"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Header.scss";

const services = [
  "Software Development",
  "IT Consulting",
  "Business Consulting",
  "Technical Support",
  "Staffing Solutions",
  "Training",
];

const industries = [
  "Healthcare",
  "Retail & E-Commerce",
  "Banking & Finance",
  "AgriTech",
  "Travel & Tourism",
  "Education",
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY <= 0);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="site-header">

      
      <div
        className={`top-contact-bar ${showTopBar ? "top-contact-visible" : "top-contact-hidden"
          }`}
      >
        <div className="top-contact-inner">

          <div className="contact-left">

            <div className="contact-item">
              <img
                src="/Home_files/hsq28kdlxtl93osd4rcc.png"
                className="contact-icon"
                alt="Phone"
              />

              <a href="tel:+919505637481">
                +91 9505637481
              </a>
            </div>

            <div className="contact-item">
              <img
                src="/Home_files/mcf5y7yiuxidbq74tbnx.png"
                className="contact-icon"
                alt="Mail"
              />

              <a href="mailto:support@omniebeeglobalsolutions.com">
                support@omniebeeglobalsolutions.com
              </a>
            </div>

          </div>

          <div className="social-links">

            <a
              href="https://www.linkedin.com/company/omniebee-global-solutions.com/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Home_files/wphnzyux0lejcg0zfihy.png"
                alt="LinkedIn"
              />
            </a>

            <a
              href="https://www.facebook.com/people/Web-Eclipse/pfbid0yjLh2Jg1SfKRXqVptn5RvvLVaZ8xNAXZwv2q4rhKr1pxTjyg9M7iQWVe2Ksbetm5l/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Home_files/a0nh38idxulyivrmdnbr.png"
                alt="Facebook"
              />
            </a>

            <a
              href="https://www.instagram.com/omniebee_global_solutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Home_files/nyp1fs2nuycmasg2ivtv.png"
                alt="Instagram"
              />
            </a>

          </div>

        </div>
      </div>


      
      <nav
        className={`main-navbar ${showTopBar
            ? "navbar-with-topbar"
            : "navbar-without-topbar"
          }`}
      >

        <div className="navbar-inner">

          
          <div className="logo-wrapper">

            <Link href="/">
              <img
                src="/Home_files/xgpxo1mdjplj63nmfljs.jpg"
                alt="Logo"
                width="180"
                height="60"
              />
            </Link>

          </div>


          
          <ul className="desktop-nav">

            
            <li className="nav-item active">
              <Link href="/">
                <span>Home</span>
                <span className="nav-gradient" />
              </Link>
            </li>


            
            <li className="nav-item">
              <Link href="/about">
                <span>About</span>
                <span className="nav-gradient" />
              </Link>
            </li>


            
            <li className="nav-item what-we-do">

              <Link
                href="/"
                className="what-we-do-link"
              >
                <span>What We Do?</span>

                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="dropdown-arrow"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.085l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="nav-gradient" />
              </Link>


              
              <div className="mega-menu">

                
                <div className="mega-column services-column">

                  <div className="mega-heading">
                    Services
                  </div>

                  <p className="mega-description">
                    End-to-end technology solutions including mobile app
                    development, IT consulting, technical support, and more
                    to turn your ideas into scalable digital products.
                  </p>

                </div>


                
                <div className="mega-column service-links">

                  {services.map((service) => (
                    <Link
                      href="/whatwedo"
                      key={service}
                    >
                      {service}
                    </Link>
                  ))}

                </div>


                
                <div className="mega-divider" />


                
                <div className="mega-column industries-description">

                  <div className="mega-heading">
                    Industries
                  </div>

                  <p className="mega-description">
                    Tailored IT services for key industries like healthcare,
                    retail, e-commerce, and education, helping businesses
                    modernize operations and drive growth.
                  </p>

                </div>


                
                <div className="mega-column industry-links">

                  {industries.map((industry) => (
                    <Link
                      href="/whatwedo/industries"
                      key={industry}
                    >
                      {industry}
                    </Link>
                  ))}

                </div>

              </div>

            </li>


            
            <li className="nav-item">

              <a
                href="https://portfolio-omniebeeglobalsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Portfolio</span>
                <span className="nav-gradient" />
              </a>

            </li>


            
            <li className="nav-item">

              <Link href="/careers">
                <span>Careers</span>
                <span className="nav-gradient" />
              </Link>

            </li>


            
            <li className="nav-item">

              <Link href="/contact">
                <span>Contact Us</span>
                <span className="nav-gradient" />
              </Link>

            </li>

          </ul>


          
          <div className="mobile-menu-button">

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

          </div>

        </div>

      </nav>


      
      <div
        className={`mobile-menu ${mobileMenuOpen ? "mobile-menu-open" : ""
          }`}
      >

        <div className="mobile-menu-close">

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

        </div>


        <ul className="mobile-nav">

          <li>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-active"
            >
              Home
              <span className="nav-gradient" />
            </Link>
          </li>


          <li>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
              <span className="nav-gradient" />
            </Link>
          </li>


          
          <li>

            <button
              type="button"
              className="mobile-what-we-do"
              onClick={() =>
                setMobileWhatWeDoOpen((prev) => !prev)
              }
            >

              <span>What We Do?</span>

              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className={
                  mobileWhatWeDoOpen
                    ? "arrow-up"
                    : ""
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>

              <span className="nav-gradient" />

            </button>


            <div
              className={`mobile-what-we-do-content ${mobileWhatWeDoOpen
                ? "mobile-what-we-do-content-open"
                : ""
                }`}
            >

              {services.map((service) => (
                <Link
                  href="/whatwedo"
                  key={service}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service}
                </Link>
              ))}

              {industries.map((industry) => (
                <Link
                  href="/whatwedo/industries"
                  key={industry}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {industry}
                </Link>
              ))}

            </div>

          </li>


          <li>
            <a
              href="https://portfolio-omniebeeglobalsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
              <span className="nav-gradient" />
            </a>
          </li>


          <li>
            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
              <span className="nav-gradient" />
            </Link>
          </li>


          <li>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
              <span className="nav-gradient" />
            </Link>
          </li>

        </ul>

      </div>

    </header>
  );
}