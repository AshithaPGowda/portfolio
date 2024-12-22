'use client';
import FrostedGlassSidebar from "./frostedSidebar";
export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        backgroundColor: '#FFFFFF', // White background for the header
        color: '#000000', // Black color for text
        position: 'fixed', // Keep header fixed at the top
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
            {/* Placeholder for logo */}
            <div style={{ width: '50px', height: '50px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
        {/* Replace the div with an <img> tag once the logo is ready */}
        <img src="apg.png" alt="APG Logo" style={{ width: '100%', height: '100%' }} />
      </div>
      <FrostedGlassSidebar/>
    </div>
  );
}
