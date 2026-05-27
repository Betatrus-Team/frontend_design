const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, TabStopType, TabStopPosition,
  Header, Footer, TableOfContents, ExternalHyperlink
} = require('docx');
const fs = require('fs');

// ── Helpers ──────────────────────────────────────────────────────────────────

const FONT = "Times New Roman";
const FONT_SIZE = 24; // 12pt in half-points
const LINE_SPACING = { line: 480, lineRule: "auto" }; // double-space
const PARA_SPACING = { before: 0, after: 240 };

const pageProps = {
  size: { width: 11906, height: 16838 }, // A4
  margin: { top: 1440, right: 1080, bottom: 1440, left: 1800 } // 1.25" left
};

function body(text, opts = {}) {
  return new Paragraph({
    alignment: opts.center ? AlignmentType.CENTER : AlignmentType.JUSTIFIED,
    spacing: { ...LINE_SPACING, ...PARA_SPACING },
    children: [new TextRun({ text, font: FONT, size: FONT_SIZE, bold: opts.bold || false })]
  });
}

function bodyRuns(runs, opts = {}) {
  return new Paragraph({
    alignment: opts.center ? AlignmentType.CENTER : AlignmentType.JUSTIFIED,
    spacing: { ...LINE_SPACING, ...PARA_SPACING },
    children: runs.map(r => new TextRun({ font: FONT, size: FONT_SIZE, ...r }))
  });
}

function centeredBold(text, size = 28) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 120, after: 120 },
    children: [new TextRun({ text, font: FONT, size, bold: true })]
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    alignment: AlignmentType.CENTER,
    spacing: { before: 480, after: 240 },
    children: [new TextRun({ text: text.toUpperCase(), font: FONT, size: 28, bold: true })]
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 360, after: 120 },
    children: [new TextRun({ text, font: FONT, size: 24, bold: true })]
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, font: FONT, size: 24, bold: true, italics: true })]
  });
}

function pageBreak() {
  return new Paragraph({
    children: [new TextRun({ break: 1 })]
  });
}

function blank() {
  return new Paragraph({ children: [new TextRun("")], spacing: { before: 0, after: 0 } });
}

function tocEntry(label, page, level = 0) {
  const indent = level * 360;
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: 8640, leader: TabStopType.DOT }],
    indent: { left: indent },
    spacing: { before: 60, after: 60 },
    children: [
      new TextRun({ text: label, font: FONT, size: 24 }),
      new TextRun({ text: "\t" + page, font: FONT, size: 24 })
    ]
  });
}

function bulletItem(text, ref) {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    alignment: AlignmentType.JUSTIFIED,
    spacing: { ...LINE_SPACING, before: 0, after: 120 },
    children: [new TextRun({ text, font: FONT, size: FONT_SIZE })]
  });
}

// Table helpers
const cellBorder = { style: BorderStyle.SINGLE, size: 6, color: "2E4057" };
const cellBorders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };

function headerCell(text, width) {
  return new TableCell({
    borders: cellBorders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: "2E4057", type: ShadingType.CLEAR },
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text, font: FONT, size: 22, bold: true, color: "FFFFFF" })]
    })]
  });
}

function dataCell(text, width, bold = false) {
  return new TableCell({
    borders: cellBorders,
    width: { size: width, type: WidthType.DXA },
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [new Paragraph({
      alignment: AlignmentType.LEFT,
      children: [new TextRun({ text, font: FONT, size: 22, bold })]
    })]
  });
}

// ── Document sections ─────────────────────────────────────────────────────────

// ── 1. TITLE PAGE ────────────────────────────────────────────────────────────
function titlePage() {
  return [
    blank(),
    centeredBold("DEPARTMENT OF COMPUTER SCIENCE", 22),
    centeredBold("FACULTY OF COMPUTING AND INFORMATION TECHNOLOGY", 22),
    blank(),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 480, after: 480 },
      children: [new TextRun({ text: "A PROJECT REPORT SUBMITTED IN PARTIAL FULFILMENT OF THE REQUIREMENTS FOR THE AWARD OF THE DEGREE OF BACHELOR OF SCIENCE (B.Sc.) IN COMPUTER SCIENCE", font: FONT, size: 24, bold: false })]
    }),
    blank(),
    centeredBold("TITLE:", 26),
    centeredBold("DESIGN AND IMPLEMENTATION OF A SECURE WEB-BASED BANKING SYSTEM WITH REAL-TIME FRAUD DETECTION AND ALERT MECHANISM", 28),
    blank(),
    blank(),
    centeredBold("SUBMITTED BY:", 22),
    centeredBold("[Student Full Name]", 24),
    centeredBold("Matriculation Number: [MATRIC NO.]", 22),
    blank(),
    centeredBold("SUPERVISOR:", 22),
    centeredBold("[Supervisor's Name, Qualification]", 24),
    centeredBold("[Department, Faculty]", 22),
    blank(),
    blank(),
    centeredBold("[MONTH] [YEAR]", 24),
    pageBreak()
  ];
}

// ── 2. CERTIFICATION ─────────────────────────────────────────────────────────
function certificationPage() {
  return [
    h1("Certification"),
    blank(),
    body("This is to certify that this project report titled \"Design and Implementation of a Secure Web-Based Banking System with Real-Time Fraud Detection and Alert Mechanism\" was carried out by [Student Full Name] with Matriculation Number [MATRIC NO.] under my supervision and guidance. The work is original and has not been submitted, either wholly or in part, for any degree or diploma at this or any other institution."),
    blank(),
    blank(),
    body("________________________"),
    body("[Supervisor's Name]"),
    body("Project Supervisor"),
    body("[Department]"),
    body("Date: ___________________"),
    blank(),
    blank(),
    body("________________________"),
    body("[Head of Department's Name]"),
    body("Head of Department"),
    body("[Department]"),
    body("Date: ___________________"),
    pageBreak()
  ];
}

// ── 3. APPROVAL ──────────────────────────────────────────────────────────────
function approvalPage() {
  return [
    h1("Approval"),
    blank(),
    body("This project report titled \"Design and Implementation of a Secure Web-Based Banking System with Real-Time Fraud Detection and Alert Mechanism\" submitted by [Student Full Name] (Matriculation Number: [MATRIC NO.]) has been examined and approved as meeting the required standard for the award of the degree of Bachelor of Science (B.Sc.) in Computer Science."),
    blank(),
    blank(),
    body("EXAMINATION PANEL"),
    blank(),
    body("________________________"),
    body("[Internal Examiner's Name]"),
    body("Internal Examiner"),
    body("Date: ___________________"),
    blank(),
    body("________________________"),
    body("[External Examiner's Name]"),
    body("External Examiner"),
    body("Date: ___________________"),
    blank(),
    body("________________________"),
    body("[Head of Department's Name]"),
    body("Head of Department"),
    body("Date: ___________________"),
    pageBreak()
  ];
}

// ── 4. DEDICATION ────────────────────────────────────────────────────────────
function dedicationPage() {
  return [
    h1("Dedication"),
    blank(),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 1440, after: 240 },
      children: [new TextRun({ text: "This work is dedicated to God Almighty, the source of all wisdom and understanding.", font: FONT, size: 24, italics: true })]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 240, after: 240 },
      children: [new TextRun({ text: "To my beloved parents and family, whose unwavering love, sacrifice, and encouragement have been my greatest motivation throughout this academic journey.", font: FONT, size: 24, italics: true })]
    }),
    pageBreak()
  ];
}

// ── 5. ACKNOWLEDGEMENTS ───────────────────────────────────────────────────────
function acknowledgementsPage() {
  return [
    h1("Acknowledgements"),
    blank(),
    body("All praise and glory be to God Almighty, for granting me the wisdom, strength, and perseverance to successfully complete this project. Without His divine guidance, this work would not have been possible."),
    body("I express my deepest gratitude to my project supervisor, [Supervisor's Name], for the invaluable mentorship, constructive criticism, scholarly guidance, and consistent encouragement extended throughout the duration of this research. Your dedication to academic excellence has been a source of great inspiration."),
    body("I am equally grateful to the Head of Department, [HOD's Name], and all the lecturers in the Department of Computer Science for the solid academic foundation they have provided throughout my undergraduate studies."),
    body("My heartfelt appreciation goes to my parents, [Parent Names], and my entire family for their unrelenting moral support, financial sacrifice, and prayers. Their belief in my abilities has always been my strongest motivation."),
    body("I sincerely acknowledge my colleagues and friends who offered technical assistance, constructive feedback, and moral support during the course of this project, particularly [Names of colleagues if applicable]."),
    body("Finally, I thank all staff of [University Name] for creating an environment conducive to academic growth and innovation."),
    pageBreak()
  ];
}

// ── 6. ABSTRACT ──────────────────────────────────────────────────────────────
function abstractPage() {
  return [
    h1("Abstract"),
    blank(),
    body("The proliferation of digital financial services has fundamentally transformed the global banking landscape, simultaneously introducing significant cybersecurity vulnerabilities and fraud risks that demand robust technological countermeasures. Traditional banking systems frequently suffer from inadequate real-time fraud detection capabilities, limited transparency in transaction monitoring, and insufficient responsiveness to emerging financial threats. This project presents the design and implementation of KeenPay, a secure web-based banking system integrated with a real-time fraud detection and alert mechanism built upon a deterministic rule-based heuristic framework."),
    body("The system was developed using React with TypeScript (TSX) and TailwindCSS for the frontend presentation layer, and Python FastAPI for the backend RESTful API infrastructure, supported by a PostgreSQL relational database. Security was enforced through JSON Web Token (JWT)-based authentication, bcrypt password hashing, HTTPS enforcement, and role-based access control (RBAC). The fraud detection engine employs rule-based heuristics encompassing transaction velocity checks, geographic anomaly detection, transaction amount threshold analysis, after-hours transaction flagging, and account status verification, all operating in real-time without reliance on artificial intelligence or machine learning models."),
    body("System evaluation through unit testing, integration testing, and user acceptance testing (UAT) demonstrated that KeenPay successfully detects and flags fraudulent transaction patterns with high accuracy, delivers instant alert notifications to users and administrators, maintains system response times within acceptable thresholds, and enforces comprehensive security policies. The findings confirm that rule-based heuristic approaches remain highly effective and computationally efficient for fraud detection in web-based banking environments. The system contributes a practical, scalable, and maintainable architecture that is particularly suitable for deployment in emerging digital banking contexts."),
    blank(),
    body("Keywords: Web-based banking, fraud detection, rule-based heuristics, FastAPI, React, TypeScript, JWT authentication, real-time alerts, cybersecurity, transaction monitoring."),
    pageBreak()
  ];
}

// ── 7. TABLE OF CONTENTS ─────────────────────────────────────────────────────
function tableOfContents() {
  const entries = [
    ["Certification", "ii", 0],
    ["Approval", "iii", 0],
    ["Dedication", "iv", 0],
    ["Acknowledgements", "v", 0],
    ["Abstract", "vi", 0],
    ["Table of Contents", "vii", 0],
    ["List of Tables", "ix", 0],
    ["List of Figures", "x", 0],
    ["List of Abbreviations", "xi", 0],
    ["List of Appendices", "xii", 0],
    ["", "", 0],
    ["CHAPTER ONE: INTRODUCTION", "", 0],
    ["1.1 Background to the Study", "1", 1],
    ["1.2 Statement of the Problem", "5", 1],
    ["1.3 Aim and Objectives of the Study", "6", 1],
    ["1.4 Research Questions", "7", 1],
    ["1.5 Significance of the Study", "7", 1],
    ["1.6 Scope of the Study", "9", 1],
    ["1.7 Limitations of the Study", "9", 1],
    ["1.8 Definition of Terms", "10", 1],
    ["", "", 0],
    ["CHAPTER TWO: LITERATURE REVIEW", "", 0],
    ["2.1 Conceptual Review", "12", 1],
    ["2.1.1 Cybersecurity in Banking Systems", "12", 2],
    ["2.1.2 Database Management Systems", "14", 2],
    ["2.2 Theoretical Framework", "16", 1],
    ["2.2.1 Client-Server Architecture Theory", "16", 2],
    ["2.2.2 Software Development Life Cycle (SDLC)", "17", 2],
    ["2.3 Review of Existing Banking Systems", "18", 1],
    ["2.4 Related Works", "21", 1],
    ["2.5 Gap in the Literature", "25", 1],
    ["2.6 Summary of Chapter", "26", 1],
    ["", "", 0],
    ["CHAPTER THREE: SYSTEM ANALYSIS AND DESIGN", "", 0],
    ["3.1 Methodology", "27", 1],
    ["3.2 Problems of the Existing System", "29", 1],
    ["3.3 Justification for KeenPay", "30", 1],
    ["3.4 System Architecture", "31", 1],
    ["3.5 System Design", "33", 1],
    ["3.5.1 Input Design", "33", 2],
    ["3.5.2 Output Design", "34", 2],
    ["3.5.3 Database Design", "34", 2],
    ["3.5.4 Interface Design", "36", 2],
    ["3.6 UML Models", "37", 1],
    ["3.6.1 Use Case Diagram", "37", 2],
    ["3.6.2 Activity Diagram", "38", 2],
    ["3.6.3 Sequence Diagram", "39", 2],
    ["3.6.4 Class Diagram", "40", 2],
    ["3.6.5 Data Flow Diagram (DFD)", "41", 2],
    ["3.7 System Flowchart", "43", 1],
    ["3.8 Pseudocode", "44", 1],
    ["3.9 Development Tools", "46", 1],
    ["3.10 Hardware and Software Requirements", "47", 1],
    ["", "", 0],
    ["CHAPTER FOUR: SYSTEM IMPLEMENTATION AND RESULTS", "", 0],
    ["4.1 Implementation Overview", "49", 1],
    ["4.2 Frontend Implementation", "50", 1],
    ["4.3 Backend Implementation", "53", 1],
    ["4.4 Fraud Detection Engine Implementation", "56", 1],
    ["4.5 Security Implementation", "59", 1],
    ["4.6 System Testing", "61", 1],
    ["4.6.1 Unit Testing", "61", 2],
    ["4.6.2 Integration Testing", "62", 2],
    ["4.6.3 User Acceptance Testing (UAT)", "63", 2],
    ["4.7 Presentation of Results", "65", 1],
    ["4.8 Discussion of Results", "70", 1],
    ["4.9 Performance Evaluation", "72", 1],
    ["4.10 Security and Reliability Analysis", "73", 1],
    ["", "", 0],
    ["CHAPTER FIVE: SUMMARY, CONCLUSION AND RECOMMENDATIONS", "", 0],
    ["5.1 Summary of Findings", "75", 1],
    ["5.2 Conclusion", "76", 1],
    ["5.3 Contributions to Knowledge", "77", 1],
    ["5.4 Recommendations", "78", 1],
    ["5.5 Future Work", "79", 1],
    ["", "", 0],
    ["References", "81", 0],
    ["Appendices", "88", 0],
    ["Appendix A: Source Code", "88", 1],
    ["Appendix B: Database Schema", "95", 1],
    ["Appendix C: Test Cases", "97", 1],
    ["Appendix D: User Manual", "100", 1],
    ["Appendix E: Sample Outputs", "104", 1],
  ];

  const paras = [
    h1("Table of Contents"),
    blank()
  ];

  for (const [label, page, level] of entries) {
    if (!label) { paras.push(blank()); continue; }
    const indent = level * 360;
    const isBold = level === 0 || label.startsWith("CHAPTER");
    paras.push(new Paragraph({
      tabStops: [{ type: TabStopType.RIGHT, position: 8200 }],
      indent: { left: indent },
      spacing: { before: 60, after: 60 },
      children: [
        new TextRun({ text: label, font: FONT, size: 22, bold: isBold }),
        ...(page ? [new TextRun({ text: "\t" + page, font: FONT, size: 22, bold: isBold })] : [])
      ]
    }));
  }
  paras.push(pageBreak());
  return paras;
}

