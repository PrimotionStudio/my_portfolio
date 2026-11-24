/* -------------------------------------------------------------------------- */
/* Everything written about Prime lives here, so copy edits never touch UI.   */
/* -------------------------------------------------------------------------- */

export const OWNER = {
  name: "Prime Okanlawon",
  legalName: "Martins Okanlawon",
  fullName: "Martins Obomate Okanlawon",
  nickname: "Prime",
  role: "Software engineer who also runs the servers",
  studio: "The Primotion Studio",
  email: "oyedelenewton@gmail.com",
  phone: "+234 911 489 5572",
  whatsapp: "https://wa.me/2349114895572",
  location: "Port Harcourt, Nigeria. I work with people anywhere",
  cv: "/Martins-Okanlawon-CV.pdf",
} as const;

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/primotionstudio" },
  { label: "LinkedIn", href: "https://linkedin.com/in/theprimotionstudio" },
  { label: "Instagram", href: "https://www.instagram.com/theprimotionstudio" },
] as const;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const SUMMARY = [
  "I've been building software since 2019, back when The Primotion Studio was just me and a laptop. Since then I've made websites and full systems for universities, schools, businesses and non-profits. Some are simple sites. Others handle admissions, payments, classes and a busy admin team every day.",
  "I also like owning the boring bits underneath. I set up and look after servers, and I've built private email and private video meeting setups for organisations that were tired of paying per person, every month, for tools they didn't control.",
  "Right now I lead the software team at Kotlead Limited, where we build apps for clients, offline desktop apps and some AI tools. Before that I was CTO at Z1 Technologies. The email server I set up there paid for itself fast: it saved the company more than seven months of what they used to spend on email.",
] as const;

export const PRINCIPLES = [
  {
    title: "Fewer clicks",
    body: "If something can be done in one step, it shouldn't take three. I cut buttons, pages and forms until only the useful ones are left.",
  },
  {
    title: "No guessing",
    body: "People should always know what's going on, what happens next, and why something isn't working yet.",
  },
  {
    title: "Phone first",
    body: "Most of your users are on their phones, so everything I make works properly there too.",
  },
  {
    title: "Easy to look after",
    body: "Plain code and dependable servers. Simple things break less, and they cost less to keep running.",
  },
] as const;

export const SERVICES = [
  {
    key: "web",
    title: "Websites and web apps",
    body: "Quick, clean websites, and full web apps with portals, dashboards and online payments. Your team can run them without calling me every week.",
  },
  {
    key: "systems",
    title: "Systems for your business or school",
    body: "Software shaped around how you already work. Think admissions, student portals, online classes, records, billing, staff tools and reports.",
  },
  {
    key: "email",
    title: "Your own email server",
    body: "Proper email on your own domain, running on your own server. No per-user monthly bill, and you're in charge of every inbox.",
  },
  {
    key: "video",
    title: "Your own video meetings",
    body: "A private place for meetings, webinars and online classes, with your name on it. No time limits, no per-host fees, and your recordings stay with you.",
  },
] as const;

