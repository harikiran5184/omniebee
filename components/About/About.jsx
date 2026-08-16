"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./About.module.scss";

const images = {
  experience: "/Home_files/hddhm1xqms2fqm8cuw9p.png",
  support: "/Home_files/icoioggd4i5unmgth0de.png",
  leftTall: "/Home_files/zxn87sleppdqq6vvbswb.jpg",
  topRight: "/Home_files/aumasrlcrvmln5peqrlp.jpg",
  bottomRight: "/Home_files/cyahjgqzexmausarmo87.jpg",
};

const dots = [
  {
    width: 12,
    height: 12,
    left: 512.156,
    top: 103.219,
  },
  {
    width: 15,
    height: 15,
    left: 1710.13,
    top: 381.216,
  },
  {
    width: 10,
    height: 10,
    left: 990.924,
    top: 110.075,
  },
  {
    width: 12,
    height: 12,
    left: 1142.55,
    top: 269.189,
  },
  {
    width: 15,
    height: 15,
    left: 1119.27,
    top: 284.616,
  },
  {
    width: 10,
    height: 10,
    left: 1409.1,
    top: 475.962,
  },
];

export default function AboutIntro() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={styles.section}>

      
      <div
        className={styles.dots}
        aria-hidden="true"
      >
        {dots.map((dot, index) => (
          <span
            key={index}
            className={styles.dot}
            style={{
              width: `${dot.width}px`,
              height: `${dot.height}px`,
              left: `${dot.left}px`,
              top: `${dot.top}px`,
              animationDelay: `${index * 0.7}s`,
              animationDuration: `${3.5 + index * 0.35}s`,
            }}
          />
        ))}
      </div>


      
      <div className={styles.container}>

        <div className={styles.content}>

          <h4 className={styles.excellence}>
            2+ Years of Excellence
          </h4>

          <h2 className={styles.heading}>
            Your Trusted Partner for
            <br />
            <span>Next-Gen Digital Solutions</span>
          </h2>

          <p className={styles.description}>
            Omniebee Global Solutions is a results-driven IT services
            company, delivering excellence in web and software
            development, cloud integration, UI/UX design, and
            full-stack consulting. We are committed to empowering
            businesses through smart, scalable, and secure technology
            solutions that drive performance and digital
            transformation. Our focus lies in creating tangible value
            through innovation, agility, and client-centric strategies.
          </p>


          <div className={styles.features}>

            <div className={styles.feature}>

              <div className={styles.featureTitle}>
                <Image
                  src={images.experience}
                  alt="Experience"
                  width={24}
                  height={24}
                />

                <h4>Experience</h4>
              </div>

              <p>
                We are headquartered in India, the world’s IT
                powerhouse, providing global clients with exceptional
                software development services.
              </p>

            </div>


            <div className={styles.feature}>

              <div className={styles.featureTitle}>
                <Image
                  src={images.support}
                  alt="Support"
                  width={24}
                  height={24}
                />

                <h4>Quick Support</h4>
              </div>

              <p>
                We ensure seamless communication and proactive support
                through modern collaboration tools.
              </p>

            </div>

          </div>

        </div>


        

        <div className={styles.imageGrid}>

          <div className={styles.leftTall}>
            <Image
              src={images.leftTall}
              alt="Omniebee Global Solutions"
              width={400}
              height={500}
            />
          </div>

          <div className={styles.topRight}>
            <Image
              src={images.topRight}
              alt="Digital Solutions"
              width={200}
              height={200}
            />
          </div>

          <div className={styles.bottomRight}>
            <Image
              src={images.bottomRight}
              alt="Technology Solutions"
              width={200}
              height={200}
            />
          </div>

        </div>

      </div>

    </section>
  );
}