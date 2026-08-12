// Default jobs fallback data for production / offline mode
export const DEFAULT_JOBS = [
  {
    id: 1,
    title: 'Senior Cloud Architect (AWS & Azure)',
    department: 'Cloud & Infrastructure',
    location: 'Sydney, NSW',
    type: 'Full-time',
    is_remote: true,
    summary: 'Lead multi-cloud enterprise modernise programs for Australian financial services and government accounts.',
    description: 'We are seeking an experienced Senior Cloud Architect to lead multi-cloud strategy, landing zone automation, and migration programs across AWS and Azure platforms. You will work closely with executive stakeholders to design resilient, sovereign cloud solutions.',
    requirements: [
      '8+ years experience in enterprise cloud architecture (AWS or Azure certified).',
      'Deep expertise in Terraform, Kubernetes (EKS/AKS), and CI/CD pipelines.',
      'Strong client-facing presentation and technical leadership skills.',
      'Australian Citizenship or Permanent Residency preferred.'
    ],
    responsibilities: [
      'Architect target-state hybrid cloud solutions for enterprise clients.',
      'Lead technical discovery workshops and cloud FinOps assessments.',
      'Mentor junior cloud engineers and establish DevSecOps best practices.'
    ]
  },
  {
    id: 2,
    title: 'Data Engineer - Databricks & Delta Lake',
    department: 'Data & AI',
    location: 'Melbourne, VIC',
    type: 'Full-time',
    is_remote: false,
    summary: 'Build high-throughput streaming data pipelines and Delta Lake architectures for enterprise analytics.',
    description: 'Join our award-winning Databricks Practice to engineer real-time streaming data pipelines, Lakehouse architectures, and AI model data preparation workflows for top-tier enterprise clients.',
    requirements: [
      '4+ years hands-on experience with Databricks, PySpark, and Delta Lake.',
      'Proficiency in SQL, Python, and cloud data warehouses (Snowflake / BigQuery).',
      'Experience with Unity Catalog security governance and data lineage.'
    ],
    responsibilities: [
      'Design ETL/ELT streaming pipelines using Databricks Delta Live Tables.',
      'Optimise cluster compute performance and data lake query latency.',
      'Collaborate with AI researchers to deploy machine learning features.'
    ]
  },
  {
    id: 3,
    title: 'Cyber Security Operations Specialist',
    department: 'Cyber Security',
    location: 'Canberra, ACT',
    type: 'Full-time',
    is_remote: false,
    summary: 'Protect critical infrastructure and sovereign public sector networks against advanced cyber threats.',
    description: 'NCS Cyber Security Practice is looking for a Security Operations Specialist to monitor, detect, and respond to threat vectors across federal government and critical infrastructure environments.',
    requirements: [
      'NV1 Security Clearance required.',
      'Experience with Microsoft Sentinel, Splunk, or CrowdStrike Falcon.',
      'Knowledge of ISM and PSPF compliance frameworks.'
    ],
    responsibilities: [
      'Perform continuous threat hunting and incident response triage.',
      'Formulate SIEM detection rules and automated response playbooks.',
      'Prepare cyber security posture reports for client leadership.'
    ]
  },
  {
    id: 4,
    title: 'Senior Full Stack Engineer (React / Node)',
    department: 'Applications & Digital',
    location: 'Brisbane, QLD',
    type: 'Full-time',
    is_remote: true,
    summary: 'Build modern, high-performance web applications and digital service portals for enterprise clients.',
    description: 'We are expanding our Digital Applications practice! We need a Senior Full Stack Engineer skilled in React, TypeScript, Node.js, and microservices architecture to deliver custom web portals.',
    requirements: [
      '5+ years experience building production React & Node.js web applications.',
      'Expertise in RESTful APIs, GraphQL, and SQL/NoSQL databases.',
      'Focus on web accessibility (WCAG 2.1), performance, and unit testing.'
    ],
    responsibilities: [
      'Develop responsive frontend interfaces and scalable backend APIs.',
      'Participate in agile sprint planning and technical design reviews.',
      'Ensure high code quality through automated testing and code reviews.'
    ]
  },
  {
    id: 5,
    title: 'Generative AI Practice Principal',
    department: 'Data & AI',
    location: 'Sydney, NSW',
    type: 'Full-time',
    is_remote: true,
    summary: 'Drive enterprise LLM deployment, Mosaic AI governance, and agentic workflows across APAC.',
    description: 'As our Generative AI Practice Principal, you will lead the adoption of enterprise LLMs, RAG architectures, and custom AI agents for major healthcare, finance, and government clients.',
    requirements: [
      'Proven track record in deploying GenAI applications to production.',
      'Experience with OpenAI APIs, LangChain, LlamaIndex, or Vector DBs.',
      'Strong executive presence and strategic advisory expertise.'
    ],
    responsibilities: [
      'Advise C-level executives on GenAI roadmaps and risk mitigation.',
      'Lead technical prototyping of enterprise RAG search engines.',
      'Publish whitepapers and present at industry AI conferences.'
    ]
  }
];

export const DEFAULT_META = {
  locations: ['All', 'Sydney, NSW', 'Melbourne, VIC', 'Canberra, ACT', 'Brisbane, QLD', 'Macquarie Park, NSW'],
  departments: ['All', 'Cloud & Infrastructure', 'Data & AI', 'Cyber Security', 'Applications & Digital']
};

export default DEFAULT_JOBS;
