const CONSTANT = [];

CONSTANT.PROJECTS = [
    {
        title: "XOXO Game",
        slug: "XOXO",
        highlightDescription: "A fun tic-tac-toe game with an AI-powered opponent, playable inside the portfolio.",
        description:
            "XOXO Game is a fun tic-tac-toe game built with React. It features an AI-powered opponent, and it is playable directly within the portfolio. The game doesn't have multiplayer functionality but offers a challenging AI for users. It’s responsive and can be enjoyed across devices with a seamless experience.",
        cardBackgroundColor: "#FFEB3B",
        media: ["pp.png", "https://via.placeholder.com/200"],
        details: {
            "Technologies Used": "React, JavaScript, HTML, CSS, AI Algorithm",
            Role: "Full Stack Developer",
            Duration: "4 days",
            "Collaboration Type": "Founder",
        },
        features: ["AI-powered opponent (no multiplayer)", "Responsive design for all devices", "Playable inside portfolio"],
        highlightFeatures: ["AI-powered opponent", "Responsive design for all devices", "Playable inside portfolio"],
        toolTipText: "Personal Project",
        playable : true
    },
    {
        title: "cnotes.in",
        slug: "cnotes-in",
        highlightDescription:
            "A platform designed to streamline cable TV subscriber management and prevent payment leakages.",
        description:
            "cnotes.in is a platform designed to improve cable TV subscriber management. It offers features like automated billing, efficient collection management, and SMS receipts for customers. The platform aims to prevent last-mile payment leakages and provide a smooth billing experience. Built using PHP and MySQL, cnotes.in ensures smooth functionality for both businesses and customers.",
        cardBackgroundColor: "#4169E1",
        media: ["cnotes/home.png","cnotes/login.png"],
        details: {
            "Technologies Used": "PHP, Argon CDN, MySQL, Git",
            Role: "Full Stack Developer",
            Duration: "Ongoing",
            "Collaboration Type": "Founder",
            "Project Type": "Startup",
        },
        features: [
            "Efficient collection management for cable TV subscribers",
            "Automated billing and customer management system",
            "SMS receipts for customers",
            "Prevention of last-mile payment leakages",
        ],
        highlightFeatures: [
            "Efficient collection management",
            "Automated billing and SMS receipts",
            "Last-mile payment leakage prevention",
        ],
        toolTipText: "Professional Project",
        playable : false
    },
    {
        title: "Dear",
        slug: "dear",
        highlightDescription: "A personalized voice assistant to simulate memory conversations for Alzheimer's patients.",
        description:
            "Dear is a personalized voice assistant designed to simulate phone conversations with Alzheimer's patients. By deep cloning a family member's voice using Cartesia and integrating VAPI to trigger phone calls, Dear continues the conversation with AI-driven models to assist in simulating memory. It serves as a memory trigger, providing comfort and interaction for those suffering from Alzheimer's. The project aims to help simulate interactions and support the memory recovery process.",
        cardBackgroundColor: "#3F51B5",
        media: [],
        details: {
            "Technologies Used": "Cartesia, VAPI, AI Models, Next.js",
            Role: "Full Stack Developer",
            Duration: "36 hours",
            "Collaboration Type": "Team Lead",
            "Project Type": "Personal Project",
        },
        features: [
            "Personalized voice simulation for Alzheimer's patients",
            "AI-driven voice conversation",
            "Deep cloning family members' voices",
            "Memory-triggering phone conversations",
        ],
        highlightFeatures: ["AI-driven voice simulation", "Deep cloning of voices", "Memory assistance through conversation"],
        toolTipText: "Personal Project",
        playable : false
    },
    {
        title: "Clue Crafters",
        slug: "clue-crafters",
        highlightDescription: "A 6-player multiplayer game built with Socket.IO and Express for real-time gameplay.",
        description:
            "Clue Crafters is a revamped version of the traditional Clue board game, built as a 6-player multiplayer experience using Socket.IO for real-time communication and Express for the backend. Players can work together or compete to solve clues in a dynamic, interactive environment. Developed as a full-stack application with Next.js, it ensures seamless gameplay and real-time updates. As the team lead, I handled both the frontend and backend development, including setting up real-time communication and multiplayer functionalities.",
        cardBackgroundColor: "#6D4C41",
        media: ["clueCrafters/gameboard.png", "clueCrafters/gameStart.png","clueCrafters/suggestion.png"],
        details: {
            "Technologies Used": "Socket.IO, Express, Next.js, JavaScript, HTML, CSS",
            Role: "Full Stack Developer",
            Duration: "6 months",
            "Collaboration Type": "Team Lead",
            "Project Type": "Academic Project",
        },
        features: [
            "Real-time multiplayer functionality with Socket.IO",
            "Interactive clue-solving gameplay",
            "6-player support",
            "Responsive design for all devices",
        ],
        highlightFeatures: ["Real-time multiplayer", "6-player support", "Interactive gameplay"],
        toolTipText: "Academic Project",
        playable : false
    },
    {
        title: "Inveniam.io",
        slug: "inveniam-io",
        highlightDescription: "Contributed to a data platform improving liquidity for private market assets.",
        description:
            "At Inveniam.io, I worked as a backend developer contributing to a data operating platform aimed at improving liquidity in private market assets like private equity and commercial real estate. My responsibilities included maintaining data security, resolving critical support tickets, and implementing CQRS-based design patterns to ensure data consistency and scalability. Collaborating closely with the team, I played a role in streamlining backend services to enhance the platform’s performance and user experience.",
        cardBackgroundColor: "#8BC34A",
        media: ["pp.png", "https://via.placeholder.com/200"],
        details: {
            "Technologies Used": "Angular, Node.js, CQRS",
            Role: "Backend Developer",
            Duration: "May 2023 - June 2024",
            "Collaboration Type": "Team Member at Inveniam.io",
            "Project Type": "Professional Project",
        },
        features: [
            "Resolved critical backend support tickets, ensuring uninterrupted platform functionality.",
            "Implemented CQRS-based architecture to handle large-scale data operations.",
            "Enhanced database queries for optimal performance and scalability.",
            "Collaborated with the team to refine the platform's backend services.",
        ],
        highlightFeatures: [
            "Resolved high-priority backend issues",
            "Implemented scalable CQRS design",
            "Optimized database performance",
        ],
        toolTipText: "Professional Project",
        playable : false
    },
    {
        title: "Patent Verification System",
        slug: "patent-verification-system",
        highlightDescription: "A secure blockchain-based platform for verifying patents.",
        description:
            "A blockchain-based platform designed to securely verify and store patent-related data. The system leverages smart contracts to automate verification and enhance transparency in the patent validation process. It ensures tamper-proof data integrity and provides a user-friendly interface for researchers and patent officers.",
        cardBackgroundColor: "#607D8B", // Neutral tone
        media: [],
        details: {
            "Technologies Used": "Next.js, Ethereum, Smart Contracts, Solidity, Web3.js",
            Role: "Full Stack Developer",
            Duration: "4 months",
            "Collaboration Type": "Team Lead",
            "Project Type": "Academic Project",
        },
        features: [
            "Blockchain-based data storage",
            "Smart contract automation for patent verification",
            "User-friendly interface for secure uploads",
            "Tamper-proof patent verification records",
        ],
        highlightFeatures: ["Blockchain-backed security", "Smart contract-based automation", "Patent data integrity"],
        toolTipText: "Academic Project",
        playable : false
    },
    {
        title: "Snake and Ladder",
        slug: "snake-and-ladder",
        highlightDescription: "A classic Snake and Ladder game revamped for multiplayer fun.",
        description: "A reimagined version of the traditional Snake and Ladder board game, built as a multiplayer online experience. The game leverages Socket.IO for real-time communication, enabling players to connect and enjoy the game together seamlessly. It features an engaging user interface with interactive animations that bring the classic game to life. This project holds special significance as it was the first game I ever created, sparking my passion for Node.js, Express.js, and software development in general.",
        cardBackgroundColor: "#FFA07A", // Warm and playful tone
        media: [
            "pp.png", // Placeholder image for now
            "https://via.placeholder.com/200",
        ],
        details: {
            "Technologies Used": "Socket.IO, Node.js, Express.js, JavaScript, HTML, CSS",
            Role: "Full Stack Developer",
            Duration: "3 months",
            "Collaboration Type": "Individual Contributor",
            "Project Type": "Professional Project",
        },
        features: [
            "Real-time multiplayer gameplay",
            "Interactive UI with animated dice rolls",
            "Customizable player avatars",
            "Game state persistence for reconnections",
        ],
        highlightFeatures: [
            "Real-time multiplayer support",
            "Interactive animations",
            "Classic game experience with a modern touch",
        ],
        toolTipText: "Professional Project",
        playable : false 
    },
    {
        title: "NJS2 Chat Plugin",
        slug: "njs2-chat-plugin",
        highlightDescription: "Built a reusable chat plugin with the NJS2 framework.",
        description:
          "Developed a robust chat plugin as part of a team working on the NJS2 framework. The plugin supports private chat, random chat, and session-based chat functionalities. Worked extensively on translating modules into text files, creating modular and reusable code, and ensuring seamless integration within the framework. Gained valuable experience in modular development and enhancing real-time communication solutions.",
        cardBackgroundColor: "#8A2BE2",
        media: ["pp.png"],
        details: {
          "Technologies Used": "Node.js, NJS2 Framework, JavaScript",
          "Role": "Backend Developer",
          "Duration": "4 months",
          "Collaboration Type": "Team Player (Framework Development)",
        },
        features: [
          "Private chat functionality",
          "Random chat support",
          "Session-based chat management",
          "Reusable and modular plugin design",
          "Seamless framework integration",
        ],
        highlightFeatures: [
          "Private and random chat capabilities",
          "Session-based chat handling",
          "Modular and reusable design",
        ],
        toolTipText: "Professional Project",
        playable : false
      },
];

export default CONSTANT;
