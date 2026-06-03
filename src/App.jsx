import {
  ExternalLink,
  Mail,
  Shield,
  Database,
  BarChart3,
  Cloud,
  Briefcase,
  Code2
} from "lucide-react";

export default function App() {
  const skills = {
    "Enterprise Infrastructure": [
      "Windows Server",
      "Active Directory",
      "Entra ID",
      "Microsoft 365",
      "Exchange Online",
      "IIS",
      "SQL Server",
      "VPN",
      "DNS",
      "DHCP",
      "Hybrid Infrastructure"
    ],
    "Identity & Access Management": [
      "RBAC",
      "User Provisioning",
      "Deprovisioning",
      "Access Reviews",
      "Security Groups",
      "Least Privilege",
      "Identity Governance",
      "Permission Management"
    ],
    "Technology Governance & Risk": [
      "Technology Lifecycle Management",
      "End-of-Life Governance",
      "IT Asset Management",
      "Vulnerability Management",
      "Compliance Monitoring",
      "Technology Risk",
      "Remediation Tracking",
      "Executive Reporting"
    ],
    "Cybersecurity & Governance": [
      "Microsoft Defender",
      "Firewall Administration",
      "Endpoint Protection",
      "Security Policies",
      "Patch Management",
      "Audit Support",
      "Vulnerability Mitigation",
      "Security Awareness"
    ],
    "ERP & Business Systems": [
      "SAP ERP ECC 6.0",
      "FI/CO/MM/WM/PS/BW/RE-FX",
      "Workflow Analysis",
      "Requirements Gathering",
      "Stakeholder Coordination",
      "Business Process Improvement",
      "Documentation & Training"
    ],
    "Data & Analytics": [
      "Python",
      "SQL",
      "BigQuery",
      "Apache Airflow",
      "Power BI",
      "Excel",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Plotly",
      "scikit-learn"
    ],
    "Cloud & Tools": [
      "Google Cloud Platform",
      "GitHub",
      "Bitbucket",
      "Streamlit",
      "VS Code",
      "Jupyter",
      "JIRA",
      "Google Colab"
    ]
  };

  const projects = [
    {
      title: "Technology Lifecycle Governance Dashboard",
      category: "Technology Risk • EOL Governance • Streamlit",
      tech: [
        "Python",
        "Streamlit",
        "Pandas",
        "Plotly",
        "Power BI",
        "Data Engineering",
        "Risk Analytics",
        "IT Asset Management"
      ],
      description: "Executive technology risk and lifecycle governance dashboard built for a synthetic banking environment, with visibility into hardware, software, vulnerability, compliance, and operational risk exposure across enterprise technology assets.",
      impact: "Designed CMDB-style asset datasets, EOL and feature engineering pipelines, governance KPIs, lifecycle risk scoring, remediation tracking, refresh planning forecasts, and Power BI-ready reporting outputs for executive technology risk management.",
      github: "https://github.com/rsanmiguel2023/technology-eol-lifecycle-dashboard",
      live: "https://technology-eol-lifecycle.streamlit.app/"
    },
    {
      title: "UNFC Capstone Project: Profit Erosion Analytics",
      category: "Capstone • Analytics • BigQuery • Streamlit",
      tech: ["Python", "SQL", "BigQuery", "Machine Learning", "Data Pipeline", "Streamlit"],
      description: "Built an end-to-end analytics pipeline transforming 180K+ transaction records into structured datasets for customer risk analysis and predictive modeling.",
      impact: "Developed predictive models achieving AUC = 0.9798 and identified high-risk customer segments driving profit erosion, supporting targeted financial performance improvement strategies.",
      github: "https://github.com/rsanmiguel2023/unfc-capstone-project",
      live: "https://profiterosionunfc.streamlit.app/"
    },
    {
      title: "AI Security Scanner in Python",
      category: "Cybersecurity • Python • Streamlit",
      tech: ["Python", "Streamlit", "Cybersecurity", "Bandit", "Security Scanning"],
      description: "Built a Python security scanning application to analyze code vulnerabilities, package risks, and common security issues through a simple dashboard interface.",
      impact: "Improved visibility into development security risks, enabling faster review, prioritization, and remediation of vulnerabilities.",
      github: "https://github.com/rsanmiguel2023/ai-security-scanner-python",
      live: "https://ai-security-scanner.streamlit.app/"
    },
    {
      title: "Data Engineering & Cloud Pipeline Projects",
      category: "Data Engineering • GCP • Airflow",
      tech: ["Google Cloud Platform", "BigQuery", "Apache Airflow", "Cloud Composer", "Python", "SQL", "Git", "Bitbucket"],
      description: "Supported production ETL workflows, cloud-based data pipelines, workflow debugging, SQL/Python validation, and reporting reliability in a large Canadian insurance environment.",
      impact: "Modernized and supported pipeline execution by updating Airflow workflows, investigating workflow failures, validating transformed datasets, documenting dependencies, and reducing reporting disruption risk.",
      github: "https://github.com/rsanmiguel2023",
      live: null
    },
    {
      title: "Toronto Bike Sharing Analysis",
      category: "Data Analysis • Visualization • Streamlit",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA", "Streamlit"],
      description: "Analyzed Toronto bike sharing patterns across time, usage behavior, and environmental conditions to identify operational demand trends.",
      impact: "Identified usage patterns and demand drivers that can support resource planning, service availability, and operational decision-making.",
      github: "https://github.com/rsanmiguel2023/torontobikesharinganalysis",
      live: "https://torontobikesharinganalysis.streamlit.app/"
    },
    {
      title: "Pastry Sales Forecasting",
      category: "Forecasting • Machine Learning • Streamlit",
      tech: ["Python", "Pandas", "NumPy", "scikit-learn", "XGBoost", "Time Series", "Streamlit"],
      description: "Built a forecasting pipeline using historical sales, weather, store, and holiday data with lag and rolling features to predict pastry demand.",
      impact: "Selected XGBoost with strong model performance, improving demand planning reliability and helping reduce overproduction, waste, and inventory inefficiencies.",
      github: "https://github.com/rsanmiguel2023/pastry-sales-forecasting-",
      live: "https://pastrysalesforecasting.streamlit.app/"
    },
    {
      title: "Microsoft Stock Analytics Dashboard",
      category: "Predictive Analytics • Financial Data • Streamlit",
      tech: ["Python", "Pandas", "NumPy", "scikit-learn", "ROC-AUC", "Streamlit"],
      description: "Created a stock analytics dashboard using technical indicators, volatility features, momentum features, model evaluation, and financial visual storytelling.",
      impact: "Improved interpretation of market signals, model outputs, and risk behavior through interactive analytics designed for decision support.",
      github: "https://github.com/rsanmiguel2023/msanalyticsdashboard",
      live: "https://msanalyticsdashboard.streamlit.app/"
    },
    {
      title: "Tesla PESTEL Dashboard",
      category: "Business Analysis • Strategy • Dashboard",
      tech: ["Power BI", "Business Analysis", "Dashboard Design", "PESTEL", "Strategy"],
      description: "Developed a PESTEL-based dashboard and strategic analysis of Tesla and the electric vehicle market.",
      impact: "Provided structured insights on external political, economic, social, technological, environmental, and legal factors affecting product development and market positioning.",
      github: "https://github.com/rsanmiguel2023/teslapesteldashboard",
      live: null
    }
  ];

  const experience = [
    {
      role: "Data Engineer Intern",
      company: "Definity Financial Corporation, Toronto",
      period: "2025 – 2026",
      text: "Supported cloud-based data pipelines, ETL workflows, Apache Airflow processes, BigQuery datasets, SQL/Python validation, workflow debugging, documentation, and production reporting reliability."
    },
    {
      role: "IT Group Head / IT Manager",
      company: "Century Properties Group",
      period: "2010 – 2022",
      text: "Oversaw enterprise IT operations, infrastructure, SAP ERP environments, Microsoft 365, Exchange migration, IAM/RBAC governance, cybersecurity, reporting, vendor coordination, application development, and business systems modernization."
    },
    {
      role: "Systems Administrator / IT Specialist",
      company: "Century Properties Inc.",
      period: "2005 – 2009",
      text: "Managed Windows Server, Active Directory, Exchange, firewall, VPN, wireless network, RBAC, user access administration, infrastructure upgrades, and L1–L4 operational support."
    },
    {
      role: "Systems Engineer",
      company: "Imaginet International Inc.",
      period: "2004 – 2005",
      text: "Implemented server, network, firewall, Exchange, VoIP, and infrastructure solutions while resolving advanced technical escalations for enterprise clients."
    }
  ];

  const valueCards = [
    {
      icon: <Shield size={26} />,
      title: "Enterprise Technology Leadership",
      text: "19+ years across IT operations, infrastructure, Microsoft 365, cybersecurity, IAM, ERP, and business systems."
    },
    {
      icon: <Database size={26} />,
      title: "Data & Analytics Execution",
      text: "Recent hands-on experience with SQL, Python, BigQuery, Apache Airflow, ETL workflows, data validation, and machine learning projects."
    },
    {
      icon: <BarChart3 size={26} />,
      title: "Business Reporting & Decision Support",
      text: "Prepared KPI/KRA reports, dashboards, executive reporting materials, operational metrics analysis, and recommendations for leadership."
    },
    {
      icon: <Cloud size={26} />,
      title: "Cloud, Systems & Governance",
      text: "Experience with Google Cloud Platform, hybrid infrastructure, access governance, workflow modernization, and cross-functional delivery."
    }
  ];

  const enterpriseAreas = [
    {
      title: "Infrastructure & Operations",
      text: "Managed Windows Server, Active Directory, Microsoft 365, Exchange, IIS, SQL Server, VPN, DNS, DHCP, backup/recovery, patching, and hybrid environments."
    },
    {
      title: "Identity & Access Management",
      text: "Owned RBAC administration, user provisioning and deprovisioning, access reviews, security groups, least privilege access, and identity governance initiatives."
    },
    {
      title: "Technology Lifecycle Governance",
      text: "Built EOL-focused governance analytics covering lifecycle exposure, vulnerability risk, compliance status, remediation tracking, refresh planning, and executive reporting."
    },
    {
      title: "ERP & Business Systems",
      text: "Led SAP ERP ECC 6.0 implementation across FI, CO, MM, WM, PS, BW, and RE-FX while coordinating requirements, workflow reviews, sign-offs, and user enablement."
    },
    {
      title: "Data, Reporting & Analytics",
      text: "Built dashboards, KPI/KRA reporting, operational metrics analysis, ETL workflows, predictive analytics models, and Streamlit dashboards."
    }
  ];

  const certifications = [
    "ISC2 Certified in Cybersecurity (CC)",
    "MCSE – Microsoft Certified Systems Engineer",
    "MCSA – Microsoft Certified Systems Administrator",
    "MCDBA – Microsoft Certified Database Administrator"
  ];

  return (
    <div className="site-shell">
      <header className="hero">
        <nav className="nav">
          <a className="logo" href="#top">RSM</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#enterprise">Enterprise</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section id="top" className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Enterprise Technology • Risk & Governance • IAM • ERP • Data & Analytics</p>
            <h1>Roberto San Miguel</h1>
            <p className="hero-subtitle">
              Enterprise technology professional with extensive experience across infrastructure operations, technology lifecycle governance, business systems, ERP implementation, cybersecurity, identity and access management, cloud platforms, and analytics-driven process improvement.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects <ExternalLink size={17} />
              </a>
              <a className="btn secondary" href="https://github.com/rsanmiguel2023" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="status-dot"></div>
            <p className="card-label">Portfolio Focus</p>
            <h2>Enterprise systems experience strengthened by technology risk, governance, cloud, and analytics projects.</h2>
            <div className="mini-grid">
              <span>EOL</span>
              <span>IAM</span>
              <span>ERP</span>
              <span>Python</span>
              <span>BigQuery</span>
              <span>Power BI</span>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section id="about" className="section two-column">
          <div>
            <p className="section-kicker">About</p>
            <h2>A portfolio built around enterprise systems, governance, analytics, and business outcomes.</h2>
          </div>
          <div className="text-block">
            <p>
              I am an enterprise technology and analytics professional with extensive hands-on experience managing infrastructure, identity systems, ERP platforms, cybersecurity controls, reporting workflows, technology governance, and business systems.
            </p>
            <p>
              My background bridges technical operations and business needs through requirements gathering, workflow analysis, stakeholder coordination, operational reporting, process improvement, technology lifecycle governance, and system implementation support.
            </p>
            <p>
              I also bring recent practical experience in data engineering and analytics, including Apache Airflow, BigQuery, SQL, Python, ETL workflows, data validation, machine learning projects, and interactive dashboards.
            </p>
          </div>
        </section>

        <section className="section">
          <p className="section-kicker">How I Deliver Value</p>
          <h2>Technology leadership with hands-on analytics execution.</h2>
          <div className="value-grid">
            {valueCards.map((item) => (
              <article className="value-card" key={item.title}>
                <div className="icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="enterprise" className="section">
          <p className="section-kicker">Enterprise Experience</p>
          <h2>Bridging enterprise operations, systems, governance, and analytics.</h2>
          <div className="value-grid">
            {enterpriseAreas.map((item) => (
              <article className="value-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section">
          <p className="section-kicker">Skills</p>
          <h2>Core capabilities</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <article className="skill-card" key={group}>
                <h3>{group}</h3>
                <div className="chips">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Projects</p>
              <h2>Selected work</h2>
            </div>
            <p>
              Live dashboards and GitHub repositories focused on technology lifecycle governance, risk analytics, forecasting, business intelligence, cybersecurity, financial analytics, data pipelines, and operational decision support.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="impact-box">
                  <strong>Business Impact:</strong>
                  <span>{project.impact}</span>
                </div>

                <div className="tech-row">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} /> Live App
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <p className="section-kicker">Experience</p>
          <h2>Professional profile</h2>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-card" key={item.role}>
                <div className="timeline-icon"><Briefcase size={20} /></div>
                <div>
                  <p className="period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="section-kicker">Certifications</p>
          <h2>Professional certifications</h2>
          <div className="skills-grid">
            {certifications.map((cert) => (
              <article className="skill-card" key={cert}>
                <h3>{cert}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div>
              <p className="section-kicker">Contact</p>
              <h2>Let’s build something useful.</h2>
              <p>
                Open to opportunities across enterprise technology, technology risk and governance, IT operations, IAM, business systems, data analytics, BI, reporting, and data engineering support.
              </p>
            </div>

            <div className="contact-actions">
              <a className="btn primary" href="mailto:rsanmiguel2023@gmail.com">
                <Mail size={17} /> Email Me
              </a>
              <a className="btn secondary" href="https://github.com/rsanmiguel2023" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn secondary" href="https://www.linkedin.com/in/rsanmiguel2025" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Code2 size={16} />
        <span>Built with React and Vite • Roberto San Miguel</span>
      </footer>
    </div>
  );
}
