export type Lang = "en" | "id";
export type ProjectCategory = "all" | "iot" | "web" | "software";

export interface ProfileConfig {
  name: string;
  email: string;
  cvPath: string;
  linkedin: string;
  github: string;
  instagram: string;
}

export interface ProjectExtraLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  category: Exclude<ProjectCategory, "all">;
  badge: string;
  title: string;
  summary: string;
  impactHighlight: string;
  description: string;
  techStack: string[];
  role: string[];
  img: string;
  demo?: string;
  github?: string;
  pdf?: string;
  video?: string;
  report?: string;
  extraLinks?: ProjectExtraLink[];
}

export interface ProcessStep {
  num: string;
  title: string;
  body: string;
  question: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
  isCurrent?: boolean;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  period: string;
  description: string;
  img: string;
  certificate: string;
  report?: string;
}

export interface PortfolioCopy {
  meta: { title: string; description: string };
  nav: {
    brandSub: string;
    work: string;
    process: string;
    about: string;
    experience: string;
    certificates: string;
    resume: string;
    contact: string;
    menuLabel: string;
  };
  hero: {
    line1: string;
    rotatingWords: string[];
    line3: string;
    introPrefix: string;
    introBold: string;
    introSuffix: string;
    ctaPrimary: string;
    ctaSecondary: string;
    polaroidTape: string;
    polaroidCaption: string;
    photoAlt: string;
  };
  work: {
    heading: string;
    annotation: string;
    filters: { id: ProjectCategory; label: string }[];
    storyBtn: string;
    liveDemo: string;
    viewCode: string;
    thesisPdf: string;
    demoVideo: string;
    viewReport: string;
    showMore: string;
    showLess: string;
    modalLabels: {
      overview: string;
      techStack: string;
      myRole: string;
      close: string;
    };
    capstone: ProjectItem;
    items: ProjectItem[];
  };
  process: {
    heading: string;
    annotation: string;
    steps: ProcessStep[];
  };
  about: {
    heading: string;
    annotation: string;
    lead: string;
    paragraphs: string[];
    targetRolesLabel: string;
    targetRoles: string[];
    educationLabel: string;
    education: {
      degree: string;
      institution: string;
      period: string;
      faculty: string;
      summary: string;
    };
  };
  skills: {
    heading: string;
    subtitle: string;
    groups: SkillGroup[];
  };
  experience: {
    heading: string;
    annotation: string;
    items: ExperienceItem[];
  };
  certificates: {
    heading: string;
    subtitle: string;
    viewCert: string;
    viewReport: string;
    items: CertificateItem[];
  };
  contact: {
    thoughtBubble: string;
    line1Prefix: string;
    rotatingWords: string[];
    line2: string;
    findMe: string;
    emailLabel: string;
    copyBtn: string;
    copiedBtn: string;
    downloadCv: string;
    cvNotice: string;
    copyright: string;
    footerNote: string;
  };
}

export const PROFILE_CONFIG: ProfileConfig = {
  name: "Alysa Milano",
  email: "alysamilanohanel@gmail.com",
  cvPath: "/cv/CV_Alysa_Milano.pdf",
  linkedin: "https://www.linkedin.com/in/alysamilano",
  github: "https://github.com/alysahanel",
  instagram:
    "https://www.instagram.com/alysamila_?igsh=ZjlkeXF1eTJ4aGxy&utm_source=ig_contact_invite",
};

