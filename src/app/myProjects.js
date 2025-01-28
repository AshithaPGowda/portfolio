const CONSTANT = [];

CONSTANT.PROJECTS = [
    {
        title: "XOXO Game",
        slug: 0,
        highlightDescription: "A fun tic-tac-toe game with an AI-powered opponent, playable inside the portfolio.",
        description:
            "Built with React, this tic-tac-toe game features an AI-powered opponent and is fully responsive. It provides a seamless experience for users across devices. This project demonstrates my expertise in creating interactive UIs and integrating AI logic. Designed an optimized AI opponent using minimax algorithm principles, enhancing difficulty for users",
        cardBackgroundColor: "#FFEB3B",
        media: ["/pp.png", "https://via.placeholder.com/200"],
        details: {
            "Technologies Used": "React, JavaScript, HTML, CSS, MinMax(Algo)",
            Role: "Founder & Full Stack Developer",
            Duration: "4 days",
            "Collaboration Type": "Sole Contributor",
        },
        features: ["AI-powered opponent (no multiplayer)", "Responsive design for all devices", "Playable inside portfolio"],
        highlightFeatures: ["AI opponent logic", "Responsive gameplay", "Fully integrated within the portfolio."],
        toolTipText: "Personal Project",
        textContent: `
As I was building the AI-driven tic-tac-toe game, I faced a few key challenges that pushed me to think outside the box and create something more engaging for the user.

**1. Balancing AI Difficulty:\n
One of the biggest hurdles was making the AI challenging enough for users without making it feel unbeatable. Traditional minimax algorithms, while powerful, tend to make AI decisions predictable, which can lead to a boring experience for the player. To solve this, I introduced a unique feature called Humanize.

**2. Humanize the AI: \n
The goal of the Humanize feature was to add an element of randomness to the AI's decision-making, giving it a more "human" feel. Instead of always playing the most optimal move, the AI sometimes chooses a move from a set of equally good options. This creates a more unpredictable game, making it feel less mechanical and more dynamic.

While Humanize was designed to make the game feel more natural, I also ensured that it never made the AI deliberately throw the game away. The AI still plays strategically, ensuring the user has a challenge but doesn't feel like the AI is “playing badly” just to give them a win.

**3. Maintaining Fairness:\n
Even with the randomization introduced in the Humanize feature, I had to ensure that the AI doesn't make moves that would lead to a guaranteed loss. So, I built a logic that checks if the human player is about to win and adjusts the AI's decision-making accordingly, maintaining the competitive balance.

**4. User Experience and Accessibility:\n
Ensuring that the game is fun and easy to interact with was a constant challenge. I paid close attention to how the game's interface would work across devices, making sure the board was responsive and intuitive. Whether you're playing on mobile or desktop, the experience is smooth, and the game feels like it's been designed with your enjoyment in mind.

**Conclusion:\n
Building a smarter AI for a game like tic-tac-toe involves much more than just implementing an algorithm. It's about balancing challenge, randomness, and fairness to create a game that feels both fun and competitive. The Humanize feature was my way of making sure that the game didn't just become a mechanical, predictable experience but instead something that felt more alive and engaging.
          `,
        playable: true,
        challenge: "Making the Game Smarter and More Engaging"
    },
    {
        title: "cnotes.in",
        slug: 1,
        highlightDescription:
            "A platform designed to streamline cable TV subscriber management and prevent payment leakages.",
        description:
            "cnotes.in is a cable TV management platform I developed to address payment leakages and streamline subscriber management. Key features include automated billing, SMS receipts, and efficient collection tracking. Built using PHP and MySQL, it ensures reliability and scalability for business needs.",
        cardBackgroundColor: "#4169E1",
        media: ["/cnotes/home.png", "/cnotes/login.png"],
        details: {
            "Technologies Used": "PHP, Argon CDN, MySQL, Git",
            Role: "Founder and Full Stack Developer",
            Duration: "Ongoing",
            "Collaboration Type": "Sole Contributor",
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
        playable: false,
        textContent: `

**1. Efficient Collection Management:\n
Managing customer subscriptions and payments has never been easier. cnotes.in automates the collection process, reducing the chances of human error and ensuring timely transactions. The system tracks payments in real-time and generates reports for easy reconciliation.

**2. SMS Receipts for Customers:\n
To enhance customer experience and transparency, the platform generates SMS receipts for every transaction. This ensures that customers receive immediate confirmation of their payments and a record for their reference.

**3. Automated Billing and Customer Management:\n
With cnotes.in's automated billing system, cable TV providers can easily issue monthly bills, track overdue payments, and send reminders to customers. This helps reduce manual intervention and improves operational efficiency.

**4. Last-Mile Payment Leakage Prevention:\n
One of the biggest issues in the cable TV business is last-mile payment leakage, where payments get lost due to inefficient processes. cnotes.in addresses this by creating a transparent and automated payment flow that minimizes the risk of lost payments, ensuring that service providers get paid accurately and on time.

**Impact:\n
The platform currently manages over 30,000 customer records and automates monthly predictions for improved financial planning. The prediction driven system helps anticipate payment trends, enabling proactive decision-making.`,
challenge : "Revolutionizing Cable TV Subscriber Management"
    },
    {
        title: "Dear",
        slug: 2,
        highlightDescription: "A personalized voice assistant to simulate memory conversations for Alzheimer's patients.",
        description:
            "Dear is a personalized voice assistant designed to simulate phone conversations with Alzheimer's patients. By deep cloning a family member's voice using Cartesia and integrating VAPI to trigger phone calls, Dear continues the conversation with AI-driven models to assist in simulating memory. It serves as a memory trigger, providing comfort and interaction for those suffering from Alzheimer's. The project aims to help simulate interactions and support the memory recovery process.",
        cardBackgroundColor: "#3F51B5",
        media: [],
        details: {
            "Technologies Used": "Cartesia, VAPI, AI Models, Next.js",
            Role: "Team Lead & Full Stack Developer",
            Duration: "36 hours",
            "Collaboration Type": "Team Contribution",
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
        playable: false,
        textContent:`

**1. Personalized Voice Simulation:\n
One of the major hurdles was ensuring the voice assistant didn't sound robotic or distant. Alzheimer's patients need more than a technical solution; they need emotional engagement. To tackle this, We used Cartesia's voice cloning technology to replicate family members' voices, creating a personalized touch that felt comforting and familiar. The challenge was ensuring the voice felt authentic enough to evoke positive emotions and trigger memories.

**2. Real-Time Conversations:\n
Dear is designed to initiate and maintain real-time phone calls between the patient and their family members. These calls serve as a simulation of memory, helping patients feel connected while also encouraging cognitive engagement.

**3. AI-Powered Memory Simulation:\n
The AI had to handle real-time conversations and understand the emotional context of each interaction. Alzheimer's patients often experience emotional shifts, and the assistant needed to react empathetically. We incorporated VAPI to enable the assistant to recognize emotional cues in speech and adjust its responses accordingly. This made conversations feel more human-like and relevant to the patient's current emotional state.

**4. Continuous AI-Driven Learning:\n
The voice assistant is not static. It constantly learns from interactions to better understand the patient’s responses and needs. This allows the system to adapt, ensuring that each conversation is tailored to the patient’s current state and providing a more natural flow of dialogue.

**Impact:\n
Dear provides a much-needed solution for families of Alzheimer's patients, offering a way for them to remain connected even when direct human interaction is difficult. By facilitating memory simulations and meaningful conversations, the project not only improves the patient's quality of life but also alleviates the emotional burden on caregivers and family members.`,
challenge:"Creating an Emotionally Engaging Experience"
    },
    {
        title: "Clue Crafters",
        slug: 3,
        highlightDescription: "A 6-player multiplayer game built with Socket.IO and Express for real-time gameplay.",
        description:
            "As the team lead for Clue Crafters, I developed a real-time multiplayer board game based on the classic Clue. Leveraging Socket.IO for real-time gameplay and Next.js for a dynamic UI, I handled both backend and frontend development. The project showcases my ability to build complex, interactive applications.",
        cardBackgroundColor: "#6D4C41",
        media: ["/clueCrafters/gameboard.png", "/clueCrafters/gameStart.png", "/clueCrafters/suggestion.png"],
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
        playable: false,
    },
    {
        title: "Inveniam.io",
        slug: 4,
        highlightDescription: "Contributed to a data platform improving liquidity for private market assets.",
        description:
            "At Inveniam.io, I worked as a backend developer contributing to a data operating platform aimed at improving liquidity in private market assets like private equity and commercial real estate. My responsibilities included maintaining data security, resolving critical support tickets, and implementing CQRS-based design patterns to ensure data consistency and scalability. Collaborating closely with the team, I played a role in streamlining backend services to enhance the platform’s performance and user experience.",
        cardBackgroundColor: "#8BC34A",
        media: [],
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
        playable: false,
    },
    {
        title: "Patent Verification System",
        slug: 5,
        highlightDescription: "A secure blockchain-based platform for verifying patents.",
        description:
            "A blockchain-based platform designed to securely verify and store patent-related data. The system leverages smart contracts to automate verification and enhance transparency in the patent validation process. It ensures tamper-proof data integrity and provides a user-friendly interface for researchers and patent officers. Deployed blockchain nodes to simulate secure patent transactions, ensuring tamper-proof data.",
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
        playable: false,
    },
    {
        title: "Snake and Ladder",
        slug: 6,
        highlightDescription: "A classic Snake and Ladder game revamped for multiplayer fun.",
        description:
            "A reimagined version of the traditional Snake and Ladder board game, built as a multiplayer online experience. The game leverages Socket.IO for real-time communication, enabling players to connect and enjoy the game together seamlessly. It features an engaging user interface with interactive animations that bring the classic game to life. This project holds special significance as it was the first game I ever created, sparking my passion for Node.js, Express.js, and software development in general.",
        cardBackgroundColor: "#FFA07A", // Warm and playful tone
        media: [],
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
        playable: false,
    },
    {
        title: "NJS2 Chat Plugin",
        slug: 7,
        highlightDescription: "Built a reusable chat plugin with the NJS2 framework.",
        description:
            "Developed a robust chat plugin as part of a team working on the NJS2 framework. The plugin supports private chat, random chat, and session-based chat functionalities. Worked extensively on translating modules into text files, creating modular and reusable code, and ensuring seamless integration within the framework. Gained valuable experience in modular development and enhancing real-time communication solutions.",
        cardBackgroundColor: "#8A2BE2",
        media: [],
        details: {
            "Technologies Used": "Node.js, NJS2 Framework, JavaScript",
            Role: "Backend Developer",
            Duration: "4 months",
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
        playable: false,
    },
];

export default CONSTANT;
