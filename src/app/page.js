'use client'
import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function Home() {
  useEffect(() => {
    // Animate the letters "APG" with the specified colors and animations
    anime({
      targets: '.letter',
      opacity: [0, 1], // Fading in
      translateY: [-50, 0], // Moving up from -50px
      duration: 2000,
      delay: anime.stagger(100), // Stagger each letter's animation
      easing: 'easeOutElastic(1, .8)',
      loop: true, // Repeat animation
      direction: 'alternate', // Alternate between forward and backward
      fill: ['#9694FF', '#EBEAFF', '#3D3BF3', '#FF2929'], // Use the color scheme
    });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
        <text x="50" y="100" className="letter" fontSize="80" fontWeight="bold" fill="#9694FF">
          A
        </text>
        <text x="120" y="100" className="letter" fontSize="80" fontWeight="bold" fill="#EBEAFF">
          P
        </text>
        <text x="190" y="100" className="letter" fontSize="80" fontWeight="bold" fill="#3D3BF3">
          G
        </text>
      </svg>
    </div>
  );
}

