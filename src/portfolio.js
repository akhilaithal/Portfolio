/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 600 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Shashidhar Akhil Aithal",
  title: "Hello, I'm Akhil",
  subTitle: emoji(
    "An Electrical Engineer driven by hands-on hardware innovation and complex problem solving. With more than four years of professional experience, I specialize in circuit and PCB design, laboratory instrumentation and embedded programming (C/C++ and Python). I thrive in challenging environments that demand conceptual thinking, rapid prototyping and continuous learning - especially where technology shapes the future."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12SE92O0PdW6NnkChS4dDJaFuTX8dEdli/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/akhil-aithal/",
  gmail: "akhil.aithal@outlook.com",
  github: "https://github.com/akhilaithal",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE ELECTRICAL ENGINEER LOOKING TO MAKE AN IMPACT",
  skills: [
    emoji(
      "⚡ Design, Simulate and Test mixed-signal circuits for embedded systems"
    ),
    emoji(
      "⚡ From Prototype to Series production — end-to-end product delivery"
    ),
    emoji(
      "⚡ Translate top-level requirements into reliable hardware solutions"
    ),
    emoji(
      "⚡ Implement Test Automation to improve efficiency and repeatability"
    ),
    emoji("⚡ Ensure compliance with industry standards and best practices")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universität Stuttgart",
      logo: require("./assets/images/unistuttgart_logo.jpg"),
      subHeader: "Master of Science in Electrical Engineering",
      duration: "October 2022 - March 2025",
      grade: "Grade : 2.0",
      desc1:
        "Master Thesis: Investigation of Modular Fabrication of Large-Area Passive RF Components",
      desc1Bullets: [
        "Developed passive RF components using a hybrid fabrication approach that combined cleanroom-based lithography with additive printing techniques to enable modular design modifications.",
        "Simulated, fabricated, and tested RF structures, incorporating printed sections to explore their impact on frequency response and evaluate the feasibility of combining traditional and modern manufacturing methods."
      ],
      desc2:
        "Research Project: Packaging of Integrated Circuits on Glass Substrates",
      desc2Bullets: [
        "Fabricated thin film test structures in a cleanroom using photolithography on glass substrates, incorporating various pad sizes and materials to evaluate interconnect techniques.",
        "Developed and tested electrical bonding methods using different adhesives mixed with gold spacers, followed by systematic reliability and electrical stress testing across multiple sample configurations."
      ]
    },
    {
      schoolName: "B.M.S. College of Engineering",
      logo: require("./assets/images/BMS-College-of-Engineering-Bangalore.png"),
      subHeader: "Bachelor of Engineering in Electronics and Instrumentation",
      duration: "August 2016 - August 2020",
      grade: "CGPA : 8.87",
      desc1: "Bachelor Thesis: Lightweight Indoor Mobility Solution",
      desc1Bullets: [
        "Autonomous pick and place robot with advanced Computer Vision algorithm for navigation and obstacle avoidance. Designed and optimized to operate in an indoor environment."
      ]
      /*desc2: "Participated in the research of XXX and published 3 papers.",
      desc2Bullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "PCB Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Hardware Prototyping",
      progressPercentage: "90%"
    },
    {
      Stack: "Laboratory Testing",
      progressPercentage: "80%"
    },
    {
      Stack: "Circuit Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Simulation",
      progressPercentage: "80%"
    },
    {
      Stack: "Python",
      progressPercentage: "70%"
    },
    {
      Stack: "C/C++",
      progressPercentage: "70%"
    },
    {
      Stack: "Soldering",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    /*
     {
      role: "Prototyping Engineer Intern",
      company: "Bosch Sensortec GmbH",
      companylogo: require("./assets/images/Bosch_Logo.png"),
      date: "November 2025 – Present",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }, */
    {
      role: "Research Assistant",
      company: "Institute of Robust Power Semiconductor Systems (ILH)",
      companylogo: require("./assets/images/ILH_Logo.png"),
      date: "January 2025 – March 2025",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Performed RF and microwave port simulations using Keysight EMPro to analyze electromagnetic behavior of high-frequency structures",
        "Supported design validation and performance evaluation through simulation-driven insights",
        "Contributed to research-grade modeling workflows , improving confidence in early-stage hardware designs"
      ]
    },
    {
      role: "Working Student – Hardware & System Architecture",
      company: "Robert Bosch GmbH",
      companylogo: require("./assets/images/Bosch_Logo.png"),
      date: "January 2024 – December 2024",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Supported radar and next-generation automotive system development, contributing across hardware engineering and system architecture activities",
        "Created and maintained hardware and system requirements with end-to-end traceability using IBM DOORS , ensuring alignment between design and system specifications",
        "Provided hands-on laboratory support , including test sample preparation, validation, debugging, and circuit board bring-up",
        "Automated data extraction, analysis, and reporting using Python and Splunk , reducing manual effort and improving engineering insight",
        "Coordinated issue tracking, sprint planning, and cross-functional collaboration via JIRA , supporting efficient system integration"
      ]
    },
    {
      role: "Hardware Design Engineer",
      company: "Bosch Global Software Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/BGSW_Logo.png"),
      date: "January 2021 – September 2022",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Designed and developed electronic modules for Fuel Cell Electric Vehicle (FCEV) applications , including Interlock systems, Low-Voltage DC-DC converters, CAN interfaces, and crash signal circuits",
        "Executed end-to-end hardware development , covering circuit design, simulation, schematic review, and hardware testing",
        "Automated test workflows using Python and enhanced reporting efficiency through VBA scripting , improving test repeatability and documentation quality",
        "Owned module lifecycle management , including technical documentation, design reviews, and cross-team coordination",
        "Led component procurement and traceability , contributing to improved cost efficiency and supply-chain visibility"
      ]
    },
    {
      role: "Hardware Prototyping Engineer Intern",
      company: "SunTrop Solar Pvt. Ltd.",
      companylogo: require("./assets/images/Suntrop_Logo.png"),
      date: "June 2019 – July 2019",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Contributed to wireless sensor network (WSN) hardware development for agricultural monitoring applications",
        "Supported hardware design, integration, and bench-level testing of prototype systems",
        "Gained hands-on experience in debugging, rapid prototyping, and small-team engineering collaboration"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "PCB Basic Design Course",
      subtitle:
        "Certification for completion of PCB Basic Design Course from Altium Education",
      image: require("./assets/images/Altium_Logo.jpg"),
      imageAlt: "Altium Designer Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1lYakAXXHA-BZZQGnDy7t-jLRHdXMSfJV/view?usp=sharing"
        }
      ]
    },

    {
      title: "Bluetooth Low Energy Fundamentals",
      subtitle:
        "Certification for completion of Bluetooth Low Energy Fundamentals course from Nordic Semiconductor DevAcademy",
      image: require("./assets/images/Nordic_Semiconductor_Logo.png"),
      imageAlt: "Nordic Semiconductor Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1mI0VCo2XSAKt8Vl5t57gLG75rvRuS0xX/view?usp=sharing"
        }
      ]
    },

    {
      title: "nRF Connect SDK Fundamentals",
      subtitle:
        "Certification for completion of nRF Connect SDK Fundamentals course from Nordic Semiconductor DevAcademy",
      image: require("./assets/images/Nordic_Semiconductor_Logo.png"),
      imageAlt: "Nordic Semiconductor Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1U6Ed_Ko7t76RniJeswSp9HjgcuPc-wok/view?usp=sharing"
        }
      ]
    },

    {
      title: "nRF Connect SDK Intermediate",
      subtitle:
        "Certification for completion of nRF Connect SDK Intermediate course from Nordic Semiconductor DevAcademy",
      image: require("./assets/images/Nordic_Semiconductor_Logo.png"),
      imageAlt: "Nordic Semiconductor Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1bhOiJHSLvTDJP66BmDdUzwrccc5EIqEv/view?usp=sharing"
        }
      ]
    },

    {
      title: "Bravo Award",
      subtitle:
        "Awarded to team for commitment and collaboration towards successful sample testing before deadline",
      image: require("./assets/images/Bosch_Invented_for_Life_Logo.jpg"),
      imageAlt: "Bosch Invented for Life Logo",
      footerLink: [
        {
          name: "Achievement",
          url: "https://drive.google.com/file/d/1QxMb_0FFPNG7tApVMRHpu1VY_jH1R0Xu/view?usp=sharing"
        }
      ]
    },

    {
      title: "Extra Miler Award",
      subtitle: "Awarded for module testing and automation of test setups",
      image: require("./assets/images/Bosch_Invented_for_Life_Logo.jpg"),
      imageAlt: "Bosch Invented for Life Logo",
      footerLink: [
        {
          name: "Achievement",
          url: "https://drive.google.com/file/d/1dE8oCoJGnyEh65XcCB9BDWkVNSh9emvk/view?usp=sharing"
        }
      ]
    },

    {
      title: "Bravo Award",
      subtitle:
        "Awarded for quick adaptation to project and commitment towards task completion",
      image: require("./assets/images/Bosch_Invented_for_Life_Logo.jpg"),
      imageAlt: "Bosch Invented for Life Logo",
      footerLink: [
        {
          name: "Achievement",
          url: "https://drive.google.com/file/d/15fLxC3S2_XP-0pWacgToPPTNqC6inp3I/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  //subtitle:
  // "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49 176 87969695",
  email_address: "akhil.aithal@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