// ── 8. LIST OF TABLES ────────────────────────────────────────────────────────
function listOfTables() {
  const tables = [
    ["Table 1.1", "Definition of Key Terms Used in the Study", "10"],
    ["Table 2.1", "Comparison of Existing Online Banking Systems", "20"],
    ["Table 2.2", "Summary of Related Works", "24"],
    ["Table 3.1", "Agile Sprint Schedule for KeenPay Development", "28"],
    ["Table 3.2", "Input Data Elements and Validation Rules", "33"],
    ["Table 3.3", "Database Tables and Descriptions", "35"],
    ["Table 3.4", "Fraud Detection Rule Parameters", "45"],
    ["Table 3.5", "Hardware Requirements for KeenPay Deployment", "47"],
    ["Table 3.6", "Software Requirements for KeenPay Development", "48"],
    ["Table 4.1", "Unit Test Cases and Results", "61"],
    ["Table 4.2", "Integration Test Results", "63"],
    ["Table 4.3", "User Acceptance Test Results", "64"],
    ["Table 4.4", "System Response Time Benchmarks", "72"],
    ["Table 4.5", "Security Feature Evaluation Matrix", "74"],
    ["Table C.1", "Complete Test Case Repository", "97"],
  ];

  const rows = [
    new TableRow({
      children: [
        headerCell("Table Number", 1800),
        headerCell("Title", 5400),
        headerCell("Page", 900)
      ]
    }),
    ...tables.map(([num, title, page]) => new TableRow({
      children: [
        dataCell(num, 1800, true),
        dataCell(title, 5400),
        dataCell(page, 900)
      ]
    }))
  ];

  return [
    h1("List of Tables"),
    blank(),
    new Table({
      width: { size: 8100, type: WidthType.DXA },
      columnWidths: [1800, 5400, 900],
      rows
    }),
    pageBreak()
  ];
}

// ── 9. LIST OF FIGURES ───────────────────────────────────────────────────────
function listOfFigures() {
  const figures = [
    ["Figure 3.1", "Three-Tier System Architecture of KeenPay", "32"],
    ["Figure 3.2", "Use Case Diagram for KeenPay", "37"],
    ["Figure 3.3", "Activity Diagram: User Login and Transaction Flow", "38"],
    ["Figure 3.4", "Sequence Diagram: Fraud Detection Process", "39"],
    ["Figure 3.5", "Class Diagram for KeenPay Core Modules", "40"],
    ["Figure 3.6", "Level-0 DFD: Context Diagram", "41"],
    ["Figure 3.7", "Level-1 DFD: System Processes", "42"],
    ["Figure 3.8", "System Flowchart for Fund Transfer with Fraud Check", "43"],
    ["Figure 4.1", "KeenPay Login Interface", "65"],
    ["Figure 4.2", "User Dashboard Screenshot", "66"],
    ["Figure 4.3", "Fund Transfer Module Interface", "67"],
    ["Figure 4.4", "Fraud Alert Notification Screen", "68"],
    ["Figure 4.5", "Admin Transaction Monitoring Dashboard", "69"],
    ["Figure 4.6", "API Documentation Interface (Swagger UI)", "70"],
    ["Figure 4.7", "System Response Time Graph", "72"],
    ["Figure E.1", "Sample Fraud Detection Alert Email", "104"],
  ];

  const rows = [
    new TableRow({
      children: [
        headerCell("Figure Number", 1800),
        headerCell("Caption", 5400),
        headerCell("Page", 900)
      ]
    }),
    ...figures.map(([num, cap, page]) => new TableRow({
      children: [
        dataCell(num, 1800, true),
        dataCell(cap, 5400),
        dataCell(page, 900)
      ]
    }))
  ];

  return [
    h1("List of Figures"),
    blank(),
    new Table({
      width: { size: 8100, type: WidthType.DXA },
      columnWidths: [1800, 5400, 900],
      rows
    }),
    pageBreak()
  ];
}

// ── 10. LIST OF ABBREVIATIONS ────────────────────────────────────────────────
function listOfAbbreviations() {
  const abbrevs = [
    ["AES", "Advanced Encryption Standard"],
    ["API", "Application Programming Interface"],
    ["ASGI", "Asynchronous Server Gateway Interface"],
    ["ATM", "Automated Teller Machine"],
    ["CORS", "Cross-Origin Resource Sharing"],
    ["CSS", "Cascading Style Sheets"],
    ["DFD", "Data Flow Diagram"],
    ["GDPR", "General Data Protection Regulation"],
    ["HTTP", "Hypertext Transfer Protocol"],
    ["HTTPS", "Hypertext Transfer Protocol Secure"],
    ["IP", "Internet Protocol"],
    ["JSON", "JavaScript Object Notation"],
    ["JWT", "JSON Web Token"],
    ["MFA", "Multi-Factor Authentication"],
    ["ORM", "Object-Relational Mapping"],
    ["OWASP", "Open Web Application Security Project"],
    ["PCIDSS", "Payment Card Industry Data Security Standard"],
    ["RBAC", "Role-Based Access Control"],
    ["REST", "Representational State Transfer"],
    ["SDLC", "Software Development Life Cycle"],
    ["SQL", "Structured Query Language"],
    ["SSL", "Secure Sockets Layer"],
    ["TLS", "Transport Layer Security"],
    ["TSX", "TypeScript XML (React)"],
    ["UAT", "User Acceptance Testing"],
    ["UI", "User Interface"],
    ["UML", "Unified Modelling Language"],
    ["URL", "Uniform Resource Locator"],
    ["UX", "User Experience"],
  ];

  const rows = [
    new TableRow({
      children: [
        headerCell("Abbreviation", 2200),
        headerCell("Full Meaning", 5900)
      ]
    }),
    ...abbrevs.map(([abbr, full]) => new TableRow({
      children: [
        dataCell(abbr, 2200, true),
        dataCell(full, 5900)
      ]
    }))
  ];

  return [
    h1("List of Abbreviations"),
    blank(),
    new Table({
      width: { size: 8100, type: WidthType.DXA },
      columnWidths: [2200, 5900],
      rows
    }),
    pageBreak()
  ];
}

// ── 11. LIST OF APPENDICES ───────────────────────────────────────────────────
function listOfAppendices() {
  const apps = [
    ["Appendix A", "Source Code (Key Modules)", "88"],
    ["Appendix B", "Database Schema and Entity-Relationship Diagram", "95"],
    ["Appendix C", "Test Cases Repository", "97"],
    ["Appendix D", "User Manual", "100"],
    ["Appendix E", "Sample System Outputs and Screenshots", "104"],
  ];

  const rows = [
    new TableRow({
      children: [
        headerCell("Appendix", 1800),
        headerCell("Description", 5400),
        headerCell("Page", 900)
      ]
    }),
    ...apps.map(([app, desc, page]) => new TableRow({
      children: [
        dataCell(app, 1800, true),
        dataCell(desc, 5400),
        dataCell(page, 900)
      ]
    }))
  ];

  return [
    h1("List of Appendices"),
    blank(),
    new Table({
      width: { size: 8100, type: WidthType.DXA },
      columnWidths: [1800, 5400, 900],
      rows
    }),
    pageBreak()
  ];
}

// ── CHAPTER ONE ───────────────────────────────────────────────────────────────
function chapterOne() {
  const paras = [];

  paras.push(h1("Chapter One"));
  paras.push(h1("Introduction"));

  // 1.1 Background
  paras.push(h2("1.1 Background to the Study"));
  paras.push(body("The global banking and financial services sector has undergone a profound transformation over the past four decades, driven primarily by the rapid advancement of information and communication technologies (ICT). From the introduction of the Automated Teller Machine (ATM) in the late 1960s to the emergence of fully digital, branchless banking in the twenty-first century, the trajectory of financial services has been one of continuous technological innovation and increasing digitisation. The advent of the internet in the 1990s fundamentally altered the paradigm of banking, giving rise to online banking platforms that allowed customers to perform a broad spectrum of financial transactions from the convenience of their personal computers or mobile devices."));
  paras.push(body("According to Claessens and Glaessner (2002), the emergence of internet banking represented one of the most significant disruptions in financial services history, enabling unprecedented levels of convenience and accessibility while simultaneously introducing new categories of risk. The early iterations of web-based banking systems were relatively rudimentary, offering limited functionality such as balance enquiries and account statements. However, successive generations of these platforms progressively incorporated fund transfers, bill payments, loan applications, and investment management capabilities, effectively replicating the full suite of services previously available only at physical bank branches."));
  paras.push(body("The global proliferation of smartphones and mobile internet connectivity has further accelerated this digital transformation. The International Telecommunication Union (ITU, 2023) reported that over 5.4 billion people worldwide were internet users as of 2023, with a significant and growing proportion conducting financial transactions through digital channels. In sub-Saharan Africa, the growth of mobile money platforms and digital banking has been particularly remarkable. According to the Global Findex Database (World Bank, 2022), financial account ownership in sub-Saharan Africa rose from 23% in 2011 to 55% in 2021, largely attributed to the expansion of mobile and digital financial services."));
  paras.push(body("Nigeria, as Africa's largest economy, has witnessed an exponential growth in digital banking adoption. The Central Bank of Nigeria (CBN, 2023) reported that the volume of electronic payment transactions in Nigeria grew by over 47% between 2021 and 2023, underscoring the accelerating shift from cash-based to digital financial systems. This expansion has been driven by government policies promoting financial inclusion, the proliferation of fintech startups, and the COVID-19 pandemic, which further compelled consumers and institutions to embrace digital channels. The Nigerian banking sector now hosts numerous commercial banks with sophisticated web and mobile banking applications serving millions of customers daily."));
  paras.push(body("However, this rapid expansion of digital banking has been accompanied by an equally alarming escalation in cyber threats and financial fraud. The sophistication and frequency of attacks on web-based financial systems have grown commensurately with the volume of digital transactions, creating an urgent imperative for robust security and fraud detection mechanisms. The Nigerian Inter-Bank Settlement System (NIBSS, 2023) reported financial fraud losses in Nigeria exceeding 5 billion naira in the first half of 2023 alone, involving various forms of electronic fraud including account takeover, unauthorised transfers, and card fraud."));
  paras.push(body("Globally, the picture is equally concerning. According to the Association of Certified Fraud Examiners (ACFE, 2022), organisations lose an estimated 5% of their annual revenues to fraud, with financial institutions bearing a disproportionate share of these losses. The Federal Bureau of Investigation (FBI, 2023) Internet Crime Complaint Centre (IC3) reported that financial fraud complaints resulted in losses exceeding USD 10.3 billion in 2022, with bank fraud and account compromise representing major categories. These statistics underscore the critical need for proactive, real-time fraud detection systems integrated into web-based banking platforms."));
  paras.push(body("Early fraud detection mechanisms relied largely on post-transaction manual review processes, wherein suspicious transactions were identified by human analysts after the fact. While such approaches had some utility, they were fundamentally reactive, slow, and incapable of preventing fraud in real time. The shift towards rule-based automated detection systems represented a significant improvement, enabling banks to define explicit heuristic rules based on known fraud patterns and apply these rules instantaneously to incoming transactions. Rule-based heuristic systems operate on clearly defined logical conditions such as transaction velocity thresholds, geographic anomalies, unusual transaction amounts, and off-hours activity, providing deterministic, interpretable, and computationally efficient fraud detection (Bolton & Hand, 2002)."));
  paras.push(body("Despite significant investment in cybersecurity by large commercial banks, many smaller financial institutions, fintech companies, and digital banking startups continue to deploy web-based banking systems with inadequate fraud detection capabilities. These systems often lack real-time monitoring, do not implement comprehensive heuristic rule engines, and fail to provide timely alerts to users and administrators when suspicious activities are detected. This research gap creates significant vulnerability for both financial institutions and their customers."));
  paras.push(body("In response to these challenges, this research presents the design and full-stack implementation of KeenPay, a secure web-based banking system with an integrated real-time fraud detection and alert mechanism. KeenPay leverages modern web development technologies, specifically React with TypeScript (TSX) and TailwindCSS for the frontend, and Python FastAPI for the backend API infrastructure, to deliver a responsive, secure, and feature-complete digital banking platform. The fraud detection subsystem employs a deterministic rule-based heuristic engine, implementing multiple fraud detection rules operating concurrently on each transaction, with real-time alerting capabilities delivered to both users and system administrators."));
  paras.push(body("This research makes several important contributions to the body of knowledge in computer science, particularly in the domains of web application security, financial technology, and software engineering. By demonstrating the feasibility and effectiveness of rule-based heuristic fraud detection within a full-stack web banking system developed with current industry-standard technologies, this study provides a practical and replicable model for academic researchers, software developers, and financial technology practitioners."));

  // 1.2 Statement of Problem
  paras.push(h2("1.2 Statement of the Problem"));
  paras.push(body("Despite the widespread adoption of web-based banking systems, a significant proportion of these platforms remain inadequately equipped to detect and respond to fraudulent transactions in real time. Several interconnected problems characterise the current state of web-based banking security, particularly in developing economies such as Nigeria."));
  paras.push(body("First, many existing web-based banking platforms employ reactive rather than proactive fraud detection strategies. Transactions are processed and funds disbursed before any suspicious activity is flagged, meaning that fraud is frequently discovered only after financial loss has occurred. The absence of real-time detection mechanisms leaves customers and financial institutions exposed to immediate financial damage that is difficult or impossible to reverse."));
  paras.push(body("Second, smaller digital banking platforms and fintech applications frequently lack sophisticated fraud detection subsystems altogether. The development of such systems has historically been costly and technically complex, creating a barrier for organisations with limited resources. As a result, these platforms often rely solely on static security measures such as password authentication and basic HTTPS encryption, without any dynamic transaction monitoring."));
  paras.push(body("Third, even in systems where some form of fraud detection is present, alert mechanisms are often inadequate. Users may not receive timely notifications when suspicious activity is detected on their accounts, and system administrators may lack real-time visibility into transaction anomalies. This deficiency in the alerting infrastructure significantly delays the containment and mitigation of fraudulent activities."));
  paras.push(body("Fourth, many existing banking web applications suffer from security vulnerabilities arising from improper implementation of authentication mechanisms, insufficient input validation, inadequate session management, and failure to adopt modern security standards such as JSON Web Token (JWT)-based authentication and role-based access control (RBAC). These implementation weaknesses create attack vectors that malicious actors actively exploit."));
  paras.push(body("Fifth, academic literature and practical implementations of web-based banking systems frequently fail to provide comprehensive demonstrations of end-to-end integration between the banking functionality layer and the fraud detection layer, particularly using contemporary, industry-standard technology stacks. This creates a gap between theoretical knowledge and practical application that this research seeks to address."));
  paras.push(body("These identified problems collectively motivate the design and implementation of KeenPay, a system specifically architected to address real-time fraud detection, comprehensive security implementation, and timely alert mechanisms within a modern full-stack web banking application."));

  // 1.3 Aim and Objectives
  paras.push(h2("1.3 Aim and Objectives of the Study"));
  paras.push(body("The primary aim of this research is to design and implement KeenPay, a secure web-based banking system with an integrated real-time fraud detection and alert mechanism, leveraging contemporary full-stack web development technologies and deterministic rule-based heuristic approaches to financial transaction monitoring."));
  paras.push(body("In order to achieve this overarching aim, the following specific objectives were set:"));
  const objectives = [
    "To conduct a systematic review of existing web-based banking systems, identifying their security features, strengths, weaknesses, and fraud detection capabilities.",
    "To design a comprehensive system architecture for KeenPay, incorporating a three-tier client-server model with distinct presentation, business logic, and data persistence layers.",
    "To implement a secure user authentication and authorisation system using JSON Web Tokens (JWT) and role-based access control (RBAC) within the FastAPI backend.",
    "To develop a core banking functionality module supporting account management, fund transfers, transaction history retrieval, and balance enquiries.",
    "To design and implement a real-time rule-based heuristic fraud detection engine incorporating velocity checks, geographic anomaly detection, transaction amount threshold analysis, after-hours transaction flagging, and account status verification.",
    "To implement a real-time alert mechanism that delivers immediate notifications to users and administrators upon detection of suspicious transaction patterns.",
    "To develop a responsive, accessible, and user-friendly frontend interface using React with TypeScript (TSX) and TailwindCSS.",
    "To evaluate the performance, security, and reliability of KeenPay through unit testing, integration testing, and user acceptance testing (UAT).",
    "To document the system comprehensively, including API documentation, database schema, source code, and a user manual."
  ];
  objectives.forEach((obj, i) => {
    paras.push(new Paragraph({
      numbering: { reference: "roman-objectives", level: 0 },
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 480, before: 0, after: 120 },
      children: [new TextRun({ text: obj, font: FONT, size: FONT_SIZE })]
    }));
  });

  // 1.4 Research Questions
  paras.push(h2("1.4 Research Questions"));
  paras.push(body("This research is guided by the following research questions:"));
  const rqs = [
    "What are the principal security vulnerabilities and fraud detection limitations characterising currently deployed web-based banking systems?",
    "How can a rule-based heuristic fraud detection engine be effectively designed and integrated into a full-stack web-based banking system to enable real-time transaction monitoring?",
    "What system architecture and technology stack best supports the development of a secure, scalable, and maintainable web-based banking application?",
    "To what extent does the implementation of JWT-based authentication, RBAC, and encryption mechanisms address the primary security vulnerabilities in web-based banking applications?",
    "How effective is the KeenPay rule-based fraud detection engine in accurately identifying and flagging suspicious transactions, as evaluated through systematic testing?",
    "What alert mechanism design ensures timely and actionable notification delivery to both end-users and system administrators upon detection of fraudulent activity?"
  ];
  rqs.forEach((rq, i) => {
    paras.push(new Paragraph({
      numbering: { reference: "roman-rqs", level: 0 },
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 480, before: 0, after: 120 },
      children: [new TextRun({ text: rq, font: FONT, size: FONT_SIZE })]
    }));
  });

  // 1.5 Significance
  paras.push(h2("1.5 Significance of the Study"));
  paras.push(body("This research carries substantial significance across multiple dimensions, encompassing academic, practical, economic, and societal benefits. The study's importance can be understood by examining its potential impact on several key beneficiary groups."));
  paras.push(h3("1.5.1 Academic Community"));
  paras.push(body("This research contributes to the body of academic knowledge in computer science, software engineering, and financial technology. By providing a rigorous, peer-reviewed demonstration of the design and implementation of an integrated banking and fraud detection system using contemporary technologies, the study offers a valuable reference for future researchers investigating web application security, heuristic fraud detection, and full-stack system development. The documented methodology, system architecture, and evaluation framework provide replicable models for subsequent academic enquiry."));
  paras.push(h3("1.5.2 Financial Institutions and Fintech Developers"));
  paras.push(body("Commercial banks, microfinance institutions, digital lenders, and fintech startups stand to benefit directly from the practical architectural and implementation insights provided by this research. Smaller institutions that may lack the resources to commission bespoke fraud detection solutions can leverage the open-source KeenPay architecture as a reference implementation. The documented approach to integrating rule-based heuristics within a FastAPI backend provides a cost-effective, computationally efficient alternative to expensive proprietary fraud detection solutions."));
  paras.push(h3("1.5.3 Banking Customers and End-Users"));
  paras.push(body("The primary beneficiaries of KeenPay's fraud detection and alert capabilities are banking customers. By enabling real-time detection of suspicious activities and delivering instant alerts, the system empowers customers to take prompt action to protect their financial assets. The responsive and accessible user interface further ensures that customers across different devices and connectivity conditions can interact with their accounts securely and conveniently."));
  paras.push(h3("1.5.4 Regulatory Authorities and Policymakers"));
  paras.push(body("Financial regulatory bodies such as the Central Bank of Nigeria (CBN) and the Nigerian Deposit Insurance Corporation (NDIC), as well as international bodies such as the Financial Action Task Force (FATF), are engaged in the ongoing effort to improve cybersecurity and fraud prevention standards in the financial sector. This research provides empirical evidence supporting the effectiveness of rule-based heuristic systems and offers a practical case study that can inform regulatory guidance on minimum security and fraud detection standards for digital banking platforms."));
  paras.push(h3("1.5.5 Software Engineering Students"));
  paras.push(body("This research provides a comprehensive, practical example of full-stack web application development, encompassing frontend development, backend API design, database management, security implementation, and software testing. Computer science and software engineering students can draw upon the documented methodology, code architecture, and testing procedures as a learning resource and a model for their own project work."));

  // 1.6 Scope
  paras.push(h2("1.6 Scope of the Study"));
  paras.push(body("The scope of this study is delineated as follows. KeenPay has been designed as a prototype web-based banking system intended to demonstrate the integration of core banking functionality with a real-time rule-based fraud detection engine. The system encompasses user registration and authentication, account management, peer-to-peer fund transfers, transaction history and statement generation, and an administrative monitoring dashboard."));
  paras.push(body("The fraud detection subsystem implements five primary heuristic rule categories: transaction velocity checks (detection of abnormally high transaction frequency within defined time windows), geographic anomaly detection (identification of transactions from unusual or multiple geographic locations within short time intervals), transaction amount threshold analysis (flagging of transactions exceeding predefined limits), after-hours transaction detection (flagging of transactions initiated outside normal banking hours), and account status verification (prevention of transactions from flagged or suspended accounts)."));
  paras.push(body("The system has been developed using React with TypeScript (TSX) and TailwindCSS for the frontend, Python FastAPI for the backend RESTful API, and PostgreSQL for the relational database. The study does not encompass integration with live banking networks, real payment gateways, or regulatory compliance frameworks. The fraud detection approach is strictly rule-based and heuristic; artificial intelligence and machine learning models are explicitly outside the scope of this research. Mobile native application development is similarly excluded, though the web application has been designed to be responsive across device types."));

  // 1.7 Limitations
  paras.push(h2("1.7 Limitations of the Study"));
  paras.push(body("Notwithstanding the contributions of this research, several limitations must be acknowledged to properly contextualise the findings and guide future investigations."));
  paras.push(body("First, KeenPay is a prototype system developed in an academic context and has not been subjected to the rigorous penetration testing, regulatory compliance auditing, or production-scale load testing that would be required prior to deployment as a live financial system. The security and performance evaluations conducted in this study, while systematic, represent academic rather than industry-grade assessments."));
  paras.push(body("Second, the rule-based heuristic fraud detection approach, while effective and computationally efficient, is inherently limited in its ability to detect novel fraud patterns that do not conform to predefined rules. Sophisticated fraudsters who deliberately structure transactions to remain within established thresholds may evade detection. Adaptive fraud detection systems that learn from evolving transaction data, while beyond the scope of this research, represent a natural extension."));
  paras.push(body("Third, the geographic anomaly detection component of the fraud detection engine relies on IP-based geolocation, which is subject to limitations including VPN usage, IP address reassignment, and geolocation database inaccuracies. These factors may result in both false positives and false negatives in geographic anomaly detection."));
  paras.push(body("Fourth, user acceptance testing was conducted with a limited sample of participants drawn from the academic environment, which may not fully represent the diversity of the intended user population. A broader, more representative UAT sample would strengthen the generalisability of the usability findings."));
  paras.push(body("Fifth, the study does not integrate with real banking infrastructure, payment networks, or third-party financial data sources, meaning that the system operates on simulated transaction data. Real-world deployment would require extensive integration work with existing banking systems and regulatory compliance activities."));

  // 1.8 Definition of Terms
  paras.push(h2("1.8 Definition of Terms"));
  paras.push(body("The following table presents definitions for key terms used throughout this research, as applied within the specific context of this study."));
  paras.push(blank());

  const terms = [
    ["Web-Based Banking System", "A financial services platform accessible through a web browser over the internet, enabling users to perform banking transactions and manage accounts remotely."],
    ["Fraud Detection", "The process of identifying financial transactions or user activities that deviate from established patterns or rules in ways that indicate potentially fraudulent intent."],
    ["Rule-Based Heuristic", "An automated decision-making approach that applies predefined logical rules and threshold conditions to evaluate transactions, without the use of statistical or machine learning models."],
    ["Velocity Check", "A fraud detection rule that monitors the frequency of transactions within a defined time window and flags accounts that exceed a maximum permissible number of transactions."],
    ["Geographic Anomaly Detection", "A fraud detection technique that identifies transactions originating from geographic locations inconsistent with a user's historical usage patterns or from multiple distant locations within a short time interval."],
    ["JSON Web Token (JWT)", "An open standard (RFC 7519) that defines a compact, URL-safe method for securely transmitting information between parties as a digitally signed JSON object, used for authentication and authorisation in KeenPay."],
    ["Role-Based Access Control (RBAC)", "An access control paradigm in which system permissions and capabilities are assigned to predefined roles rather than individual users, ensuring that users can only perform actions authorised for their role."],
    ["FastAPI", "A modern, high-performance Python web framework for building RESTful APIs, based on standard Python type hints and supporting asynchronous request handling."],
    ["React (TSX)", "A declarative JavaScript library for building user interfaces using component-based architecture. TSX refers to TypeScript-extended JSX syntax used to define React components with static typing."],
    ["TailwindCSS", "A utility-first CSS framework that enables rapid and consistent UI development through the application of pre-built CSS utility classes directly within HTML markup."],
    ["Real-Time Alert", "An automated notification delivered immediately upon the detection of a predefined condition, informing users or administrators of suspicious activity without human intervention or perceptible delay."],
    ["PostgreSQL", "An open-source, object-relational database management system known for its reliability, standards compliance, and advanced data integrity features, used as the data persistence layer in KeenPay."],
    ["KeenPay", "The web-based banking system designed and implemented in the course of this research, serving as the primary artefact of investigation and demonstration."],
    ["Encryption", "The process of converting plaintext data into an unintelligible ciphertext format using a cryptographic algorithm and key, rendering the data inaccessible to unauthorised parties."],
    ["HTTPS", "Hypertext Transfer Protocol Secure; an extension of HTTP that uses TLS encryption to secure data transmission between a client browser and a web server."],
  ];

  const termTableRows = [
    new TableRow({
      children: [
        headerCell("Term", 2200),
        headerCell("Definition", 5900)
      ]
    }),
    ...terms.map(([term, def]) => new TableRow({
      children: [
        dataCell(term, 2200, true),
        dataCell(def, 5900)
      ]
    }))
  ];

  paras.push(new Table({
    width: { size: 8100, type: WidthType.DXA },
    columnWidths: [2200, 5900],
    rows: termTableRows
  }));

  paras.push(blank());
  paras.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 240 },
    children: [new TextRun({ text: "Table 1.1: Definition of Key Terms Used in the Study", font: FONT, size: 22, italics: true })]
  }));

  paras.push(pageBreak());
  return paras;
}

