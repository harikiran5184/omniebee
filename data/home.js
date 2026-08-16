import { assets } from "./assets";

export const homeData = {
  logo: assets.logo,
  navigation: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "What We Do?", url: "/", isDropdown: true },
    { label: "Portfolio", url: "https://portfolio-omniebeeglobalsolutions.com/", isExternal: true },
    { label: "Careers", url: "/careers" },
    { label: "Contact Us", url: "/contact" }
  ],
  contactInfo: {
    phone: "+91 9505637481",
    phoneUrl: "tel:+919505637481",
    email: "support@omniebeeglobalsolutions.com",
    emailUrl: "mailto:support@omniebeeglobalsolutions.com",
    socials: {
      linkedin: "https://www.linkedin.com/company/omniebee-global-solutions.com/posts/?feedView=all",
      facebook: "https://www.facebook.com/people/Web-Eclipse/pfbid0yjLh2Jg1SfKRXqVptn5RvvLVaZ8xNAXZwv2q4rhKr1pxTjyg9M7iQWVe2Ksbetm5l/",
      instagram: "https://www.instagram.com/omniebee_global_solutions/"
    }
  },
  hero: {
    badge: "Work with Omniebee",
    title: "Building your Future-Ready Solutions",
    subtitle: "for a Smarter World",
    description: "Omniebee Global Solutions delivers next-gen digital services, specializing in full-stack development, cloud technologies, UI/UX design, and tech training. We empower startups and enterprises across industries like education, healthcare, retail, and IT services to thrive with innovative, scalable solutions.",
    ctaText: "Know More",
    ctaUrl: "/about",
    bgImage: assets.heroBg
  },
  about: {
    badge: "2+ Years of Excellence",
    title: "Your Trusted Partner for Next-Gen Digital Solutions",
    description: "Omniebee Global Solutions is a results-driven IT services company, delivering excellence in web and software development, cloud integration, UI/UX design, and full-stack consulting. We are committed to empowering businesses through smart, scalable, and secure technology solutions that drive performance and digital transformation. Our focus lies in creating tangible value through innovation, agility, and client-centric strategies.",
    bullets: [
      {
        icon: assets.experienceIcon,
        title: "Experience",
        description: "We are headquartered in India, the world’s IT powerhouse, providing global clients with exceptional software development services."
      },
      {
        icon: assets.supportIcon,
        title: "Quick Support",
        description: "We ensure seamless communication and proactive support through modern collaboration tools."
      }
    ],
    images: {
      left: assets.aboutLeft,
      topRight: assets.aboutTopRight,
      bottomRight: assets.aboutBottomRight
    }
  },
  industries: {
    title: "Delivering",
    titleAccent: "Best",
    titleSuffix: "IT Solutions",
    list: [
      {
        id: "healthcare",
        name: "Healthcare",
        description: "Healthcare web and app development is an Omniebee specialty. We value our healthcare users highly, and we want their efforts to be reflected through a highly functional, secure, and easy-to-use website.",
        url: "/whatwedo/industries/healthcare",
        gif: assets.industryHealthcare
      },
      {
        id: "retail",
        name: "Retail & E-Commerce",
        description: "Retail success today depends on digital speed, seamless experiences, and real-time insight. We help brands build robust, mobile-ready storefronts that drive engagement and sales.",
        url: "/whatwedo/industries/retailandecommerce",
        gif: assets.industryRetail
      },
      {
        id: "banking",
        name: "Banking & Finance",
        description: "The financial world is transforming fast — and your technology needs to keep up. We create banking and finance platforms that are not just secure and compliant, but also intuitive, lightning-fast, and data-driven.",
        url: "/whatwedo/industries/bankingandfinance",
        gif: assets.industryBanking
      },
      {
        id: "agritech",
        name: "AgriTech",
        description: "Agriculture today is no longer just about soil and seeds — it's about data, efficiency, and automation. Our AgriTech platforms connect farmers and agribusinesses with smart tools to monitor fields, predict yields, manage resources, and sell crops profitably.",
        url: "/whatwedo/industries/agritech",
        gif: assets.industryAgritech
      },
      {
        id: "travel",
        name: "Travel & Tourism",
        description: "In the digital age, travel starts with a screen. Whether it's flights, hotels, activities, or entire itineraries — we empower travel agencies, tour operators, and hospitality companies to deliver frictionless booking and planning experiences.",
        url: "/whatwedo/industries/travelandtourism",
        gif: assets.industryTravel
      },
      {
        id: "education",
        name: "Education",
        description: "Modern education is borderless and hybrid — and students expect engaging, on-demand content across devices. We help education providers launch platforms that support virtual classrooms, live tutoring, AI-powered assessments, and content personalization.",
        url: "/whatwedo/industries/education",
        gif: assets.industryEducation
      }
    ]
  },
  technologies: {
    title: "Skilled IT professionals for 15+ Dedicated Services",
    list: [
      { name: "React.js", icon: assets.techReact },
      { name: "Next.js", icon: assets.techNext },
      { name: "Vue.js", icon: assets.techVue },
      { name: "JavaScript", icon: assets.techJs },
      { name: "Automation", icon: assets.techAutomation },
      { name: "Cloud", icon: assets.techCloud }
    ]
  },
  services: {
    title: "Our Services",
    list: {
      staffing: {
        title: "Staffing Solutions",
        description: "Our Staffing Solutions are designed to help businesses find the right talent at the right time. We bridge the gap between urgent workforce needs and skilled professionals ready to contribute from day one.",
        image: assets.serviceStaffing,
        url: "/whatwedo/services/687a09c0ff8f487cbd3cf2d8"
      },
      training: {
        title: "Educational Training",
        tags: ["Training", "EdTech", "Skill Training", "Workshops"],
        image: assets.serviceTraining,
        url: "/whatwedo/services/687a2e24e7dd05494d3087d9"
      },
      softwareDev: {
        title: "Software Development",
        description: "At Omniebee Global Solutions, we believe mobile apps are more than just digital tools — they are strategic assets that drive growth. We build high-performing software customized to your exact operational requirements.",
        images: [assets.serviceSoftwareDev1, assets.serviceSoftwareDev2, assets.serviceSoftwareDev3],
        url: "/whatwedo/services/6879f664ff8f487cbd3cf2c2"
      },
      techSupport: {
        title: "Technical Support",
        description: "Our Technical Support Services are designed to ensure uninterrupted development workflows, faster issue resolution, and optimized project delivery.",
        images: [assets.serviceTechSupport1, assets.serviceTechSupport2, assets.serviceTechSupport3],
        url: "/whatwedo/services/6879fa0bff8f487cbd3cf2ca"
      },
      businessConsulting: {
        title: "Business Consulting",
        tags: ["Operations", "Consulting", "Optimization", "Strategy"],
        image: assets.serviceBusinessConsulting,
        url: "/whatwedo/services/687a112eff8f487cbd3cf2dd"
      },
      itConsulting: {
        title: "IT Consulting",
        tags: ["Tech Help", "IT Audit", "Tech Advisory", "Cloud Strategy"],
        image: assets.serviceItConsulting,
        url: "/whatwedo/services/687a04e6ff8f487cbd3cf2d3"
      }
    }
  },
  statistics: {
    logoImage: assets.logoMark,
    titleLine1: "Omniebee",
    titleLine2: "Global Solutions",
    list: [
      { count: "50+", label: "Employees" },
      { count: "25+", label: "Clients" },
      { count: "50+", label: "Partners" },
      { count: "8+", label: "Projects" }
    ]
  },
  careersCTA: {
    title: "Innovating Together, Building Tomorrow",
    description: "At Omniebee Global Solutions, we are more than just a tech company— we are a collective of thinkers, builders, and innovators shaping the digital future. Our workplace thrives on collaboration, integrity, and continuous learning. We believe that when passion meets purpose, extraordinary outcomes follow.",
    buttonText: "Explore Careers With Us",
    url: "/careers",
    bgImage: assets.careersBg
  },
  footer: {
    logoTextLine1: "Omniebee",
    logoTextLine2: "Global Solutions",
    logoImage: assets.logoMark,
    bgPattern: "https://res.cloudinary.com/dqgixj7vr/image/upload/v1753773983/vsh0k5dumadt6pes2yv8.png",
    description: "Omniebee Global Solutions is a results-driven IT services company, delivering excellence in web and software development, cloud integration, UI/UX design, and full-stack consulting. We are committed to empowering businesses through smart, scalable, and secure technology solutions that drive performance and digital transformation.",
    links: {
      services: [
        { label: "Software Development", url: "/whatwedo/services/6879f664ff8f487cbd3cf2c2" },
        { label: "IT Consulting", url: "/whatwedo/services/687a04e6ff8f487cbd3cf2d3" },
        { label: "Business Consulting", url: "/whatwedo/services/687a112eff8f487cbd3cf2dd" },
        { label: "Technical Support", url: "/whatwedo/services/6879fa0bff8f487cbd3cf2ca" },
        { label: "Staffing Solutions", url: "/whatwedo/services/687a09c0ff8f487cbd3cf2d8" },
        { label: "Training", url: "/whatwedo/services/687a2e24e7dd05494d3087d9" }
      ],
      industries: [
        { label: "Healthcare", url: "/whatwedo/industries/healthcare" },
        { label: "Retail & E-Commerce", url: "/whatwedo/industries/retailandecommerce" },
        { label: "Banking & Finance", url: "/whatwedo/industries/bankingandfinance" },
        { label: "AgriTech", url: "/whatwedo/industries/agritech" },
        { label: "Travel & Tourism", url: "/whatwedo/industries/travelandtourism" },
        { label: "Education", url: "/whatwedo/industries/education" }
      ]
    },
    copyright: "Made with ❤️ | Copyright ©2025 Omniebee Global Solutions | All Rights Reserved",
    privacyUrl: "/privacy-and-policy",
    termsUrl: "/terms-and-conditions"
  }
};
