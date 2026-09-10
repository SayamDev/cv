/**
 * The entire CV lives in this file.
 *
 * Editing anything here and pushing to `main` rebuilds and republishes the
 * site automatically — there is no other place to change. Keep entries in
 * reverse-chronological order; the page renders them in the order given.
 */

export interface Role {
  company: string
  title: string
  start: string
  end: string
  /** Shown as a short line under the title. Optional. */
  context?: string
  highlights: string[]
}

export interface Education {
  qualification: string
  grade?: string
  institution: string
  period: string
  subjects: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface Project {
  name: string
  blurb: string
  href: string
  repo?: string
  tags: string[]
}

export interface CV {
  name: string
  headline: string
  location: string
  email: string
  /** Left out of the published site on purpose — see README. Add it back here
   *  if you want it public, and it will appear in the contact row. */
  phone?: string
  links: { label: string; href: string }[]
  summary: string
  /** Three or four things worth saying before the detail. */
  proofPoints: { value: string; label: string }[]
  roles: Role[]
  projects: Project[]
  education: Education[]
  certifications: string[]
  skills: SkillGroup[]
  /** Relative to the site root; the file lives in `public/`. */
  pdf: string
}

export const cv: CV = {
  name: 'Sayam Ajmal',
  headline: 'Front-end and full-stack developer building AI-assisted products',
  location: 'Manchester, UK',
  email: 'asfcit15sayamajmal@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sayam-ajmal' },
    { label: 'GitHub', href: 'https://github.com/SayamDev' },
  ],
  summary:
    'Technology professional with 4+ years of commercial experience delivering digital projects in large-scale regulated environments, including Tata Consultancy Services and Plusnet, on products serving 800,000+ customers. Experienced across the full delivery lifecycle — requirements and definition through build, test, release and support — working in Agile teams alongside UX, design, content, product and engineering. Has independently taken a product from concept to public release. A strong communicator with the technical background to work credibly with engineering teams, now looking to bring that breadth to technical delivery, development, data or digital transformation roles.',
  proofPoints: [
    { value: '4+ yrs', label: 'Commercial delivery' },
    { value: '800k+', label: 'Customers served by shipped work' },
    { value: '30%', label: 'Repetitive dev effort cut with AI workflows' },
    { value: '5–10%', label: 'Faster customer journey completion' },
  ],
  roles: [
    {
      company: 'Independent',
      title: 'Full-Stack Mobile Developer',
      start: '2026',
      end: 'Present',
      highlights: [
        'Architected and implemented relational data structures in Supabase and SQL, prioritising data integrity, scalability and query performance.',
        'Owned the full development lifecycle — design system, UI/UX, business logic and security — using AI tooling (Claude, ChatGPT, Copilot) to accelerate prototyping through to production deployment.',
        'Engineered cross-platform iOS and Android applications with React Native and Expo, using AI-assisted workflows to shorten delivery timelines.',
      ],
    },
    {
      company: 'Tata Consultancy Services',
      title: 'Front-End Developer & AI-Assisted Engineer',
      start: 'Apr 2023',
      end: 'May 2026',
      context: 'Delivering customer-facing products for Plusnet',
      highlights: [
        'Built pixel-accurate React and TypeScript interfaces for products serving 800,000+ users, compliant with WCAG 2.1 accessibility standards.',
        'Implemented and validated GA4 events and data layers, auditing tracking to ensure accurate measurement of customer journeys and conversion.',
        'Used analytics findings and A/B test data to optimise journeys with UX, design and product, delivering a 5–10% increase in journey completion speed.',
        'Introduced AI-assisted workflows (Claude, GitHub Copilot, Amazon Q) to automate boilerplate and test generation, cutting repetitive development effort by 30%.',
        'Translated business requirements and user stories into production solutions, integrating enterprise REST APIs across Git, Jenkins CI/CD and Azure DevOps.',
        'Communicated technical outcomes to senior stakeholders, led stand-ups, mentored junior engineers and held standards through peer code review.',
      ],
    },
    {
      company: 'Etsy',
      title: 'E-Commerce Entrepreneur',
      start: 'Nov 2025',
      end: 'Feb 2026',
      context: 'Self-employed',
      highlights: [
        'Operated a digital product store, using Etsy and Facebook analytics to track sales performance and inform marketing decisions.',
        'Managed paid advertising across Facebook and Etsy and produced promotional content for TikTok and Instagram, measuring results and adjusting spend accordingly.',
      ],
    },
    {
      company: 'Plusnet',
      title: 'Front-End Developer',
      start: 'Sep 2022',
      end: 'Apr 2023',
      highlights: [
        'Built and tested production interfaces across billing, upgrade and renewal journeys using React, JavaScript, HTML, CSS and SQL, with Jest unit tests, in an Agile team alongside UX, content and product.',
        'Designed and ran weekly team surveys capturing what went well, what people enjoyed and what concerned them, feeding results into retrospectives and ways-of-working improvements.',
        'Took part in daily stand-ups and regular pair programming, maintaining code quality and sharing knowledge across the team.',
      ],
    },
    {
      company: 'Fusion IT Management Ltd',
      title: 'CRM Developer',
      start: 'Aug 2021',
      end: 'Feb 2022',
      highlights: [
        'Built Power BI reports and visualisations giving stakeholders visibility of business data to support decision making.',
        'Developed CRM solutions involving relational data models, workflow automation and structured business processes.',
        'Analysed business requirements and translated them into practical technical solutions, maintaining testing processes and audit trails in Azure DevOps.',
      ],
    },
    {
      company: 'CodeNation and IT internships',
      title: 'Earlier experience',
      start: '',
      end: 'Earlier',
      highlights: [
        'Student Software Developer at CodeNation — full-stack development with React, Node.js, Express.js and MongoDB.',
        'IT internships at BBC MediaCity, Higher Openshaw Community School and Hyde High School — 1st-line support, hardware maintenance, component upgrades and OS deployments.',
      ],
    },
  ],
  projects: [
    {
      name: 'Relay',
      blurb:
        'AI business operations assistant. Classifies inbound enquiries, sets priority and response windows, extracts commercial detail, opens tasks and drafts replies — then waits for a human to approve. Every AI decision is written to an audit trail.',
      href: 'https://sayamdev.github.io/relay/',
      repo: 'https://github.com/SayamDev/relay',
      tags: ['React', 'TypeScript', 'AI provider abstraction', 'n8n', 'Ollama'],
    },
    {
      name: 'TurfXI',
      blurb:
        'Offline-first app for running a Sunday-league football team — fixtures, live match events, player ratings and subs collection. Found and closed a privilege-escalation hole in the database policy, then wrote a two-user test proving it stays closed.',
      href: 'https://sayamdev.github.io/turfxi-demo/',
      repo: 'https://github.com/SayamDev/turfxi-demo',
      tags: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'RLS'],
    },
    {
      name: 'ATC Aptitude Drills',
      blurb:
        'Free, open practice for the aptitude tests used to select trainee air traffic controllers. Explains the format, teaches a method and shows where marks are being lost. Runs entirely in the browser.',
      href: 'https://github.com/SayamDev/atc-aptitude-drills',
      tags: ['TypeScript', 'React', 'Open source'],
    },
  ],
  education: [
    {
      qualification: 'BSc (Hons) Web Development',
      grade: '2:1',
      institution: 'Manchester Metropolitan University',
      period: '2017 – 2020',
      subjects: [
        'Web and Database Development',
        'SQL',
        'Python',
        'Java',
        'JavaScript',
        'PHP',
        'Analytics',
        'Systems Thinking',
        'UX Research',
        'E-commerce',
        'Business Strategy',
      ],
    },
    {
      qualification: 'Level 3 Extended Diploma in IT',
      grade: 'Triple Distinction*',
      institution: 'Ashton Sixth Form',
      period: '',
      subjects: [
        'Data Modelling',
        'Programming',
        'Software Testing',
        'IT Project Management',
        'Cyber Security & Incident Management',
        'Website Development',
        'Cloud Storage & Collaboration',
      ],
    },
  ],
  certifications: [
    'ISO 27001',
    'Google Digital Marketing',
    'Responsive Web Design',
    'AI Governance & Ethics',
    'AI Ethics',
    'AI for Work',
  ],
  skills: [
    {
      label: 'Data & analytics',
      items: [
        'SQL',
        'Power BI',
        'Relational data modelling',
        'GA4',
        'Data layers',
        'Data auditing',
        'Reporting & visualisation',
        'Digital measurement',
      ],
    },
    {
      label: 'Development',
      items: [
        'JavaScript',
        'TypeScript',
        'React',
        'React Native',
        'HTML',
        'CSS / SCSS',
        'Node.js',
        'Express.js',
        'MongoDB',
      ],
    },
    {
      label: 'Solutions & automation',
      items: [
        'Workflow automation',
        'REST APIs',
        'System & tool integration',
        'Process improvement',
        'Requirements analysis',
        'Proof of concept',
        'CRM',
        'n8n',
        'Supabase',
      ],
    },
    {
      label: 'AI & automation',
      items: ['Claude', 'GitHub Copilot', 'Amazon Q', 'LLM workflows', 'Prompt engineering'],
    },
    {
      label: 'Quality & compliance',
      items: [
        'Functional & UI testing',
        'Defect investigation',
        'Audit trails',
        'Structured testing processes',
        'ISO 27001 awareness',
      ],
    },
    {
      label: 'Delivery',
      items: [
        'Agile',
        'Scrum',
        'User stories',
        'Stakeholder communication',
        'Git',
        'Jenkins',
        'CI/CD',
        'Azure DevOps',
      ],
    },
    {
      label: 'Research methods',
      items: [
        'Usability testing',
        'Heuristic evaluation',
        'Journey mapping',
        'Heatmaps',
        'Card sorting',
        'SUS surveys',
        'A/B testing',
        'Competitor analysis',
        'UX audits',
        'User flows',
        'Personas',
      ],
    },
  ],
  pdf: 'sayam-ajmal-cv.pdf',
}
