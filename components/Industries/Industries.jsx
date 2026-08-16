"use client";

import { useState } from "react";
import styles from "./Industries.module.scss";
import { asset } from "@/src/lib/assets";
const industries = [
  {
    title: "Healthcare",
    image: "/Home_files/meo4ufbhctfjuewusg0n.gif",
    description:
      "Healthcare web and app development is an Omniebee specialty. We value our healthcare users highly, and we want their efforts to be reflected through a highly functional, secure, and easy-to-use website....",
    href: "https://omniebeeglobalsolutions.com/whatwedo/industries/healthcare",
  },
  {
    title: "Retail & E-Commerce",
    image: "/Home_files/crt5hbqrn3jgcdudbk8v.gif",
    description:
      "Retail success today depends on digital speed, seamless experiences, and real-time insight. We help brands build robust, mobile-ready storefronts that drive engagement and sales.....",
    href: "https://omniebeeglobalsolutions.com/whatwedo/industries/retailandecommerce",
  },
  {
    title: "Banking & Finance",
    image: "/Home_files/pvgpm6zjf4c9w8jmsdfn.gif",
    description:
      "The financial world is transforming fast — and your technology needs to keep up. We create banking and finance platforms that are not just secure and compliant, but also intuitive, lightning-fast, and data-driven.....",
    href: "https://omniebeeglobalsolutions.com/whatwedo/industries/bankingandfinance",
  },
  {
    title: "AgriTech",
    image: "/Home_files/a336k09iavn5alvw4rqj.gif",
    description:
      "Agriculture today is no longer just about soil and seeds — it's about data, efficiency, and automation. Our AgriTech platforms connect farmers and agribusinesses with smart tools to monitor fields, predict yields, manage resources, and sell crops profitably......",
    href: "https://omniebeeglobalsolutions.com/whatwedo/industries/agritech",
  },
  {
    title: "Travel & Tourism",
    image: "/Home_files/hiidhz0qy3xnzx4vv8e9.gif",
    description:
      "In the digital age, travel starts with a screen. Whether it's flights, hotels, activities, or entire itineraries — we empower travel agencies, tour operators, and hospitality companies to deliver frictionless booking and planning experiences.....",
    href: "https://omniebeeglobalsolutions.com/whatwedo/industries/travelandtourism",
  },
  {
    title: "Education",
    image: "/Home_files/unugscrj9sw0dqsp2oso.gif",
    description:
      "Modern education is borderless and hybrid — and students expect engaging, on-demand content across devices. We help education providers launch platforms that support virtual classrooms, live tutoring, AI-powered assessments, and content personalization.....",
    href: "https://omniebeeglobalsolutions.com/whatwedo/industries/education",
  },
];

export default function Industries() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        
        <h2 className={styles.heading}>
          Delivering{" "}
          <span>Best</span>{" "}
          IT Solutions
        </h2>

        <hr className={styles.headingLine} />

        

        <div className={styles.desktopGrid}>
          {industries.map((industry) => (
            <div
              key={industry.title}
              className={styles.cardWrapper}
            >
              <div className={styles.flipCard}>

                
                <div className={styles.cardFront}>

                  <img
                    src={asset(industry.image)}
                    alt={industry.title}
                    className={styles.industryIcon}
                  />

                  <h3>
                    {industry.title}
                  </h3>

                </div>


                
                <div className={styles.cardBack}>

                  <p>
                    {industry.description}
                  </p>

                  <a
                    href={industry.href}
                    className={styles.readMore}
                  >
                    Read More
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>


        

        <div className={styles.mobileGrid}>
          {industries.map((industry, index) => {
            const isOpen = openCard === index;

            return (
              <div
                key={industry.title}
                className={styles.mobileCard}
              >

                
                <button
                  type="button"
                  className={styles.mobileCardHeader}
                  onClick={() => toggleCard(index)}
                  aria-expanded={isOpen}
                >
                  <img
                    src={asset(industry.image)}
                    alt={industry.title}
                    className={styles.mobileIcon}
                  />

                  <h3>
                    {industry.title}
                  </h3>

                  <span
                    className={`${styles.mobileArrow} ${
                      isOpen
                        ? styles.mobileArrowOpen
                        : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>


                
                <div
                  className={`${styles.mobileContent} ${
                    isOpen
                      ? styles.mobileContentOpen
                      : ""
                  }`}
                >
                  <div className={styles.mobileContentInner}>

                    <p>
                      {industry.description}
                    </p>

                    <a
                      href={industry.href}
                      className={styles.readMore}
                    >
                      Read More
                    </a>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}