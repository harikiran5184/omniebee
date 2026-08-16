import Image from "next/image";
import styles from "./Statistics.module.scss";
import { asset } from "@/src/lib/assets";
const stats = [
  {
    value: "50+",
    label: "Employees",
  },
  {
    value: "25+",
    label: "Clients",
  },
  {
    value: "50+",
    label: "Partners",
  },
  {
    value: "8+",
    label: "Projects",
  },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        
        <div className={styles.logoWrapper}>
          <Image
            src={asset("/Home_files/tdkuygqntdjl8ktwkmeu.png")}
            alt="Omniebee Logo"
            fill
            sizes="(max-width: 639px) 250px, 350px"
            className={styles.logo}
          />
        </div>

        
        <div className={styles.content}>

          <h2 className={styles.title}>
            Omniebee
            <br />
            <span>Global Solutions</span>
          </h2>

          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div
                className={styles.stat}
                key={stat.label}
              >
                <div className={styles.value}>
                  {stat.value}
                </div>

                <div className={styles.label}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}