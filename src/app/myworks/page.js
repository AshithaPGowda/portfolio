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
<div>
<MinimalistSidebar         
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
</div>
  );
}
