import Image from "next/image";
import Link from "next/link";
import styles from "./CareersCTA.module.scss";
import { asset } from "@/src/lib/assets";
export default function Careers() {
  return (
    <section className={styles.careers}>
      
      <Image
        src={asset("/Home_files/vzveb2gtjhwdi0slpu9p.jpg")}
        alt="Innovation Background"
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />

      
      <div className={styles.overlay} />

      
      <div className={styles.contentWrapper}>
        <div className={styles.content}>

          <h2 className={styles.heading}>
            Innovating Together, Building Tomorrow
          </h2>

          <p className={styles.description}>
            At Omniebee Global Solutions, we are more than just a tech
            company— we are a collective of thinkers, builders, and
            innovators shaping the digital future. Our workplace thrives
            on collaboration, integrity, and continuous learning. We
            believe that when passion meets purpose, extraordinary
            outcomes follow.
          </p>

          <Link
            href="/careers"
            className={styles.button}
          >
            Explore Careers With Us
          </Link>

        </div>
      </div>
    </section>
  );
}