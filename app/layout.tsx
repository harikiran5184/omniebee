import "./globals.scss";

export const metadata = {
  title: "Home | Omniebee Global Solutions",
  description:
    "Omniebee Global Solutions offers future-ready IT services in software development, digital transformation, and enterprise consulting.",
  keywords:
    "Omniebee Global Solutions, Future-Ready IT Solutions, Custom Software Development, Digital Transformation Services, Enterprise IT Consulting, Product Engineering, Web & Mobile App Development, AI and Automation Solutions, Cloud Services",
  openGraph: {
    title: "Home | Omniebee Global Solutions",
    description:
      "Future-ready IT services including custom software, consulting, and cloud solutions.",
    url: "https://omniebeeglobalsolutions.com/",
    siteName: "Omniebee Global Solutions",
    images: [
      {
        url: "https://res.cloudinary.com/dqgixj7vr/image/upload/v1752734391/upnr7ik4007ozok1bbwp.png",
        width: 600,
        height: 400,
        alt: "Omniebee Global Solutions Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}