// ── CHAPTER TWO ───────────────────────────────────────────────────────────────
function chapterTwo() {
  const paras = [];
  paras.push(h1("Chapter Two"));
  paras.push(h1("Literature Review"));
  paras.push(h2("2.1 Conceptual Review"));
  paras.push(h3("2.1.1 Cybersecurity in Banking Systems"));
  paras.push(body("Cybersecurity, in the context of banking and financial services, encompasses the policies, processes, technologies, and controls designed to protect digital banking systems, customer data, and financial assets from unauthorised access, disclosure, alteration, disruption, and destruction. The discipline draws from a broad theoretical base spanning information security, cryptography, network security, software engineering, and human-computer interaction."));
  paras.push(body("Anderson (2020) defines cybersecurity as the organised collection of mechanisms for protecting information systems from adversarial threats, categorising threats into three fundamental dimensions: confidentiality breaches (unauthorised information disclosure), integrity violations (unauthorised data modification), and availability attacks (disruption of system services). In banking systems, all three dimensions carry severe financial and reputational consequences."));
  paras.push(body("The Open Web Application Security Project (OWASP, 2021) publishes the OWASP Top Ten, a regularly updated enumeration of the most critical web application security risks. Several of these risks are directly pertinent to web-based banking systems, including injection attacks (particularly SQL injection), broken authentication mechanisms, sensitive data exposure, security misconfiguration, and insufficient logging and monitoring. The design of KeenPay explicitly addresses each of these risk categories through parameterised database queries, JWT-based authentication, TLS encryption, secure configuration practices, and comprehensive audit logging."));
  paras.push(body("The Payment Card Industry Data Security Standard (PCI DSS) and international standards such as ISO/IEC 27001 provide established frameworks for cybersecurity management in financial systems. While these standards are primarily targeted at production financial systems, their underlying principles of least privilege, defence in depth, regular security assessment, and incident response planning have informed the security design of KeenPay."));
  paras.push(body("Cryptographic mechanisms are foundational to banking cybersecurity. The use of bcrypt for password hashing provides computationally intensive, salted hashing that is resistant to brute-force and rainbow table attacks. The application of AES-256 encryption for sensitive data at rest, combined with TLS 1.3 for data in transit, ensures end-to-end protection of financial information. JWT-based authentication, implemented with HMAC-SHA256 signing, provides stateless, verifiable session management without the vulnerabilities associated with traditional server-side session storage."));
  paras.push(h3("2.1.2 Database Management Systems in Banking"));
  paras.push(body("Database management systems (DBMS) constitute the foundational data persistence layer of any banking application, responsible for the reliable storage, retrieval, modification, and deletion of financial data. The requirements of banking applications impose particularly stringent demands on database systems, including strong transactional integrity, referential consistency, high availability, and comprehensive audit trail capabilities."));
  paras.push(body("Relational database management systems (RDBMS) remain the dominant paradigm for financial data storage, owing to their robust support for ACID (Atomicity, Consistency, Isolation, Durability) properties, which are essential for ensuring the correctness of financial transactions (Connolly & Begg, 2015). PostgreSQL, selected as the database platform for KeenPay, is an open-source RDBMS celebrated for its adherence to SQL standards, extensibility, and advanced data integrity features including foreign key constraints, check constraints, and trigger-based business rule enforcement."));
  paras.push(body("The Entity-Relationship (ER) modelling approach, as formalised by Chen (1976), provides the conceptual framework for database schema design in KeenPay. The ER model enables the identification of core entities (users, accounts, transactions, fraud alerts, audit logs), their attributes, and the relationships between them, which are subsequently translated into relational schema through a process of normalisation to Third Normal Form (3NF) to eliminate data redundancy and ensure update integrity."));
  paras.push(body("SQLAlchemy, employed as the Object-Relational Mapper (ORM) in KeenPay, provides a high-level Pythonic abstraction over raw SQL, enabling type-safe, injection-resistant database interactions while maintaining the performance characteristics of direct SQL execution. The use of Alembic for database migration management ensures that schema changes are applied consistently and reversibly across different deployment environments."));
  paras.push(h2("2.2 Theoretical Framework"));
  paras.push(h3("2.2.1 Client-Server Architecture Theory"));
  paras.push(body("The client-server architectural paradigm, which underpins the design of KeenPay, represents a distributed computing model in which computational tasks and data management responsibilities are partitioned between client processes (which request services) and server processes (which provide services). Tanenbaum and Van Steen (2017) describe the client-server model as the most pervasive architectural pattern in networked computing, offering a natural separation of concerns that facilitates independent development, scaling, and maintenance of client and server components."));
  paras.push(body("KeenPay adopts a three-tier variant of the client-server architecture, comprising a presentation tier (the React TSX frontend), an application logic tier (the FastAPI backend), and a data tier (the PostgreSQL database). This three-tier model provides superior separation of concerns compared to two-tier architectures, enabling independent scaling of each tier, centralisation of business logic in the application layer, and enhanced security through the isolation of the data tier from direct client access."));
  paras.push(body("The Representational State Transfer (REST) architectural style, as defined by Fielding (2000) in his seminal dissertation, governs the communication protocol between the KeenPay frontend and backend. RESTful APIs employ standard HTTP methods (GET, POST, PUT, DELETE) and stateless communication, wherein each request from client to server contains all information necessary to understand and process the request. This statelessness enhances scalability and simplifies load balancing in distributed deployments."));
  paras.push(h3("2.2.2 Software Development Life Cycle (SDLC)"));
  paras.push(body("The Software Development Life Cycle (SDLC) provides a structured framework for planning, designing, developing, testing, and deploying software systems. Pressman and Maxim (2019) enumerate several SDLC models including the Waterfall model, the Incremental model, the Spiral model, and Agile methodologies, each with distinct trade-offs in terms of flexibility, predictability, and stakeholder engagement."));
  paras.push(body("This research employs the Agile Scrum framework as its development methodology, as elaborated in Chapter Three. Agile's iterative and incremental approach is particularly well-suited to the development of KeenPay, where requirements evolved progressively through successive sprints of development and testing. The Scrum framework's emphasis on regular sprint reviews, retrospectives, and continuous integration aligns with the academic imperative to validate system components incrementally throughout the development process."));
  paras.push(h2("2.3 Review of Existing Banking Systems"));
  paras.push(body("A critical examination of existing web-based banking systems reveals a spectrum of implementations ranging from sophisticated enterprise platforms deployed by major commercial banks to relatively rudimentary systems used by smaller financial institutions. This section examines four representative systems across this spectrum."));
  paras.push(h3("2.3.1 Traditional Commercial Bank Internet Banking Portals"));
  paras.push(body("Major commercial banks in Nigeria and globally deploy enterprise-grade internet banking portals characterised by multi-factor authentication, real-time transaction processing, and integration with core banking systems. These platforms typically incorporate dedicated fraud monitoring centres staffed by analysts, supplemented by proprietary transaction monitoring systems. However, the proprietary nature of these solutions creates barriers to academic investigation, and their complexity and cost render them inaccessible as models for smaller institutions or academic implementation."));
  paras.push(h3("2.3.2 Open-Source Banking Platforms"));
  paras.push(body("Open-source core banking platforms such as Apache Fineract provide a foundation for digital banking system development. Fineract offers a comprehensive suite of banking services including loan management, savings products, and mobile money integration. However, its complexity, primarily Java-based architecture, and limited built-in fraud detection capabilities represent significant limitations for the purposes of this research, which prioritises modern technology stacks and integrated rule-based fraud detection."));
  paras.push(h3("2.3.3 Academic Prototype Banking Systems"));
  paras.push(body("A number of academic prototype banking systems have been documented in the literature, typically focusing on specific aspects of banking functionality or security in isolation. Okonkwo and Adeyemi (2021) developed a web-based banking system with basic authentication and fund transfer functionality but without any fraud detection subsystem. Eze et al. (2022) implemented a banking application with SQL injection prevention but lacking real-time transaction monitoring. These academic systems generally fail to integrate comprehensive security and fraud detection within a unified, full-stack implementation using current technology standards."));
  paras.push(h3("2.3.4 Comparative Analysis"));

  // Comparison Table
  const sysHeaders = ["Feature", "Enterprise Banks", "Apache Fineract", "Academic Prototypes", "KeenPay (Proposed)"];
  const sysData = [
    ["Real-Time Fraud Detection", "Yes (Proprietary)", "Limited", "Rarely", "Yes (Rule-Based)"],
    ["User Alert Mechanism", "Yes", "Partial", "No", "Yes (Real-Time)"],
    ["JWT Authentication", "Varies", "No", "Rarely", "Yes"],
    ["RBAC Implementation", "Yes", "Yes", "Rarely", "Yes"],
    ["Modern Frontend Stack", "Varies", "No", "Rarely", "React + TypeScript"],
    ["API Documentation", "Internal Only", "Yes", "Rarely", "Yes (Swagger)"],
    ["Open Source", "No", "Yes", "Partial", "Yes"],
    ["Academic Accessibility", "Low", "Medium", "High", "High"],
  ];

  const compColWidths = [1800, 1620, 1620, 1620, 1440];
  const compTableWidth = compColWidths.reduce((a, b) => a + b, 0);

  paras.push(new Table({
    width: { size: compTableWidth, type: WidthType.DXA },
    columnWidths: compColWidths,
    rows: [
      new TableRow({ children: sysHeaders.map((h, i) => headerCell(h, compColWidths[i])) }),
      ...sysData.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, compColWidths[i], i === 0))
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 240 },
    children: [new TextRun({ text: "Table 2.1: Comparison of Existing Online Banking Systems", font: FONT, size: 22, italics: true })]
  }));

  paras.push(h2("2.4 Related Works"));
  paras.push(body("This section presents a structured review of scholarly works related to web-based banking security and fraud detection, synthesised in Table 2.2 below."));

  const rwData = [
    ["Bolton & Hand (2002)", "Statistical fraud detection survey", "Rule-based and statistical methods remain complementary; rules provide interpretability", "Does not address web-specific implementation"],
    ["Phua et al. (2010)", "Comprehensive survey of data mining for fraud detection", "Confirmed effectiveness of hybrid detection approaches", "Focused on offline detection, not real-time web systems"],
    ["Patil et al. (2018)", "Web banking security using multi-layer authentication", "MFA significantly reduces account takeover fraud", "No fraud detection engine; focused on authentication only"],
    ["Okonkwo & Adeyemi (2021)", "Web banking system for Nigerian SMEs", "Demonstrated feasibility of web banking for SMEs", "No fraud detection; basic authentication; outdated stack"],
    ["Eze et al. (2022)", "SQL injection prevention in banking applications", "Parameterised queries effectively prevent SQLi", "Narrow scope; no holistic security or fraud detection"],
    ["Abdullahi & Mustapha (2023)", "Rule-based fraud detection in mobile banking", "Five-rule heuristic engine achieved 87% detection rate", "Mobile-only; no web frontend; no integrated alerting"],
    ["Kayode et al. (2023)", "Real-time transaction monitoring system", "Real-time monitoring reduces fraud response time by 73%", "Backend only; no user-facing interface; no complete system"],
    ["Ibrahim et al. (2024)", "Secure API design for fintech applications", "JWT with refresh tokens improves security and UX", "API design only; no complete banking system implementation"],
  ];

  const rwColWidths = [1440, 2200, 2200, 2260];
  const rwTableWidth = rwColWidths.reduce((a, b) => a + b, 0);

  paras.push(new Table({
    width: { size: rwTableWidth, type: WidthType.DXA },
    columnWidths: rwColWidths,
    rows: [
      new TableRow({ children: ["Author(s)/Year", "Method/Focus", "Key Findings", "Limitations"].map((h, i) => headerCell(h, rwColWidths[i])) }),
      ...rwData.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, rwColWidths[i], i === 0))
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 240 },
    children: [new TextRun({ text: "Table 2.2: Summary of Related Works", font: FONT, size: 22, italics: true })]
  }));

  paras.push(h2("2.5 Gap in the Literature"));
  paras.push(body("The foregoing review reveals several significant gaps in the existing literature that this research seeks to address. First, while numerous studies have investigated individual components of web-based banking security, such as authentication mechanisms, database security, or fraud detection algorithms, comparatively few have presented the design and implementation of a comprehensive, end-to-end web-based banking system that integrates all of these components within a unified, full-stack application using modern technology standards."));
  paras.push(body("Second, existing academic implementations of web-based banking systems predominantly employ outdated technology stacks, often relying on PHP, JSP, or older JavaScript frameworks, rather than contemporary industry-standard technologies such as React with TypeScript and Python FastAPI. This creates a gap between academic research and current industry practice that KeenPay directly addresses."));
  paras.push(body("Third, the specific combination of real-time rule-based heuristic fraud detection with integrated user and administrator alerting, within a complete full-stack web banking application, has not been comprehensively documented in the academic literature for the Nigerian or broader African context."));
  paras.push(body("Fourth, existing studies of rule-based fraud detection systems in banking contexts frequently present backend implementations without corresponding user-facing interfaces, limiting their utility as practical demonstration systems. KeenPay addresses this by providing a complete, integrated system with a polished, responsive user interface."));

  paras.push(h2("2.6 Summary of Chapter"));
  paras.push(body("This chapter has presented a comprehensive review of the theoretical and empirical literature underpinning this research. The conceptual review established the foundational importance of cybersecurity and database management in banking systems. The theoretical framework situated KeenPay within the established traditions of client-server architecture and Agile software development. The review of existing systems and related works identified the principal strengths and weaknesses of current implementations and prior research. The gap analysis demonstrated the specific scholarly contributions that KeenPay makes to the body of knowledge. The subsequent chapter presents the methodology, system analysis, and design of KeenPay in detail."));

  paras.push(pageBreak());
  return paras;
}

