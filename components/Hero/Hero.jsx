import Link from "next/link";
import styles from "./Hero.module.scss";
import { asset } from "@/src/lib/assets";
const HERO_IMAGE =
  "/Home_files/ciuh9ims7hdv22ifsg7a.jpg";

const title = "Building your Future-Ready Solutions";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <img
        src={asset(HERO_IMAGE)}
        alt="Hero Banner"
        width={1920}
        height={750}
        fetchPriority="high"
        className={styles.heroImage}
      />


      <div className={styles.overlay} />


      <div className={styles.contentWrapper}>
        <div className={styles.content}>


          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />

            <span>Work with</span>

            <span className={styles.omniebee}>
              Omniebee
            </span>
          </p>



          <div className={styles.desktopContent}>

            <h1 className={styles.title}>
              {title.split("").map((character, index) => (
                <span
                  key={`${character}-${index}`}
                  className={styles.charAnimate}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {character === " " ? "\u00A0" : character}
                </span>
              ))}
            </h1>


            <h2 className={styles.subtitle}>
              for a{" "}
              <span>
                Smarter World
              </span>
            </h2>


            <p className={styles.description}>
              Omniebee Global Solutions delivers next-gen digital
              services, specializing in full-stack development, cloud
              technologies, UI/UX design, and tech training. We empower
              startups and enterprises across industries like education,
              healthcare, retail, and IT services to thrive with
              innovative, scalable solutions.
            </p>

          </div>



          <div className={styles.buttonWrapper}>
            <Link href="/about">
              <button
                type="button"
                className={styles.learnMore}
              >
                <span className={styles.circle}>
                  <span
                    className={`${styles.icon} ${styles.arrow}`}
                  />
                </span>

                <span className={styles.buttonText}>
                  Know More
                </span>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}