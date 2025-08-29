import './Services.css';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function Numbercounters() {
  const [sCount, setSCount] = useState(0);
  const [cCount, setCCount] = useState(0);
  const [eCount, setECount] = useState(0);

  const sectionRef = useRef(null);
  const intervalRefs = useRef({});
  // useRef for "already animated" to avoid closure/state timing issues
  const hasAnimatedRef = useRef(false);

  const startCounting = useCallback(() => {
    // guard: don't start twice
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    // clear any leftover intervals just in case
    Object.values(intervalRefs.current).forEach((id) => clearInterval(id));
    intervalRefs.current = {};

    // targets (change to random if you want)
    const targetS = 95;
    const targetC = 200;
    const targetE = 20;

    let currentS = 0;
    let currentC = 0;
    let currentE = 0;

    intervalRefs.current.s = setInterval(() => {
      currentS++;
      setSCount(currentS);
      if (currentS >= targetS) {
        clearInterval(intervalRefs.current.s);
      }
    }, 25); // fast

    intervalRefs.current.c = setInterval(() => {
      currentC++;
      setCCount(currentC);
      if (currentC >= targetC) {
        clearInterval(intervalRefs.current.c);
      }
    }, 10); // faster

    intervalRefs.current.e = setInterval(() => {
      currentE++;
      setECount(currentE);
      if (currentE >= targetE) {
        clearInterval(intervalRefs.current.e);
      }
    }, 90); // slower
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            startCounting();
            // stop observing — we only want to start once
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      // clear intervals on unmount
      Object.values(intervalRefs.current).forEach((id) => clearInterval(id));
    };
  }, [startCounting]);

  return (
    <section className="number-counters" ref={sectionRef}>
      <h1 id="our-stats">Nos statistiques</h1>
      <div className="counters-grid">
        <div className="counter-item">
          <span className="counter-number">{sCount}%</span>
          <span className="counter-label">Taux de réussite</span>
        </div>
        <div className="counter-item">
          <span className="counter-number">{cCount}+</span>
          <span className="counter-label">Clients satisfaits</span>
        </div>
        <div className="counter-item">
          <span className="counter-number">{eCount}+</span>
          <span className="counter-label">Expérience</span>
        </div>
      </div>
    </section>
  );
}