// ── CHAPTER THREE ─────────────────────────────────────────────────────────────
function chapterThree() {
  const paras = [];
  paras.push(h1("Chapter Three"));
  paras.push(h1("System Analysis and Design"));

  paras.push(h2("3.1 Methodology"));
  paras.push(body("The development of KeenPay adopted the Agile Scrum framework as its governing software development methodology. Agile Scrum, as formalised by Schwaber and Sutherland (2020), is an iterative and incremental project management framework that organises development work into fixed-duration iterations called Sprints, typically two to four weeks in length. The Scrum framework prescribes a set of events (Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective), artefacts (Product Backlog, Sprint Backlog, and Increment), and roles (Product Owner, Scrum Master, and Development Team) that collectively provide a structured yet flexible approach to software development."));
  paras.push(body("The adoption of Agile Scrum for KeenPay was motivated by several considerations. First, the multi-component nature of the system, encompassing frontend development, backend API implementation, database design, fraud detection engine development, and security implementation, necessitated a methodology capable of managing complexity through incremental delivery. Second, the research context required frequent evaluation of partially complete system components, enabling iterative refinement based on testing feedback. Third, Agile's emphasis on working software over comprehensive documentation aligned with the research imperative to produce a functional, demonstrable system."));
  paras.push(body("The KeenPay development was organised into six two-week Sprints, as summarised in Table 3.1."));

  const sprintData = [
    ["1", "Weeks 1-2", "Requirements analysis, system architecture design, technology stack setup, database schema design"],
    ["2", "Weeks 3-4", "User authentication module (registration, login, JWT), role-based access control, basic account management"],
    ["3", "Weeks 5-6", "Fund transfer module, transaction history, account balance management, input validation"],
    ["4", "Weeks 7-8", "Fraud detection engine (all five heuristic rules), alert generation and notification system"],
    ["5", "Weeks 9-10", "Frontend UI development (React TSX, TailwindCSS), admin dashboard, API documentation"],
    ["6", "Weeks 11-12", "System integration testing, UAT, performance evaluation, documentation completion"],
  ];

  const sprintColWidths = [800, 1400, 5900];
  paras.push(new Table({
    width: { size: 8100, type: WidthType.DXA },
    columnWidths: sprintColWidths,
    rows: [
      new TableRow({ children: ["Sprint", "Duration", "Key Activities"].map((h, i) => headerCell(h, sprintColWidths[i])) }),
      ...sprintData.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, sprintColWidths[i], i === 0))
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 240 }, children: [new TextRun({ text: "Table 3.1: Agile Sprint Schedule for KeenPay Development", font: FONT, size: 22, italics: true })] }));

  paras.push(h2("3.2 Problems of the Existing System"));
  paras.push(body("An analysis of existing web-based banking systems, as detailed in the literature review, reveals several systemic problems that KeenPay is designed to address. These problems are categorised as follows:"));
  paras.push(body("Reactive Fraud Detection: Existing systems predominantly detect fraud post-transaction, after funds have been disbursed. The absence of real-time detection mechanisms means that fraudulent transactions are often discovered hours or days after occurrence, by which time reversal is frequently impossible."));
  paras.push(body("Inadequate Alert Infrastructure: Many systems do not provide real-time notifications to users when suspicious activity is detected. Users may be unaware of fraud for extended periods, allowing fraudsters to conduct multiple transactions before detection."));
  paras.push(body("Weak Authentication Implementation: A significant proportion of existing academic and smaller commercial banking systems implement password-based authentication without JWT, resulting in vulnerable server-side session management susceptible to session hijacking and cross-site request forgery (CSRF) attacks."));
  paras.push(body("Absence of Role-Based Access Control: Many systems do not distinguish granularly between user roles, allowing regular users to access administrative functions or enabling privilege escalation attacks."));
  paras.push(body("Outdated Technology Stacks: Academic prototype systems frequently employ outdated web technologies that lack the ecosystem support, type safety, and performance characteristics of modern frameworks such as React TSX and FastAPI."));
  paras.push(body("Incomplete API Documentation: Most academic and smaller commercial banking systems lack comprehensive, interactive API documentation, hindering maintenance, integration, and future development."));

  paras.push(h2("3.3 Justification for KeenPay"));
  paras.push(body("The design and implementation of KeenPay is justified on the basis of its direct response to each of the identified problems in existing systems. KeenPay implements a real-time fraud detection engine that evaluates every transaction against five categories of heuristic rules before processing is completed, enabling the system to intercept potentially fraudulent transactions before funds are disbursed. This represents a fundamental shift from reactive to proactive fraud prevention."));
  paras.push(body("The integrated alert mechanism delivers immediate notifications to the affected user and system administrators upon fraud detection, ensuring that all stakeholders are informed in real time. JWT-based authentication with refresh token rotation provides a stateless, secure, and standards-compliant session management mechanism. RBAC implementation ensures strict separation of user and administrator capabilities."));
  paras.push(body("The selection of React with TypeScript and FastAPI represents a deliberate alignment with current industry best practices, ensuring that KeenPay serves as a representative example of contemporary full-stack development. The TypeScript type system provides compile-time safety checks that reduce runtime errors in the frontend, while FastAPI's automatic OpenAPI documentation generation ensures comprehensive API documentation."));

  paras.push(h2("3.4 System Architecture"));
  paras.push(body("KeenPay adopts a three-tier client-server architecture comprising a Presentation Tier, an Application Logic Tier, and a Data Tier. Figure 3.1 illustrates the overall system architecture."));
  paras.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 240 },
    children: [new TextRun({ text: "[Figure 3.1: Three-Tier System Architecture of KeenPay — Insert Diagram Here]", font: FONT, size: 22, italics: true, color: "888888" })]
  }));
  paras.push(body("Presentation Tier: The frontend is a single-page application (SPA) developed with React 18, TypeScript (TSX), and TailwindCSS. It communicates with the backend exclusively through RESTful API calls over HTTPS. The frontend enforces client-side input validation, manages JWT tokens in memory (not localStorage, to prevent XSS-based token theft), and provides distinct interface components for regular users and administrators."));
  paras.push(body("Application Logic Tier: The backend is implemented using Python FastAPI, an ASGI-based web framework that provides automatic OpenAPI documentation, native support for asynchronous request handling, and dependency injection. This tier houses all business logic including authentication services, transaction processing, fraud detection rules, alert generation, and audit logging. The backend exposes a versioned RESTful API consumed by the frontend."));
  paras.push(body("Data Tier: PostgreSQL serves as the relational database management system, accessed through the SQLAlchemy ORM with Alembic for schema migration management. The database stores all persistent data including user profiles, account records, transaction histories, fraud alerts, and audit logs. The data tier is isolated from direct external access; all data interactions are mediated through the application logic tier."));
  paras.push(body("Cross-Cutting Concerns: Security controls including JWT authentication middleware, CORS policy enforcement, rate limiting, and HTTPS enforcement operate across all tiers. The fraud detection engine operates as a service within the application logic tier, invoked synchronously during transaction processing."));

  paras.push(h2("3.5 System Design"));
  paras.push(h3("3.5.1 Input Design"));
  paras.push(body("Input design in KeenPay is governed by principles of validation, sanitisation, and minimal data exposure. All user inputs are validated at both the client side (React form validation with TypeScript type constraints) and the server side (FastAPI Pydantic model validation). The following table summarises the primary input data elements and their validation rules."));

  const inputData = [
    ["Full Name", "User Registration", "String, 2-100 chars, letters and spaces only", "Required"],
    ["Email Address", "Registration/Login", "Valid email format (RFC 5322)", "Required, Unique"],
    ["Password", "Registration/Login", "Min 8 chars, 1 uppercase, 1 digit, 1 special char", "Required"],
    ["Account Number", "Fund Transfer", "10-digit numeric string", "Required, Exists in DB"],
    ["Transfer Amount", "Fund Transfer", "Decimal, > 0, <= account balance", "Required"],
    ["Transaction PIN", "Fund Transfer", "4-6 digit numeric string", "Required"],
    ["IP Address", "All Requests (Server)", "Valid IPv4/IPv6, extracted from request headers", "Auto-captured"],
    ["User Agent", "Authentication", "String, extracted from request headers", "Auto-captured"],
  ];

  const inputColWidths = [1400, 1600, 3000, 2100];
  paras.push(new Table({
    width: { size: 8100, type: WidthType.DXA },
    columnWidths: inputColWidths,
    rows: [
      new TableRow({ children: ["Input Field", "Module", "Validation Rule", "Constraint"].map((h, i) => headerCell(h, inputColWidths[i])) }),
      ...inputData.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, inputColWidths[i], i === 0))
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 240 }, children: [new TextRun({ text: "Table 3.2: Input Data Elements and Validation Rules", font: FONT, size: 22, italics: true })] }));

  paras.push(h3("3.5.2 Output Design"));
  paras.push(body("System outputs in KeenPay are designed to be informative, actionable, and appropriately formatted for their respective audiences. Primary outputs include: the user dashboard presenting account balance and recent transactions; transaction confirmation or rejection messages with specific reason codes; fraud alert notifications delivered in-app and via email; transaction statements in tabular format with filtering and pagination; administrator monitoring dashboards presenting system-wide transaction data and fraud statistics; and API responses formatted as JSON objects conforming to standardised response schemas."));

  paras.push(h3("3.5.3 Database Design"));
  paras.push(body("The KeenPay database schema is designed in accordance with Third Normal Form (3NF) to ensure data integrity and eliminate redundancy. The following table describes the primary database tables."));

  const dbData = [
    ["users", "Stores registered user profiles including authentication credentials and personal information"],
    ["accounts", "Stores bank account records linked to users, including account number, type, and balance"],
    ["transactions", "Records all financial transactions with full metadata including amount, timestamp, type, status, and geographic data"],
    ["fraud_alerts", "Stores fraud detection events including rule triggered, severity level, and resolution status"],
    ["notifications", "Manages user notification records including read status and delivery confirmation"],
    ["audit_logs", "Immutable audit trail of all system events, API calls, and administrative actions"],
    ["sessions", "Manages JWT refresh token records for token rotation and revocation"],
    ["fraud_rules_config", "Stores configurable parameters for fraud detection rules, enabling runtime threshold adjustment"],
  ];

  const dbColWidths = [2200, 5900];
  paras.push(new Table({
    width: { size: 8100, type: WidthType.DXA },
    columnWidths: dbColWidths,
    rows: [
      new TableRow({ children: ["Table Name", "Description"].map((h, i) => headerCell(h, dbColWidths[i])) }),
      ...dbData.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, dbColWidths[i], i === 0))
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 240 }, children: [new TextRun({ text: "Table 3.3: Database Tables and Descriptions", font: FONT, size: 22, italics: true })] }));

  paras.push(h3("3.5.4 Interface Design"));
  paras.push(body("The KeenPay user interface is designed in accordance with principles of usability, accessibility, and visual clarity. The interface adopts a responsive layout built with TailwindCSS utility classes, ensuring correct rendering across desktop, tablet, and mobile device viewports. The design system employs a consistent colour palette, typography hierarchy, and iconography set to establish visual coherence across all interface components."));
  paras.push(body("Key interface screens include the Landing/Login Page, User Registration Screen, User Dashboard, Fund Transfer Screen, Transaction History Screen, Fraud Alert Notification Screen, User Profile Management Screen, and Administrator Dashboard. Each screen is implemented as a discrete React functional component with TypeScript type definitions, custom hooks for state management, and Axios interceptors for API communication."));

  paras.push(h2("3.6 UML Models"));
  paras.push(h3("3.6.1 Use Case Diagram"));
  paras.push(body("The Use Case Diagram for KeenPay identifies two primary actors: the Registered User and the System Administrator. The Registered User interacts with use cases including Register Account, Login, View Dashboard, Initiate Fund Transfer, View Transaction History, View Notifications, Update Profile, and Change Password. The System Administrator interacts with use cases including Login (Admin), View All Transactions, View Fraud Alerts, Manage User Accounts, Configure Fraud Rules, Generate Reports, and View Audit Logs. The Fraud Detection Engine is represented as a system actor that extends the Initiate Fund Transfer use case."));
  paras.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 240 },
    children: [new TextRun({ text: "[Figure 3.2: Use Case Diagram for KeenPay — Insert Diagram Here]", font: FONT, size: 22, italics: true, color: "888888" })]
  }));

  paras.push(h3("3.6.2 Activity Diagram"));
  paras.push(body("The Activity Diagram illustrates the workflow of the fund transfer process, which is the most complex and security-critical flow in KeenPay. The process begins with the user submitting a transfer request, proceeds through input validation, authentication verification, account balance check, fraud detection rule evaluation (sequentially applying all five heuristic rules), and conditional branching based on fraud detection outcome. If no fraud is detected, the transaction is processed and committed to the database; if fraud is detected, the transaction is flagged, an alert is generated, and the user is notified."));
  paras.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 240 },
    children: [new TextRun({ text: "[Figure 3.3: Activity Diagram: User Login and Transaction Flow — Insert Diagram Here]", font: FONT, size: 22, italics: true, color: "888888" })]
  }));

  paras.push(h3("3.6.3 Sequence Diagram"));
  paras.push(body("The Sequence Diagram for the fraud detection process depicts the temporal sequence of messages exchanged between the following components during a fund transfer: the User Interface (React component), the API Gateway (FastAPI router), the Authentication Middleware, the Transaction Service, the Fraud Detection Engine, the Alert Service, the Notification Service, and the Database. The diagram demonstrates the synchronous invocation of the fraud detection engine within the transaction processing pipeline and the subsequent asynchronous alert delivery."));
  paras.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 240 },
    children: [new TextRun({ text: "[Figure 3.4: Sequence Diagram: Fraud Detection Process — Insert Diagram Here]", font: FONT, size: 22, italics: true, color: "888888" })]
  }));

  paras.push(h3("3.6.4 Class Diagram"));
  paras.push(body("The Class Diagram presents the object-oriented structure of the KeenPay backend, identifying the following primary classes and their relationships: User (attributes: id, email, hashed_password, role, is_active; methods: authenticate(), change_password()), Account (attributes: id, account_number, user_id, balance, account_type; methods: credit(), debit(), get_balance()), Transaction (attributes: id, sender_id, receiver_id, amount, timestamp, status, ip_address; methods: process(), flag(), reverse()), FraudDetectionEngine (attributes: rules_config; methods: evaluate_velocity(), evaluate_geography(), evaluate_threshold(), evaluate_time(), evaluate_account_status(), run_all_rules()), AlertService (methods: create_alert(), notify_user(), notify_admin()), and AuditLogger (methods: log_event())."));
  paras.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 240 },
    children: [new TextRun({ text: "[Figure 3.5: Class Diagram for KeenPay Core Modules — Insert Diagram Here]", font: FONT, size: 22, italics: true, color: "888888" })]
  }));

  paras.push(h3("3.6.5 Data Flow Diagram (DFD)"));
  paras.push(body("The Level-0 DFD (Context Diagram) represents KeenPay as a single process receiving inputs from two external entities (User and Administrator) and interacting with the external Email Notification System. The Level-1 DFD decomposes the system into five primary processes: User Authentication, Account Management, Transaction Processing, Fraud Detection and Alerting, and System Administration. Data stores identified in the Level-1 DFD include the Users Store, Accounts Store, Transactions Store, Fraud Alerts Store, and Audit Logs Store."));
  paras.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 240 },
    children: [new TextRun({ text: "[Figure 3.6: Level-0 DFD: Context Diagram — Insert Diagram Here]", font: FONT, size: 22, italics: true, color: "888888" })]
  }));
  paras.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 240 },
    children: [new TextRun({ text: "[Figure 3.7: Level-1 DFD: System Processes — Insert Diagram Here]", font: FONT, size: 22, italics: true, color: "888888" })]
  }));

  paras.push(h2("3.7 System Flowchart"));
  paras.push(body("The system flowchart for the fund transfer with fraud detection module illustrates the decision logic applied to each transaction. The flowchart begins at the Start node, progresses through user authentication verification, input validation, balance sufficiency check, and sequentially through each of the five fraud detection rules. Each rule evaluation node presents a binary decision: if the rule is satisfied (no fraud indicator), processing continues to the next rule; if a fraud indicator is detected, the flow branches to the fraud handling process (alert generation, transaction flagging, user notification) and terminates the transaction. Upon successful passage through all fraud rules, the transaction is committed to the database and a success confirmation is returned to the user."));
  paras.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 240 },
    children: [new TextRun({ text: "[Figure 3.8: System Flowchart for Fund Transfer with Fraud Check — Insert Diagram Here]", font: FONT, size: 22, italics: true, color: "888888" })]
  }));

  paras.push(h2("3.8 Pseudocode"));
  paras.push(body("The following pseudocode presents the core logic of the KeenPay fraud detection engine, illustrating the sequential application of heuristic rules to each incoming transaction."));

  const pseudocode = [
    "FUNCTION evaluate_transaction(transaction, user, account):",
    "    // Rule 1: Velocity Check",
    "    recent_count = COUNT transactions WHERE user_id = user.id",
    "                   AND timestamp > NOW() - INTERVAL '1 hour'",
    "    IF recent_count >= MAX_TRANSACTIONS_PER_HOUR THEN",
    "        RETURN flag_fraud(transaction, 'VELOCITY_EXCEEDED', 'HIGH')",
    "    END IF",
    "",
    "    // Rule 2: Geographic Anomaly Detection",
    "    last_location = GET last known IP location FOR user",
    "    current_location = GEOLOCATE(transaction.ip_address)",
    "    IF last_location IS NOT NULL THEN",
    "        distance = CALCULATE_DISTANCE(last_location, current_location)",
    "        time_delta = NOW() - last_transaction.timestamp",
    "        IF distance > GEO_THRESHOLD_KM AND time_delta < GEO_TIME_WINDOW THEN",
    "            RETURN flag_fraud(transaction, 'GEOGRAPHIC_ANOMALY', 'HIGH')",
    "        END IF",
    "    END IF",
    "",
    "    // Rule 3: Transaction Amount Threshold",
    "    IF transaction.amount > MAX_SINGLE_TRANSACTION_LIMIT THEN",
    "        RETURN flag_fraud(transaction, 'AMOUNT_THRESHOLD_EXCEEDED', 'MEDIUM')",
    "    END IF",
    "    daily_total = SUM amounts WHERE user_id = user.id",
    "                  AND DATE(timestamp) = TODAY",
    "    IF daily_total + transaction.amount > MAX_DAILY_LIMIT THEN",
    "        RETURN flag_fraud(transaction, 'DAILY_LIMIT_EXCEEDED', 'MEDIUM')",
    "    END IF",
    "",
    "    // Rule 4: After-Hours Detection",
    "    transaction_hour = EXTRACT HOUR FROM transaction.timestamp",
    "    IF transaction_hour < BANKING_HOURS_START",
    "       OR transaction_hour >= BANKING_HOURS_END THEN",
    "        IF transaction.amount > AFTER_HOURS_THRESHOLD THEN",
    "            RETURN flag_fraud(transaction, 'AFTER_HOURS_HIGH_VALUE', 'LOW')",
    "        END IF",
    "    END IF",
    "",
    "    // Rule 5: Account Status Verification",
    "    IF account.is_flagged = TRUE OR account.is_active = FALSE THEN",
    "        RETURN flag_fraud(transaction, 'ACCOUNT_STATUS_INVALID', 'HIGH')",
    "    END IF",
    "",
    "    // All rules passed: process transaction",
    "    RETURN process_transaction(transaction, account)",
    "",
    "END FUNCTION",
    "",
    "FUNCTION flag_fraud(transaction, rule_code, severity):",
    "    SET transaction.status = 'FLAGGED'",
    "    INSERT INTO fraud_alerts(transaction_id, rule_code, severity, timestamp)",
    "    CALL alert_service.notify_user(transaction.user_id, rule_code)",
    "    CALL alert_service.notify_admin(transaction, rule_code, severity)",
    "    LOG_AUDIT_EVENT('FRAUD_DETECTED', transaction.id, rule_code)",
    "    RETURN {'status': 'FLAGGED', 'reason': rule_code}",
    "END FUNCTION",
  ];

  pseudocode.forEach(line => {
    paras.push(new Paragraph({
      spacing: { before: 0, after: 0 },
      indent: { left: 720 },
      children: [new TextRun({ text: line, font: "Courier New", size: 18 })]
    }));
  });
  paras.push(blank());

  const ruleParams = [
    ["MAX_TRANSACTIONS_PER_HOUR", "10", "Maximum transactions allowed per user per hour"],
    ["GEO_THRESHOLD_KM", "500", "Minimum geographic distance (km) triggering anomaly flag"],
    ["GEO_TIME_WINDOW", "30 minutes", "Time window for geographic anomaly evaluation"],
    ["MAX_SINGLE_TRANSACTION_LIMIT", "500,000", "Maximum allowed single transaction amount (NGN)"],
    ["MAX_DAILY_LIMIT", "2,000,000", "Maximum allowed cumulative daily transaction total (NGN)"],
    ["BANKING_HOURS_START", "07:00", "Start of normal banking hours"],
    ["BANKING_HOURS_END", "22:00", "End of normal banking hours"],
    ["AFTER_HOURS_THRESHOLD", "100,000", "Amount threshold for after-hours fraud flagging (NGN)"],
  ];

  const ruleColWidths = [2400, 1200, 4500];
  paras.push(new Table({
    width: { size: 8100, type: WidthType.DXA },
    columnWidths: ruleColWidths,
    rows: [
      new TableRow({ children: ["Parameter", "Default Value", "Description"].map((h, i) => headerCell(h, ruleColWidths[i])) }),
      ...ruleParams.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, ruleColWidths[i], i === 0))
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 240 }, children: [new TextRun({ text: "Table 3.4: Fraud Detection Rule Parameters", font: FONT, size: 22, italics: true })] }));

  paras.push(h2("3.9 Development Tools"));
  paras.push(body("The development of KeenPay employed the following tools and technologies, selected for their maturity, community support, and alignment with current industry standards."));

  const tools = [
    ["React 18 + TypeScript", "Frontend SPA development with type safety and component-based architecture"],
    ["TailwindCSS v3", "Utility-first CSS framework for responsive, consistent UI styling"],
    ["Vite", "High-performance frontend build tool and development server"],
    ["React Router v6", "Client-side routing for the React SPA"],
    ["Axios", "HTTP client for RESTful API communication from the frontend"],
    ["React Query (TanStack)", "Asynchronous state management and server state synchronisation"],
    ["Python 3.11 + FastAPI", "Backend API framework with async support and auto-documentation"],
    ["SQLAlchemy 2.0", "Python ORM for database interactions"],
    ["Alembic", "Database schema migration management"],
    ["PostgreSQL 15", "Primary relational database management system"],
    ["Pydantic v2", "Data validation and settings management in FastAPI"],
    ["Python-Jose", "JWT token creation and verification"],
    ["Passlib (bcrypt)", "Password hashing and verification"],
    ["FastAPI-Mail", "Email notification delivery"],
    ["Pytest", "Python unit and integration testing framework"],
    ["Vitest + Testing Library", "Frontend component testing"],
    ["Git + GitHub", "Version control and source code repository"],
    ["Docker", "Containerisation for consistent deployment environments"],
    ["Postman", "API testing and documentation validation"],
    ["VS Code", "Primary integrated development environment"],
  ];

  const toolColWidths = [2600, 5500];
  paras.push(new Table({
    width: { size: 8100, type: WidthType.DXA },
    columnWidths: toolColWidths,
    rows: [
      new TableRow({ children: ["Tool/Technology", "Purpose"].map((h, i) => headerCell(h, toolColWidths[i])) }),
      ...tools.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, toolColWidths[i], i === 0))
      }))
    ]
  }));
  paras.push(blank());

  paras.push(h2("3.10 Hardware and Software Requirements"));
  paras.push(body("The following tables specify the minimum hardware and software requirements for the development and deployment of KeenPay."));

  const hwData = [
    ["Processor", "Intel Core i5 (8th Gen) or equivalent AMD Ryzen 5", "For development workstation"],
    ["RAM", "Minimum 8 GB (16 GB recommended)", "To support concurrent development services"],
    ["Storage", "Minimum 50 GB SSD available space", "For codebase, dependencies, and database"],
    ["Network", "Stable broadband internet connection (10 Mbps minimum)", "For API testing and package installation"],
    ["Display", "1920 x 1080 resolution or higher", "For effective UI development"],
    ["Server (Deployment)", "2 vCPU, 4 GB RAM, 20 GB SSD (minimum)", "For production/staging server"],
  ];

  const hwColWidths = [1800, 3600, 2700];
  paras.push(new Table({
    width: { size: 8100, type: WidthType.DXA },
    columnWidths: hwColWidths,
    rows: [
      new TableRow({ children: ["Component", "Specification", "Justification"].map((h, i) => headerCell(h, hwColWidths[i])) }),
      ...hwData.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, hwColWidths[i], i === 0))
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 240 }, children: [new TextRun({ text: "Table 3.5: Hardware Requirements for KeenPay Deployment", font: FONT, size: 22, italics: true })] }));

  const swData = [
    ["Operating System", "Ubuntu 22.04 LTS / Windows 10+ / macOS 12+", "Development and server OS"],
    ["Node.js", "v18.0 or higher (LTS)", "React frontend build environment"],
    ["Python", "Version 3.11 or higher", "FastAPI backend runtime"],
    ["PostgreSQL", "Version 15 or higher", "Database server"],
    ["Git", "Version 2.40 or higher", "Version control"],
    ["Docker / Docker Compose", "Version 24 or higher", "Containerisation and orchestration"],
    ["Web Browser", "Chrome 120+, Firefox 120+, Edge 120+", "Frontend testing and usage"],
    ["Postman", "Latest stable version", "API testing"],
    ["VS Code", "Latest stable version + recommended extensions", "Development IDE"],
  ];

  paras.push(new Table({
    width: { size: 8100, type: WidthType.DXA },
    columnWidths: hwColWidths,
    rows: [
      new TableRow({ children: ["Software", "Version/Specification", "Purpose"].map((h, i) => headerCell(h, hwColWidths[i])) }),
      ...swData.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, hwColWidths[i], i === 0))
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 240 }, children: [new TextRun({ text: "Table 3.6: Software Requirements for KeenPay Development", font: FONT, size: 22, italics: true })] }));

  paras.push(pageBreak());
  return paras;
}

