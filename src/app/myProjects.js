const CONSTANT = [];

CONSTANT.PROJECTS = [
    {
        title: "XOXO GAME",
        slug: 0,
        featured: false,
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
        challenge: "Making the Game Smarter and More Engaging",
        link: null,
    },
    {
        title: "CNOTES.IN",
        slug: 1,
        featured: true,
        highlightDescription:
            "A platform designed to streamline cable TV subscriber management and prevent payment leakages.",
        description:
            "cnotes.in is a cable TV management platform I developed to address payment leakages and streamline subscriber management. Key features include automated billing, SMS receipts, and efficient collection tracking. Built using PHP and MySQL, it ensures reliability and scalability for business needs.",
        cardBackgroundColor: "#4169E1",
        media: ["/cnotes/login.png", "/cnotes/home.png"],
        details: {
            "Technologies Used": "PHP, Argon CDN, MySQL, Git",
            Role: "Founder & Full Stack Developer",
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
        challenge: "Revolutionizing Cable TV Subscriber Management",
        link: { url: "https://www.cnotes.in", label: "Website" },
    },
    {
        title: "DEAR",
        slug: 2,
        featured: false, // <-- NEW FEATURE FLAG
        highlightDescription: "Deeply personalized voice AI that simulates real conversations, helping memory-loss patients stay connected with loved ones.",
        description:
            "Dear is a personalized voice assistant designed to help individuals experiencing memory loss maintain familiarity with loved ones' voices. It simulates real phone conversations using advanced voice cloning and conversational AI models, providing comfort and cognitive support to users. The solution is built on modular backend services, real-time transcription, memory parsing, and retrieval-augmented dialogue generation, making it scalable and production-ready.",
        cardBackgroundColor: "#e59dcfff",
        media: ["dear/list.png", "dear/recorder.png", "dear/recording.png"],
        details: {
            "Technologies Used": "Node.js, FastAPI, Whisper, ChromaDB, Redis, Next.js",
            Role: "Founder, Team Lead & Full Stack Developer",
            Duration: "Ongoing",
            "Collaboration Type": "Individual",
            "Project Type": "Personal Project",
        },
        features: [
            "Real phone conversations using AI and voice cloning",
            "Deeply personalized voice simulations",
            "Modular microservices architecture for scalability",
            "Real-time audio transcription and memory parsing",
            "Retrieval-augmented conversation generation",
        ],
        highlightFeatures: [
            "Deep voice cloning with Cartesia",
            "Production-ready multi-service backend",
            "AI-powered, emotionally adaptive conversations",
        ],
        toolTipText: "Personal Project",
        playable: false,
        challenge: "Building an emotionally engaging, scalable voice AI system",
        textContent: `**1. Evolution from Prototype to Production:**\n
Dear started as a 36-hour hackathon prototype and evolved into a full-scale, modular backend system. We transitioned from a simple conversational agent to a microservices architecture that supports large-scale, reliable deployment with real-time transcription and conversation orchestration.

**2. Deeply Personalized Voice Cloning:**\n
Using Cartesia's voice cloning technology, Dear replicates family members' voices with high fidelity. This personalized touch creates a comforting and familiar experience for memory loss patients, making interactions emotionally meaningful.

**3. Real-Time Conversational AI:**\n
Dear supports real-time phone conversations, using Whisper for speech-to-text and LLM-driven agents for response generation. The system retrieves context-aware memories from ChromaDB, enabling coherent and personalized dialogue.

**4. Modular, Scalable Architecture:**\n
Built with Dockerized services (Node.js gateway, FastAPI conversation engine, Whisper STT service, ChromaDB memory store), Dear is designed for scalability and minimal refactoring for production environments.

**5. Impact:**\n
Dear aims to assist 55M+ individuals living with memory loss by enabling 3–4 loved ones per patient to stay connected. The solution focuses on maintaining voice familiarity, providing comfort, and easing cognitive strain on both patients and families.

**Future Plans:**\n
- Adding 'Memories' section for enriching context
- Enhanced retrieval-augmented generation
- MIT Solve and YC-backed product roadmap
    `,
        link: null,
    },
    {
        title: "CLUE CRAFTERS",
        slug: 3,
        featured: false,
        highlightDescription: "A 6-player multiplayer game built with Socket.IO and Express for real-time gameplay.",
        description:
            "As the team lead for Clue Crafters, I developed a real-time multiplayer board game based on the classic Clue. Leveraging Socket.IO for real-time gameplay and Next.js for a dynamic UI, I handled both backend and frontend development. The project showcases my ability to build complex, interactive applications.",
        cardBackgroundColor: "#6D4C41",
        media: ["/clueCrafters/gameboard.png", "/clueCrafters/gameStart.png", "/clueCrafters/suggestion.png"],
        details: {
            "Technologies Used": "Socket.IO, Express, Next.js, JavaScript, HTML, CSS",
            Role: "Team Lead & Full Stack Developer",
            Duration: "6 months",
            "Collaboration Type": "Team Contribution",
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
        challenge: "Reimagining the Classic Murder Mystery Game",
        textContent: `

**1. Transitioning from Physical to Digital Gameplay:\n
The first challenge was keeping the traditional Clue game experience intact while moving it online. Players had to feel like they were still immersed in a classic Clue environment, but with the added benefit of multiplayer functionality and faster-paced gameplay. By ensuring the rules stayed true, I managed to create a digital version that still kept the mystery and excitement intact.

**2. Adapting the Movement System:\n
In the physical version, players roll dice to move across the board, navigating rooms one by one. In Clue Crafters, I needed to address this challenge by redesigning the movement system so that all rooms are just one hallway away, removing the need for dice rolls. This meant that the focus shifted more to strategy and decision-making, allowing for a smoother and quicker game flow without losing the core gameplay.

**3. Online Multiplayer Dynamics:\n
Managing multiplayer functionality with up to 6 players meant ensuring a smooth and seamless online experience. I had to develop the backend and frontend architecture to handle real-time interactions and keep track of game progress efficiently. The challenge was ensuring that players from different locations could experience the game without any lag or interruptions, making the game feel as interactive and dynamic as the traditional board game.

**4. User Experience and Accessibility:\n
As with all my projects, a huge focus was on user experience and accessibility. I wanted Clue Crafters to be easy for anyone to pick up and play, regardless of their technical expertise. With a simple, intuitive interface and clear instructions, players can jump into the game and start playing without hassle.

**Conclusion:\n
Clue Crafters was an exciting project that combined my passion for traditional games with my skills in full-stack development. It was about taking a well-loved classic and making it accessible to a new generation of players, all while keeping the core of the game intact. The challenge of adapting the physical gameplay and making it work seamlessly online was an invaluable experience in balancing the old with the new.`,
        link: null,
    },
    {
        title: "INVENIAM.IO",
        slug: 4,
        featured: false,
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
        link: null,
    },
    // {
    //     title: "PATENT VERIFICATION SYSTEM",
    //     slug: 5,
    //     featured: false,
    //     highlightDescription: "A secure blockchain-based platform for verifying patents.",
    //     description:
    //         "A blockchain-based platform designed to securely verify and store patent-related data. The system leverages smart contracts to automate verification and enhance transparency in the patent validation process. It ensures tamper-proof data integrity and provides a user-friendly interface for researchers and patent officers. Deployed blockchain nodes to simulate secure patent transactions, ensuring tamper-proof data.",
    //     cardBackgroundColor: "#607D8B", // Neutral tone
    //     media: [],
    //     details: {
    //         "Technologies Used": "Next.js, Ethereum, Smart Contracts, Solidity, Web3.js",
    //         Role: "Full Stack Developer",
    //         Duration: "4 months",
    //         "Collaboration Type": "Team Lead",
    //         "Project Type": "Academic Project",
    //     },
    //     features: [
    //         "Blockchain-based data storage",
    //         "Smart contract automation for patent verification",
    //         "User-friendly interface for secure uploads",
    //         "Tamper-proof patent verification records",
    //     ],
    //     highlightFeatures: ["Blockchain-backed security", "Smart contract-based automation", "Patent data integrity"],
    //     toolTipText: "Academic Project",
    //     playable: false,
    //     link: null,
    // },
    // {
    //     title: "SNAKE AND LADDER",
    //     slug: 6,
    //     featured: false,
    //     highlightDescription: "A classic Snake and Ladder game revamped for multiplayer fun.",
    //     description:
    //         "A reimagined version of the traditional Snake and Ladder board game, built as a multiplayer online experience. The game leverages Socket.IO for real-time communication, enabling players to connect and enjoy the game together seamlessly. It features an engaging user interface with interactive animations that bring the classic game to life. This project holds special significance as it was the first game I ever created, sparking my passion for Node.js, Express.js, and software development in general.",
    //     cardBackgroundColor: "#FFA07A", // Warm and playful tone
    //     media: [],
    //     details: {
    //         "Technologies Used": "Socket.IO, Node.js, Express.js, JavaScript, HTML, CSS",
    //         Role: "Full Stack Developer",
    //         Duration: "3 months",
    //         "Collaboration Type": "Individual Contributor",
    //         "Project Type": "Professional Project",
    //     },
    //     features: [
    //         "Real-time multiplayer gameplay",
    //         "Interactive UI with animated dice rolls",
    //         "Customizable player avatars",
    //         "Game state persistence for reconnections",
    //     ],
    //     highlightFeatures: [
    //         "Real-time multiplayer support",
    //         "Interactive animations",
    //         "Classic game experience with a modern touch",
    //     ],
    //     toolTipText: "Professional Project",
    //     playable: false,
    //     link: null,
    // },
    {
        title: "NJS2 CHAT PLUGIN",
        slug: 7,
        featured: false,
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
        link: null,
    },
    {
    title: "Schema Driven LLM Extractor",
    slug: 8,
    featured: true,
    highlightDescription:
        "Layout-driven LLM pipeline extracting structured healthcare policy data from complex Medicaid waiver PDFs.",
    description:
        "A research-grade document intelligence pipeline built at Johns Hopkins University to extract structured data from 1915(c) and 1115 Medicaid waiver PDFs. The system combines layout-aware parsing, LLM prompting, validation workflows, and structured output generation to support real healthcare policy analysis at scale.",
    cardBackgroundColor: "#0B3D91",
    media: [],
    details: {
        "Technologies Used": "Python, Gemini, Claude, Redis, ChromaDB, Layout Parsing",
        Role: "Graduate Research Assistant",
        Duration: "2025",
        "Collaboration Type": "Research Team (JHU)",
        "Project Type": "Healthcare AI Research",
    },
    features: [
        "Extraction of 70+ structured healthcare fields",
        "Layout-aware PDF parsing with validation pipeline",
        "LLM prompt + fine-tuned extraction modes",
        "Structured dataset generation for policy analysis",
    ],
    highlightFeatures: [
        "Healthcare-grade document intelligence",
        "LLM + layout hybrid extraction",
        "Real research deployment at JHU",
    ],
    toolTipText: "Research Project",
    playable: false,
    challenge: "Turning unstructured healthcare PDFs into reliable structured data",
    textContent: `

**Problem:**\n
Medicaid waiver documents are long, inconsistent, and difficult to analyze programmatically.

**Solution:**\n
Designed a layout-driven LLM extraction pipeline that converts complex PDFs into structured healthcare datasets.

**Key Engineering Work:**\n
- Built hybrid extraction using layout parsing + LLM reasoning  
- Added validation layers to ensure field-level accuracy  
- Supported multiple extraction modes (prompt-based vs tuned)  
- Generated structured outputs for downstream healthcare analysis  

**Impact:**\n 
Enabled scalable analysis of U.S. Medicaid waiver policies, transforming previously manual research into automated structured data workflows.`,
    link: { url: "https://github.com/AshithaPGowda/schema-driven-document-extraction", label: "GitHub" },
},
{
    title: "NARA IMAGE SCRAPER",
    slug: 9,
    featured: true,
    highlightDescription:
        "Production-style archival image extraction tool with rate limiting, Redis caching, and automated cleanup.",
    description:
        "An open-source backend system for extracting high-resolution historical images from U.S. National Archives catalog pages. Built with a production mindset, the tool includes rate limiting, Redis-backed job handling, background cleanup, and structured export pipelines for ZIP and PDF generation.",
    cardBackgroundColor: "#1E1E1E",
    media: [],
    details: {
        "Technologies Used": "Python, Flask, Redis, Docker, Rate Limiting, Background Jobs",
        Role: "Backend Engineer & Open-Source Author",
        Duration: "1 Day",
        "Collaboration Type": "Individual",
        "Project Type": "Open Source Backend Tool",
    },
    features: [
        "Bulk archival image extraction from NARA catalog",
        "Redis-based job tracking and rate limiting",
        "Automatic cleanup of expired jobs and files",
        "ZIP and PDF export generation pipeline",
        "Dockerized reproducible local deployment",
    ],
    highlightFeatures: [
        "Production-style backend safeguards",
        "Rate limiting + Redis job lifecycle",
        "Open-source research utility",
    ],
    toolTipText: "Open Source Project",
    playable: false,
    challenge: "Designing a safe, scalable scraper for large public archives",
    textContent: `

**Goal:**\n 
Create a reliable, research-friendly way to download large archival image collections.

**Backend Engineering Highlights:**\n
- Implemented request rate limiting to prevent abuse  
- Used Redis for job lifecycle tracking and concurrency safety  
- Added automatic cleanup of expired jobs and temporary files  
- Designed export pipeline for structured ZIP/PDF outputs  
- Packaged full system with Docker for reproducibility  

**Result:**\n  
A production-minded open-source backend tool that turns manual archival collection into a fast, automated workflow.`,
    link: { url: "https://github.com/AshithaPGowda/nara-image-scraper", label: "GitHub" },
}


];

export default CONSTANT;
