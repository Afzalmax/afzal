export const site = {
  name: 'Mohamed Afzal R',
  shortName: 'afzal.dev',
  role: 'Full Stack Developer',
  location: 'Chennai, India',
  email: 'rafzal0606@gmail.com',
  github: 'https://github.com/Afzalmax',
  linkedin: 'https://linkedin.com/in/mohamedafzalr',
  /** Served from `public/`; Vite exposes it at site root. */
  resumePdf: '/Mohamed_Afzal_R_Resume_Final.docx.pdf',
  resumeDownloadFilename: 'Mohamed_Afzal_R_Resume.pdf',
  summary:
    'Impact-oriented engineer with 1+ year building enterprise-grade SaaS across FinTech and HRTech. I own backend infrastructure, event-driven architectures, and ship features that scale.',
}

export const stats = [
  { num: '1+', label: 'year experience' },
  { num: '40+', label: 'API endpoints built' },
  { num: '300+', label: 'alerts / day processed' },
  { num: '7x', label: 'team lead' },
]

export const skills = [
  {
    category: 'Frontend',
    color: 'cyan' as const,
    items: ['React.js', 'Material UI', 'Redux', 'JavaScript ES6+', 'Responsive Design'],
  },
  {
    category: 'Backend',
    color: 'green' as const,
    items: ['Django / DRF', 'Python', 'RESTful APIs', 'Async Processing', 'Celery / Beat'],
  },
  {
    category: 'Data & Messaging',
    color: 'purple' as const,
    items: ['PostgreSQL', 'RabbitMQ', 'Elasticsearch', 'Kibana', 'SQL Optimization'],
  },
  {
    category: 'DevOps & Cloud',
    color: 'amber' as const,
    items: ['GCP', 'CI/CD Pipelines', 'Git', 'Slack API', 'Agile / Scrum'],
  },
]

export type TagColor = 'green' | 'cyan' | 'purple' | 'amber'

export interface ExperienceItem {
  role: string
  company: string
  product: string
  period: string
  bullets: string[]
  stack: { label: string; color: TagColor }[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer — HRTech Product',
    company: 'Ncompass TechStudio Private Ltd',
    product: 'Enterprise HR Management Platform',
    period: 'Aug 2025 — Present',
    bullets: [
      'Led a team of 7 developers, overseeing sprint planning, code reviews, and engineering governance.',
      'Built a modular component library reused across 8+ feature modules including payroll, attendance, and recruitment.',
      'Developed end-to-end payroll processing with configurable pay cycles, CTC breakdowns, and automated PDF payslip generation serving 100+ employees monthly.',
      'Integrated Slack API for real-time clock-in/out notifications, improving attendance visibility by ~35%.',
      'Designed a custom CI/CD pipeline eliminating ~70% of manual conflict resolution during parallel feature development.',
      'Decoupled auth into a standalone sub-repository, accelerating developer onboarding by ~50% across 3 internal projects.',
      'Established a centralized UI style guide and theming system, reducing UI-related defects by ~40%.',
    ],
    stack: [
      { label: 'React.js', color: 'cyan' },
      { label: 'Material UI', color: 'cyan' },
      { label: 'Redux', color: 'purple' },
      { label: 'Slack API', color: 'green' },
      { label: 'CI/CD', color: 'green' },
      { label: 'PostgreSQL', color: 'amber' },
    ],
  },
  {
    role: 'Software Engineer — FinTech Product',
    company: 'Power of N TechStudio Private Ltd',
    product: 'Enterprise Financial Management System · Promoted from Intern',
    period: 'Apr 2025 — Aug 2025',
    bullets: [
      'Architected an async report generation pipeline using RabbitMQ, reducing CA report turnaround by ~60% — from minutes to seconds.',
      'Engineered a production-grade notification engine using Celery Beat + Elasticsearch, processing 300+ scheduled alerts daily with full auditability via Kibana.',
      'Designed and optimized 40+ RESTful API endpoints powering transaction logging, multi-currency FX handling, and ledger reconciliation.',
      'Implemented automated balance tallying and reconciliation logic, reducing manual verification effort by ~70%.',
      'Authored a GCP VM startup script auto-provisioning tmux + Celery sessions on boot, reducing deployment downtime to near zero.',
    ],
    stack: [
      { label: 'Django', color: 'green' },
      { label: 'DRF', color: 'green' },
      { label: 'PostgreSQL', color: 'amber' },
      { label: 'RabbitMQ', color: 'purple' },
      { label: 'Celery', color: 'purple' },
      { label: 'Elasticsearch', color: 'cyan' },
      { label: 'GCP', color: 'cyan' },
    ],
  },
  {
    role: 'Software Engineering Intern — FinTech Product',
    company: 'Power of N TechStudio Private Ltd',
    product: 'Enterprise Financial Management System',
    period: 'Sep 2024 — Mar 2025',
    bullets: [
      'Built backend services for transaction tracking, account management, and contact-ledger associations.',
      'Developed and tested RESTful API endpoints for multi-currency foreign exchange operations.',
      'Gained hands-on proficiency in Django, PostgreSQL, and distributed system fundamentals — laying the foundation for full-time promotion.',
    ],
    stack: [
      { label: 'Django', color: 'green' },
      { label: 'PostgreSQL', color: 'amber' },
      { label: 'Python', color: 'green' },
      { label: 'REST APIs', color: 'purple' },
      { label: 'Git', color: 'cyan' },
    ],
  },
]