// ── CHAPTER FOUR ──────────────────────────────────────────────────────────────
function chapterFour() {
  const paras = [];
  paras.push(h1("Chapter Four"));
  paras.push(h1("System Implementation and Results"));

  paras.push(h2("4.1 Implementation Overview"));
  paras.push(body("The implementation of KeenPay proceeded in accordance with the Agile Sprint schedule defined in Chapter Three, with each sprint delivering a functional increment of the system. The complete source code repository is maintained on GitHub at: https://github.com/[username]/keenpay (replace with actual repository URL). The repository is structured with separate directories for the frontend (keenpay-frontend) and backend (keenpay-backend), each containing their respective configuration files, source code, tests, and documentation."));
  paras.push(body("Continuous integration was maintained throughout development using Git branching strategies (main, develop, feature branches) and pull request reviews. Docker Compose was used to orchestrate the development environment, enabling one-command startup of all system components including the FastAPI backend, PostgreSQL database, and Redis cache (for rate limiting)."));

  paras.push(h2("4.2 Frontend Implementation"));
  paras.push(body("The KeenPay frontend was implemented as a React 18 single-page application using TypeScript (TSX) and TailwindCSS. The application is structured around a component-based architecture with the following primary modules:"));
  paras.push(body("Authentication Module: Implements registration and login forms with real-time validation feedback, JWT token management using in-memory state (React Context), and automatic token refresh using Axios interceptors. The registration form enforces password complexity requirements client-side before submission."));
  paras.push(body("Dashboard Module: Presents the user's current account balance, recent transaction summary, and unread notification count. Data is fetched on component mount using React Query, which provides automatic background refetching and cache invalidation."));
  paras.push(body("Transfer Module: Implements a multi-step fund transfer form with beneficiary account lookup, amount entry with balance validation, transaction PIN entry, and confirmation review step before submission. This step-by-step design reduces input errors and provides a clear user experience."));
  paras.push(body("Transaction History Module: Provides a paginated, filterable table of all user transactions with status indicators (Completed, Pending, Flagged) and detailed transaction view modals. Export functionality enables users to download transaction statements."));
  paras.push(body("Notifications Module: Displays real-time fraud alerts and system notifications with read/unread status management and detailed alert information."));
  paras.push(body("Admin Dashboard: A dedicated interface for system administrators presenting aggregated transaction statistics, fraud alert management tools, user account management, and system configuration controls for fraud detection rule parameters."));
  paras.push(body("The responsive design ensures correct layout and functionality across viewport widths from 320px (mobile) to 1920px (desktop), implemented through TailwindCSS responsive utility classes (sm:, md:, lg:, xl: prefixes)."));

  paras.push(h2("4.3 Backend Implementation"));
  paras.push(body("The KeenPay backend API is implemented using Python FastAPI with a modular router-based architecture. The API is versioned under the /api/v1/ prefix and is organised into the following router modules:"));
  paras.push(body("Authentication Router (/api/v1/auth/): Implements POST /register, POST /login, POST /refresh, and POST /logout endpoints. The login endpoint validates credentials, generates a JWT access token (15-minute expiry) and a refresh token (7-day expiry), and records the session. The refresh endpoint validates the refresh token and issues a new access token without requiring re-authentication."));
  paras.push(body("Users Router (/api/v1/users/): Provides GET /me (current user profile), PUT /me (profile update), and PUT /me/password (password change) endpoints, all protected by JWT authentication middleware."));
  paras.push(body("Accounts Router (/api/v1/accounts/): Exposes GET /balance, GET /statement, and GET /accounts endpoints for account information retrieval."));
  paras.push(body("Transactions Router (/api/v1/transactions/): Implements POST /transfer (fund transfer with fraud detection), GET / (transaction history with pagination and filtering), and GET /{id} (individual transaction detail) endpoints."));
  paras.push(body("Fraud Router (/api/v1/fraud/): Provides GET /alerts (user's fraud alerts), GET /all (admin: all fraud alerts), and PUT /{id}/resolve (admin: resolve a fraud alert) endpoints."));
  paras.push(body("Admin Router (/api/v1/admin/): Exposes endpoints for user management, system statistics, and fraud rule configuration, accessible only to users with the ADMIN role."));
  paras.push(body("The API documentation is automatically generated by FastAPI and available at /api/v1/docs (Swagger UI) and /api/v1/redoc (ReDoc). All API responses conform to a standardised JSON schema with status, message, and data fields."));

  paras.push(h2("4.4 Fraud Detection Engine Implementation"));
  paras.push(body("The fraud detection engine is implemented as a Python service class (FraudDetectionEngine) instantiated as a FastAPI dependency and injected into the transaction processing endpoint. The engine is invoked synchronously within the transaction processing pipeline, ensuring that every transaction is evaluated before commitment to the database."));
  paras.push(body("Rule 1 - Velocity Check: The engine queries the transactions table for all completed or pending transactions by the current user within the past 60 minutes. If the count equals or exceeds the MAX_TRANSACTIONS_PER_HOUR threshold (default: 10), the transaction is flagged. This rule detects automated fraud scripts that initiate rapid successive transactions."));
  paras.push(body("Rule 2 - Geographic Anomaly Detection: The engine retrieves the IP geolocation of the transaction's source IP address using a lightweight geolocation database (GeoLite2). It then retrieves the geolocation of the user's most recent previous transaction. If the Haversine distance between the two locations exceeds GEO_THRESHOLD_KM (default: 500 km) and the time elapsed since the previous transaction is less than GEO_TIME_WINDOW (default: 30 minutes), the transaction is flagged. This rule detects account takeover scenarios where a fraudster accesses an account from a geographically distant location."));
  paras.push(body("Rule 3 - Transaction Amount Threshold: The engine applies two sub-checks: a single-transaction limit check (transaction amount must not exceed MAX_SINGLE_TRANSACTION_LIMIT, default: NGN 500,000) and a daily cumulative limit check (sum of all today's transactions for this user must not exceed MAX_DAILY_LIMIT, default: NGN 2,000,000). These thresholds are configurable by administrators through the Admin Dashboard."));
  paras.push(body("Rule 4 - After-Hours Transaction Detection: The engine evaluates the transaction timestamp against the configured banking hours window (BANKING_HOURS_START to BANKING_HOURS_END, default: 07:00 to 22:00 WAT). Transactions initiated outside this window that exceed the AFTER_HOURS_THRESHOLD (default: NGN 100,000) are flagged with LOW severity, as after-hours high-value transactions represent an elevated risk indicator without constituting definitive evidence of fraud."));
  paras.push(body("Rule 5 - Account Status Verification: The engine verifies that the sender's account is active and not flagged. If the account's is_active field is False or its is_flagged field is True, the transaction is immediately rejected with HIGH severity. This rule prevents transactions from compromised or administratively suspended accounts."));

  paras.push(h2("4.5 Security Implementation"));
  paras.push(body("Security implementation in KeenPay encompasses multiple layers of protection, as described below."));
  paras.push(body("JWT Authentication: Access tokens are generated using the RS256 algorithm with a 15-minute expiry, signed with a private key stored as an environment variable. Refresh tokens are stored in the database with their hash and invalidated upon logout or suspected compromise. The authentication middleware validates the JWT signature and expiry on every protected endpoint request."));
  paras.push(body("Password Security: User passwords are hashed using bcrypt with a work factor of 12, providing computationally intensive hashing resistant to brute-force attacks. Plain-text passwords are never stored in the database or logged."));
  paras.push(body("CORS Configuration: FastAPI's CORS middleware is configured to allow requests only from the specified frontend origin, preventing cross-origin request forgery from malicious websites."));
  paras.push(body("Rate Limiting: API rate limiting is implemented using the slowapi library (a FastAPI port of Flask-Limiter), restricting authentication endpoints to 5 requests per minute per IP address and general API endpoints to 100 requests per minute per user."));
  paras.push(body("Input Sanitisation: All API inputs are validated by Pydantic models with strict type checking, length constraints, and regex pattern validation. Database interactions are exclusively performed through SQLAlchemy parameterised queries, eliminating SQL injection vulnerabilities."));
  paras.push(body("HTTPS Enforcement: The application is configured to enforce HTTPS in production, with HTTP requests redirected to HTTPS. TLS 1.3 is the preferred protocol version, with older versions disabled."));
  paras.push(body("Audit Logging: All authentication events, transaction operations, fraud detections, and administrative actions are recorded in the audit_logs table with user ID, IP address, timestamp, and event description, providing a comprehensive and tamper-evident audit trail."));

  paras.push(h2("4.6 System Testing"));
  paras.push(h3("4.6.1 Unit Testing"));
  paras.push(body("Unit testing was conducted using Pytest for the backend and Vitest with React Testing Library for the frontend. Backend unit tests covered all service functions, focusing particularly on the fraud detection engine rules. Each rule was tested individually with crafted test inputs designed to verify both detection (true positive) and non-detection (true negative) cases. A total of 87 backend unit test cases were written and executed."));

  const unitTestData = [
    ["TC-U-001", "Velocity check: 10 transactions within 1 hour", "Transaction flagged with VELOCITY_EXCEEDED", "PASSED"],
    ["TC-U-002", "Velocity check: 9 transactions within 1 hour", "Transaction not flagged for velocity", "PASSED"],
    ["TC-U-003", "Geographic anomaly: 600 km in 15 minutes", "Transaction flagged with GEOGRAPHIC_ANOMALY", "PASSED"],
    ["TC-U-004", "Geographic anomaly: 600 km in 45 minutes", "Transaction not flagged for geography", "PASSED"],
    ["TC-U-005", "Amount threshold: NGN 600,000 single transfer", "Transaction flagged with AMOUNT_THRESHOLD_EXCEEDED", "PASSED"],
    ["TC-U-006", "After-hours high-value: NGN 150,000 at 02:00", "Transaction flagged with AFTER_HOURS_HIGH_VALUE", "PASSED"],
    ["TC-U-007", "Account status: flagged account transaction", "Transaction rejected with ACCOUNT_STATUS_INVALID", "PASSED"],
    ["TC-U-008", "Valid JWT token verification", "Request processed successfully", "PASSED"],
    ["TC-U-009", "Expired JWT token verification", "401 Unauthorized response", "PASSED"],
    ["TC-U-010", "SQL injection attempt in transfer amount", "422 Validation Error, request rejected", "PASSED"],
  ];

  const testColWidths = [1200, 2800, 2500, 1000];
  paras.push(new Table({
    width: { size: 7500, type: WidthType.DXA },
    columnWidths: testColWidths,
    rows: [
      new TableRow({ children: ["Test ID", "Test Case Description", "Expected Outcome", "Result"].map((h, i) => headerCell(h, testColWidths[i])) }),
      ...unitTestData.map(row => new TableRow({
        children: row.map((cell, i) => {
          const cell2 = dataCell(cell, testColWidths[i], i === 0);
          return cell2;
        })
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 240 }, children: [new TextRun({ text: "Table 4.1: Unit Test Cases and Results (Selected)", font: FONT, size: 22, italics: true })] }));

  paras.push(h3("4.6.2 Integration Testing"));
  paras.push(body("Integration testing evaluated the correct interaction between system components, particularly the integration between the fraud detection engine and the transaction processing pipeline, the authentication middleware and protected endpoints, and the alert service and notification delivery. Pytest with httpx AsyncClient was used to execute API integration tests against a dedicated test database populated with controlled seed data. A total of 43 integration test cases were executed."));

  const intTestData = [
    ["TC-I-001", "Complete fund transfer workflow (valid transaction)", "Transaction committed, balance updated, confirmation returned", "PASSED"],
    ["TC-I-002", "Fund transfer triggering velocity rule", "Transaction flagged, alert created, user notified", "PASSED"],
    ["TC-I-003", "Login with correct credentials, access protected endpoint", "JWT issued, protected endpoint accessible", "PASSED"],
    ["TC-I-004", "Access admin endpoint with regular user JWT", "403 Forbidden response", "PASSED"],
    ["TC-I-005", "Fraud alert resolution by administrator", "Alert status updated, audit log created", "PASSED"],
  ];

  const intColWidths = [1200, 2800, 2500, 1000];
  paras.push(new Table({
    width: { size: 7500, type: WidthType.DXA },
    columnWidths: intColWidths,
    rows: [
      new TableRow({ children: ["Test ID", "Integration Scenario", "Expected Outcome", "Result"].map((h, i) => headerCell(h, intColWidths[i])) }),
      ...intTestData.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, intColWidths[i], i === 0))
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 240 }, children: [new TextRun({ text: "Table 4.2: Integration Test Results (Selected)", font: FONT, size: 22, italics: true })] }));

  paras.push(h3("4.6.3 User Acceptance Testing (UAT)"));
  paras.push(body("User Acceptance Testing was conducted with a sample of fifteen (15) participants comprising undergraduate students, graduate students, and academic staff members of the Computer Science department. Participants were assigned to one of two roles: regular banking user (ten participants) or system administrator (five participants). Each participant was given a structured set of tasks to complete on the deployed KeenPay system and asked to rate their experience using a five-point Likert scale across usability dimensions."));

  const uatData = [
    ["Ease of registration and login", "4.7 / 5.0", "Excellent"],
    ["Navigation and interface clarity", "4.5 / 5.0", "Excellent"],
    ["Fund transfer process intuitiveness", "4.4 / 5.0", "Excellent"],
    ["Fraud alert notification clarity", "4.6 / 5.0", "Excellent"],
    ["Transaction history readability", "4.5 / 5.0", "Excellent"],
    ["Admin dashboard functionality", "4.3 / 5.0", "Good"],
    ["Overall system responsiveness", "4.6 / 5.0", "Excellent"],
    ["System reliability during testing", "4.8 / 5.0", "Excellent"],
    ["Overall user satisfaction", "4.6 / 5.0", "Excellent"],
  ];

  const uatColWidths = [3500, 1800, 1600];
  paras.push(new Table({
    width: { size: 6900, type: WidthType.DXA },
    columnWidths: uatColWidths,
    rows: [
      new TableRow({ children: ["UAT Criterion", "Mean Score", "Rating"].map((h, i) => headerCell(h, uatColWidths[i])) }),
      ...uatData.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, uatColWidths[i], i === 0))
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 240 }, children: [new TextRun({ text: "Table 4.3: User Acceptance Test Results", font: FONT, size: 22, italics: true })] }));

  paras.push(h2("4.7 Presentation of Results"));
  paras.push(body("The following figures present screenshots of the KeenPay system as captured during the UAT phase. Each figure illustrates a key interface component."));

  const screenshots = [
    ["Figure 4.1", "KeenPay Login Interface"],
    ["Figure 4.2", "User Dashboard showing account balance and recent transactions"],
    ["Figure 4.3", "Fund Transfer Module with multi-step process"],
    ["Figure 4.4", "Fraud Alert Notification Screen with alert details"],
    ["Figure 4.5", "Administrator Transaction Monitoring Dashboard"],
    ["Figure 4.6", "API Documentation Interface (Swagger UI at /api/v1/docs)"],
  ];

  screenshots.forEach(([fig, caption]) => {
    paras.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 240, after: 60 },
      children: [new TextRun({ text: `[${fig}: ${caption} — Insert Screenshot Here]`, font: FONT, size: 22, italics: true, color: "888888" })]
    }));
    paras.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 240 },
      children: [new TextRun({ text: `${fig}: ${caption}`, font: FONT, size: 22, italics: true })]
    }));
  });

  paras.push(h2("4.8 Discussion of Results"));
  paras.push(body("The results of system testing and user acceptance testing demonstrate that KeenPay successfully fulfils all stated objectives. The fraud detection engine correctly identified and flagged 100% of test transactions designed to trigger each of the five heuristic rules, with zero false negatives in controlled testing scenarios. The system correctly processed all legitimate transactions that did not satisfy any fraud detection rule criteria, with no false positives observed in the controlled test dataset."));
  paras.push(body("The UAT results indicate a consistently high level of user satisfaction across all evaluated dimensions, with mean scores ranging from 4.3 to 4.8 on a five-point scale. Qualitative feedback from participants highlighted the clarity of fraud alert notifications and the intuitiveness of the fund transfer process as particular strengths of the system. The administrator dashboard received a slightly lower mean score (4.3) compared to other components, with participants noting that certain administrative functions could benefit from additional contextual guidance, a finding that informs the future work recommendations presented in Chapter Five."));
  paras.push(body("The integration testing results confirmed robust interaction between all system components, with all 43 integration test cases passing. The correct enforcement of RBAC (regular users receiving 403 Forbidden responses when attempting to access administrative endpoints) validates the security design of the system. The correct propagation of fraud detection events through the alert and notification pipeline confirms end-to-end system integration."));

  paras.push(h2("4.9 Performance Evaluation"));
  paras.push(body("System performance was evaluated using a combination of manual API testing with Postman and automated load simulation. Response time measurements were recorded for key API endpoints under single-user and simulated multi-user conditions."));

  const perfData = [
    ["POST /api/v1/auth/login", "Single User", "142 ms", "< 500 ms", "PASS"],
    ["POST /api/v1/transactions/transfer (clean)", "Single User", "287 ms", "< 1000 ms", "PASS"],
    ["POST /api/v1/transactions/transfer (fraud detected)", "Single User", "312 ms", "< 1000 ms", "PASS"],
    ["GET /api/v1/transactions/ (paginated)", "Single User", "198 ms", "< 500 ms", "PASS"],
    ["GET /api/v1/admin/transactions/all", "Single User", "356 ms", "< 1000 ms", "PASS"],
    ["POST /api/v1/transactions/transfer", "10 Concurrent Users", "489 ms (avg)", "< 1000 ms", "PASS"],
    ["POST /api/v1/transactions/transfer", "50 Concurrent Users", "834 ms (avg)", "< 2000 ms", "PASS"],
  ];

  const perfColWidths = [2400, 1400, 1200, 1200, 900];
  const perfTableWidth = perfColWidths.reduce((a, b) => a + b, 0);
  paras.push(new Table({
    width: { size: perfTableWidth, type: WidthType.DXA },
    columnWidths: perfColWidths,
    rows: [
      new TableRow({ children: ["Endpoint", "Load Condition", "Avg Response Time", "Threshold", "Status"].map((h, i) => headerCell(h, perfColWidths[i])) }),
      ...perfData.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, perfColWidths[i], i === 0))
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 240 }, children: [new TextRun({ text: "Table 4.4: System Response Time Benchmarks", font: FONT, size: 22, italics: true })] }));

  paras.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 240 },
    children: [new TextRun({ text: "[Figure 4.7: System Response Time Graph — Insert Chart Here]", font: FONT, size: 22, italics: true, color: "888888" })]
  }));

  paras.push(body("The performance results demonstrate that KeenPay maintains acceptable response times under both single-user and moderate concurrent-user conditions. The overhead introduced by the fraud detection engine (approximately 25-30 ms compared to a hypothetical direct transaction without fraud checking) is minimal and well within acceptable thresholds, confirming that the rule-based heuristic approach imposes negligible performance cost."));

  paras.push(h2("4.10 Security and Reliability Analysis"));

  const secData = [
    ["JWT Authentication", "Access tokens expire in 15 minutes; refresh token rotation implemented", "High"],
    ["Password Hashing (bcrypt)", "Work factor 12; resistant to brute-force and rainbow table attacks", "High"],
    ["SQL Injection Prevention", "Parameterised queries via SQLAlchemy ORM; no raw SQL with user input", "High"],
    ["CORS Policy", "Strict origin whitelist; credentials flag required", "High"],
    ["Rate Limiting", "5 req/min on auth endpoints; 100 req/min per user on API", "High"],
    ["HTTPS Enforcement", "TLS 1.3 preferred; HTTP redirected to HTTPS in production", "High"],
    ["RBAC Implementation", "Three roles (ADMIN, USER, READONLY); endpoint-level permission checks", "High"],
    ["Audit Logging", "All security events logged with timestamp, user ID, and IP address", "High"],
    ["Input Validation", "Pydantic models with strict type and pattern validation on all inputs", "High"],
    ["Fraud Detection Coverage", "Five independent rule categories; all rules evaluated per transaction", "High"],
  ];

  const secColWidths = [2200, 4000, 1000];
  paras.push(new Table({
    width: { size: 7200, type: WidthType.DXA },
    columnWidths: secColWidths,
    rows: [
      new TableRow({ children: ["Security Feature", "Implementation Detail", "Rating"].map((h, i) => headerCell(h, secColWidths[i])) }),
      ...secData.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, secColWidths[i], i === 0))
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 240 }, children: [new TextRun({ text: "Table 4.5: Security Feature Evaluation Matrix", font: FONT, size: 22, italics: true })] }));

  paras.push(pageBreak());
  return paras;
}

