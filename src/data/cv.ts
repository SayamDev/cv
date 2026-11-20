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
  /** Live link. Leave out while a project isn't public yet. */
  href?: string
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
  /** Roles I am open to, shown as chips under the headline. */
  openTo: string[]
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
  headline: 'Product engineer and content creator: I build voice and AI products, then grow the audience for them',
  location: 'Manchester, UK · open to remote',
  email: 'asfcit15sayamajmal@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sayam-ajmal' },
    { label: 'GitHub', href: 'https://github.com/SayamDev' },
    { label: 'X', href: 'https://x.com/Sayam_Ajmal' },
  ],
  openTo: ['Product Engineer', 'Founding Engineer', 'Developer Advocate', 'Product Owner', 'Content & Growth'],
  summary:
    'Product engineer in Manchester. Four years shipping customer-facing React and TypeScript at Plusnet and Tata Consultancy Services, on journeys used by more than 800,000 customers. Since May 2026 I have designed, built and launched ten products of my own end to end, including a voice interviewer that listens and asks follow-ups, on-device speech that costs nothing to run, a launch-week GTA 6 hub, and a clip studio built for the Meta AI Developer Hackathon. I also make the content: I started SixRadar’s YouTube and TikTok channels from zero and grew them to 9,700+ views across 42 videos in launch week, choosing moments from the data and reading the analytics to decide what to make next. I care about the parts that decide whether people trust a product: what happens when the AI is wrong, when the signal drops, or when someone goes looking for a hole.',
  proofPoints: [
    { value: '800k+', label: 'Customers on journeys I built at Plusnet' },
    { value: '4+ yrs', label: 'Commercial front-end and full-stack delivery' },
    { value: '10', label: 'Live products designed, built and launched in 2026' },
    { value: '9,700+', label: 'Video views in GTA 6 launch week, 42 videos' },
  ],
  roles: [
    {
      company: 'Independent',
      title: 'Product Engineer',
      start: 'May 2026',
      end: 'Present',
      context: 'Designing, building and launching my own AI products',
      highlights: [
        'Designed, built and launched ten live products on Cloudflare Workers, Vercel and Supabase, owning everything from data model and design system to deployment, most running at £0 a month.',
        'Built voice AI end to end: speech in, an LLM that reacts and asks a follow-up, natural voice out, with on-device text to speech in a Web Worker and three fallback layers.',
        'Built Context Desk for the Meta AI Developer Hackathon on Meta Muse Voice and Muse Spark: live clipping, story cuts, subtitles in 25 languages and voice-cloned dubs.',
        'Launched SixRadar for GTA 6 launch week and grew its YouTube and TikTok channels to 9,700+ views across 42 videos, using a capture, clipping and captioning pipeline I built.',
        'Ran the channels like a growth experiment: a script ranks live-stream moments by chat spikes, then I write the hook, caption it, design the cover and track which formats land (top Short: 2,900 views).',
        'Found and fixed a cross-tenant data leak in a Supabase row-level security policy, locked in by a test that signs in as two users.',
      ],
    },
    {
      company: 'Tata Consultancy Services',
      title: 'Front-End Developer',
      start: 'Apr 2023',
      end: 'May 2026',
      context: 'Delivering customer-facing products for Plusnet',
      highlights: [
        'Built accessible React and TypeScript interfaces for products serving 800,000+ customers, to WCAG 2.1 AA.',
        'Implemented and audited GA4 events and data layers so customer journeys and conversion were measured accurately.',
        'Used analytics and A/B test results with UX, design and product to make key journeys 5–10% faster to complete.',
        'Introduced AI-assisted workflows (Claude, GitHub Copilot, Amazon Q) for boilerplate and test generation, cutting repetitive development effort by about 30%.',
        'Turned requirements and user stories into production features across enterprise REST APIs, Jenkins CI/CD and Azure DevOps.',
        'Presented technical outcomes to senior stakeholders, led stand-ups, mentored junior engineers and reviewed code.',
      ],
    },
    {
      company: 'Etsy',
      title: 'Founder, digital product store',
      start: 'Nov 2025',
      end: 'Feb 2026',
      context: 'Alongside TCS',
      highlights: [
        'Ran the store end to end: products, paid ads on Facebook and Etsy, and promo content on TikTok and Instagram, adjusting spend from the sales data.',
      ],
    },
    {
      company: 'Plusnet',
      title: 'Front-End Developer',
      start: 'Sep 2022',
      end: 'Apr 2023',
      highlights: [
        'Built and tested billing, upgrade and renewal journeys in React, JavaScript and SQL with Jest, in an Agile team with UX, content and product.',
        'Ran weekly team surveys that fed retrospectives and ways-of-working changes.',
      ],
    },
    {
      company: 'Fusion IT Management Ltd',
      title: 'CRM Developer',
      start: 'Aug 2021',
      end: 'Feb 2022',
      highlights: [
        'Built CRM workflows, relational data models and Power BI reports that gave stakeholders a clear view of business data.',
      ],
    },
    {
      company: 'CodeNation and IT internships',
      title: 'Earlier experience',
      start: '',
      end: 'Earlier',
      highlights: [
        'Student Software Developer at CodeNation (React, Node.js, Express, MongoDB). IT internships at BBC MediaCity and two Tameside schools.',
      ],
    },
  ],
  projects: [
    {
      name: 'Context Desk',
      blurb:
        'Built for the Meta AI Developer Hackathon: an open-source clip studio that finds the real story moments in long recordings and live streams, then makes subtitled clips in 25 languages, with voice-cloned dubs. Meta Muse Voice transcribes and Muse Spark suggests story cuts, with the source evidence beside every suggestion so an editor checks each caption and cut before export.',
      repo: 'https://github.com/SayamDev/context-desk',
      href: 'https://x.com/Sayam_Ajmal/status/2118146228328534245',
      tags: ['Meta Muse', 'Node.js', 'SQLite', 'FFmpeg', '25 languages'],
    },
    {
      name: 'SixRadar',
      blurb:
        'An independent GTA 6 news, tools and community hub I designed, built and run on its own domain for the biggest game launch of the year. Live news and video from YouTube, TikTok, Reddit, X and Instagram, sourced answers, an interactive map, a live blog, a radio and a daily quiz. The build fails unless every answer has an official source or two independent sites that agree. Its video channels reached 9,700+ views in launch week. Sub-second page loads, 94% rated good on Core Web Vitals.',
      href: 'https://sixradar.com',
      tags: ['Astro', 'TypeScript', 'Cloudflare Workers', 'D1', 'Short-form video'],
    },
    {
      name: 'Rehearse',
      blurb:
        'Interview practice for people who never get coached: school leavers, career changers, anyone with a gap or a record they dread being asked about. Answer out loud, get a score and one thing to fix, try again. In hands-free mode the interviewer listens, reacts and asks a follow-up. Speech runs on the visitor’s device and the AI on a free tier, so it costs £0 a month, in 12 languages, and falls back to built-in notes instead of a paywall.',
      href: 'https://rehearse.sayamdev.workers.dev',
      tags: ['Voice AI', 'Next.js', 'Groq', 'On-device TTS', 'PWA'],
    },
    {
      name: 'Rehearse Courage',
      blurb:
        'For anyone of any age who finds it hard to speak up: in class, with friends, on a phone call. Six small steps from thinking it to doing it, calm-down tools and a tiny real-life dare each day. It rewards trying and never scores pauses or stutters. Under 13s never touch generative AI, and typed text is checked on the device for signs someone needs support.',
      href: 'https://rehearse-courage.sayamdev.workers.dev',
      repo: 'https://github.com/SayamDev/rehearse-courage',
      tags: ['Voice AI', 'Next.js', 'On-device AI', 'WCAG 2.2 AA'],
    },
    {
      name: 'TurfXI',
      blurb:
        'The operating system for grassroots football, even on pitches with no signal: fixtures, squads, live match events, payments, stats and shareable full-time cards. I found a database policy that let one manager read another team’s data; the fix is held in place by a test that signs in as two users and proves the door stays shut.',
      href: 'https://sayamdev.github.io/turfxi-demo/',
      repo: 'https://github.com/SayamDev/turfxi-demo',
      tags: ['React Native', 'Expo', 'Supabase', 'PostgreSQL RLS'],
    },
    {
      name: 'Hudl N Game',
      blurb:
        'Good company, bad alibis. Seven party games on one shared phone, each with its own visual world and characters. Private hold-to-reveal roles hide your secret the moment you let go or switch apps. Packs work offline, with no accounts or ads.',
      href: 'https://sayamdev.github.io/hudl-n-game/',
      repo: 'https://github.com/SayamDev/hudl-n-game',
      tags: ['React', 'TypeScript', 'PWA', 'Game design'],
    },
    {
      name: 'Revamp',
      blurb:
        'Triages inbound business enquiries, opens the task and drafts a reply. Nothing sends until a person approves, and every model call is logged with its reasoning so a wrong one can be traced.',
      href: 'https://sayamdev.github.io/revamp/',
      repo: 'https://github.com/SayamDev/revamp',
      tags: ['React', 'TypeScript', 'n8n', 'Ollama'],
    },
    {
      name: 'ORUK Navigator',
      blurb:
        'Describe a problem in your own words and find local council help in Tameside, with why it matched and a link to the council’s own page. Also publishes the services in the Open Referral UK data standard.',
      href: 'https://oruk-navigator.vercel.app',
      repo: 'https://github.com/SayamDev/ORUK-Navigator',
      tags: ['Next.js', 'PostgreSQL', 'C# / .NET', 'Open data'],
    },
    {
      name: 'Bubiqo',
      blurb:
        'A Chrome side panel that pulls deadlines, pay, totals and promises out of whatever page you have open, then offers to save, copy or set a reminder. Nothing leaves the device and 477 tests hold the behaviour in place.',
      repo: 'https://github.com/SayamDev/bubiqo',
      tags: ['TypeScript', 'Chrome MV3', 'Privacy-first', 'Vitest'],
    },
    {
      name: 'Latest Cookie',
      blurb:
        'Daily tech headlines from the original publishers, selected videos and a source-linked AI model comparison lab with charts, filters and an API pricing calculator.',
      href: 'https://sayamdev.github.io/latest-cookie/',
      repo: 'https://github.com/SayamDev/latest-cookie',
      tags: ['React', 'GitHub Actions', 'Zod'],
    },
    {
      name: 'SetoffIQ',
      blurb:
        'Tells you when to leave for a Manchester airport run, working back from the flight using live aircraft position, roads and airfield weather. No key is ever shipped to the page.',
      href: 'https://sayamdev.github.io/setoffiq/',
      repo: 'https://github.com/SayamDev/setoffiq',
      tags: ['React', 'Open data', 'PWA'],
    },
    {
      name: 'Focus & Snuggery',
      blurb:
        'Turns a full head into one small next step, with gentle focus timers and on-device read-aloud. Tasks stay in the browser.',
      href: 'https://sayamdev.github.io/focus-and-snuggery/',
      repo: 'https://github.com/SayamDev/focus-and-snuggery',
      tags: ['React', 'Dexie', 'On-device AI'],
    },
  ],
  education: [
    {
      qualification: 'BSc (Hons) Web Development',
      grade: '2:1',
      institution: 'Manchester Metropolitan University',
      period: '2017 – 2020',
      subjects: ['Web and Database Development', 'Analytics', 'UX Research', 'E-commerce', 'Business Strategy'],
    },
    {
      qualification: 'Level 3 Extended Diploma in IT',
      grade: 'Triple Distinction*',
      institution: 'Ashton Sixth Form',
      period: '',
      subjects: ['Programming', 'Data Modelling', 'Software Testing', 'Cyber Security'],
    },
  ],
  certifications: ['ISO 27001', 'Google Digital Marketing', 'Responsive Web Design', 'AI Governance & Ethics'],
  skills: [
    {
      label: 'Build',
      items: ['TypeScript', 'React', 'Next.js', 'React Native / Expo', 'Node.js', 'Astro', 'PostgreSQL / Supabase', 'Cloudflare Workers / D1', 'PWAs', 'Playwright'],
    },
    {
      label: 'AI and voice',
      items: ['LLM apps (Claude, Groq, Ollama)', 'Speech to text (Whisper)', 'On-device TTS (Kokoro)', 'Meta Muse', 'Agent workflows', 'Prompt and fallback design'],
    },
    {
      label: 'Content and growth',
      items: ['YouTube Shorts', 'TikTok', 'Hooks and titles', 'Cover design', 'YouTube and Cloudflare analytics', 'Paid social', 'SEO'],
    },
    {
      label: 'Product and data',
      items: ['UX research', 'A/B testing', 'GA4 and data layers', 'Power BI', 'WCAG accessibility'],
    },
    {
      label: 'Delivery',
      items: ['Agile / Scrum', 'Stakeholder communication', 'Git', 'CI/CD', 'Azure DevOps'],
    },
  ],
  pdf: 'sayam-ajmal-cv.pdf',
}
