'use client';

import { useEffect, useRef, useState } from 'react';
import { Fireworks } from 'fireworks-js';
import Image from 'next/image';
import styles from '../styles/CustomStyles.module.css';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
// Dummy timeLeft (replace with countdown logic)
const Timer = ({ timeLeft }: { timeLeft: TimeLeft }) => {
  const [animState, setAnimState] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  useEffect(() => {
    setAnimState({
      days: true,
      hours: true,
      minutes: true,
      seconds: true,
    });

    const timeout = setTimeout(() => {
      setAnimState({
        days: false,
        hours: false,
        minutes: false,
        seconds: false,
      });
    }, 500); // animation duration

    return () => clearTimeout(timeout);
  }, [timeLeft]);

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timerItem}>
        <span className={`${styles.value} ${animState.days ? styles.animate : ''}`}>{timeLeft.days}</span> Days
      </div>
      <div className={styles.timerItem}>
        <span className={`${styles.value} ${animState.hours ? styles.animate : ''}`}>{timeLeft.hours}</span> Hours
      </div>
      <div className={styles.timerItem}>
        <span className={`${styles.value} ${animState.minutes ? styles.animate : ''}`}>{timeLeft.minutes}</span> Minutes
      </div>
      <div className={styles.timerItem}>
        <span className={`${styles.value} ${animState.seconds ? styles.animate : ''}`}>{timeLeft.seconds}</span> Seconds
      </div>
    </div>
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const fireworksRef = useRef(null);
  const containerRef = useRef(null);
useEffect(() => {
    const targetDate = new Date("2025-08-16T11:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const slides = [
    (
      <div className={styles.heroSection}>
        
        <div id="fireworks-container" className={styles.fireworks}></div>
        <div className={styles.logo}></div>
        <p className="typewriter italic mt-4 max-w-xl mx-auto text-center leading-relaxed">
          Two souls, one journey.
        </p>
        <p className="typewriter italic max-w-xl mx-auto text-center leading-relaxed">
          With joy in our hearts, we invite you to witness the beginning of forever.
        </p>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.nameLine}>Mohammed Sajjad</span>
            <span className={styles.nameLine}>&</span>
            <span className={styles.nameLine}>Shabnam</span>
          </h1>

          <p className={styles.dateText}>16 August 2025</p>
          <p className={styles.weddingtext}>⏰ Time: 11:00 AM to 2.00 PM</p>
          <div className={styles.countdownWrapper}>
            <Timer timeLeft={timeLeft} />
          </div>
        </div>
      </div>
    ),
    (
      <div className={styles.heroSection}><div className="flex justify-center items-center h-full">
        <Image
          src="/images/card.jpeg"
          alt="Wedding Invitation"
          width={400}
          height={600}
          className={styles.cardstyle}
        />
      </div></div>
    ),
    (<div className={styles.heroSection}>
      <div className={`${styles.venuewrap} text-center`}>
        <h2 className={styles.weddinghead}>Wedding Venue</h2>
        <Image
          src="/images/rahi-convention-centre.jpg"
          alt="Rahi Convention Center"
          width={350}
          height={200}
          className="mx-auto mt-4"
        />
        <p className={styles.weddingtext}>📍 Rahi Convention Center, Edamuttam</p>
        <p className={styles.weddingtext}>🗓 16 August 2025</p>
        <Image
          src="/images/qr-code.png"
          alt="QR Code"
          width={100}
          height={100}
          className="mx-auto mt-4"
        />
      </div></div>
    ),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // 6 seconds

    return () => clearInterval(interval);
  }, []);

  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };useEffect(() => {
  const audio = document.getElementById('wedding-audio') as HTMLAudioElement;

  const enableAudio = () => {
    audio?.play().catch((e) => {
      console.log('Autoplay failed:', e);
    });
    document.removeEventListener('click', enableAudio);
  };

  document.addEventListener('click', enableAudio);

  return () => {
    document.removeEventListener('click', enableAudio);
  };
}, []);

  return (
    <div className={styles.container} onClick={nextSlide}>
      <div className="relative min-h-screen w-full scroll-smooth bg-black text-white">
      <audio id="wedding-audio" autoPlay loop>
  <source src="/audio/wedding.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
<video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/videos/wedding.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="fixed inset-0 bg-black/50 z-[-1]" />

      <section className={styles.heroSection}><div className={styles.overlay}></div>
      <div className={styles.slider}>
        <div key={currentSlide} className={styles.slide}>
          {slides[currentSlide]}
        </div>
      </div>
      <div ref={containerRef} className={styles.fireworks}></div>
    </section>
    </div></div>
  );
}