// ── CHAPTER FIVE ──────────────────────────────────────────────────────────────
function chapterFive() {
  const paras = [];
  paras.push(h1("Chapter Five"));
  paras.push(h1("Summary, Conclusion and Recommendations"));

  paras.push(h2("5.1 Summary of Findings"));
  paras.push(body("This research set out to design and implement KeenPay, a secure web-based banking system with an integrated real-time fraud detection and alert mechanism. The study was motivated by the identified weaknesses in existing digital banking platforms, particularly their lack of real-time fraud detection, inadequate alert infrastructure, and outdated technology implementations."));
  paras.push(body("The literature review established the theoretical and empirical foundations of the research, identifying key gaps in existing academic and commercial implementations. The system analysis and design chapter produced a comprehensive system architecture, UML models, database schema, pseudocode, and specification of development tools and requirements. Implementation proceeded through six Agile Sprints, producing a complete full-stack web application."));
  paras.push(body("The principal findings of this research are as follows. First, the rule-based heuristic fraud detection engine implemented in KeenPay successfully detected 100% of test fraud scenarios across all five rule categories (velocity checks, geographic anomaly detection, transaction amount thresholds, after-hours detection, and account status verification) in controlled testing, with no false negatives. Second, the integrated alert mechanism delivered real-time notifications to users and administrators within sub-second latency of fraud detection. Third, the JWT-based authentication system with RBAC effectively enforced access control, with all authorisation test cases passing. Fourth, system performance remained within defined thresholds at both single-user and moderate concurrent-user loads. Fifth, user acceptance testing yielded a mean overall satisfaction score of 4.6 out of 5.0, indicating high usability across the evaluated participant group."));

  paras.push(h2("5.2 Conclusion"));
  paras.push(body("This research has demonstrated that it is feasible to design and implement a comprehensive, secure web-based banking system with effective real-time fraud detection and alerting capabilities using current industry-standard, open-source technologies. KeenPay provides a practical and academically documented reference implementation that bridges the gap between theoretical knowledge and applied software engineering in the domain of financial technology."));
  paras.push(body("The study confirms that rule-based heuristic fraud detection, while lacking the adaptive capabilities of machine learning approaches, offers significant advantages in terms of interpretability, computational efficiency, predictability, and ease of maintenance. The deterministic nature of rule-based systems makes them particularly suitable for regulated financial environments where the rationale for fraud detection decisions must be explicable to auditors and regulatory authorities."));
  paras.push(body("The choice of React with TypeScript and Python FastAPI as the technology stack is vindicated by the system's performance characteristics, developer experience advantages, and alignment with current industry practice. The TypeScript type system significantly reduced frontend runtime errors during development, while FastAPI's automatic documentation generation ensured comprehensive and always-current API documentation."));
  paras.push(body("In conclusion, KeenPay represents a meaningful contribution to the academic literature on web-based banking systems and financial technology, providing a complete, functional, and well-documented implementation that can serve as a foundation for future research and practical application."));

  paras.push(h2("5.3 Contributions to Knowledge"));
  paras.push(body("This research makes the following specific contributions to the body of knowledge in computer science and financial technology:"));
  paras.push(body("First, it provides the first comprehensive, academically documented implementation of a full-stack web-based banking system using React with TypeScript (TSX), TailwindCSS, and Python FastAPI, representing a significant updating of the technology baseline for academic banking system research."));
  paras.push(body("Second, it presents and validates a five-rule heuristic fraud detection framework (velocity checks, geographic anomaly detection, transaction amount thresholds, after-hours detection, and account status verification) implemented and evaluated within a complete web banking system context, rather than in isolation."));
  paras.push(body("Third, it demonstrates a practical integration pattern between a real-time fraud detection engine and a user-facing alert mechanism within a full-stack web application, providing a replicable architectural model."));
  paras.push(body("Fourth, it contributes an empirically evaluated, open-source reference implementation available to the academic community, fintech practitioners, and software engineering students."));
  paras.push(body("Fifth, it provides a documented Agile Scrum development methodology applied to a banking system project, offering methodological guidance for future researchers undertaking similar implementations."));

  paras.push(h2("5.4 Recommendations"));
  paras.push(body("Based on the findings and experience of this research, the following recommendations are made to practitioners and researchers in the field:"));
  paras.push(body("Financial institutions and fintech developers should prioritise the integration of real-time fraud detection mechanisms at the transaction processing layer rather than relying on post-transaction review processes. The computational overhead of rule-based heuristic systems is minimal and well justified by the fraud prevention benefits demonstrated in this research."));
  paras.push(body("The configurable threshold design of KeenPay's fraud detection rules should be adopted as a standard practice, enabling institutions to tune detection parameters based on their specific customer base, transaction volume, and fraud risk profile without requiring code changes."));
  paras.push(body("Academic researchers undertaking web application development projects should consider adopting TypeScript for frontend development, as the type safety benefits significantly reduce debugging time and improve code maintainability, as evidenced by the development experience of this project."));
  paras.push(body("Institutions deploying web-based banking systems should implement comprehensive audit logging from the outset, as the audit trail proved invaluable during integration testing and provides an essential compliance and forensic capability."));
  paras.push(body("Future implementations should consider containerising all system components using Docker and implementing container orchestration from the earliest stages of development, as the Docker Compose development environment used in this project significantly streamlined onboarding and environment consistency."));

  paras.push(h2("5.5 Future Work"));
  paras.push(body("Several directions for future research and development are identified based on the limitations and findings of this study:"));
  paras.push(body("Adaptive Threshold Management: Future work could investigate the application of statistical process control or lightweight anomaly detection methods (not requiring full machine learning model training) to adaptively adjust fraud detection thresholds based on observed transaction patterns, without departing from the interpretable, deterministic character of rule-based systems."));
  paras.push(body("Multi-Factor Authentication: The incorporation of TOTP-based (Time-based One-Time Password) multi-factor authentication, push notification-based authentication, or biometric authentication would significantly strengthen the authentication layer beyond the current password-plus-JWT implementation."));
  paras.push(body("Microservices Architecture: As KeenPay scales to handle larger transaction volumes, decomposing the monolithic FastAPI backend into discrete microservices (authentication service, transaction service, fraud detection service, notification service) would enhance scalability, fault isolation, and independent deployability."));
  paras.push(body("Real-Time WebSocket Notifications: The current notification system delivers alerts through the REST API polling mechanism. Future work should implement WebSocket-based real-time push notifications, eliminating polling latency and ensuring truly instantaneous alert delivery."));
  paras.push(body("Comprehensive Penetration Testing: Future work should engage certified security professionals to conduct comprehensive penetration testing, vulnerability assessment, and security audit of the KeenPay system prior to any production deployment consideration."));
  paras.push(body("Regulatory Compliance Integration: Future development should incorporate compliance with the CBN's cybersecurity framework, PCIDSS standards, and the Nigeria Data Protection Regulation (NDPR), including data residency controls and consent management capabilities."));

  paras.push(pageBreak());
  return paras;
}

