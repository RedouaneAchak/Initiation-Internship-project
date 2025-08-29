import React, { useEffect, useRef, useState } from "react";
export default function Intro() {
    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1, // trigger when 10% visible
            }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);
    return (
        <div  ref={textRef} className={`text ${isVisible ? "show" : ""}`}>
            <div className="intro-header">
                <h1 id="welcome">Bienvenue chez Noor Power Service</h1>
                <p id="partner">Votre partenaire de confiance en solutions énergétiques.</p>
            </div>
        </div>

    );
}   