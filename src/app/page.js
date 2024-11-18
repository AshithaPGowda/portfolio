"use client";
import React, { useState } from 'react';
import MinimalistSidebar from "./components/sidebar";

export default function Home() {
  const [activeSection, setActiveSection] = useState('Home');
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (!sidebarOpen) setSidebarOpen(true); // Ensure sidebar opens on section click
  };
  
    return <div>
      <MinimalistSidebar         
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      </div>;

}