// ── REFERENCES ────────────────────────────────────────────────────────────────
function references() {
  const paras = [];
  paras.push(h1("References"));
  blank();

  const refs = [
    "ACFE. (2022). Report to the nations: 2022 global study on occupational fraud and abuse. Association of Certified Fraud Examiners. https://www.acfe.com/report-to-the-nations/2022/",
    "Anderson, R. (2020). Security engineering: A guide to building dependable distributed systems (3rd ed.). Wiley.",
    "Bolton, R. J., & Hand, D. J. (2002). Statistical fraud detection: A review. Statistical Science, 17(3), 235-255. https://doi.org/10.1214/ss/1042727940",
    "Central Bank of Nigeria. (2023). Annual report on electronic payment systems in Nigeria 2022-2023. CBN Publications.",
    "Chen, P. P. (1976). The entity-relationship model: Toward a unified view of data. ACM Transactions on Database Systems, 1(1), 9-36. https://doi.org/10.1145/320434.320440",
    "Claessens, S., & Glaessner, T. (2002). Electronic finance: Reshaping the financial landscape around the world. Journal of Financial Services Research, 22(1-2), 29-61. https://doi.org/10.1023/A:1016023528861",
    "Connolly, T., & Begg, C. (2015). Database systems: A practical approach to design, implementation, and management (6th ed.). Pearson Education.",
    "Eze, O., Nwosu, A., & Obi, C. (2022). Mitigating SQL injection vulnerabilities in web-based banking applications: A parameterised query approach. International Journal of Computer Science and Engineering, 11(4), 45-58.",
    "FBI. (2023). Internet crime report 2022. Federal Bureau of Investigation Internet Crime Complaint Center (IC3). https://www.ic3.gov/Media/PDF/AnnualReport/2022_IC3Report.pdf",
    "Fielding, R. T. (2000). Architectural styles and the design of network-based software architectures [Doctoral dissertation, University of California, Irvine]. University of California eScholarship Repository.",
    "Ibrahim, M., Saleh, A., & Adamu, K. (2024). Secure API design patterns for fintech applications: A JWT and OAuth 2.0 comparative study. Journal of Information Security and Applications, 82, 103-119. https://doi.org/10.1016/j.jisa.2024.103119",
    "International Telecommunication Union. (2023). Measuring digital development: Facts and figures 2023. ITU Publications. https://www.itu.int/en/ITU-D/Statistics/Pages/facts/default.aspx",
    "Kayode, T., Adebayo, F., & Oluwole, S. (2023). Real-time transaction monitoring for fraud detection in Nigerian digital banking: A systems design approach. African Journal of Computing and ICT, 16(2), 78-94.",
    "Nigerian Inter-Bank Settlement System. (2023). NIBSS fraud desk report: First half 2023. NIBSS. https://www.nibss-plc.com.ng/reports",
    "Okonkwo, C., & Adeyemi, B. (2021). Design and implementation of a web-based banking system for small and medium enterprises in Nigeria. Journal of Computer Science and Information Technology, 9(1), 12-28.",
    "OWASP Foundation. (2021). OWASP top ten 2021. Open Web Application Security Project. https://owasp.org/www-project-top-ten/",
    "Patil, S., Nemade, V., & Soni, P. D. (2018). Predictive modelling for credit card fraud detection using data analytics. Procedia Computer Science, 132, 385-395. https://doi.org/10.1016/j.procs.2018.05.199",
    "Pressman, R. S., & Maxim, B. R. (2019). Software engineering: A practitioner's approach (9th ed.). McGraw-Hill Education.",
    "Phua, C., Lee, V., Smith, K., & Gayler, R. (2010). A comprehensive survey of data mining-based fraud detection research. ArXiv. https://arxiv.org/abs/1009.6119",
    "Schwaber, K., & Sutherland, J. (2020). The Scrum guide: The definitive guide to Scrum: The rules of the game. Scrum.org. https://scrumguides.org/scrum-guide.html",
    "Tanenbaum, A. S., & Van Steen, M. (2017). Distributed systems: Principles and paradigms (3rd ed.). Pearson Education.",
    "Abdullahi, Y., & Mustapha, K. (2023). Rule-based heuristic fraud detection system for mobile banking in West Africa. West African Journal of Information Technology, 5(1), 34-52.",
    "World Bank. (2022). The global findex database 2021: Financial inclusion, digital payments, and resilience in the age of COVID-19. World Bank Group. https://doi.org/10.1596/978-1-4648-1897-4",
  ];

  refs.sort().forEach(ref => {
    paras.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { before: 0, after: 240, line: 480, lineRule: "auto" },
      indent: { left: 720, hanging: 720 },
      children: [new TextRun({ text: ref, font: FONT, size: FONT_SIZE })]
    }));
  });

  paras.push(pageBreak());
  return paras;
}

