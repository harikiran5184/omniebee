import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { asset } from "@/src/lib/assets";

const services = [
  {
    label: "Sofware Development",
    href: "https://omniebeeglobalsolutions.com/whatwedo/services/6879f664ff8f487cbd3cf2c2",
  },
  {
    label: "IT Consulting",
    href: "https://omniebeeglobalsolutions.com/whatwedo/services/687a04e6ff8f487cbd3cf2d3",
  },
  {
    label: "Business Consulting",
    href: "https://omniebeeglobalsolutions.com/whatwedo/services/687a112eff8f487cbd3cf2dd",
  },
  {
    label: "Technical Support",
    href: "https://omniebeeglobalsolutions.com/whatwedo/services/6879fa0bff8f487cbd3cf2ca",
  },
  {
    label: "Staffing Solutions",
    href: "https://omniebeeglobalsolutions.com/whatwedo/services/687a09c0ff8f487cbd3cf2d8",
  },
  {
    label: "Training",
    href: "https://omniebeeglobalsolutions.com/whatwedo/services/687a2e24e7dd05494d3087d9",
  },
];

const industries = [
  {
    label: "Healthcare",
    href: "https://omniebeeglobalsolutions.com/whatwedo/industries/healthcare",
  },
  {
    label: "Retail & E-Commerce",
    href: "https://omniebeeglobalsolutions.com/whatwedo/industries/retailandecommerce",
  },
  {
    label: "Banking & Finance",
    href: "https://omniebeeglobalsolutions.com/whatwedo/industries/bankingandfinance",
  },
  {
    label: "AgriTech",
    href: "https://omniebeeglobalsolutions.com/whatwedo/industries/agritech",
  },
  {
    label: "Travel & Tourism",
    href: "https://omniebeeglobalsolutions.com/whatwedo/industries/travelandtourism",
  },
  {
    label: "Education",
    href: "https://omniebeeglobalsolutions.com/whatwedo/industries/education",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>

      
      <div className={styles.background} />

      <div className={styles.container}>

        

        <div className={styles.top}>

          
          <div className={styles.company}>

            <div className={styles.brand}>
              <Image
                src={asset("/Home_files/rwgi0kbbc1j2h0s5ghof.png")}
                alt="Omniebee Global Solutions"
                width={50}
                height={50}
                className={styles.logo}
              />

              <div className={styles.divider} />

              <h2>
                Omniebee
                <br />
                Global Solutions
              </h2>
            </div>

            <p>
              Omniebee Global Solutions is a results-driven IT
              services company, delivering excellence in web and
              software development, cloud integration, UI/UX design,
              and full-stack consulting. We are committed to
              empowering businesses through smart, scalable, and
              secure technology solutions that drive performance and
              digital transformation.
            </p>

          </div>


          
          <div className={styles.column}>

            <h3>Services</h3>

            <div className={styles.line} />

            <ul>
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>


          
          <div className={styles.column}>

            <h3>Industries</h3>

            <div className={styles.line} />

            <ul>
              {industries.map((industry) => (
                <li key={industry.label}>
                  <a
                    href={industry.href}
                  >
                    {industry.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>

        </div>


        

        <div className={styles.bottom}>

          <p>
            Made with ❤️ | Copyright ©2025 Omniebee Global Solutions |
            All Rights Reserved
          </p>

          <div className={styles.legal}>

            <a href="https://omniebeeglobalsolutions.com/privacy-and-policy">
              Privacy Policy
            </a>

            <a href="https://omniebeeglobalsolutions.com/terms-and-conditions">
              Terms and Conditions
            </a>

          </div>

        </div>

      </div>

      

    </footer>
  );
}