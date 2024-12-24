'use client';
import { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import UserProfile from './home/page';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true); // State to control visibility of the animation

  useEffect(() => {
    anime({
      targets: '.letter',
      opacity: [0, 1], // Fading in
      translateY: [-50, 0], // Moving up from -50px
      duration: 2000,
      delay: anime.stagger(100), // Stagger each letter's animation
      easing: 'easeOutElastic(1, .8)',
      loop: false, // Animation stops after one complete loop
      direction: 'alternate', // Alternate between forward and backward
      fill: ['#E6D9A2', '#1F4529', '#FA4032', '#2A3663', '#CEDF9F', '#E5D9F2', '#FF8A8A', '#624E88 '],
      complete: () => {
        // After 3 seconds, switch to the "home" content
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      },
    });
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {isVisible ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="100" className="letter" fontSize="80" fontWeight="bold">
              A
            </text>
            <text x="120" y="100" className="letter" fontSize="80" fontWeight="bold">
              P
            </text>
            <text x="190" y="100" className="letter" fontSize="80" fontWeight="bold">
              G
            </text>
          </svg>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            backgroundColor: '#FFFFFF',
          }}
        >
          <UserProfile/>
        </div>
      )}
    </div>
  );
}
