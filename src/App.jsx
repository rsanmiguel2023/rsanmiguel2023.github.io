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
    "Data & BI": ["Python", "SQL", "Power BI", "Tableau", "Excel", "Pandas", "NumPy", "Matplotlib"],
    "Analytics": ["Predictive Modeling", "EDA", "Feature Engineering", "Forecasting", "Optimization", "Business Impact"],
    "Engineering": ["BigQuery", "Airflow", "Google Cloud Platform", "Data Validation", "ETL/ELT", "Workflow Debugging"],
    "IT & Systems": ["Microsoft 365", "Intune", "Defender", "Active Directory", "Endpoint Management", "Infrastructure"],
    "Tools": ["GitHub", "Bitbucket", "Streamlit", "VS Code", "Google Colab", "Jupyter", "OR-Tools", "JIRA"]
  };

  const projects = [
    {
      title: "Toronto Bike Sharing Analysis",
      category: "Data Analysis • Streamlit",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
      description: "Analyzed Toronto bike sharing patterns to identify demand trends, usage behavior, and operational insights.",
      impact: "Identified peak demand windows and weather-driven usage patterns to support resource allocation and improve service availability.",
      github: "https://github.com/rsanmiguel2023/torontobikesharinganalysis",
      live: "https://torontobikesharinganalysis.streamlit.app/"
    },
    {
      title: "Tesla PESTEL Dashboard",
      category: "Business Analysis • Dashboard",
      tech: ["Power BI", "Business Analysis", "Dashboard Design", "Strategy"],
      description: "Developed a PESTEL-based dashboard and strategic analysis of Tesla and the electric vehicle market.",
      impact: "Provided structured insights on regulatory, economic, and technological factors to support strategic decision-making and market positioning.",
      github: "https://github.com/rsanmiguel2023/teslapesteldashboard",
      live: null
    },
    {
      title: "AI Security Scanner in Python",
      category: "Cybersecurity • Python • Streamlit",
      tech: ["Python", "Streamlit", "Cybersecurity", "Bandit", "Security Scanning"],
      description: "Built a Python security scanning application to analyze code vulnerabilities, package risks, and security issues.",
      impact: "Improved visibility into code vulnerabilities, enabling faster remediation and reducing potential security risks in development workflows.",
      github: "https://github.com/rsanmiguel2023/ai-security-scanner-python",
      live: "https://ai-security-scanner.streamlit.app/"
    },
    {
      title: "Microsoft Stock Analytics Dashboard",
      category: "Predictive Analytics • Streamlit",
      tech: ["Python", "Pandas", "NumPy", "scikit-learn", "Streamlit"],
      description: "Created an analytics dashboard for Microsoft stock data using technical indicators, model evaluation, and feature engineering.",
      impact: "Enabled clearer interpretation of market signals and model outputs, supporting data-driven trading insights and risk awareness.",
      github: "https://github.com/rsanmiguel2023/msanalyticsdashboard",
      live: "https://msanalyticsdashboard.streamlit.app/"
    },
    {
      title: "UNFC Capstone Project: Profit Erosion Analytics",
      category: "Capstone • Analytics • Streamlit",
      tech: ["Python", "SQL", "BigQuery", "Machine Learning", "Streamlit"],
      description: "Developed a capstone analytics project focused on profit erosion, customer risk, and business performance drivers.",
      impact: "Identified high-risk customer segments and key drivers of loss, enabling targeted strategies to reduce profit erosion and improve financial performance.",
      github: "https://github.com/rsanmiguel2023/unfc-capstone-project",
      live: "https://profiterosionunfc.streamlit.app/"
    },
    {
      title: "Pastry Sales Forecasting",
      category: "Forecasting • Machine Learning",
      tech: ["Python", "Pandas", "NumPy", "scikit-learn", "XGBoost", "Streamlit"],
      description: "Forecasted pastry demand using historical sales, weather, store, and holiday data.",
      impact: "Improved demand planning accuracy, helping reduce overproduction and minimize inventory waste while optimizing daily production levels.",
      github: "https://github.com/rsanmiguel2023/pastry-sales-forecasting-",
      live: "https://pastrysalesforecasting.streamlit.app/"
    }
  ];

  const experience = [
    {
      role: "Data Engineer Intern",
      company: "Definity Financial Corporation, Toronto",
      period: "2025 – 2026",
      text: "Supported Airflow and BigQuery pipelines in a Google Cloud Platform environment, investigated workflow failures, validated datasets using SQL and Python, and used Bitbucket version control workflows to support reliable reporting outputs."
    },
    {
      role: "IT Group Head / IT Manager",
      company: "Century Properties Group",
      period: "2010 – 2022",
      text: "Led enterprise IT operations across infrastructure, SAP ERP, Microsoft 365, cybersecurity, networking, and disaster recovery across multiple business units."
    },
    {
      role: "Systems Administrator / Systems Engineer",
      company: "Earlier Technical Roles",
      period: "2004 – 2009",
      text: "Delivered server, network, endpoint, and infrastructure support, ensuring stable enterprise environments and reliable system performance."
    }
  ];

  const valueCards = [
    {
      icon: <BarChart3 size={26} />,
      title: "Analytics That Explain Business Problems",
      text: "I connect data exploration, modeling, and reporting to business decisions, not just technical outputs."
    },
    {
      icon: <Database size={26} />,
      title: "Practical Data Workflows",
      text: "Experience with SQL, Python, BigQuery, Airflow, and validation workflows for reliable reporting."
    },
    {
      icon: <Shield size={26} />,
      title: "Enterprise Systems Background",
      text: "19+ years across IT operations, Microsoft 365, infrastructure, cybersecurity, and business systems."
    },
    {
      icon: <Cloud size={26} />,
      title: "Cloud & Version Control Exposure",
      text: "Hands-on exposure to Google Cloud Platform, BigQuery, GitHub, and Bitbucket-based collaboration."
    }
  ];

  return (
    <div className="site-shell">
      <header className="hero">
        <nav className="nav">
          <a className="logo" href="#top">RSM</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section id="top" className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Data Analytics • BI • Data Engineering • IT Systems</p>
            <h1>Roberto San Miguel</h1>
            <p className="hero-subtitle">
              Data and Analytics professional with 19+ years in enterprise systems, now specializing in predictive analytics, dashboards, and data-driven decision support.
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
            <h2>Business-focused analytics backed by enterprise IT experience.</h2>
            <div className="mini-grid">
              <span>Python</span>
              <span>SQL</span>
              <span>BigQuery</span>
              <span>Power BI</span>
              <span>Streamlit</span>
              <span>GCP</span>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section id="about" className="section two-column">
          <div>
            <p className="section-kicker">About</p>
            <h2>A portfolio built around real projects and usable business outcomes.</h2>
          </div>
          <div className="text-block">
            <p>
              I am a Data and Analytics professional with 19+ years of experience in enterprise IT systems, now focused on building practical analytics solutions that drive business decisions.
            </p>
            <p>
              My background spans infrastructure, cybersecurity, ERP systems, Microsoft 365, and large-scale operations. I transitioned into data analytics to apply this experience toward solving business problems using data, predictive modeling, and interactive dashboards.
            </p>
            <p>
              I specialize in Python, SQL, BigQuery, Google Cloud Platform, NumPy, Pandas, Matplotlib, Streamlit, Power BI, Tableau, GitHub, and Bitbucket.
            </p>
          </div>
        </section>

        <section className="section">
          <p className="section-kicker">How I Deliver Value</p>
          <h2>Practical analytics with enterprise context.</h2>
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
              Live dashboards and GitHub repositories focused on forecasting, business intelligence, cybersecurity, financial analytics, and operational decision support.
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

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div>
              <p className="section-kicker">Contact</p>
              <h2>Let’s build something useful.</h2>
              <p>
                Open to opportunities in data analytics, BI, reporting, data engineering support, business systems, and technology operations.
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
