// ============================================
// BADGES DATA - All 22 Certifications
// ============================================

const badgesData = [
    // === GOOGLE CERTIFICATIONS ===
    {
        id: 1,
        title: "Google IT Support",
        provider: "Google",
        category: "it-support",
        categories: ["IT Support", "Networking"],
        type: "Professional Certificate",
        issued: "2025-09",
        credentialId: "FQP47TDQANAF",
        credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/FQP47TDQANAF",
        skills: ["Troubleshooting", "Networking", "Operating Systems", "System Administration"],
        logo: "google",
        color: "#4285F4"
    },
    {
        id: 2,
        title: "Google Cybersecurity",
        provider: "Google",
        category: "cybersecurity",
        categories: ["Cybersecurity", "Security"],
        type: "Professional Certificate",
        issued: "2025-09",
        credentialId: "F25OY4HBJPA9",
        credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/F25OY4HBJPA9",
        skills: ["Security Analysis", "Threat Detection", "Incident Response", "Risk Management"],
        logo: "google",
        color: "#4285F4"
    },
    {
        id: 3,
        title: "Google Cloud Cybersecurity",
        provider: "Google",
        category: "cloud",
        categories: ["Cloud", "Cybersecurity"],
        type: "Professional Certificate",
        issued: "2025-09",
        credentialId: "VYHXZ6F2L3JH",
        credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/VYHXZ6F2L3JH",
        skills: ["Cloud Security", "GCP", "Security Operations", "Threat Intelligence"],
        logo: "google",
        color: "#4285F4"
    },
    {
        id: 4,
        title: "Google Data Analytics",
        provider: "Google",
        category: "data",
        categories: ["Data Analytics", "Business Intelligence"],
        type: "Professional Certificate",
        issued: "2025-08",
        credentialId: "0SSOPDGTXM8O",
        credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/0SSOPDGTXM8O",
        skills: ["Data Analysis", "SQL", "Tableau", "R Programming"],
        logo: "google",
        color: "#4285F4"
    },
    {
        id: 5,
        title: "Google IT Automation with Python",
        provider: "Google",
        category: "python",
        categories: ["Python", "Automation"],
        type: "Professional Certificate",
        issued: "2025-08",
        credentialId: "HH2QZZZFVDTR",
        credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/HH2QZZZFVDTR",
        skills: ["Python", "Automation", "Git", "Configuration Management"],
        logo: "google",
        color: "#4285F4"
    },

    // === IBM CERTIFICATIONS ===
    {
        id: 6,
        title: "IBM Full Stack Software Developer",
        provider: "IBM",
        category: "development",
        categories: ["Full Stack", "Web Development"],
        type: "Professional Certificate",
        issued: "2025-08",
        credentialId: "M712AH48T20A",
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/M712AH48T20A",
        skills: ["Full Stack Development", "React", "Node.js", "Cloud Native"],
        logo: "ibm",
        color: "#0F62FE"
    },
    {
        id: 7,
        title: "IBM DevOps and Software Engineering",
        provider: "IBM",
        category: "development",
        categories: ["DevOps", "Software Engineering"],
        type: "Professional Certificate",
        issued: "2025-08",
        credentialId: "96AIT8VEV7H2",
        credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/96AIT8VEV7H2",
        skills: ["DevOps", "CI/CD", "Agile", "Kubernetes"],
        logo: "ibm",
        color: "#0F62FE"
    },
    {
        id: 8,
        title: "IBM Data Engineering",
        provider: "IBM",
        category: "data",
        categories: ["Data Engineering", "Big Data"],
        type: "Professional Certificate",
        issued: "2025-07",
        credentialId: "U6J8QCZU114Z",
        credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/U6J8QCZU114Z",
        skills: ["Data Engineering", "ETL", "Databases", "Apache Spark"],
        logo: "ibm",
        color: "#0F62FE"
    },
    {
        id: 9,
        title: "IBM Cloud Application Development",
        provider: "IBM",
        category: "cloud",
        categories: ["Cloud", "Application Development"],
        type: "Specialization",
        issued: "2025-07",
        credentialId: "IBM-CLOUD-APP-DEV",
        credentialUrl: "https://www.coursera.org",
        skills: ["Cloud Applications", "IBM Cloud", "Microservices", "Docker"],
        logo: "ibm",
        color: "#0F62FE"
    },

    // === MICROSOFT CERTIFICATIONS ===
    {
        id: 10,
        title: "Microsoft Cybersecurity Analyst",
        provider: "Microsoft",
        category: "cybersecurity",
        categories: ["Cybersecurity", "Security Analysis"],
        type: "Professional Certificate",
        issued: "2025-09",
        credentialId: "HJEYACY7M3J2",
        credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/HJEYACY7M3J2",
        skills: ["Security Analysis", "Azure Security", "Threat Hunting", "SIEM"],
        logo: "microsoft",
        color: "#00A4EF"
    },
    {
        id: 11,
        title: "Microsoft Azure Security Tools",
        provider: "Microsoft",
        category: "cloud",
        categories: ["Cloud", "Azure", "Security"],
        type: "Specialization",
        issued: "2025-08",
        credentialId: "2KI5WVBLVD5Q",
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/2KI5WVBLVD5Q",
        skills: ["Azure Security", "Security Tools", "Cloud Protection", "Identity Management"],
        logo: "microsoft",
        color: "#00A4EF"
    },

    // === LINUX FOUNDATION CERTIFICATIONS ===
    {
        id: 12,
        title: "LFS101: Introduction to Linux",
        provider: "The Linux Foundation",
        category: "linux",
        categories: ["Linux", "Operating Systems"],
        type: "Course Certificate",
        issued: "2025-10",
        credentialId: "LF-C23DE0F9",
        credentialUrl: "https://www.credly.com/badges/c23de0f9-433e-4c09-9c6e-073442f972b6",
        skills: ["Linux", "Command Line", "System Administration", "Shell Scripting"],
        logo: "linux",
        color: "#FCC624"
    },
    {
        id: 13,
        title: "LFD103: Linux Kernel Development",
        provider: "The Linux Foundation",
        category: "linux",
        categories: ["Linux", "Kernel Development"],
        type: "Course Certificate",
        issued: "2025-10",
        credentialId: "LF-B516C720",
        credentialUrl: "https://www.credly.com/badges/b516c720-fcff-4df9-996c-77a635dc5277",
        skills: ["Kernel Development", "C Programming", "Linux Internals", "Device Drivers"],
        logo: "linux",
        color: "#FCC624"
    },
    {
        id: 14,
        title: "LFC108: Cybersecurity Essentials",
        provider: "The Linux Foundation",
        category: "cybersecurity",
        categories: ["Cybersecurity", "Security Fundamentals"],
        type: "Course Certificate",
        issued: "2025-09",
        credentialId: "LF-9735B9E9",
        credentialUrl: "https://www.credly.com/badges/9735b9e9-0132-46c1-a06f-f07c2a794097",
        skills: ["Security Basics", "Cryptography", "Network Security", "Risk Assessment"],
        logo: "linux",
        color: "#FCC624"
    },
    {
        id: 15,
        title: "SKF100: OWASP Top 10 Security Threats",
        provider: "The Linux Foundation",
        category: "cybersecurity",
        categories: ["Cybersecurity", "Web Security"],
        type: "Course Certificate",
        issued: "2025-10",
        credentialId: "LF-141D1D2C",
        credentialUrl: "https://www.credly.com/badges/141d1d2c-43c7-4647-a5f1-45eedf96a960",
        skills: ["OWASP", "Web Security", "Vulnerability Assessment", "Penetration Testing"],
        logo: "linux",
        color: "#FCC624"
    },

    // === CISCO CERTIFICATIONS ===
    {
        id: 16,
        title: "Linux Essentials",
        provider: "Cisco Networking Academy",
        category: "linux",
        categories: ["Linux", "Networking"],
        type: "Course Certificate",
        issued: "2025-09",
        credentialId: "CISCO-B1488085",
        credentialUrl: "https://www.credly.com/badges/b1488085-6571-43cd-bc6a-63c1986d23d4",
        skills: ["Linux Fundamentals", "Open Source", "Command Line", "File Systems"],
        logo: "cisco",
        color: "#1BA0D7"
    },
    {
        id: 17,
        title: "Linux Unhatched",
        provider: "Cisco Networking Academy",
        category: "linux",
        categories: ["Linux", "Introduction"],
        type: "Course Certificate",
        issued: "2025-10",
        credentialId: "CISCO-EAC2DB03",
        credentialUrl: "https://www.credly.com/badges/eac2db03-a32e-4406-9f2b-6b6777b8c2e3",
        skills: ["Linux Basics", "Terminal", "File Management", "User Permissions"],
        logo: "cisco",
        color: "#1BA0D7"
    },
    {
        id: 18,
        title: "Networking Basics",
        provider: "Cisco Networking Academy",
        category: "networking",
        categories: ["Networking", "Network Fundamentals"],
        type: "Course Certificate",
        issued: "2025-09",
        credentialId: "CISCO-CAAE1D30",
        credentialUrl: "https://www.credly.com/badges/caae1d30-4803-45c7-bf05-d5167f666ea4",
        skills: ["Network Protocols", "TCP/IP", "Routing", "Network Devices"],
        logo: "cisco",
        color: "#1BA0D7"
    },
    {
        id: 19,
        title: "Computer Hardware Basics",
        provider: "Cisco Networking Academy",
        category: "hardware",
        categories: ["Hardware", "IT Fundamentals"],
        type: "Course Certificate",
        issued: "2025-09",
        credentialId: "CISCO-71FAF08E",
        credentialUrl: "https://www.credly.com/badges/71faf08e-759f-47fd-9f0f-953a5846b688",
        skills: ["Computer Hardware", "Troubleshooting", "Assembly", "Maintenance"],
        logo: "cisco",
        color: "#1BA0D7"
    },

    // === PYTHON CERTIFICATIONS ===
    {
        id: 20,
        title: "Python for Everybody",
        provider: "University of Michigan",
        category: "python",
        categories: ["Python", "Programming"],
        type: "Specialization",
        issued: "2025-07",
        credentialId: "X037W8UHY83W",
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/X037W8UHY83W",
        skills: ["Python Programming", "Data Structures", "Web Scraping", "Databases"],
        logo: "python",
        color: "#3776AB"
    },
    {
        id: 21,
        title: "Python for Cybersecurity",
        provider: "InfoSEC",
        category: "cybersecurity",
        categories: ["Python", "Cybersecurity"],
        type: "Specialization",
        issued: "2025-08",
        credentialId: "8TLZ8RTWVQGE",
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/8TLZ8RTWVQGE",
        skills: ["Security Automation", "Penetration Testing", "Network Security", "Malware Analysis"],
        logo: "python",
        color: "#3776AB"
    },

    // === OTHER CERTIFICATIONS ===
    {
        id: 22,
        title: "KNIME Analytics Platform",
        provider: "KNIME",
        category: "data",
        categories: ["Data Analytics", "No-Code"],
        type: "Basic Proficiency",
        issued: "2025-09",
        credentialId: "KNIME-3758EA53",
        credentialUrl: "https://www.credly.com/badges/3758ea53-f89d-411c-98a9-5de2bd05acf7",
        skills: ["Data Analytics", "Visual Programming", "ETL", "Machine Learning"],
        logo: "knime",
        color: "#FDC800"
    }
];

// Provider logos mapping (use emojis or CDN URLs)
const providerLogos = {
    "google": "https://cdn.simpleicons.org/google/4285F4",
    "ibm": "https://cdn.simpleicons.org/ibm/0F62FE",
    "microsoft": "https://cdn.simpleicons.org/microsoft/00A4EF",
    "linux": "https://cdn.simpleicons.org/linux/FCC624",
    "cisco": "https://cdn.simpleicons.org/cisco/1BA0D7",
    "python": "https://cdn.simpleicons.org/python/3776AB",
    "knime": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ctext y='50' font-size='50'%3E📊%3C/text%3E%3C/svg%3E"
};