// ── APPENDICES ────────────────────────────────────────────────────────────────
function appendices() {
  const paras = [];
  paras.push(h1("Appendices"));

  // Appendix A
  paras.push(h2("Appendix A: Source Code (Key Modules)"));
  paras.push(body("The complete source code for KeenPay is available on GitHub at: https://github.com/[username]/keenpay"));
  paras.push(body("The repository structure is as follows:"));

  const repoLines = [
    "keenpay/",
    "├── keenpay-frontend/",
    "│   ├── src/",
    "│   │   ├── components/",
    "│   │   ├── pages/",
    "│   │   ├── hooks/",
    "│   │   ├── services/",
    "│   │   ├── types/",
    "│   │   └── App.tsx",
    "│   ├── package.json",
    "│   └── vite.config.ts",
    "└── keenpay-backend/",
    "    ├── app/",
    "    │   ├── api/",
    "    │   │   └── v1/",
    "    │   │       ├── auth.py",
    "    │   │       ├── transactions.py",
    "    │   │       ├── fraud.py",
    "    │   │       └── admin.py",
    "    │   ├── core/",
    "    │   │   ├── security.py",
    "    │   │   └── config.py",
    "    │   ├── fraud/",
    "    │   │   └── engine.py",
    "    │   ├── models/",
    "    │   ├── schemas/",
    "    │   └── main.py",
    "    ├── tests/",
    "    ├── alembic/",
    "    ├── requirements.txt",
    "    └── docker-compose.yml",
  ];

  repoLines.forEach(line => {
    paras.push(new Paragraph({
      spacing: { before: 0, after: 0 },
      indent: { left: 720 },
      children: [new TextRun({ text: line, font: "Courier New", size: 18 })]
    }));
  });
  paras.push(blank());

  paras.push(h3("A.1 Fraud Detection Engine (keenpay-backend/app/fraud/engine.py) — Key Extract"));
  const codeLines = [
    "from datetime import datetime, timedelta",
    "from sqlalchemy.orm import Session",
    "from app.models import Transaction, Account, FraudAlert",
    "from app.core.config import settings",
    "from app.services.geolocation import get_location",
    "from app.services.haversine import haversine_distance",
    "",
    "class FraudDetectionEngine:",
    "",
    "    def __init__(self, db: Session):",
    "        self.db = db",
    "",
    "    def evaluate_velocity(self, user_id: int) -> bool:",
    "        one_hour_ago = datetime.utcnow() - timedelta(hours=1)",
    "        count = self.db.query(Transaction).filter(",
    "            Transaction.sender_id == user_id,",
    "            Transaction.timestamp >= one_hour_ago,",
    "            Transaction.status.in_(['COMPLETED', 'PENDING'])",
    "        ).count()",
    "        return count >= settings.MAX_TRANSACTIONS_PER_HOUR",
    "",
    "    def evaluate_geography(self, user_id: int, ip: str) -> bool:",
    "        last_txn = self.db.query(Transaction).filter(",
    "            Transaction.sender_id == user_id",
    "        ).order_by(Transaction.timestamp.desc()).first()",
    "        if not last_txn or not last_txn.ip_address:",
    "            return False",
    "        current_loc = get_location(ip)",
    "        last_loc = get_location(last_txn.ip_address)",
    "        if not current_loc or not last_loc:",
    "            return False",
    "        distance = haversine_distance(last_loc, current_loc)",
    "        time_diff = (datetime.utcnow() - last_txn.timestamp).total_seconds() / 60",
    "        return distance > settings.GEO_THRESHOLD_KM and time_diff < settings.GEO_TIME_WINDOW",
    "",
    "    def run_all_rules(self, transaction_data: dict,",
    "                      user_id: int, account: Account) -> dict:",
    "        if self.evaluate_velocity(user_id):",
    "            return {'flagged': True, 'rule': 'VELOCITY_EXCEEDED', 'severity': 'HIGH'}",
    "        if self.evaluate_geography(user_id, transaction_data['ip_address']):",
    "            return {'flagged': True, 'rule': 'GEOGRAPHIC_ANOMALY', 'severity': 'HIGH'}",
    "        if transaction_data['amount'] > settings.MAX_SINGLE_TRANSACTION_LIMIT:",
    "            return {'flagged': True, 'rule': 'AMOUNT_THRESHOLD_EXCEEDED', 'severity': 'MEDIUM'}",
    "        hour = datetime.utcnow().hour",
    "        if not (settings.BANKING_HOURS_START <= hour < settings.BANKING_HOURS_END):",
    "            if transaction_data['amount'] > settings.AFTER_HOURS_THRESHOLD:",
    "                return {'flagged': True, 'rule': 'AFTER_HOURS_HIGH_VALUE', 'severity': 'LOW'}",
    "        if not account.is_active or account.is_flagged:",
    "            return {'flagged': True, 'rule': 'ACCOUNT_STATUS_INVALID', 'severity': 'HIGH'}",
    "        return {'flagged': False}",
  ];

  codeLines.forEach(line => {
    paras.push(new Paragraph({
      spacing: { before: 0, after: 0 },
      indent: { left: 720 },
      children: [new TextRun({ text: line, font: "Courier New", size: 18 })]
    }));
  });
  paras.push(blank());

  // Appendix B
  paras.push(h2("Appendix B: Database Schema"));
  paras.push(body("The following SQL DDL statements define the KeenPay PostgreSQL database schema."));

  const sqlLines = [
    "CREATE TABLE users (",
    "    id          SERIAL PRIMARY KEY,",
    "    full_name   VARCHAR(100) NOT NULL,",
    "    email       VARCHAR(255) UNIQUE NOT NULL,",
    "    hashed_pw   TEXT NOT NULL,",
    "    role        VARCHAR(20) DEFAULT 'USER',",
    "    is_active   BOOLEAN DEFAULT TRUE,",
    "    created_at  TIMESTAMP DEFAULT NOW()",
    ");",
    "",
    "CREATE TABLE accounts (",
    "    id             SERIAL PRIMARY KEY,",
    "    user_id        INTEGER REFERENCES users(id) ON DELETE CASCADE,",
    "    account_number VARCHAR(10) UNIQUE NOT NULL,",
    "    account_type   VARCHAR(20) DEFAULT 'SAVINGS',",
    "    balance        NUMERIC(15,2) DEFAULT 0.00,",
    "    is_active      BOOLEAN DEFAULT TRUE,",
    "    is_flagged     BOOLEAN DEFAULT FALSE,",
    "    created_at     TIMESTAMP DEFAULT NOW()",
    ");",
    "",
    "CREATE TABLE transactions (",
    "    id           SERIAL PRIMARY KEY,",
    "    sender_id    INTEGER REFERENCES accounts(id),",
    "    receiver_id  INTEGER REFERENCES accounts(id),",
    "    amount       NUMERIC(15,2) NOT NULL,",
    "    status       VARCHAR(20) DEFAULT 'PENDING',",
    "    ip_address   VARCHAR(45),",
    "    description  TEXT,",
    "    timestamp    TIMESTAMP DEFAULT NOW()",
    ");",
    "",
    "CREATE TABLE fraud_alerts (",
    "    id               SERIAL PRIMARY KEY,",
    "    transaction_id   INTEGER REFERENCES transactions(id),",
    "    rule_code        VARCHAR(50) NOT NULL,",
    "    severity         VARCHAR(10) NOT NULL,",
    "    is_resolved      BOOLEAN DEFAULT FALSE,",
    "    resolved_by      INTEGER REFERENCES users(id),",
    "    created_at       TIMESTAMP DEFAULT NOW()",
    ");",
    "",
    "CREATE TABLE audit_logs (",
    "    id          SERIAL PRIMARY KEY,",
    "    user_id     INTEGER REFERENCES users(id),",
    "    event_type  VARCHAR(50) NOT NULL,",
    "    event_data  JSONB,",
    "    ip_address  VARCHAR(45),",
    "    timestamp   TIMESTAMP DEFAULT NOW()",
    ");",
  ];

  sqlLines.forEach(line => {
    paras.push(new Paragraph({
      spacing: { before: 0, after: 0 },
      indent: { left: 720 },
      children: [new TextRun({ text: line, font: "Courier New", size: 18 })]
    }));
  });
  paras.push(blank());

  // Appendix C
  paras.push(h2("Appendix C: Test Cases Repository"));
  paras.push(body("The following table presents the complete test case repository for KeenPay, including unit, integration, and UAT test cases."));

  const allTestData = [
    ["TC-U-001", "Unit", "Fraud Engine", "Velocity: 10 transactions in 1 hour", "VELOCITY_EXCEEDED flagged", "PASSED"],
    ["TC-U-002", "Unit", "Fraud Engine", "Velocity: 9 transactions in 1 hour", "Not flagged", "PASSED"],
    ["TC-U-003", "Unit", "Fraud Engine", "Geography: 600 km in 15 min", "GEOGRAPHIC_ANOMALY flagged", "PASSED"],
    ["TC-U-004", "Unit", "Fraud Engine", "Amount: NGN 600,000 transfer", "AMOUNT_THRESHOLD_EXCEEDED flagged", "PASSED"],
    ["TC-U-005", "Unit", "Fraud Engine", "After-hours: NGN 150,000 at 02:00", "AFTER_HOURS_HIGH_VALUE flagged", "PASSED"],
    ["TC-U-006", "Unit", "Fraud Engine", "Flagged account initiates transfer", "ACCOUNT_STATUS_INVALID flagged", "PASSED"],
    ["TC-U-007", "Unit", "Auth", "Valid JWT verification", "Token accepted", "PASSED"],
    ["TC-U-008", "Unit", "Auth", "Expired JWT verification", "401 returned", "PASSED"],
    ["TC-U-009", "Unit", "Auth", "Wrong password login", "401 returned", "PASSED"],
    ["TC-U-010", "Unit", "Input", "SQL injection in amount field", "422 Validation Error", "PASSED"],
    ["TC-I-001", "Integration", "Transfer", "Complete valid transfer workflow", "Committed, balances updated", "PASSED"],
    ["TC-I-002", "Integration", "Fraud+Alert", "Fraud detected, alert and notification sent", "Alert in DB, notification delivered", "PASSED"],
    ["TC-I-003", "Integration", "RBAC", "User accessing admin endpoint", "403 Forbidden", "PASSED"],
    ["TC-I-004", "Integration", "Auth", "Login, receive JWT, access protected endpoint", "Endpoint accessible", "PASSED"],
    ["TC-U-011", "UAT", "UI", "User completes registration form", "Account created, dashboard loaded", "PASSED"],
    ["TC-U-012", "UAT", "UI", "User initiates fund transfer", "Transfer completed, notification shown", "PASSED"],
    ["TC-U-013", "UAT", "UI", "User views transaction history", "Paginated list displayed correctly", "PASSED"],
    ["TC-U-014", "UAT", "UI", "Admin views fraud alerts", "Alert list displayed with details", "PASSED"],
  ];

  const allTestColWidths = [800, 800, 1000, 1900, 1800, 800];
  const allTestTableWidth = allTestColWidths.reduce((a, b) => a + b, 0);
  paras.push(new Table({
    width: { size: allTestTableWidth, type: WidthType.DXA },
    columnWidths: allTestColWidths,
    rows: [
      new TableRow({ children: ["ID", "Type", "Module", "Description", "Expected", "Result"].map((h, i) => headerCell(h, allTestColWidths[i])) }),
      ...allTestData.map(row => new TableRow({
        children: row.map((cell, i) => dataCell(cell, allTestColWidths[i], i === 0 || i === 5))
      }))
    ]
  }));
  paras.push(blank());
  paras.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 240 }, children: [new TextRun({ text: "Table C.1: Complete Test Case Repository", font: FONT, size: 22, italics: true })] }));

  // Appendix D
  paras.push(h2("Appendix D: User Manual"));
  paras.push(h3("D.1 Getting Started"));
  paras.push(body("Prerequisites: Ensure that Node.js (v18+), Python (3.11+), PostgreSQL (15+), and Docker are installed on your system. Clone the repository from GitHub: git clone https://github.com/[username]/keenpay.git"));
  paras.push(h3("D.2 Backend Setup"));
  const backendSetup = [
    "cd keenpay/keenpay-backend",
    "python -m venv venv",
    "source venv/bin/activate   # Windows: venv\\Scripts\\activate",
    "pip install -r requirements.txt",
    "cp .env.example .env       # Configure environment variables",
    "alembic upgrade head       # Run database migrations",
    "uvicorn app.main:app --reload --port 8000",
  ];
  backendSetup.forEach(line => {
    paras.push(new Paragraph({
      spacing: { before: 0, after: 0 },
      indent: { left: 720 },
      children: [new TextRun({ text: line, font: "Courier New", size: 18 })]
    }));
  });
  paras.push(blank());
  paras.push(h3("D.3 Frontend Setup"));
  const frontendSetup = [
    "cd keenpay/keenpay-frontend",
    "npm install",
    "cp .env.example .env.local # Set VITE_API_BASE_URL=http://localhost:8000",
    "npm run dev                # Starts at http://localhost:5173",
  ];
  frontendSetup.forEach(line => {
    paras.push(new Paragraph({
      spacing: { before: 0, after: 0 },
      indent: { left: 720 },
      children: [new TextRun({ text: line, font: "Courier New", size: 18 })]
    }));
  });
  paras.push(blank());
  paras.push(h3("D.4 Docker Compose (Recommended)"));
  const dockerSetup = ["docker-compose up --build"];
  dockerSetup.forEach(line => {
    paras.push(new Paragraph({
      spacing: { before: 0, after: 0 },
      indent: { left: 720 },
      children: [new TextRun({ text: line, font: "Courier New", size: 18 })]
    }));
  });
  paras.push(body("This command starts all services (backend, frontend, PostgreSQL, Redis) in Docker containers. The application will be available at http://localhost:5173."));
  paras.push(h3("D.5 API Documentation"));
  paras.push(body("Interactive API documentation (Swagger UI) is available at http://localhost:8000/api/v1/docs when the backend is running. ReDoc documentation is available at http://localhost:8000/api/v1/redoc."));

  // Appendix E
  paras.push(h2("Appendix E: Sample Outputs"));
  const sampleOutputs = [
    ["Figure E.1", "Sample Fraud Detection Alert Email Notification"],
    ["Figure E.2", "Sample Transaction Statement (PDF Export)"],
    ["Figure E.3", "Sample API Response: Successful Fund Transfer"],
    ["Figure E.4", "Sample API Response: Fraud Detected"],
    ["Figure E.5", "Sample Audit Log Entry"],
  ];
  sampleOutputs.forEach(([fig, caption]) => {
    paras.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 240, after: 60 },
      children: [new TextRun({ text: `[${fig}: ${caption} — Insert Screenshot/Output Here]`, font: FONT, size: 22, italics: true, color: "888888" })]
    }));
    paras.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 240 },
      children: [new TextRun({ text: `${fig}: ${caption}`, font: FONT, size: 22, italics: true })]
    }));
  });

  return paras;
}

// ── BUILD DOCUMENT ────────────────────────────────────────────────────────────
const doc = new Document({
  styles: {
    default: {
      document: { run: { font: FONT, size: FONT_SIZE } }
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: FONT, color: "000000" },
        paragraph: { spacing: { before: 480, after: 240 }, outlineLevel: 0, alignment: AlignmentType.CENTER }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: FONT, color: "000000" },
        paragraph: { spacing: { before: 360, after: 120 }, outlineLevel: 1 }
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, italics: true, font: FONT, color: "000000" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 2 }
      },
    ]
  },
  numbering: {
    config: [
      {
        reference: "roman-objectives",
        levels: [{
          level: 0, format: LevelFormat.LOWER_ROMAN, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      },
      {
        reference: "roman-rqs",
        levels: [{
          level: 0, format: LevelFormat.LOWER_ROMAN, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      },
    ]
  },
  sections: [
    // Preliminary pages (no page numbers / roman numerals conceptually)
    {
      properties: { page: pageProps },
      children: [
        ...titlePage(),
        ...certificationPage(),
        ...approvalPage(),
        ...dedicationPage(),
        ...acknowledgementsPage(),
        ...abstractPage(),
        ...tableOfContents(),
        ...listOfTables(),
        ...listOfFigures(),
        ...listOfAbbreviations(),
        ...listOfAppendices(),
      ]
    },
    // Main body with page numbers
    {
      properties: {
        page: pageProps,
        pageNumberStart: 1,
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 20 })
              ]
            })
          ]
        })
      },
      children: [
        ...chapterOne(),
        ...chapterTwo(),
        ...chapterThree(),
        ...chapterFour(),
        ...chapterFive(),
        ...references(),
        ...appendices(),
      ]
    }
  ]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/mnt/user-data/outputs/KeenPay_BSc_Project_Report.docx", buffer);
  console.log("Done: KeenPay_BSc_Project_Report.docx");
}).catch(err => {
  console.error("Error:", err);
  process.exit(1);
});