export const PORTFOLIO_CONTENT: Record<Lang, PortfolioCopy> = {
  en: {
    meta: {
      title: "Alysa Milano | Personal Portfolio",
      description:
        "Personal portfolio of Alysa Milano, President University Informatics graduate open to Business Operations, Administration, Project Coordination, Business Analysis, Management Trainee, and IT/IoT roles.",
    },
    nav: {
      brandSub: "structured · curious · adaptable",
      work: "Projects",
      process: "How I work",
      about: "About",
      experience: "Experience",
      certificates: "Certificates",
      resume: "Download CV",
      contact: "Contact",
      menuLabel: "Toggle navigation menu",
    },
    hero: {
      line1: "I build",
      rotatingWords: ["systems", "workflows", "solutions"],
      line3: "people can rely on",
      introPrefix: "I'm Alysa Milano, ",
      introBold:
        "an Informatics graduate from President University who organizes complexity into clear, practical action.",
      introSuffix:
        " Open to Internship and Full-Time roles across Business Operations, Project Coordination, Analysis, Management Trainee, and IT/IoT.",
      ctaPrimary: "See the work",
      ctaSecondary: "Download CV",
      polaroidTape: "open to work",
      polaroidCaption: "curious mind, calm execution",
      photoAlt: "Portrait of Alysa Milano",
    },
    work: {
      heading: "Selected work",
      annotation: "real projects from campus to industry",
      filters: [
        { id: "all", label: "All Projects" },
        { id: "iot", label: "IoT & Hardware" },
        { id: "web", label: "Web Applications" },
        { id: "software", label: "Core Programming" },
      ],
      storyBtn: "See the full story",
      liveDemo: "Live demo",
      viewCode: "View code",
      thesisPdf: "Read thesis PDF",
      demoVideo: "Watch demo video",
      viewReport: "View report",
      showMore: "Show more",
      showLess: "Show less",
      modalLabels: {
        overview: "Project overview",
        techStack: "Tools & technologies",
        myRole: "My role & contributions",
        close: "Close project details",
      },
      capstone: {
        id: "capstone-lpr-rfid",
        category: "iot",
        badge: "PT. NESINAK INDUSTRIES · UNDERGRADUATE THESIS",
        title: "Automated Gate Access Control System Using LPR & RFID",
        summary:
          "Manual factory gate checks slowed down peak-hour vehicle shifts. I built the decoupled RFID fallback subsystem, resolved MQTT hardware bottlenecks, and independently engineered a standalone guest-card dispenser.",
        impactHighlight:
          "Passed all 6 UAT categories signed off by PT. Nesinak Industries IT Senior Supervisor.",
        description:
          "Developed for PT. Nesinak Industries to replace manual gate verification during peak factory shifts. Vehicles are identified primarily via camera-based LPR (Roboflow, OpenCV, EasyOCR), with an automatic RFID fallback triggered after two failed plate reads. All entry and exit decisions are verified against a centralized MySQL database, logged in real time, and validated through User Acceptance Testing.",
        techStack: [
          "ESP32",
          "Arduino Uno",
          "MFRC522 RFID",
          "MQTT (EMQX)",
          "Python",
          "MySQL 8",
          "OpenCV & EasyOCR",
          "PHP CodeIgniter 3",
          "L298N & TCS3200",
        ],
        role: [
          "Owned the decoupled RFID Authentication Module end-to-end: RC522-to-ESP32-S hardware circuit, SPI UID firmware (2000ms anti-duplicate cooldown, MQTT pub/sub), and Python backend verification against MySQL.",
          "Diagnosed and resolved a critical servo non-response bug caused by PubSubClient's 256-byte MQTT buffer limit by splitting slim gate-control payloads from full dashboard telemetry.",
          "Implemented the automatic RFID-fallback trigger after two failed LPR scans and added MySQL reconnect with fail-secure denial handling.",
          "Independently designed, built, and bench-tested a standalone Automatic Card Dispensing Machine (Arduino Uno, dual DC motors via L298N, TCS3200 optical card-presence sensor calibrated at 60us, and 2-LED status indicators).",
        ],
        img: "/capstone.jpg",
        pdf: "/Capstone.pdf",
        video:
          "https://drive.google.com/file/d/1s25CFquc9u6HEJPA7HKNLdch1xUAPsyh/view?usp=drive_link",
      },
      items: [
        {
          id: "mobile-robot",
          category: "iot",
          badge: "ROBOTICS · HARDWARE PROTOTYPE",
          title: "Autonomous Mobile Robot",
          summary:
            "Arduino-controlled mobile robot engineered for autonomous navigation and obstacle avoidance using ultrasonic distance sensors.",
          impactHighlight:
            "Combined autonomous obstacle avoidance with modular joystick and parking sensor modes.",
          description:
            "A hardware robotics project exploring autonomous navigation and obstacle avoidance using ultrasonic distance sensors, motor control, and modular Arduino firmware for joystick control and parking assistance.",
          techStack: ["Arduino", "C / C++", "Ultrasonic Sensors", "Motor Drivers"],
          role: [
            "Assembled the robot chassis, ultrasonic sensor array, and motor controller wiring.",
            "Programmed obstacle avoidance logic, parking sensor feedback, and manual joystick control modes.",
          ],
          img: "/robotic.jpeg",
          extraLinks: [
            {
              label: "Robot Car Code",
              url: "https://github.com/search?q=owner%3Aalysahanel+car&type=repositories",
            },
            {
              label: "Joystick Code",
              url: "https://github.com/search?q=owner%3Aalysahanel+joystick&type=repositories",
            },
            {
              label: "Parking Sensor",
              url: "https://github.com/search?q=owner%3Aalysahanel+parking+sensor&type=repositories",
            },
          ],
        },
        {
          id: "fishery-iot",
          category: "iot",
          badge: "BRIN RESEARCH · SMART AQUACULTURE",
          title: "Autonomous Fishery Monitoring System (BRIN)",
          summary:
            "Automated water quality monitoring and relay control prototype built during research at the National Research and Innovation Agency (BRIN).",
          impactHighlight:
            "Connected DS18B20 sensing, RTC scheduling, and relay actuation to a live monitoring backend.",
          description:
            "An autonomous monitoring and control system for the agriculture and fisheries sector using DS18B20 temperature sensors, real-time clock (RTC) scheduling, EEPROM data persistence, and relay actuation connected to a Node.js backend.",
          techStack: [
            "Arduino / ESP32",
            "DS18B20",
            "RTC & EEPROM",
            "Relay Control",
            "Node.js",
          ],
          role: [
            "Integrated DS18B20 temperature sensing, RTC timing, EEPROM storage, and automated relay triggers.",
            "Connected hardware telemetry to a Node.js backend for monitoring and documented findings in the final BRIN report.",
          ],
          img: "/fishery.jpeg",
          report: "/Fishery_Report.pdf",
          extraLinks: [
            {
              label: "Fishery Repos",
              url: "https://github.com/alysahanel?tab=repositories&q=fishery+brin",
            },
            {
              label: "DS18B20 Code",
              url: "https://github.com/search?q=owner%3Aalysahanel+ds18b20&type=repositories",
            },
            {
              label: "RTC & EEPROM",
              url: "https://github.com/search?q=owner%3Aalysahanel+rtc&type=repositories",
            },
          ],
        },
        {
          id: "cashtracking",
          category: "web",
          badge: "FINANCIAL TRACKING · FULL-STACK",
          title: "Cash Tracking App",
          summary:
            "Personal finance web application for recording categorized income and expenses with clear real-time balance summaries.",
          impactHighlight:
            "Includes an interactive live demo pre-seeded with sample financial records.",
          description:
            "A full-stack personal finance tracker featuring session-based user authentication, categorized income/expense logging, transaction history filtering, and real-time balance summaries, adapted for serverless/cloud deployment with SQLite.",
          techStack: ["React.js", "Python", "Flask", "SQLite", "REST API"],
          role: [
            "Built the React single-page frontend for recording and reviewing daily transactions.",
            "Developed the Flask REST API with session authentication and SQLite persistence.",
            "Configured an in-memory demo database mode with pre-seeded data for zero-setup previews.",
          ],
          img: "/cashtrack.webp",
          demo: "/cashtracking/",
          github: "https://github.com/alysahanel/CashTracking",
        },
        {
          id: "compliance",
          category: "web",
          badge: "CORPORATE GOVERNANCE · E-MONITORING",
          title: "Corporate Legal Compliance System",
          summary:
            "Centralized e-monitoring tool for organizing corporate regulations, operational permits, safety standards, and audit reviews.",
          impactHighlight:
            "Streamlines UU, PP, and Perpres tracking with CSV batch import review workflows.",
          description:
            "An integrated legal compliance and document management web application for organizing Indonesian regulatory records (UU, PP, Perpres), departmental permit tracking, compliance status monitoring, and CSV batch import/review workflows.",
          techStack: ["Node.js", "Express", "MySQL", "JavaScript", "CSV Parse"],
          role: [
            "Built the regulatory E-Library and departmental compliance tables (Company, Operational, Safety, License & Permit).",
            "Implemented compliance status tracking (Complied, In Progress, Not Complied) with dynamic filtering.",
            "Added CSV/Excel document import review pipelines and mock database support for demos.",
          ],
          img: "/compliance.jpg",
          demo: "/legal/",
          github: "https://github.com/alysahanel/Compliance-System-Alysa-Milano",
        },
        {
          id: "amms",
          category: "web",
          badge: "OPERATIONS · INVENTORY WORKFLOW",
          title: "AMMS (General Affairs Management System)",
          summary:
            "Operational request and inventory platform with role-based dashboards, approval queues, and low-stock alerts.",
          impactHighlight:
            "Supports Admin, User, and CS workflows with exportable Excel/CSV stock reporting.",
          description:
            "A full-stack General Affairs management system built to streamline internal item requests, departmental stock control, approval workflows, and exportable stock reporting across Admin, User, and CS roles.",
          techStack: ["Node.js", "Express", "MySQL", "Tailwind CSS", "ExcelJS"],
          role: [
            "Designed role-based dashboard workflows for Admin, User, and Customer Service accounts.",
            "Built inventory tracking with automated low-stock status indicators and approval queues.",
            "Implemented dynamic department/user management and Excel/CSV stock report exports.",
          ],
          img: "/manajemen.jpg",
          demo: "/gams/",
          github: "https://github.com/alysahanel/AlysaMilanoManagementSystem",
        },
        {
          id: "healthcare",
          category: "web",
          badge: "PUBLIC HEALTH · INTERACTIVE WEB",
          title: "Healthcare Web Platform",
          summary:
            "Responsive health information portal offering interactive BMI calculation, symptom checking, and diabetes risk assessment.",
          impactHighlight:
            "Fast, zero-dependency interface accessible across desktop and mobile browsers.",
          description:
            "A clean, responsive healthcare service web application built with vanilla web technologies, offering users interactive self-assessment utilities including BMI calculation, basic symptom lookup, and diabetes risk estimation.",
          techStack: ["HTML5", "CSS3", "JavaScript"],
          role: [
            "Designed the responsive layout and navigation structure for desktop and mobile browsers.",
            "Implemented client-side interactive calculators (BMI, Diabetes Risk Assessment, and Symptom Diagnosis).",
          ],
          img: "/healthcare.jpg",
          demo: "/healthcare-web/",
          github: "https://github.com/alysahanel/Healthcare.git",
        },
        {
          id: "java-projects",
          category: "software",
          badge: "CORE SOFTWARE · OOP & SQL",
          title: "Java Applications Collection",
          summary:
            "Desktop applications and backend exercises built around clean object-oriented architecture and relational databases.",
          impactHighlight:
            "Demonstrates modular OOP class design, Swing/JavaFX interfaces, and JDBC CRUD flows.",
          description:
            "A curated set of Java coursework and personal projects demonstrating object-oriented design patterns, desktop GUI development with Swing/JavaFX, and relational database connectivity.",
          techStack: ["Java", "OOP", "Swing / JavaFX", "JDBC & SQL"],
          role: [
            "Designed modular OOP class hierarchies and GUI workflows.",
            "Integrated CRUD operations with relational databases via JDBC.",
          ],
          img: "/java-projects.jpg",
          github:
            "https://github.com/alysahanel?tab=repositories&q=&type=&language=java",
        },
        {
          id: "cpp-projects",
          category: "software",
          badge: "ALGORITHMS · SYSTEM LOGIC",
          title: "C++ Systems & Algorithms",
          summary:
            "Foundational work in data structures, memory management, and structured algorithmic problem solving.",
          impactHighlight:
            "Focused on clean logic, efficiency, and systematic debugging.",
          description:
            "Explorations in low-level programming, core data structures, memory management, and competitive programming exercises written in modern C++.",
          techStack: ["C++", "Data Structures", "Algorithms"],
          role: [
            "Implemented core data structures and algorithmic solutions focusing on time and memory efficiency.",
          ],
          img: "/cpp-projects.jpg",
          github:
            "https://github.com/alysahanel?tab=repositories&q=&type=&language=c%2B%2B",
        },
      ],
    },
    process: {
      heading: "How I work",
      annotation: "the principles behind my work, IT or beyond",
      steps: [
        {
          num: "01",
          title: "Start by listening and clarifying the real need",
          body: "Whether it is an operational bottleneck or a technical brief, I map out the people, constraints, and goals before jumping into execution.",
          question: '"What problem are we actually solving here?"',
        },
        {
          num: "02",
          title: "Break messy problems into clear workflows",
          body: "My Informatics training taught me analytical structure—turning scattered requests, data, or manual routines into organized, trackable steps.",
          question: '"How can this process run more smoothly?"',
        },
        {
          num: "03",
          title: "Communicate clearly across teams",
          body: "Working with supervisors, factory staff, researchers, and teammates taught me to translate details plainly so everyone stays aligned.",
          question: '"Does everyone have what they need to move forward?"',
        },
        {
          num: "04",
          title: "Document, test, and follow through",
          body: "From UAT checklists at PT. Nesinak Industries to research reports at BRIN, I take pride in tidy documentation and verifying that things truly work.",
          question: '"Will this hold up in daily operations?"',
        },
        {
          num: "05",
          title: "Stay adaptable across roles and domains",
          body: "I enjoy stepping into unfamiliar environments—from business acceleration to industrial operations—learning fast and contributing wherever needed.",
          question: '"What can I learn quickly to help the team win?"',
        },
      ],
    },
    about: {
      heading: "About me",
      annotation: "more than a major",
      lead: "Structured thinker who enjoys connecting people, processes, and practical tools.",
      paragraphs: [
        "Although I graduated in Informatics from President University (Faculty of Artificial Intelligence and Smart Manufacturing) I am passionate about not only coding but also about analysing and improving how a business functions so that it is easy, efficient and consistent.",
        "Having completed internships at President University eCampus, Nippon Steel and SetSail BizAccel, and conducted research at BRIN, I have experience of collecting requirements, managing digital training, producing user information, team management and system testing.",
        "I am keen to pursue Internship and/or Full Time roles in any of the following areas: Business Operations, Administration, Project Co-ordination, Business Analysis, Management Trainee and/or IT & IoT.",
      ],
      targetRolesLabel: "Open to opportunities in",
      targetRoles: [
        "Business Operations",
        "Project Coordinator",
        "Business Analyst",
        "Administration",
        "Management Trainee",
        "IT & IoT Systems",
      ],
      educationLabel: "Education",
      education: {
        degree: "B.Sc. in Informatics (S.Kom.)",
        institution: "President University",
        period: "Sep 2023 - Dec 2026",
        faculty: "Faculty of Artificial Intelligence and Smart Manufacturing",
        summary:
          "GPA 3.88/4.0 · Jababeka Scholarship (2nd Rank). Strong foundation in systems thinking, structured analysis, project planning, and technical reporting.",
      },
    },
    skills: {
      heading: "Skills & capabilities",
      subtitle:
        "Blending cross-functional business strengths with practical technical fluency",
      groups: [
        {
          title: "Cross-Functional & Operations",
          items: [
            "Analytical Thinking",
            "Structured Problem Solving",
            "Project Coordination",
            "Requirement Analysis",
            "Documentation & Reporting",
            "Cross-Team Communication",
            "Adaptability",
            "UAT & Process Evaluation",
          ],
        },
        {
          title: "IoT & Embedded Systems",
          items: [
            "ESP32 & Arduino Uno",
            "Raspberry Pi",
            "MFRC522 RFID",
            "Sensors (HC-SR04, DS18B20, TCS3200)",
            "Actuators (Servo, DC Motors, L298N)",
            "Circuit Prototyping & Calibration",
          ],
        },
        {
          title: "Programming & Analytical Tools",
          items: [
            "Python",
            "Java",
            "C / C++",
            "MySQL & SQLite",
            "Excel / CSV Reporting",
            "Digital Learning Platforms & Canva",
            "Git & GitHub",
            "OpenCV & EasyOCR",
            "Proteus & Arduino IDE",
          ],
        },
      ],
    },
    experience: {
      heading: "How I got here",
      annotation: "not just one straight path",
      items: [
        {
          role: "Digital Learning Operations Intern",
          organization: "President University eCampus",
          period: "Mar 2026 - Jun 2026",
          summary:
            "Supported distance learning operations across 15+ courses by structuring modules, reviewing usability, and writing user guides.",
          highlights: [
            "Aligned 15+ online courses and 12+ weekly modules with official RPS standards",
            "Authored 5+ self-service guides for 500+ users, cutting support inquiries by 30%",
          ],
          isCurrent: true,
        },
        {
          role: "Capstone Contributor (Gate Automation)",
          organization: "PT. Nesinak Industries",
          period: "2025 - 2026",
          summary:
            "Partnered with PT. Nesinak Industries to automate factory gate vehicle access and eliminate peak-hour manual bottlenecks.",
          highlights: [
            "Owned RFID authentication module, MQTT debugging, and card dispenser",
            "Passed User Acceptance Testing (6/6 categories) with IT Senior Supervisor",
          ],
        },
        {
          role: "System Development Intern (HRGA & Legal)",
          organization: "PT Nippon Steel Chemical & Material Indonesia",
          period: "Aug 2025 - Dec 2025",
          summary:
            "Supported HRGA and Legal departments by building internal administrative and compliance tracking workflows.",
          highlights: [
            "Digitized General Affairs and regulatory compliance records into structured systems",
            "Conducted testing, troubleshooting, and documentation for deployment readiness",
          ],
        },
        {
          role: "IoT Research Intern",
          organization: "BRIN (Research Center of Electronics)",
          period: "Apr 2025 - May 2025",
          summary:
            "Planned and delivered a 6-week automated water temperature monitoring module for BRIN's smart aquaculture system.",
          highlights: [
            "Authored proposals, process flowcharts, test logs, and the final research report",
            "Presented weekly evaluations and coordinated cross-module integration",
          ],
        },
        {
          role: "PIC Administration Division",
          organization: "SetSail BizAccel",
          period: "Oct 2024 - May 2025",
          summary:
            "Led administrative operations for university business incubation programs, maintaining structured documentation and daily coordination.",
          highlights: [
            "Oversaw internal workflows across startup workshops and incubation activities",
            "Maintained systematic reporting and clear cross-team communication",
          ],
        },
        {
          role: "Project Manager (Events & Product Launch)",
          organization: "SetSail BizAccel & LightenUp",
          period: "Sep 2024 - Dec 2024",
          summary:
            "Led end-to-end planning, logistics, and cross-functional coordination for startup workshops, seminars, and an app alpha launch.",
          highlights: [
            "Managed Ready SetSail 4 Workshop, Ecoxyztem Seminar, and LightenUp Alpha Launch",
            "Aligned timelines, speaker management, stakeholders, and post-event reporting",
          ],
        },
        {
          role: "Event Secretary & Web Developer Intern",
          organization: "SetSail BizAccel & Earth Day PT Nippon",
          period: "Oct 2023 - Apr 2024",
          summary:
            "Built websites for student business tenants at SetSail and managed administration and correspondence for Earth Day with PT Nippon.",
          highlights: [
            "Collaborated across teams on tenant websites and entrepreneurship event committees",
            "Handled meeting minutes, internal correspondence, and partner coordination",
          ],
        },
        {
          role: "Research Assistant",
          organization: "President Research Center",
          period: "Oct 2023 - Feb 2024",
          summary:
            "Supported multidisciplinary university research through structured data organization, documentation, and analytical reporting.",
          highlights: [
            "Maintained organized research records to improve departmental workflow efficiency",
            "Strengthened analytical problem-solving, documentation, and team communication",
          ],
        },
      ],
    },
    certificates: {
      heading: "Certificates & credentials",
      subtitle: "Verified internships, leadership roles, and achievements",
      viewCert: "View certificate",
      viewReport: "View report",
      items: [
        {
          title: "Nippon Steel Internship",
          issuer: "PT Nippon Steel Chemical & Material Indonesia",
          period: "Aug 2025 - Dec 2025",
          description:
            "Completed internship in the General Affair Division supporting internal administrative and compliance workflows.",
          img: "/certificates/nippon-certificate.png",
          certificate: "/Internship_Certificate.pdf",
        },
        {
          title: "BRIN Research Internship",
          issuer: "National Research and Innovation Agency (BRIN)",
          period: "Apr 2025 - May 2025",
          description:
            "Internship certificate from the Research Center of Electronics BRIN for IoT monitoring and control research.",
          img: "/certificates/Alysa%20Milano%20(%20BRIN%20).jpg",
          certificate: "/certificates/Alysa%20Milano%20(%20BRIN%20).jpg",
          report: "/Fishery_Report.pdf",
        },
        {
          title: "SetSail BizAccel Internship",
          issuer: "SetSail BizAccel, President University",
          period: "Sep 2023 - Apr 2024",
          description:
            "Completed the structured Internship Experience Program supporting business acceleration initiatives.",
          img: "/certificates/Alysa%20Milano%20(%20Setsail%2020232%20).png",
          certificate: "/certificates/Alysa%20Milano%20(%20Setsail%2020232%20).png",
        },
        {
          title: "Volunteer PIC — Administration Division",
          issuer: "SetSail BizAccel, President University",
          period: "Oct 2024 - May 2025",
          description:
            "Recognized for leading administrative operations, creative production, event collaboration, and operational assistance.",
          img: "/certificates/Alysa%20Milano%20(%20PIC).jpg",
          certificate: "/certificates/Alysa%20Milano%20(%20PIC).jpg",
        },
        {
          title: "Interim Deputy Program Manager",
          issuer: "SetSail BizAccel, President University",
          period: "Sep 2024 - Feb 2025",
          description:
            "Certificate of appreciation for dedication and contributions to program execution and management at SetSail.",
          img: "/certificates/Alysa%20Milano%20(%20Interim%20Setsail%20).jpg",
          certificate: "/certificates/Alysa%20Milano%20(%20Interim%20Setsail%20).jpg",
        },
        {
          title: "Research Assistant Internship",
          issuer: "Fablab Jababeka, President University",
          period: "Feb 2024",
          description:
            "Completed a four-month Research Assistant internship supporting research documentation and data organization.",
          img: "/certificates/Alysa%20Milano%20(%20PRC%2020231%20).png",
          certificate: "/certificates/Alysa%20Milano%20(%20PRC%2020231%20).png",
        },
        {
          title: "Project Manager — LightenUp App Alpha Launch",
          issuer: "LightenUp · BRIN · LPDP · President University",
          period: "Dec 2024",
          description:
            "Led committee coordination and execution for the Launching the Alpha Version of the LightenUp App event.",
          img: "/certificates/Alysa%20Milano%20(%20Launching%20LightenUp%20).png",
          certificate: "/certificates/Alysa%20Milano%20(%20Launching%20LightenUp%20).png",
        },
        {
          title: "Project Manager — Ecoxyztem Collaborative Seminar",
          issuer: "SetSail BizAccel · Ecoxyztem Venture Builder",
          period: "Oct 2024",
          description:
            "Managed planning, logistics, and speaker coordination for the International Relations Alumnae Sharing Session.",
          img: "/certificates/Alysa%20Milano%20(%20Ecozystem%20).png",
          certificate: "/certificates/Alysa%20Milano%20(%20Ecozystem%20).png",
        },
        {
          title: "Project Manager — Ready SetSail 4th Batch",
          issuer: "SetSail BizAccel, President University",
          period: "Sep 2024",
          description:
            "Coordinated registration and event execution for the Ready SetSail Business Incubation 4th Batch onboarding.",
          img: "/certificates/Alysa%20Milano%20(%20Ready%20Setsail%204%20).png",
          certificate: "/certificates/Alysa%20Milano%20(%20Ready%20Setsail%204%20).png",
        },
        {
          title: "Secretary — Earth Day Festival 2024",
          issuer: "President University · PT Nippon Steel",
          period: "Apr 2024",
          description:
            "Handled administrative documentation, correspondence, and partner coordination for Earth Day Festival 2024.",
          img: "/certificates/Alysa%20Milano%20(%20Demo%20Day%20).jpg",
          certificate: "/certificates/Alysa%20Milano%20(%20Demo%20Day%20).jpg",
        },
        {
          title: "Quiz Winner — Beranda Sawit Nusantara II",
          issuer: "Indonesian Oil Palm Society (MAKSI) · BPDPKS",
          period: "Aug 2024",
          description:
            "Awarded Winner in the Beranda Sawit Nusantara (BSN) II national quiz held at Menara Batavia, Jakarta.",
          img: "/certificates/Alysa%20Milano%20(%20Palm%20Oil%20).jpg",
          certificate: "/certificates/Alysa%20Milano%20(%20Palm%20Oil%20).jpg",
        },
        {
          title: "Treasurer — Zahirul Ma'ala",
          issuer: "Zahirul Ma'ala, President University",
          period: "Student Organization",
          description:
            "Recognized for dedication, financial administration, and commitment as Treasurer of Zahirul Ma'ala.",
          img: "/certificates/zahirul-maala.png",
          certificate: "/certificates/Alysa%20Milano(%20Trea%20ZahirulMaala%20).pdf",
        },
      ],
    },
    contact: {
      thoughtBubble: "something meaningful",
      line1Prefix: "Let's",
      rotatingWords: ["build", "organize", "solve"],
      line2: "what's next, together.",
      findMe: "Find me",
      emailLabel: "Email",
      copyBtn: "Copy email",
      copiedBtn: "Email copied",
      downloadCv: "Download CV",
      cvNotice:
        "CV file is being finalized. Drop CV_Alysa_Milano.pdf into public/cv/, or reach Alysa via LinkedIn.",
      copyright: "© 2026 Alysa Milano",
      footerNote: "Open for Internship & Full-Time",
    },
  },
  id: {
    meta: {
      title: "Alysa Milano | Portfolio Pribadi",
      description:
        "Portfolio pribadi Alysa Milano, lulusan Informatika President University yang terbuka untuk peluang Business Operations, Administrasi, Project Coordinator, Business Analyst, Management Trainee, dan IT/IoT.",
    },
    nav: {
      brandSub: "terstruktur · ingin tahu · adaptif",
      work: "Proyek",
      process: "Cara Kerja",
      about: "Tentang",
      experience: "Pengalaman",
      certificates: "Sertifikat",
      resume: "Unduh CV",
      contact: "Kontak",
      menuLabel: "Buka menu navigasi",
    },
    hero: {
      line1: "Saya membangun",
      rotatingWords: ["sistem", "alur kerja", "solusi"],
      line3: "yang dapat diandalkan",
      introPrefix: "Saya Alysa Milano, ",
      introBold:
        "lulusan Informatika President University yang terbiasa merapikan masalah kompleks menjadi langkah kerja yang jelas.",
      introSuffix:
        " Terbuka untuk peluang Magang maupun Full-Time di bidang Business Operations, Project Coordinator, Business Analyst, Management Trainee, hingga IT/IoT.",
      ctaPrimary: "Lihat proyek",
      ctaSecondary: "Unduh CV",
      polaroidTape: "siap berkarya",
      polaroidCaption: "ingin tahu, eksekusi tenang",
      photoAlt: "Foto profil Alysa Milano",
    },
    work: {
      heading: "Proyek pilihan",
      annotation: "karya nyata dari kampus hingga industri",
      filters: [
        { id: "all", label: "Semua Proyek" },
        { id: "iot", label: "IoT & Perangkat Keras" },
        { id: "web", label: "Aplikasi Web" },
        { id: "software", label: "Pemrograman Inti" },
      ],
      storyBtn: "Lihat detail proyek",
      liveDemo: "Demo langsung",
      viewCode: "Lihat kode",
      thesisPdf: "Baca laporan PDF",
      demoVideo: "Tonton video demo",
      viewReport: "Lihat laporan",
      showMore: "Tampilkan lebih banyak",
      showLess: "Tampilkan lebih sedikit",
      modalLabels: {
        overview: "Ringkasan proyek",
        techStack: "Alat & teknologi",
        myRole: "Peran & kontribusi saya",
        close: "Tutup detail proyek",
      },
      capstone: {
        id: "capstone-lpr-rfid",
        category: "iot",
        badge: "PT. NESINAK INDUSTRIES · TUGAS AKHIR",
        title: "Automated Gate Access Control System Menggunakan LPR & RFID",
        summary:
          "Pemeriksaan gerbang pabrik secara manual memperlambat arus kendaraan saat jam sibuk. Saya membangun modul cadangan RFID terpisah, memperbaiki kendala MQTT, dan merancang mesin dispenser kartu tamu otomatis.",
        impactHighlight:
          "Lulus seluruh 6 kategori User Acceptance Test (UAT) yang disetujui IT Senior Supervisor PT. Nesinak Industries.",
        description:
          "Dikembangkan untuk PT. Nesinak Industries guna menggantikan verifikasi gerbang manual saat jam sibuk pabrik. Kendaraan dikenali melalui kamera LPR (Roboflow, OpenCV, EasyOCR) dan otomatis beralih ke kartu RFID jika pembacaan plat gagal dua kali berturut-turut. Seluruh keputusan akses diverifikasi terhadap basis data MySQL terpusat dan dicatat secara real-time.",
        techStack: [
          "ESP32",
          "Arduino Uno",
          "MFRC522 RFID",
          "MQTT (EMQX)",
          "Python",
          "MySQL 8",
          "OpenCV & EasyOCR",
          "PHP CodeIgniter 3",
          "L298N & TCS3200",
        ],
        role: [
          "Bertanggung jawab penuh atas Modul Autentikasi RFID terpisah: rangkaian RC522 ke ESP32-S, firmware pembacaan UID via SPI (cooldown 2000ms anti-duplikasi, MQTT pub/sub), dan validasi backend Python ke MySQL.",
          "Mendiagnosis dan memperbaiki bug servo tidak merespons akibat batas buffer 256-byte PubSubClient dengan memisahkan topik MQTT payload ringkas untuk gerbang dan payload lengkap untuk dashboard.",
          "Mengimplementasikan pemicu fallback RFID otomatis setelah dua kali kegagalan LPR serta penanganan error reconnect MySQL yang aman (fail-secure).",
          "Merancang, merakit, dan menguji secara mandiri Mesin Dispenser Kartu Otomatis (Arduino Uno, 2 motor DC via L298N, sensor optik TCS3200 terkalibrasi di 60us, serta indikator status 2-LED).",
        ],
        img: "/capstone.jpg",
        pdf: "/Capstone.pdf",
        video:
          "https://drive.google.com/file/d/1s25CFquc9u6HEJPA7HKNLdch1xUAPsyh/view?usp=drive_link",
      },
      items: [
        {
          id: "mobile-robot",
          category: "iot",
          badge: "ROBOTIKA · PROTOTIPE PERANGKAT KERAS",
          title: "Robot Bergerak Otonom",
          summary:
            "Robot bergerak berbasis Arduino dengan navigasi otonom penghindar rintangan menggunakan sensor jarak ultrasonik.",
          impactHighlight:
            "Menggabungkan logika penghindaran rintangan otomatis dengan mode joystick dan sensor parkir.",
          description:
            "Proyek robotika perangkat keras untuk eksplorasi navigasi otonom dan penghindaran halangan menggunakan sensor jarak ultrasonik, kontrol motor, serta firmware Arduino modular untuk mode joystick dan sensor parkir.",
          techStack: ["Arduino", "C / C++", "Sensor Ultrasonik", "Driver Motor"],
          role: [
            "Merakit rangka robot, rangkaian sensor ultrasonik, dan pengkabelan driver motor.",
            "Memprogram logika penghindaran rintangan, umpan balik sensor parkir, dan kendali joystick manual.",
          ],
          img: "/robotic.jpeg",
          extraLinks: [
            {
              label: "Kode Mobil Robot",
              url: "https://github.com/search?q=owner%3Aalysahanel+car&type=repositories",
            },
            {
              label: "Kode Joystick",
              url: "https://github.com/search?q=owner%3Aalysahanel+joystick&type=repositories",
            },
            {
              label: "Sensor Parkir",
              url: "https://github.com/search?q=owner%3Aalysahanel+parking+sensor&type=repositories",
            },
          ],
        },
        {
          id: "fishery-iot",
          category: "iot",
          badge: "RISET BRIN · PERIKANAN CERDAS",
          title: "Sistem Pemantauan Perikanan Otonom (BRIN)",
          summary:
            "Prototipe pemantauan kualitas air dan kontrol relay otomatis yang dikembangkan selama program riset di BRIN.",
          impactHighlight:
            "Menghubungkan sensor DS18B20, pewaktu RTC, dan aktuasi relay ke backend pemantauan real-time.",
          description:
            "Sistem pemantauan dan kontrol otomatis untuk sektor pertanian dan perikanan menggunakan sensor suhu DS18B20, penjadwalan RTC, penyimpanan EEPROM, serta aktuasi relay yang terhubung ke backend Node.js.",
          techStack: [
            "Arduino / ESP32",
            "DS18B20",
            "RTC & EEPROM",
            "Kontrol Relay",
            "Node.js",
          ],
          role: [
            "Mengintegrasikan sensor suhu DS18B20, pewaktu RTC, memori EEPROM, dan pemicu relay otomatis.",
            "Menghubungkan data perangkat keras ke backend Node.js serta menyusun laporan riset akhir BRIN.",
          ],
          img: "/fishery.jpeg",
          report: "/Fishery_Report.pdf",
          extraLinks: [
            {
              label: "Repo Perikanan",
              url: "https://github.com/alysahanel?tab=repositories&q=fishery+brin",
            },
            {
              label: "Kode DS18B20",
              url: "https://github.com/search?q=owner%3Aalysahanel+ds18b20&type=repositories",
            },
            {
              label: "RTC & EEPROM",
              url: "https://github.com/search?q=owner%3Aalysahanel+rtc&type=repositories",
            },
          ],
        },
        {
          id: "cashtracking",
          category: "web",
          badge: "PENCATATAN KEUANGAN · FULL-STACK",
          title: "Aplikasi Cash Tracking",
          summary:
            "Aplikasi web keuangan pribadi untuk mencatat pemasukan dan pengeluaran berkategori dengan ringkasan saldo real-time.",
          impactHighlight:
            "Dilengkapi demo interaktif yang langsung siap dicoba dengan data transaksi contoh.",
          description:
            "Aplikasi pelacak keuangan pribadi full-stack dengan autentikasi sesi pengguna, pencatatan pemasukan dan pengeluaran berkategori, riwayat transaksi, serta ringkasan saldo yang siap dijalankan di lingkungan cloud dengan SQLite.",
          techStack: ["React.js", "Python", "Flask", "SQLite", "REST API"],
          role: [
            "Membangun antarmuka single-page React untuk mencatat dan memantau transaksi harian.",
            "Mengembangkan REST API Flask dengan autentikasi sesi dan penyimpanan SQLite.",
            "Menyiapkan mode basis data in-memory dengan data demo agar aplikasi langsung dapat dicoba.",
          ],
          img: "/cashtrack.webp",
          demo: "/cashtracking/",
          github: "https://github.com/alysahanel/CashTracking",
        },
        {
          id: "compliance",
          category: "web",
          badge: "TATA KELOLA LEGAL · E-MONITORING",
          title: "Sistem Kepatuhan Legal Perusahaan",
          summary:
            "Platform e-monitoring terpusat untuk mengelola regulasi perusahaan, perizinan operasional, K3, dan peninjauan dokumen.",
          impactHighlight:
            "Memudahkan pemantauan UU, PP, dan Perpres lengkap dengan alur impor CSV.",
          description:
            "Aplikasi manajemen kepatuhan regulasi dan dokumen legal perusahaan untuk mengorganisasi peraturan Indonesia (UU, PP, Perpres), pelacakan izin operasional dan K3, status kepatuhan, serta alur impor CSV.",
          techStack: ["Node.js", "Express", "MySQL", "JavaScript", "CSV Parse"],
          role: [
            "Membangun E-Library regulasi dan tabel kepatuhan lintas departemen (Company, Operational, Safety, License & Permit).",
            "Mengimplementasikan pelacakan status kepatuhan (Complied, In Progress, Not Complied) dengan filter dinamis.",
            "Menambahkan alur peninjauan impor CSV/Excel dan dukungan basis data mock untuk demo.",
          ],
          img: "/compliance.jpg",
          demo: "/legal/",
          github: "https://github.com/alysahanel/Compliance-System-Alysa-Milano",
        },
        {
          id: "amms",
          category: "web",
          badge: "OPERASIONAL · MANAJEMEN INVENTARIS",
          title: "AMMS (General Affairs Management System)",
          summary:
            "Sistem permintaan barang dan inventaris operasional dengan dashboard berbasis peran, alur persetujuan, dan peringatan stok.",
          impactHighlight:
            "Mendukung alur kerja Admin, User, dan CS lengkap dengan ekspor laporan Excel/CSV.",
          description:
            "Aplikasi manajemen General Affairs full-stack untuk mengelola permintaan barang internal, pengendalian stok departemen, alur persetujuan, peringatan stok menipis, serta ekspor laporan stok untuk peran Admin, User, dan CS.",
          techStack: ["Node.js", "Express", "MySQL", "Tailwind CSS", "ExcelJS"],
          role: [
            "Merancang alur dashboard berbasis peran untuk akun Admin, User, dan Customer Service.",
            "Membangun manajemen inventaris lengkap dengan indikator peringatan stok rendah dan antrean persetujuan.",
            "Mengimplementasikan pengelolaan departemen/pengguna serta fitur ekspor laporan Excel/CSV.",
          ],
          img: "/manajemen.jpg",
          demo: "/gams/",
          github: "https://github.com/alysahanel/AlysaMilanoManagementSystem",
        },
        {
          id: "healthcare",
          category: "web",
          badge: "KESEHATAN · WEB INTERAKTIF",
          title: "Platform Web Kesehatan",
          summary:
            "Portal layanan kesehatan responsif dengan kalkulator BMI, cek gejala awal, dan penilaian risiko diabetes.",
          impactHighlight:
            "Antarmuka ringan tanpa ketergantungan yang nyaman diakses dari desktop maupun ponsel.",
          description:
            "Aplikasi web kesehatan responsif yang dibangun menggunakan HTML, CSS, dan JavaScript murni dengan fitur interaktif untuk perhitungan BMI, pemeriksaan gejala awal, serta estimasi risiko diabetes.",
          techStack: ["HTML5", "CSS3", "JavaScript"],
          role: [
            "Merancang tata letak responsif yang nyaman dibaca di perangkat desktop maupun ponsel.",
            "Mengimplementasikan logika interaktif sisi klien untuk kalkulator BMI, Risiko Diabetes, dan Diagnosa Gejala.",
          ],
          img: "/healthcare.jpg",
          demo: "/healthcare-web/",
          github: "https://github.com/alysahanel/Healthcare.git",
        },
        {
          id: "java-projects",
          category: "software",
          badge: "PEMROGRAMAN INTI · OOP & SQL",
          title: "Koleksi Aplikasi Java",
          summary:
            "Kumpulan aplikasi desktop dan latihan backend yang menerapkan arsitektur berorientasi objek dan basis data relasional.",
          impactHighlight:
            "Menerapkan struktur kelas OOP modular, antarmuka Swing/JavaFX, dan integrasi JDBC.",
          description:
            "Kumpulan proyek perkuliahan dan latihan mandiri berbasis Java yang menerapkan pemrograman berorientasi objek (OOP), pembuatan antarmuka Swing/JavaFX, serta integrasi basis data relasional.",
          techStack: ["Java", "OOP", "Swing / JavaFX", "JDBC & SQL"],
          role: [
            "Merancang struktur kelas OOP yang modular dan alur antarmuka desktop.",
            "Mengintegrasikan operasi CRUD dengan basis data relasional menggunakan JDBC.",
          ],
          img: "/java-projects.jpg",
          github:
            "https://github.com/alysahanel?tab=repositories&q=&type=&language=java",
        },
        {
          id: "cpp-projects",
          category: "software",
          badge: "ALGORITMA · LOGIKA SISTEM",
          title: "Sistem & Algoritma C++",
          summary:
            "Eksplorasi struktur data inti, manajemen memori, dan pemecahan masalah algoritmik secara terstruktur.",
          impactHighlight:
            "Berfokus pada ketepatan logika, efisiensi waktu, dan penelusuran masalah sistematis.",
          description:
            "Eksplorasi pemrograman tingkat rendah, struktur data inti, manajemen memori, dan latihan pemrograman kompetitif menggunakan C++.",
          techStack: ["C++", "Struktur Data", "Algoritma"],
          role: [
            "Mengimplementasikan berbagai struktur data dan solusi algoritmik dengan perhatian pada efisiensi waktu dan memori.",
          ],
          img: "/cpp-projects.jpg",
          github:
            "https://github.com/alysahanel?tab=repositories&q=&type=&language=c%2B%2B",
        },
      ],
    },
    process: {
      heading: "Cara saya bekerja",
      annotation: "prinsip kerja saya, baik di IT maupun lintas bidang",
      steps: [
        {
          num: "01",
          title: "Mendengarkan dulu untuk memahami kebutuhan inti",
          body: "Baik menghadapi kendala operasional maupun brief teknis, saya memetakan pihak terkait, batasan, dan tujuan sebelum mulai mengeksekusi.",
          question: '"Masalah apa yang sebenarnya sedang kita selesaikan?"',
        },
        {
          num: "02",
          title: "Mengurai masalah rumit menjadi alur yang jelas",
          body: "Latar belakang Informatika melatih pola pikir analitis saya—mengubah data, permintaan, atau rutinitas manual menjadi proses yang rapi dan terukur.",
          question: '"Bagaimana proses ini bisa berjalan lebih lancar?"',
        },
        {
          num: "03",
          title: "Berkomunikasi jernih lintas tim",
          body: "Pengalaman bekerja bersama supervisor, tim pabrik, peneliti, dan rekan proyek melatih saya menyampaikan detail secara sederhana agar semua pihak selaras.",
          question: '"Apakah semua orang sudah punya kejelasan untuk melangkah?"',
        },
        {
          num: "04",
          title: "Mendokumentasikan, menguji, dan menuntaskan",
          body: "Mulai dari pengujian UAT di PT. Nesinak Industries hingga laporan riset di BRIN, saya menjaga kerapian dokumentasi serta memastikan hasil benar-benar berjalan.",
          question: '"Apakah ini benar-benar andal untuk operasional harian?"',
        },
        {
          num: "05",
          title: "Adaptif di berbagai peran dan bidang",
          body: "Saya senang belajar hal baru di lingkungan berbeda—dari akselerasi bisnis hingga operasional industri—untuk cepat memberi kontribusi nyata.",
          question: '"Apa yang bisa cepat saya pelajari untuk membantu tim?"',
        },
      ],
    },
    about: {
      heading: "Tentang saya",
      annotation: "lebih dari sekadar jurusan",
      lead: "Pemikir terstruktur yang senang menghubungkan orang, proses kerja, dan alat yang tepat guna.",
      paragraphs: [
        "Meskipun saya lulusan Informatika President University (Fakultas Artificial Intelligence and Smart Manufacturing), hal yang paling saya nikmati bukan sekadar menulis kode—melainkan memahami cara kerja sebuah organisasi dan membuat pekerjaan sehari-hari lebih rapi, jelas, dan dapat diandalkan.",
        "Melalui pengalaman magang di eCampus President University, Nippon Steel, dan SetSail BizAccel, riset di BRIN, serta tugas akhir bersama PT. Nesinak Industries, saya terbiasa melakukan analisis kebutuhan, pengelolaan pembelajaran digital, penyusunan panduan pengguna, koordinasi lintas tim, serta pengujian sistem secara menyeluruh.",
        "Saya terbuka untuk peluang Magang maupun Full-Time di berbagai bidang, termasuk Business Operations, Administrasi, Project Coordinator, Business Analyst, Management Trainee, maupun IT & IoT.",
      ],
      targetRolesLabel: "Terbuka untuk peluang di bidang",
      targetRoles: [
        "Business Operations",
        "Project Coordinator",
        "Business Analyst",
        "Administration",
        "Management Trainee",
        "IT & IoT Systems",
      ],
      educationLabel: "Pendidikan",
      education: {
        degree: "Sarjana Informatika (S.Kom.)",
        institution: "President University",
        period: "Sep 2023 - Des 2026",
        faculty: "Fakultas Artificial Intelligence and Smart Manufacturing",
        summary:
          "IPK 3.88/4.0 · Beasiswa Jababeka (Peringkat 2). Fondasi kuat dalam berpikir sistem, analisis terstruktur, perencanaan proyek, serta pelaporan kerja yang rapi.",
      },
    },
    skills: {
      heading: "Keahlian & kapabilitas",
      subtitle:
        "Memadukan kekuatan operasional lintas fungsi dengan pemahaman teknis yang praktis",
      groups: [
        {
          title: "Lintas Bidang & Operasional",
          items: [
            "Berpikir Analitis",
            "Pemecahan Masalah Terstruktur",
            "Koordinasi Proyek",
            "Analisis Kebutuhan",
            "Dokumentasi & Pelaporan",
            "Komunikasi Lintas Tim",
            "Adaptabilitas",
            "Evaluasi Proses & UAT",
          ],
        },
        {
          title: "IoT & Sistem Tertanam",
          items: [
            "ESP32 & Arduino Uno",
            "Raspberry Pi",
            "MFRC522 RFID",
            "Sensor (HC-SR04, DS18B20, TCS3200)",
            "Aktuator (Servo, Motor DC, L298N)",
            "Prototyping & Kalibrasi Perangkat",
          ],
        },
        {
          title: "Pemrograman & Alat Analisis",
          items: [
            "Python",
            "Java",
            "C / C++",
            "MySQL & SQLite",
            "Pelaporan Excel / CSV",
            "Platform Pembelajaran Digital & Canva",
            "Git & GitHub",
            "OpenCV & EasyOCR",
            "Proteus & Arduino IDE",
          ],
        },
      ],
    },
    experience: {
      heading: "Perjalanan saya",
      annotation: "bukan sekadar satu jalur lurus",
      items: [
        {
          role: "Magang Operasional Pembelajaran Digital",
          organization: "President University eCampus",
          period: "Mar 2026 - Jun 2026",
          summary:
            "Mendukung operasional pembelajaran jarak jauh untuk 15+ kelas melalui penataan modul, tinjauan platform, dan panduan pengguna.",
          highlights: [
            "Menyelaraskan 15+ kelas daring dan 12+ modul mingguan dengan standar RPS",
            "Menyusun 5+ panduan mandiri bagi 500+ pengguna, menekan pertanyaan berulang 30%",
          ],
          isCurrent: true,
        },
        {
          role: "Kontributor Tugas Akhir (Otomasi Gerbang)",
          organization: "PT. Nesinak Industries",
          period: "2025 - 2026",
          summary:
            "Bermitra dengan PT. Nesinak Industries untuk mengotomatisasi akses gerbang kendaraan pabrik pada jam sibuk.",
          highlights: [
            "Menangani modul autentikasi RFID, perbaikan MQTT, dan dispenser kartu",
            "Lulus User Acceptance Testing (6/6 kategori) bersama IT Senior Supervisor",
          ],
        },
        {
          role: "Magang Pengembangan Sistem (HRGA & Legal)",
          organization: "PT Nippon Steel Chemical & Material Indonesia",
          period: "Agu 2025 - Des 2025",
          summary:
            "Mendukung departemen HRGA dan Legal dengan membangun alur kerja internal untuk administrasi dan kepatuhan regulasi.",
          highlights: [
            "Mendigitalisasi pencatatan General Affairs serta kepatuhan hukum perusahaan",
            "Melakukan pengujian, perbaikan kendala, dan dokumentasi kesiapan sistem",
          ],
        },
        {
          role: "Magang Riset IoT",
          organization: "BRIN (Pusat Riset Elektronika)",
          period: "Apr 2025 - Mei 2025",
          summary:
            "Merencanakan dan menyelesaikan modul pemantauan suhu air otomatis selama 6 minggu untuk sistem akuakultur cerdas BRIN.",
          highlights: [
            "Menyusun proposal, flowchart sistem, log pengujian, dan laporan akhir riset",
            "Mempresentasikan progres mingguan serta mengoordinasikan integrasi tim",
          ],
        },
        {
          role: "PIC Divisi Administrasi",
          organization: "SetSail BizAccel",
          period: "Okt 2024 - Mei 2025",
          summary:
            "Memimpin operasional administrasi program inkubasi bisnis universitas dengan dokumentasi dan koordinasi harian yang terstruktur.",
          highlights: [
            "Mengawal alur kerja internal di berbagai workshop dan kegiatan startup",
            "Menjaga pelaporan sistematis serta komunikasi lintas tim yang rapi",
          ],
        },
        {
          role: "Project Manager (Acara & Peluncuran Produk)",
          organization: "SetSail BizAccel & LightenUp",
          period: "Sep 2024 - Des 2024",
          summary:
            "Memimpin perencanaan, logistik, dan koordinasi lintas tim untuk workshop startup, seminar, serta peluncuran alpha aplikasi.",
          highlights: [
            "Mengelola Ready SetSail 4 Workshop, Seminar Ecoxyztem, dan LightenUp Alpha Launch",
            "Menyelaraskan jadwal, pembicara, pemangku kepentingan, dan dokumentasi acara",
          ],
        },
        {
          role: "Sekretaris Acara & Magang Web Developer",
          organization: "SetSail BizAccel & Earth Day PT Nippon",
          period: "Okt 2023 - Apr 2024",
          summary:
            "Membangun situs web tenant mahasiswa di SetSail serta menangani administrasi dan korespondensi Earth Day bersama PT Nippon.",
          highlights: [
            "Berkolaborasi lintas tim pada situs tenant dan kepanitiaan acara kewirausahaan",
            "Menangani notulensi rapat, surat-menyurat internal, dan koordinasi mitra",
          ],
        },
        {
          role: "Asisten Peneliti",
          organization: "President Research Center",
          period: "Okt 2023 - Feb 2024",
          summary:
            "Mendukung kegiatan riset multidisiplin universitas melalui penataan data, dokumentasi, dan pelaporan analitis.",
          highlights: [
            "Menjaga kerapian arsip riset untuk meningkatkan efisiensi alur kerja departemen",
            "Mengasah pemecahan masalah analitis, dokumentasi, dan komunikasi lintas tim",
          ],
        },
      ],
    },
    certificates: {
      heading: "Sertifikat & kredensial",
      subtitle: "Sertifikat magang, kepemimpinan, dan pencapaian terverifikasi",
      viewCert: "Lihat sertifikat",
      viewReport: "Lihat laporan",
      items: [
        {
          title: "Magang Nippon Steel",
          issuer: "PT Nippon Steel Chemical & Material Indonesia",
          period: "Agu 2025 - Des 2025",
          description:
            "Menyelesaikan magang di Divisi General Affair mendukung alur kerja administrasi dan kepatuhan internal.",
          img: "/certificates/nippon-certificate.png",
          certificate: "/Internship_Certificate.pdf",
        },
        {
          title: "Magang Riset BRIN",
          issuer: "Badan Riset dan Inovasi Nasional (BRIN)",
          period: "Apr 2025 - Mei 2025",
          description:
            "Sertifikat magang Pusat Riset Elektronika BRIN untuk pengembangan sistem pemantauan dan kontrol IoT.",
          img: "/certificates/Alysa%20Milano%20(%20BRIN%20).jpg",
          certificate: "/certificates/Alysa%20Milano%20(%20BRIN%20).jpg",
          report: "/Fishery_Report.pdf",
        },
        {
          title: "Magang SetSail BizAccel",
          issuer: "SetSail BizAccel, President University",
          period: "Sep 2023 - Apr 2024",
          description:
            "Menyelesaikan program magang terstruktur dalam mendukung inisiatif akselerasi bisnis.",
          img: "/certificates/Alysa%20Milano%20(%20Setsail%2020232%20).png",
          certificate: "/certificates/Alysa%20Milano%20(%20Setsail%2020232%20).png",
        },
        {
          title: "Volunteer PIC — Divisi Administrasi",
          issuer: "SetSail BizAccel, President University",
          period: "Okt 2024 - Mei 2025",
          description:
            "Apresiasi atas peran memimpin operasional administrasi, kolaborasi acara, dan dukungan harian di SetSail.",
          img: "/certificates/Alysa%20Milano%20(%20PIC).jpg",
          certificate: "/certificates/Alysa%20Milano%20(%20PIC).jpg",
        },
        {
          title: "Interim Deputy Program Manager",
          issuer: "SetSail BizAccel, President University",
          period: "Sep 2024 - Feb 2025",
          description:
            "Sertifikat apresiasi atas dedikasi dan kontribusi dalam pengelolaan serta eksekusi program SetSail.",
          img: "/certificates/Alysa%20Milano%20(%20Interim%20Setsail%20).jpg",
          certificate: "/certificates/Alysa%20Milano%20(%20Interim%20Setsail%20).jpg",
        },
        {
          title: "Magang Asisten Peneliti",
          issuer: "Fablab Jababeka, President University",
          period: "Feb 2024",
          description:
            "Menyelesaikan magang Asisten Peneliti selama empat bulan dalam dokumentasi riset dan pengelolaan data.",
          img: "/certificates/Alysa%20Milano%20(%20PRC%2020231%20).png",
          certificate: "/certificates/Alysa%20Milano%20(%20PRC%2020231%20).png",
        },
        {
          title: "Project Manager — Peluncuran Alpha LightenUp",
          issuer: "LightenUp · BRIN · LPDP · President University",
          period: "Des 2024",
          description:
            "Memimpin koordinasi panitia dan pelaksanaan acara Launching the Alpha Version of the LightenUp App.",
          img: "/certificates/Alysa%20Milano%20(%20Launching%20LightenUp%20).png",
          certificate: "/certificates/Alysa%20Milano%20(%20Launching%20LightenUp%20).png",
        },
        {
          title: "Project Manager — Seminar Kolaborasi Ecoxyztem",
          issuer: "SetSail BizAccel · Ecoxyztem Venture Builder",
          period: "Okt 2024",
          description:
            "Mengelola perencanaan, logistik, dan koordinasi pembicara pada seminar kolaborasi alumni Hubungan Internasional.",
          img: "/certificates/Alysa%20Milano%20(%20Ecozystem%20).png",
          certificate: "/certificates/Alysa%20Milano%20(%20Ecozystem%20).png",
        },
        {
          title: "Project Manager — Ready SetSail Batch 4",
          issuer: "SetSail BizAccel, President University",
          period: "Sep 2024",
          description:
            "Mengoordinasikan registrasi dan pelaksanaan program inkubasi bisnis Ready SetSail Batch 4.",
          img: "/certificates/Alysa%20Milano%20(%20Ready%20Setsail%204%20).png",
          certificate: "/certificates/Alysa%20Milano%20(%20Ready%20Setsail%204%20).png",
        },
        {
          title: "Sekretaris — Earth Day Festival 2024",
          issuer: "President University · PT Nippon Steel",
          period: "Apr 2024",
          description:
            "Menangani dokumentasi administrasi, surat-menyurat, dan koordinasi mitra pada Earth Day Festival 2024.",
          img: "/certificates/Alysa%20Milano%20(%20Demo%20Day%20).jpg",
          certificate: "/certificates/Alysa%20Milano%20(%20Demo%20Day%20).jpg",
        },
        {
          title: "Pemenang Kuis — Beranda Sawit Nusantara II",
          issuer: "Masyarakat Perkelapasawitan Indonesia (MAKSI) · BPDPKS",
          period: "Agu 2024",
          description:
            "Meraih predikat Pemenang pada kompetisi kuis Beranda Sawit Nusantara (BSN) II di Menara Batavia, Jakarta.",
          img: "/certificates/Alysa%20Milano%20(%20Palm%20Oil%20).jpg",
          certificate: "/certificates/Alysa%20Milano%20(%20Palm%20Oil%20).jpg",
        },
        {
          title: "Bendahara — Zahirul Ma'ala",
          issuer: "Zahirul Ma'ala, President University",
          period: "Organisasi Mahasiswa",
          description:
            "Apresiasi atas dedikasi, pengelolaan administrasi keuangan, dan komitmen sebagai Bendahara Zahirul Ma'ala.",
          img: "/certificates/zahirul-maala.png",
          certificate: "/certificates/Alysa%20Milano(%20Trea%20ZahirulMaala%20).pdf",
        },
      ],
    },
    contact: {
      thoughtBubble: "sesuatu yang bermakna",
      line1Prefix: "Mari",
      rotatingWords: ["membangun", "merapikan", "menyelesaikan"],
      line2: "langkah selanjutnya, bersama.",
      findMe: "Temukan saya",
      emailLabel: "Email",
      copyBtn: "Salin email",
      copiedBtn: "Email disalin",
      downloadCv: "Unduh CV",
      cvNotice:
        "Berkas CV sedang disiapkan. Letakkan CV_Alysa_Milano.pdf di folder public/cv/, atau hubungi Alysa melalui LinkedIn.",
      copyright: "© 2026 Alysa Milano",
      footerNote: "Terbuka untuk Magang & Full-Time",
    },
  },
};