export const ABOUT_ME = [
  {
    key: "chess",
    title: "Chess",
    body: "I'll play a game anytime. Thinking a few moves ahead is also how I plan software.",
  },
  {
    key: "cod",
    title: "Call of Duty",
    body: "When I need to switch my brain off, you'll find me in a Call of Duty lobby.",
  },
  {
    key: "swim",
    title: "Swimming",
    body: "Best reset there is. Nothing clears my head like water.",
  },
  {
    key: "terminal",
    title: "Terminals and servers",
    body: "I love messing around in a terminal. I've broken plenty of my own servers and fixed them again, and honestly that's taught me more than any course.",
  },
  {
    key: "linux",
    title: "Linux",
    body: "I use Linux btw, and I'm a proud of the Manjaro family.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export const PROJECTS = [
  {
    title: "ALPHO Foundation",
    kind: "Non-profit",
    body: "Website and donations for a pan-African policy and leadership foundation. The team updates stories, people and campaigns from a simple admin page, and supporters can donate in a few taps.",
    image: "/projects/alpho.png",
    url: "https://alpho.vercel.app",
    linkLabel: "Visit site",
  },
  {
    title: "Axion Stride",
    kind: "Consulting firm",
    body: "Site and platform for a business growth and training company. It has a guided business check-up, an academy, a digital store, and separate areas for clients and staff.",
    image: "/projects/axionstride.png",
    url: "https://axionstride.com",
    linkLabel: "Visit site",
  },
  {
    title: "RSU Business School",
    kind: "University website",
    body: "The official site for Rivers State University Business School. Programmes, staff, admissions and news, all easy to find.",
    image: "/projects/rsubs.png",
    url: "https://bs.rsu.edu.ng",
    linkLabel: "Visit site",
  },
  {
    title: "AKSCONS",
    kind: "College website",
    body: "Website for the Akwa Ibom State College of Nursing Sciences, with programmes, news and resources for students and staff.",
    image: "/projects/akscons.png",
    url: "https://akscons.edu.ng",
    linkLabel: "Visit site",
  },
  {
    title: "Vyvas-First",
    kind: "Education",
    body: "Site for an education company that has helped over 10,000 Nigerian teachers with training, IELTS prep and study-abroad advice.",
    image: "/projects/vyvasfirst.png",
    url: "https://vyvasfirst.vercel.app",
    linkLabel: "Visit site",
  },
  {
    title: "Laxi",
    kind: "Side project · AI",
    body: "A little bot that posts and replies on social media for you, so your accounts don't go quiet while you're busy.",
    image: "/projects/laxi.png",
    url: "https://github.com/PrimotionStudio/laxi3",
    linkLabel: "See the code",
  },
  {
    title: "Phathom Whisper",
    kind: "Side project · Chat",
    body: "Anonymous chat with strangers. No sign-up and no history. Messages and files vanish when you leave.",
    image: "/projects/phathomwhisper.png",
    url: "https://github.com/PrimotionStudio/PhathomWhisper",
    linkLabel: "See the code",
  },
  {
    title: "Jexi",
    kind: "Side project · Desktop",
    body: "Tidies your desktop for you. It quietly sorts files into folders by type and date.",
    image: "/projects/jexi.png",
    url: "https://github.com/primotionStudio/jexi",
    linkLabel: "See the code",
  },
  {
    title: "MyCampus",
    kind: "Side project · Social",
    body: "A social network for campus life, with course groups, shared notes and events for students and lecturers.",
    image: "/projects/mycampus.png",
    url: "https://github.com/primotionStudio/mycampus",
    linkLabel: "See the code",
  },
] as const;

/** Kinds of private work, described without naming any client. */
export const PRIVATE_WORK = [
  "University admission and payment portals",
  "Online exam (CBT) systems",
  "Transcript and certificate request systems",
  "Learning platforms with live online classes, for several schools at once",
  "Private company email and meeting setups",
  "Offline desktop apps and AI tools",
] as const;

/* -------------------------------------------------------------------------- */
/* Experience                                                                 */
/* -------------------------------------------------------------------------- */

export const EXPERIENCE = [
  {
    role: "Lead Software Engineer",
    org: "Kotlead Limited",
    period: "Oct 2025 – now",
    current: true,
    points: [
      "I lead our client projects from the first plan through to launch.",
      "I head up our offline desktop apps and our AI tools.",
    ],
  },
  {
    role: "Founder",
    org: "The Primotion Studio",
    period: "Sep 2019 – now",
    current: true,
    logo: "/logos/theprimotionstudio.jpg",
    points: [
      "Where it all started. I build websites, web apps and business systems for people and companies, and I look after the hosting too.",
    ],
  },
  {
    role: "Founder",
    org: "The Primotion Team",
    period: "Dec 2024 – now",
    current: true,
    logo: "/logos/primotionteam.jpg",
    points: [
      "A small remote team I lead. I set the direction and keep our work moving.",
    ],
  },
  {
    role: "Corps Member (NYSC)",
    org: "Command Science Secondary School, Akwa Ibom",
    period: "Aug 2025 – Jul 2026",
    current: false,
    points: [
      "Assistant Exams Officer: I set exam questions and recorded the scores.",
      "Hostel master for over 100 students, making sure they were on time and doing okay.",
    ],
  },
  {
    role: "Chief Technology Officer",
    org: "Z1 Technologies",
    period: "Feb 2025 – Sep 2025",
    current: false,
    logo: "/logos/z1lms.jpg",
    points: [
      "Led the build of Z1LMS, a Nigerian learning platform with live online classes, AI study notes, fee payments, timetables and student communities.",
      "Set up the servers that ran a separate copy of the platform for each client school.",
      "Moved the whole company onto our own email servers, which saved more than seven months of email costs.",
      "Set up the online classroom we used in the platform and for our own meetings.",
    ],
  },
  {
    role: "Backend Developer and WordPress Designer",
    org: "Webbitskills",
    period: "Jan 2025 – Feb 2025",
    current: false,
    logo: "/logos/webbit.jpg",
    points: [
      "Helped build airtime and data top-up (VTU) systems for clients.",
      "Built school websites that let students enrol online.",
    ],
  },
  {
    role: "Backend Engineer (Intern)",
    org: "Finaseed Limited",
    period: "Aug 2023 – Jan 2024",
    current: false,
    logo: "/logos/finaseed.jpg",
    points: [
      "Designed the database for live money transactions and built the APIs on top of it.",
      "Turned the traditional 'Akawo' savings system into an app.",
      "Kept an eye on backend security.",
    ],
  },
  {
    role: "Backend Developer (Intern)",
    org: "Harvoxx Tech Hub",
    period: "Jul 2023 – Dec 2023",
    current: false,
    logo: "/logos/harvoxx.jpg",
    points: [
      "Built backend services with Node.js and worked with the frontend folks on responsive web apps.",
    ],
  },
] as const;

export const VOLUNTEERING = [
  {
    role: "Backend Developer",
    org: "Siliconverse",
    period: "Mar 2024 – now",
    body: "I designed the database and built the APIs behind their job search and listings.",
  },
  {
    role: "Web and Media Manager, Reading Ambassador",
    org: "Keeping It Real (KIR) Foundation",
    period: "Feb 2022 – Feb 2025",
    body: "I refreshed their website and made their social media videos. The best part was helping set up reading corners in primary schools that really needed them.",
  },
] as const;

export const EDUCATION = {
  degree: "BSc Computer Science, Second Class Upper",
  school: "Rivers State University",
  period: "2020 – 2024",
  note: "Finished with a 3.64 CGPA. For my final-year project I built a digital logbook for SIWES, so students could stop carrying paper logbooks around.",
} as const;

export const CERTIFICATES = [
  {
    title: "Software Engineering",
    issuer: "ALX Africa",
    period: "2023 – 2024",
    image: "/certs/alx-cert-1.png",
  },
  {
    title: "AI Career Essentials",
    issuer: "ALX Africa",
    period: "2024",
    image: "/certs/alx-cert-2.png",
  },
  {
    title: "Penetration Testing Internship",
    issuer: "Cyber & Forensics Security Solutions",
    period: "2024",
    image: "/certs/cfss-cert-1.png",
  },
  {
    title: "Penetration Testing Internship",
    issuer: "Cyber & Forensics Security Solutions",
    period: "2024",
    image: "/certs/cfss-cert-2.png",
  },
] as const;

export const SKILLS = [
  "TypeScript",
  "Next.js & React",
  "Node.js",
  "Rust",
  "PHP",
  "Python",
  "PostgreSQL",
  "Linux servers",
  "Email servers",
  "Video meetings",
  "Payments",
  "Security",
] as const;
