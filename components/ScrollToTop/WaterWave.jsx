"use client";

import { useEffect, useState } from "react";

export default function WaterWave({ waterLevel = 56 }) {
    const [waveOffset, setWaveOffset] = useState({
        y1: 0,
        q1: 0,
        q2: 0,
        q3: 0,
        y2: 0,
    });

    useEffect(() => {
        let animationFrame;

        const animate = (time) => {
            const t = time * 0.002;

            setWaveOffset({
                y1: Math.sin(t * 1.2) * 1.5,

                q1: Math.sin(t * 1.5 + 1) * 2,

                q2: Math.sin(t * 1.1 + 2) * 1.5,

                q3: Math.sin(t * 1.7 + 3) * 2,

                y2: Math.sin(t * 1.3 + 4) * 1.5,
            });

            animationFrame =
                requestAnimationFrame(animate);
        };

        animationFrame =
            requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    

    const level = Math.max(
        0,
        Math.min(56, waterLevel)
    );

    
    const y1 = level + waveOffset.y1;
    const q1 = level + waveOffset.q1;
    const q2 = level + waveOffset.q2;
    const q3 = level + waveOffset.q3;
    const y2 = level + waveOffset.y2;

    const path = `
        M 0 ${y1}

        Q 14 ${q1},
          28 ${q2}

        Q 42 ${q3},
          56 ${y2}

        L 56 56
        L 0 56
        Z
    `;

    return (
        <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                zIndex: 1,
                pointerEvents: "none",
            }}
            aria-hidden="true"
        >
            <defs>
                <clipPath id="circle-clip">
                    <circle
                        cx="28"
                        cy="28"
                        r="28"
                    />
                </clipPath>
            </defs>

            <g clipPath="url(#circle-clip)">
                <path
                    d={path}
                    fill="#56B9F0"
                />
            </g>
        </svg>
    );
}