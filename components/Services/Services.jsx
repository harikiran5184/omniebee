import Image from "next/image";
import styles from "./Services.module.scss";

const services = {
  staffing: {
    title: "Staffing Solutions",
    image: "/Home_files/jlp58zrdbyacnfw6vj5b.jpg",
    description:
      "Our Staffing Solutions are designed to help businesses find the right talent at the right time. We bridge the gap between urgent workforce needs and skilled professionals ready to contribute from day one.",
    href: "https://omniebeeglobalsolutions.com/whatwedo/services/687a09c0ff8f487cbd3cf2d8",
    type: "small-top",
  },

  training: {
    title: "Educational Training",
    image: "/Home_files/gvwt3nxe1m5dr7o3cccy.jpg",
    href: "https://omniebeeglobalsolutions.com/whatwedo/services/687a2e24e7dd05494d3087d9",
    tags: [
      "Training",
      "EdTech",
      "Skill Training",
      "Workshops",
    ],
    type: "small-bottom",
  },

  software: {
    title: "Software Development",
    image: "/Home_files/x9dv7yk8u0oxu01crngn.jpg",
    description:
      "At Omniebee Global Solutions, we believe mobile apps are more than just digital tools — they are strategic assets that drive growth....",
    href: "https://omniebeeglobalsolutions.com/whatwedo/services/6879f664ff8f487cbd3cf2c2",
    type: "tall",
  },

  support: {
    title: "Technical Support",
    image: "/Home_files/w4uipekbsvldztlioojz.png",
    description:
      "Our Technical Support Services are designed to ensure uninterrupted development workflows, faster issue resolution, and optimized project delivery.....",
    href: "https://omniebeeglobalsolutions.com/whatwedo/services/6879fa0bff8f487cbd3cf2ca",
    type: "tall",
  },

  consulting: {
    title: "Business Consulting",
    image: "/Home_files/xcgqrooff99hzrdpqf7e.jpg",
    href: "https://omniebeeglobalsolutions.com/whatwedo/services/687a112eff8f487cbd3cf2dd",
    tags: [
      "Operations",
      "Consulting",
      "Optimization",
      "Strategy",
    ],
    type: "small-top",
  },

  itConsulting: {
    title: "IT Consulting",
    image: "/Home_files/mh3phyndlkcdbnwwcj0i.jpg",
    href: "https://omniebeeglobalsolutions.com/whatwedo/services/687a04e6ff8f487cbd3cf2d3",
    tags: [
      "Tech Help",
      "IT Audit",
      "Tech Advisory",
      "Cloud Strategy",
    ],
    type: "small-bottom",
  },
};

function Arrow() {
  return (
    <svg
      className={styles.arrow}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="19" x2="19" y2="5" />
      <polyline points="7 5 19 5 19 17" />
    </svg>
  );
}




function SmallServiceCard({ service }) {
  return (
    <a
      href={service.href}
      className={`${styles.smallCard} ${
        service.type === "small-top"
          ? styles.smallTop
          : styles.smallBottom
      }`}
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 639px) 350px, 224px"
        className={styles.image}
      />

      <div className={styles.overlay} />

      <div className={styles.smallContent}>
        <div className={styles.cardHeader}>
          <span>{service.title}</span>

          <Arrow />
        </div>

        {service.description && (
          <div className={styles.smallDescription}>
            {service.description}
          </div>
        )}

        {service.tags && (
          <div className={styles.tagsWrapper}>
            <div className={styles.tags}>
              {service.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </a>
  );
}




function TallServiceCard({ service }) {
  return (
    <a
      href={service.href}
      className={styles.tallCard}
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 639px) 350px, 192px"
        className={styles.image}
      />

      <div className={styles.overlay} />

      <div className={styles.tallContent}>

        <div className={styles.tallHeader}>
          <span>{service.title}</span>
        </div>

        <div className={styles.dots}>
          <span />
          <span className={styles.activeDot} />
          <span />
        </div>

        <span className={styles.tallDescription}>
          {service.description}
        </span>

      </div>
    </a>
  );
}




export default function Services() {
  return (
    <section className={styles.section}>

      <h2 className={styles.heading}>
        Our Services
      </h2>

      <hr className={styles.headingLine} />


      <div className={styles.servicesGrid}>

        

        <div className={styles.sideColumn}>

          <SmallServiceCard
            service={services.staffing}
          />

          <SmallServiceCard
            service={services.training}
          />

        </div>


        

        <div className={styles.centerColumn}>

          <TallServiceCard
            service={services.software}
          />

          <TallServiceCard
            service={services.support}
          />

        </div>


        

        <div className={styles.sideColumn}>

          <SmallServiceCard
            service={services.consulting}
          />

          <SmallServiceCard
            service={services.itConsulting}
          />

        </div>

      </div>

    </section>
  );
}