"use client"
import MinimalistSidebar from "../components/sidebar";
import React, { useState } from 'react';

export default function Home() {
    const [activeSection, setActiveSection] = useState('Work');
    const [sidebarOpen, setSidebarOpen] = useState(false);


    const toggleSidebar = () => setSidebarOpen(prev => !prev);
  
    const handleSectionChange = (section) => {
      setActiveSection(section);
      if (!sidebarOpen) setSidebarOpen(true); // Ensure sidebar opens on section click
    };
  return (
<div style={{ display: "flex", height: "100vh" }}>
    {/* Sidebar */}
    <MinimalistSidebar
      activeSection={activeSection}
      setActiveSection={handleSectionChange}
      sidebarOpen={sidebarOpen}
      toggleSidebar={toggleSidebar}
    />

    {/* Main Content */}
    <main
      style={{
        flex: 1,
        marginLeft: sidebarOpen ? "12vw" : "4vw", // Dynamic margin based on sidebar state
        padding: "20px",
        transition: "margin 0.5s ease", // Smooth transition
      }}
    >
      {activeSection === "Work" && <h1>Welcome to My WORK</h1>}
      <p>
        This is the main content. It dynamically adjusts its margin based on
        the sidebar's width.
      </p>
    </main>
  </div>
  );
}
