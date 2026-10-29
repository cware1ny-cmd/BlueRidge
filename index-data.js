// =========================================================================
// 1. GLOBAL COURSE METADATA
// =========================================================================
window.CourseMetadata = {
  docTitle: "RCIC Course",
  pageTitle: "Reactor Core Isolation Cooling",
  courseLogo: "logo.png",
  sidebarTitle: "Course Modules",
  dashText: [
    "Imagine a critical plant event where your expertise makes all the difference. Are you ready to keep the reactor core safe when normal cooling is lost? This in-depth course empowers you to master every aspect of the Reactor Core Isolation Cooling (RCIC) system, from understanding its vital safety function to confidently handling complex malfunctions. You'll explore the full spectrum of RCIC operation—purpose, layout, controls, troubleshooting, and technical requirements—gaining the knowledge and skills needed to ensure safe, reliable performance during any plant condition. Designed for licensed nuclear operators and trainees, this course will help you protect the core, meet regulatory demands, and respond decisively in high-stakes scenarios.",
    "To start the course, click the link below for Module 1. All preceding modules must be completed before you can progress to the next module."
    ]
};

// =========================================================================
// 2. COURSE STRUCTURE & MODULE MANIFEST
// =========================================================================
window.CourseManifest = [
  { id: "1", title: "Text Blocks", data: "brs01-data.js", iconType: "lesson" },
  { id: "2", title: "Objective/Bulleted Lists", data: "brs02-data.js", iconType: "lesson" },
  { id: "3", title: "Accordions", data: "brs03-data.js", iconType: "lesson" },
  { id: "4", title: "Flashcards", data: "brs04-data.js", iconType: "lesson" },
  { id: "5", title: "Process Carousels", data: "brs05-data.js", iconType: "lesson" },
  { id: "6", title: "Tabbed Panels", data: "brs06-data.js", iconType: "lesson" },
  { id: "7", title: "Questions", data: "brs07-data.js", iconType: "lesson" },
  { id: "8", title: "Full Width Images", data: "brs08-data.js", iconType: "lesson" },
  { id: "9", title: "Hero Images", data: "brs09-data.js", iconType: "lesson" },
  { id: "10", title: "Standard Images", data: "brs10-data.js", iconType: "lesson" },
  { id: "11", title: "PDF Document", data: "brs11-data.js", iconType: "lesson" },
  { id: "12", title: "Blank Elements", data: "brs12-data.js", iconType: "lesson" }
];

// Automated context engine using URL query parameters
(function () {
  const manifest = window.CourseManifest;
  const requestedId = new URLSearchParams(window.location.search).get("id");

  // Fall back to the first module if the ID is missing or unknown
  let index = manifest.findIndex((mod) => mod.id === requestedId);
  if (index === -1) index = 0;

  const currentModule = manifest[index];
  const hasNext = index < manifest.length - 1;

  window.NavigationContext = {
    currentIndex: index,
    currentModuleId: currentModule.id,
    currentDataFile: currentModule.data,
    hasPrevious: index > 0,
    hasNext,
    prevFile: index > 0 ? `./module.html?id=${manifest[index - 1].id}` : "./index.html",
    nextFile: hasNext ? `./module.html?id=${manifest[index + 1].id}` : "./index.html",
  };
})();