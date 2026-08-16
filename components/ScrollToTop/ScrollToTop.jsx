"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.scss";
import WaterWave from "./WaterWave";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    
    const [waterLevel, setWaterLevel] = useState(56);

    useEffect(() => {
        let ticking = false;

        const updateScroll = () => {
            const scrollTop = window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            
            const progress =
                documentHeight > 0
                    ? Math.min(
                        1,
                        Math.max(
                            0,
                            scrollTop / documentHeight
                        )
                    )
                    : 0;

            
            setVisible(scrollTop > 300);

            
            const level =
                56 - progress * 56;

            setWaterLevel(level);

            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(
                    updateScroll
                );

                ticking = true;
            }
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            }
        );

        updateScroll();

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            aria-label="Move to top"
            onClick={scrollToTop}
            className={`${styles.button} ${
                visible
                    ? styles.visible
                    : styles.hidden
            }`}
        >

            

            <WaterWave
                waterLevel={waterLevel}
            />


            

            <span className={styles.icon}>
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M7.41 15.59L12 11l4.59 4.59L18 14.17l-6-6-6 6 1.41 1.42z"
                        fill="white"
                    />

                    <path
                        d="M7.41 11.59L12 7l4.59 4.59L18 10.17l-6-6-6 6 1.41 1.42z"
                        fill="white"
                    />
                </svg>
            </span>

        </button>
    );
}