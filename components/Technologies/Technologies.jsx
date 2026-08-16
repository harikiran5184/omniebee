import Image from "next/image";
import styles from "./Technologies.module.scss";

const technologies = [
  {
    name: "React.js",
    image: "/Home_files/iq1oemhynurohecuyipg.png",
  },
  {
    name: "Next.js",
    image: "/Home_files/icojzrnexrohu42nsmyz.png",
  },
  {
    name: "Vue.js",
    image: "/Home_files/yidjambzzt38vgkrmqlv.png",
  },
  {
    name: "JavaScript",
    image: "/Home_files/g87mzyrzugqc2ftzcrqo.jpg",
  },
  {
    name: "Automation",
    image: "/Home_files/pcosthfjnnnpl9zwck5s.png",
  },
  {
    name: "Cloud",
    image: "/Home_files/mfghupphpnlt2bamahbh.png",
  },
];

export default function Technologies() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.heading}>
          Skilled IT professionals for 15+
          <br className={styles.mobileBreak} />
          {" "}Dedicated Services
        </h2>

        <hr className={styles.headingLine} />

        <div className={styles.technologyGrid}>
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className={styles.technology}
            >
              <div className={styles.iconWrapper}>
                <Image
                  src={technology.image}
                  alt={technology.name}
                  fill
                  priority
                  sizes="80px"
                  className={styles.icon}
                />
              </div>

              <p className={styles.name}>
                {technology.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}