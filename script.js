/**
 * PO2Suite - Single Source of Truth for SAP PI/PO to SAP Integration Suite Migration
 * Gamified Visual Engine with Professional Technical Terminology
 */

// ==========================================
// 1. DATA REPOSITORY (ALL CURATED ASSETS)
// ==========================================

const RESOURCES = [
  // Official SAP Notes
  {
    id: "note-3045368",
    category: "notes",
    categoryLabel: "SAP Note",
    number: "3045368",
    title: "SAP Roadmap for CPI and PI/PO Products",
    description: "Official SAP strategic roadmap detailing long-term maintenance timelines and transition guidance from SAP Process Orchestration to SAP Integration Suite.",
    topic: "Roadmap & Strategy",
    tags: ["Migration", "PI/PO", "Integration Suite", "SAP BTP"],
    link: "https://me.sap.com/notes/3045368"
  },
  {
    id: "note-2574603",
    category: "notes",
    categoryLabel: "SAP Note",
    number: "2574603",
    title: "PI: Official SAP Guide Finder (Install, Copy, Migration, Upgrade & Patch)",
    description: "Navigational directory of official SAP guides for NetWeaver PI/PO installation, system copies, modernization upgrades, and cloud migration procedures.",
    topic: "Navigation & Guides",
    tags: ["PI/PO", "Landscape Assessment", "Migration"],
    link: "https://me.sap.com/notes/2574603"
  },
  {
    id: "note-3564770",
    category: "notes",
    categoryLabel: "SAP Note",
    number: "3564770",
    title: "Unable to Migrate Process Orchestration Artifacts to SAP Integration Suite",
    description: "Diagnostic and troubleshooting guide resolving artifact extraction issues, authorization hurdles, and compatibility exceptions during automated migration.",
    topic: "Troubleshooting",
    tags: ["Migration Toolkit", "Troubleshooting", "PI/PO", "iFlow"],
    link: "https://me.sap.com/notes/3564770"
  },
  {
    id: "note-3402032",
    category: "notes",
    categoryLabel: "SAP Note",
    number: "3402032",
    title: "How to Upgrade a CPI Tenant to an Integration Suite Tenant",
    description: "Step-by-step tenant migration procedure for upgrading legacy standalone Cloud Integration (CPI) tenants into enterprise SAP Integration Suite tenants.",
    topic: "Tenant Migration",
    tags: ["SAP BTP", "Cloud Integration", "Integration Suite", "Neo to Cloud Foundry"],
    link: "https://me.sap.com/notes/3402032"
  },
  {
    id: "note-3503286",
    category: "notes",
    categoryLabel: "SAP Note",
    number: "3503286",
    title: "Migration Assessment – Cloud Connector 403 Forbidden Error Fix",
    description: "Step-by-step resolution for HTTP 403 Forbidden errors when connecting SAP Migration Assessment tool to on-premise PI/PO via SAP Cloud Connector.",
    topic: "Troubleshooting",
    tags: ["Migration Assessment", "Security", "Troubleshooting", "Hybrid Integration"],
    link: "https://me.sap.com/notes/3503286"
  },
  {
    id: "note-3644852",
    category: "notes",
    categoryLabel: "SAP Note",
    number: "3644852",
    title: "SAP Integration Suite & Cloud Integration – Provisioning & Onboarding Guided Answers",
    description: "Interactive decision tree assisting Basis and Cloud Admins with entitlement assignment, booster execution, and role collection configuration in SAP BTP.",
    topic: "Provisioning & Onboarding",
    tags: ["SAP BTP", "Cloud Integration", "Security", "Interface Governance"],
    link: "https://me.sap.com/notes/3644852"
  },
  {
    id: "note-3145170",
    category: "notes",
    categoryLabel: "SAP Note",
    number: "3145170",
    title: "Migration Strategy: Guidance on Moving from PI/PO to Integration Suite",
    description: "Architectural blueprint and strategic best practices outlining the transition path from dual-stack/single-stack PI/PO to cloud-native integration suites.",
    topic: "Migration Strategy",
    tags: ["Migration", "Modernization", "Landscape Assessment"],
    link: "https://me.sap.com/notes/3145170"
  },
  {
    id: "note-3144888",
    category: "notes",
    categoryLabel: "SAP Note",
    number: "3144888",
    title: "Discovery Tool: Details on the Integration Assessment Tool",
    description: "Technical instructions for running automated discovery against ESR and Integration Directory to identify interface complexity and migration readiness.",
    topic: "Discovery Tool",
    tags: ["Migration Assessment", "ESR", "PI/PO"],
    link: "https://me.sap.com/notes/3144888"
  },
  {
    id: "note-3145453",
    category: "notes",
    categoryLabel: "SAP Note",
    number: "3145453",
    title: "iFlow Conversion: Automated Conversion for ICOs to Cloud Integration",
    description: "Technical mechanics of the automated conversion engine that imports Integrated Configurations (ICOs) and converts them into standard Cloud Integration iFlow packages.",
    topic: "iFlow Conversion",
    tags: ["Migration Toolkit", "iFlow", "Cloud Integration"],
    link: "https://me.sap.com/notes/3145453"
  },
  {
    id: "note-3145550",
    category: "notes",
    categoryLabel: "SAP Note",
    number: "3145550",
    title: "Monitoring: Centralized Monitoring with Cloud ALM",
    description: "Configuration guide to integrate SAP Cloud ALM (Application Lifecycle Management) with SAP Integration Suite for real-time alerting, health monitoring, and analytics.",
    topic: "Monitoring",
    tags: ["Error Handling", "Interface Governance", "Security"],
    link: "https://me.sap.com/notes/3145550"
  },
  {
    id: "note-3145454",
    category: "notes",
    categoryLabel: "SAP Note",
    number: "3145454",
    title: "Security Best Practices: Secure Integration Design and Implementation",
    description: "Security architecture note detailing mTLS, OAuth 2.0 token profiles, keystore management, and SAP BTP credential storage best practices.",
    topic: "Security Best Practices",
    tags: ["Security", "Cloud Integration", "SAP BTP"],
    link: "https://me.sap.com/notes/3145454"
  },
  {
    id: "note-3145600",
    category: "notes",
    categoryLabel: "SAP Note",
    number: "3145600",
    title: "Connectivity Options: Overview of Various Adapters and Protocols",
    description: "Complete mapping guide of legacy PI/PO adapter modules (RFC, IDoc_AAE, SOAP, File, JDBC) to SAP Integration Suite Cloud & Edge adapter equivalents.",
    topic: "Connectivity Options",
    tags: ["IDOC / RFC / SOAP / REST", "Cloud Integration", "Edge Integration Cell"],
    link: "https://me.sap.com/notes/3145600"
  },

  // Documentation & Guides
  {
    id: "doc-mg-overview",
    category: "docs",
    categoryLabel: "Documentation",
    title: "Migration Guide – Overview",
    description: "Primary SAP end-to-end documentation covering migration phases, tooling prerequisites, landscape mapping, and cutover strategies.",
    topic: "Core Migration Guide",
    tags: ["Migration", "Landscape Assessment", "PI/PO"],
    link: "https://help.sap.com/docs/integration-suite/migration-guide/overview"
  },
  {
    id: "doc-intro-is",
    category: "docs",
    categoryLabel: "Documentation",
    title: "Introduction to SAP Integration Suite",
    description: "Strategic executive overview highlighting business advantages of moving from monolithic on-premise PO to modular cloud integration services.",
    topic: "Architecture & Benefits",
    tags: ["Integration Suite", "Modernization", "SAP BTP"],
    link: "https://help.sap.com/docs/integration-suite"
  },
  {
    id: "doc-landscape-assessment",
    category: "docs",
    categoryLabel: "Documentation",
    title: "Landscape Assessment Guide",
    description: "Methodology to audit existing integration footprints, system dependencies, active message volumes, and design future-proof target cloud topologies.",
    topic: "Architecture Planning",
    tags: ["Landscape Assessment", "Migration", "PI/PO"],
    link: "https://help.sap.com/docs/integration-suite/migration-guide/landscape-assessment"
  },
  {
    id: "doc-connectivity-migration",
    category: "docs",
    categoryLabel: "Documentation",
    title: "Connectivity Migration Guide",
    description: "Detailed protocols for transitioning connectivity channels from on-premise adapters (IDoc, RFC, SFTP, JDBC, SOAP) to SAP Cloud Connector and Cloud Integration.",
    topic: "Connectivity",
    tags: ["IDOC / RFC / SOAP / REST", "Cloud Integration", "Hybrid Integration"],
    link: "https://help.sap.com/docs/integration-suite/migration-guide/connectivity"
  },
  {
    id: "doc-security-migration",
    category: "docs",
    categoryLabel: "Documentation",
    title: "Security in Migration",
    description: "Comprehensive security blueprint addressing mutual TLS certificates, User-Exchange token flows, secret stores, and regulatory compliance standards.",
    topic: "Security & Compliance",
    tags: ["Security", "SAP BTP", "Interface Governance"],
    link: "https://help.sap.com/docs/integration-suite/migration-guide/security"
  },
  {
    id: "doc-error-handling",
    category: "docs",
    categoryLabel: "Documentation",
    title: "Error Handling & Logging Strategy",
    description: "Modern architectural patterns replacing legacy alert rules with Exception Subprocesses, custom retry headers, JMS dead-letter queues, and Cloud ALM logging.",
    topic: "Error Handling & Governance",
    tags: ["Error Handling", "iFlow", "Interface Governance"],
    link: "https://help.sap.com/docs/integration-suite/migration-guide/error-handling"
  },
  {
    id: "doc-interface-governance",
    category: "docs",
    categoryLabel: "Documentation",
    title: "Interface Governance Across Multi-Cloud",
    description: "Guidelines for managing CI/CD pipelines, package naming standards, transport management via CTS+ or Cloud Transport Management (cTMS), and API lifecycles.",
    topic: "Governance",
    tags: ["Interface Governance", "SAP BTP", "Modernization"],
    link: "https://help.sap.com/docs/integration-suite/migration-guide/governance"
  },
  {
    id: "doc-pipeline-concept",
    category: "docs",
    categoryLabel: "Documentation",
    title: "Pipeline Concept in Cloud Integration",
    description: "Pattern framework establishing reusable, decoupled multi-flow pipelines emulating PI/PO 4-step pipeline processing (Inbound, Validation, Transformation, Outbound).",
    topic: "Design Patterns",
    tags: ["Pipeline Concept", "iFlow", "Modernization"],
    link: "https://help.sap.com/docs/integration-suite/pipeline-concept"
  },
  {
    id: "doc-modernization-recs",
    category: "docs",
    categoryLabel: "Documentation",
    title: "Modernization Recommendations",
    description: "Best practice recommendations to modernize interfaces: migrating SOAP to REST/OData APIs, file transfers to event-driven webhooks, and point-to-point to pub/sub.",
    topic: "Modernization",
    tags: ["Modernization", "API Management", "B2B / EDI"],
    link: "https://help.sap.com/docs/integration-suite/modernization"
  },
  {
    id: "doc-integration-advisor",
    category: "docs",
    categoryLabel: "Documentation",
    title: "SAP Integration Advisor Documentation",
    description: "Using machine learning and crowdsourced knowledge bases for creating Message Implementation Guidelines (MIGs) and Mapping Guidelines (MAGs).",
    topic: "AI-Assisted Mapping",
    tags: ["Integration Advisor", "B2B / EDI", "Modernization"],
    link: "https://help.sap.com/docs/integration-advisor"
  },
  {
    id: "doc-tpm",
    category: "docs",
    categoryLabel: "Documentation",
    title: "SAP Trading Partner Management (TPM)",
    description: "Cloud-native replacement for PI/PO B2B Add-on: manage trading partner profiles, agreements, interchange envelopes, and EDIFACT/X12 standards.",
    topic: "B2B & EDI",
    tags: ["Trading Partner Management", "B2B / EDI"],
    link: "https://help.sap.com/docs/trading-partner-management"
  },

  // Tools & Accelerators
  {
    id: "tool-assessment",
    category: "tools",
    categoryLabel: "Tool & Accelerator",
    title: "SAP Migration Assessment Tool",
    description: "Included in Integration Suite license. Automatically extracts PI/PO landscape metadata, analyzes ICO complexity, evaluates readiness, and estimates migration effort per scenario.",
    topic: "Landscape Discovery & Effort Estimation",
    tags: ["Migration Assessment", "PI/PO", "Landscape Assessment"],
    link: "https://help.sap.com/docs/migration-assessment"
  },
  {
    id: "tool-toolkit",
    category: "tools",
    categoryLabel: "Tool & Accelerator",
    title: "Migration Toolkit (Cloud Integration)",
    description: "Embedded within SAP Cloud Integration. Automatically ingests PI/PO ICO configurations and message mappings, converting them into deployable iFlow packages.",
    topic: "Automated iFlow Conversion",
    tags: ["Migration Toolkit", "iFlow", "ESR"],
    link: "https://help.sap.com/docs/integration-suite/migration-toolkit"
  },
  {
    id: "tool-advisor",
    category: "tools",
    categoryLabel: "Tool & Accelerator",
    title: "SAP Integration Advisor",
    description: "Machine-learning engine for creating interfaces and mapping proposals. Drastically cuts mapping design time by proposing fields based on industry crowdsourcing.",
    topic: "ML-Based Mapping Acceleration",
    tags: ["Integration Advisor", "B2B / EDI", "Modernization"],
    link: "https://help.sap.com/docs/integration-advisor"
  },
  {
    id: "tool-hub",
    category: "tools",
    categoryLabel: "Tool & Accelerator",
    title: "SAP Business Accelerator Hub",
    description: "api.sap.com. Central repository of 3,500+ pre-built integration packages, APIs, connectors, and business events. Eliminates custom development for standard SAP scenarios.",
    topic: "Pre-Built Integration Content",
    tags: ["Business Accelerator Hub", "Modernization", "iFlow"],
    link: "https://api.sap.com"
  },
  {
    id: "tool-connector",
    category: "tools",
    categoryLabel: "Tool & Accelerator",
    title: "SAP Cloud Connector",
    description: "On-premise reverse proxy establishing secure TLS tunnels to SAP BTP without opening inbound firewall ports, enabling secure on-premise ERP/PI connectivity.",
    topic: "Secure Hybrid Tunnel",
    tags: ["Hybrid Integration", "Security", "SAP BTP"],
    link: "https://help.sap.com/docs/cloud-connector"
  },
  {
    id: "tool-edge-cell",
    category: "tools",
    categoryLabel: "Tool & Accelerator",
    title: "Edge Integration Cell",
    description: "Containerized runtime deployed in customer Kubernetes (on-premise or private cloud) allowing cloud-designed iFlows to execute locally with zero cloud egress.",
    topic: "On-Premise Hybrid Runtime",
    tags: ["Edge Integration Cell", "Hybrid Integration", "Security"],
    link: "https://help.sap.com/docs/edge-integration-cell"
  },
  {
    id: "tool-factory",
    category: "tools",
    categoryLabel: "Tool & Accelerator",
    title: "SAP Migration Factory (Free Assessment)",
    description: "Official SAP-led consulting program providing free 2-3 week turnaround assessment, personalized migration plan, 1-hour executive results readout, and wave roadmap.",
    topic: "Free SAP-Led Assessment Program",
    tags: ["Migration Assessment", "Migration", "Landscape Assessment"],
    link: "https://www.sap.com/registration/free-migration-factory-for-integration.html"
  },

  // Videos & Masterclasses
  {
    id: "video-mig-po-is",
    category: "videos",
    categoryLabel: "Video Masterclass",
    title: "Migrating SAP Process Orchestration to SAP Integration Suite",
    description: "Keynote presentation from SAP Product Management explaining architectural differences, assessment tooling, and hybrid coexistence models.",
    topic: "Migration Approaches & Best Practices",
    tags: ["Migration", "Integration Suite", "Hybrid Integration"],
    link: "https://www.sap.com/events/migration-masterclass.html"
  },
  {
    id: "video-cpi-playlist",
    category: "videos",
    categoryLabel: "Video Masterclass",
    title: "SAP Academy – SAP Cloud Integration Playlist",
    description: "Hands-on developer video series covering fundamental iFlow building blocks, script execution, message mappings, adapter configs, and security stores.",
    topic: "Core CPI Developer Enablement",
    tags: ["Cloud Integration", "iFlow", "Groovy Scripting"],
    link: "https://www.youtube.com/playlist?list=PLkzo92owKnVwZ_hL-3aNn47qXF6cM37"
  },
  {
    id: "video-api-security",
    category: "videos",
    categoryLabel: "Video Masterclass",
    title: "API Security Best Practices Masterclass",
    description: "Deep dive into hardening cloud endpoints, implementing OAuth 2.0 mutual authentication, spike arrest policies, and preventing data leakage.",
    topic: "Security & Policy Enforcement",
    tags: ["Security", "API Management"],
    link: "https://www.youtube.com/watch?v=sap-api-security-guide"
  },

  // Expert Community Blogs
  {
    id: "blog-elevate",
    category: "blogs",
    categoryLabel: "Expert Blog",
    title: "Elevate from SAP PO and Modernize Your Integration Platform with IS",
    description: "Executive strategic roadmap defining why organizations must modernize, the end-of-maintenance timeline, and modernization levers.",
    topic: "Modernization Strategy",
    tags: ["Modernization", "Migration", "Integration Suite"],
    link: "https://community.sap.com/blogs/elevate-from-sap-po"
  },
  {
    id: "blog-migration-tool",
    category: "blogs",
    categoryLabel: "Expert Blog",
    title: "Migration Tool in Cloud Integration: Auto-Migrating ICOs",
    description: "In-depth guide demonstrating how to select any PI/PO ICO and automatically generate structured Cloud Integration packages with mapping preserves.",
    topic: "Automated Conversion Tooling",
    tags: ["Migration Toolkit", "iFlow", "PI/PO"],
    link: "https://community.sap.com/blogs/migration-tool-cloud-integration"
  },
  {
    id: "blog-master",
    category: "blogs",
    categoryLabel: "Expert Blog",
    title: "Master Reference: SAP PO to IS Migration – Tool and Guidance",
    description: "The authoritative master blog consolidating all links, roadmap updates, tool releases, and SAP recommendations in one living document.",
    topic: "Central Reference Master Article",
    tags: ["Migration", "Integration Suite", "Landscape Assessment"],
    link: "https://community.sap.com/blogs/master-blog-sap-po-to-is-migration"
  },
  {
    id: "blog-where-start",
    category: "blogs",
    categoryLabel: "Expert Blog",
    title: "Migration from SAP PO/PI to IS – Where Do I Start?",
    description: "Practical step-by-step guidance written from field implementation experience covering team setup, wave structure, and governance.",
    topic: "Field Implementation Guide",
    tags: ["Migration", "PI/PO", "Modernization"],
    link: "https://community.sap.com/blogs/migration-po-pi-to-is-where-start"
  },

  // Learning Journeys & Certifications
  {
    id: "learn-mig-is",
    category: "learning",
    categoryLabel: "Learning Journey",
    title: "Learning Journey: Migrating to SAP Integration Suite",
    description: "Official interactive learning curriculum on learning.sap.com taking architects and developers through every phase of real-world migration projects.",
    topic: "End-to-End Certification Path",
    tags: ["Migration", "Integration Suite", "Cloud Integration"],
    link: "https://learning.sap.com/learning-journeys/migrating-to-sap-integration-suite"
  },
  {
    id: "learn-c-cpi-15",
    category: "learning",
    categoryLabel: "Official Certification",
    title: "SAP Certified - Integration Developer",
    description: "The global industry-standard credential validating mastery over Cloud Integration, API Management, Open Connectors, Integration Advisor, and security.",
    topic: "Official Certification",
    tags: ["Integration Suite", "Cloud Integration", "API Management"],
    link: "https://learning.sap.com/certifications/sap-certified-associate-integration-developer"
  },
  {
    id: "learn-opensap-btp",
    category: "learning",
    categoryLabel: "openSAP Course",
    title: "openSAP: SAP BTP & Cloud Integration Essentials",
    description: "Free community video course with real-world weekly assignments, hands-on tenant exercises, and practitioner forums.",
    topic: "Foundational Enablement",
    tags: ["SAP BTP", "Cloud Integration"],
    link: "https://open.sap.com/courses/btp-integration"
  }
];

// 6 RECOMMENDED STARTING STEPS (ENTERPRISE READINESS CHECKLIST)
let STARTING_STEPS = [
  {
    id: 1,
    number: "01",
    category: "Architecture & Licensing",
    title: "Acquire SAP Integration Suite Entitlements",
    objective: "Provision Cloud Integration runtime tenant and establish BTP subaccounts",
    prerequisites: "SAP BTP Global Account with enterprise agreement (CPEA or Pay-As-You-Go)",
    businessOutcome: "Standardized multi-tenant integration environment ready for developer onboarding and hybrid connectivity.",
    details: "Request an SAP Integration Suite tenant in SAP BTP. Recommended edition for migration is Standard or Premium depending on throughput volume, Trading Partner Management (TPM) requirements, and Edge Integration Cell needs.",
    checklist: [
      "Provision SAP BTP Subaccount and assign Cloud Integration entitlements",
      "Run the automated Integration Suite Booster in SAP BTP Cockpit",
      "Configure custom Identity Provider (IAS) role collections for integration developers"
    ],
    link: "https://help.sap.com/docs/integration-suite",
    icon: "☁️"
  },
  {
    id: 2,
    number: "02",
    category: "Landscape Governance",
    title: "Execute ISA-M Methodology Assessment",
    objective: "Establish enterprise integration policy and style guide across cloud and on-premise",
    prerequisites: "Enterprise architecture charter and catalog of existing business capabilities",
    businessOutcome: "Documented integration guidelines preventing architecture sprawl and governing protocol standards.",
    details: "Adopt SAP's Integration Solution Advisory Methodology (ISA-M) to classify integration domains (A2A, B2B, B2G, Event-Driven) and prescribe target architectural blueprints for development teams.",
    checklist: [
      "Define integration styles (Process, Data, B2B, User-centric, IoT/Event)",
      "Formulate protocol governance: sunset legacy RFC/SOAP in favor of REST/OData APIs",
      "Publish design guidelines for asynchronous queuing and exception handling"
    ],
    link: "https://www.sap.com/services/integration-solution-advisory-methodology.html",
    icon: "📐"
  },
  {
    id: 3,
    number: "03",
    category: "Testing & Automation",
    title: "Establish Automated Regression Testing Strategy",
    objective: "Implement automated payload comparison across legacy PO and target Cloud Integration",
    prerequisites: "Sample production message archives and baseline test scripts",
    businessOutcome: "Drastic reduction in business testing cycles with guaranteed payload parity and zero functional regressions.",
    details: "Testing consumes 30–40% of migration effort. Establish regression tooling early (SAP Migration Wizard, Figaf, or Int4) to compare production PI/PO payloads against new Integration Suite iFlow outputs automatically.",
    checklist: [
      "Enable message payload persistence on key production PI/PO channels for test sample collection",
      "Implement automated payload diff and schema comparison pipelines",
      "Prepare unit and regression test suites for Wave 0 pilot interfaces"
    ],
    link: "https://help.sap.com/docs/integration-suite",
    icon: "🧪"
  },
  {
    id: 4,
    number: "04",
    category: "Team Enablement",
    title: "Upskill Integration Team to Cloud Integration & Groovy",
    objective: "Train PI/PO architects and developers on Cloud Integration, Camel EIPs, and Groovy scripting",
    prerequisites: "Assigned development resources and access to SAP Learning Hub",
    businessOutcome: "Internal team self-sufficiency, eliminating costly long-term external contractor dependencies.",
    details: "Transition legacy Java/ABAP integration skills to modern cloud patterns: Apache Camel Enterprise Integration Patterns (EIP), Groovy 3.x scripting, Cloud Integration Partner Directory, and Cloud ALM.",
    checklist: [
      "Complete SAP Learning Journey: Developing with SAP Integration Suite",
      "Standardize Groovy reusable utility scripts for mapping, headers, and error handling",
      "Review Enterprise Integration Patterns (Content-Based Router, Splitter, Aggregator)"
    ],
    link: "https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite",
    icon: "🎓"
  },
  {
    id: 5,
    number: "05",
    category: "Automated Tooling",
    title: "Execute Self-Service Migration Assessment Tool",
    objective: "Extract and analyze on-premise PI/PO ICO configurations and classify technical complexity",
    prerequisites: "SAP Cloud Connector established with read-only extraction service user on PI/PO",
    businessOutcome: "Objective, data-driven interface inventory classified into Small, Medium, Large, and Extra Large tiers.",
    details: "Connect the SAP Migration Assessment tool in SAP BTP to your PI/PO system via SAP Cloud Connector. Extract Integrated Configuration Objects (ICOs), evaluate migration readiness, and generate automated effort reports.",
    checklist: [
      "Configure SAP Cloud Connector with access to PI/PO Directory and ESR APIs",
      "Run data extraction in analysis mode across all active communication channels",
      "Review generated PDF/Excel readiness reports to calibrate project T-shirt sizing"
    ],
    link: "https://help.sap.com/docs/migration-assessment",
    icon: "⚙️"
  },
  {
    id: 6,
    number: "06",
    category: "Pre-Built Content",
    title: "Inspect SAP Business Accelerator Hub for Pre-Delivered Packages",
    objective: "Identify standard integration packages on api.sap.com to eliminate custom build effort",
    prerequisites: "Catalog of connected third-party SaaS systems and target SAP applications",
    businessOutcome: "20–30% reduction in net build effort by adopting standard, vendor-supported integration content.",
    details: "The SAP Business Accelerator Hub contains 3,500+ pre-built, production-ready integration packages for S/4HANA, Salesforce, Workday, ServiceNow, Ariba, Concur, and government e-invoicing mandates.",
    checklist: [
      "Search api.sap.com for standard connectors to third-party endpoints",
      "Evaluate pre-delivered SAP B2B Trading Partner packages for EDIFACT / X12",
      "Adopt pre-built packages directly into your Cloud Integration tenant workspace"
    ],
    link: "https://api.sap.com",
    icon: "📦"
  }
];

// 6-PHASE ROADMAP (GAME UI WITH PROFESSIONAL TERMINOLOGY)
const PHASES = {
  1: {
    num: "Phase 01",
    name: "Discovery & Initiation",
    title: "Phase 1: Discovery & Initiation",
    duration: "2 – 4 Weeks",
    challenge: "Undocumented Legacy Interfaces & Custom Routing",
    challengeDesc: "Historical configurations accumulated over years without active business documentation.",
    milestone: "Scope defined, project charter approved, RACI agreed",
    description: "Audit the current PI/PO footprint, document existing interfaces, confirm compliance boundaries, and align leadership on strategic business drivers.",
    checklist: [
      { text: "Catalog current PI/PO landscape (Dual-stack vs Single-stack, NetWeaver 7.31/7.4/7.5)", sub: "Record system IDs, active software components, and Basis kernel levels" },
      { text: "Document all existing integration scenarios & communication channels", sub: "Collect sender/receiver systems, protocols, custom adapters, and volume profiles" },
      { text: "Define strategic business drivers and qualitative migration goals", sub: "Map objectives against reduced TCO, cloud agility, scalability, and S/4HANA readiness" },
      { text: "Establish Project RACI Matrix and sign-off accountability", sub: "Ensure business process owners and functional leads are committed to testing waves" }
    ],
    showRaci: true
  },
  2: {
    num: "Phase 02",
    name: "Migration Assessment",
    title: "Phase 2: Migration Assessment",
    duration: "4 – 6 Weeks",
    challenge: "Deprecated Adapters & Custom Java UDFs",
    challengeDesc: "Custom Java User-Defined Functions requiring architectural redesign in Groovy.",
    milestone: "Assessment report generated, scenario complexity categorized, effort approved",
    description: "Run automated extraction against the SAP PI/PO Enterprise Services Repository (ESR) and Integration Directory (ID). Categorize each ICO by technical complexity and quantify development days.",
    checklist: [
      { text: "Configure & run the SAP Migration Assessment Tool (or apply for SAP Migration Factory)", sub: "Ensure Java 8/11 runtime, configure Cloud Connector, and run data extractor in analysis mode" },
      { text: "Analyze ICO readiness & classification", sub: "Identify interfaces ready for automated extraction vs those requiring manual re-design" },
      { text: "Generate scenario effort estimation report", sub: "Audit breakdown: Async A2A, Sync A2A, B2B/EDI, BPM scenarios, and technical pass-throughs" },
      { text: "Review custom components (Java UDFs, custom adapter modules, RFCs)", sub: "Plan replacement with Groovy scripts, standard adapters, and modern REST/OData endpoints" }
    ],
    showEffortBaseline: true
  },
  3: {
    num: "Phase 03",
    name: "Planning & Design",
    title: "Phase 3: Planning & Design",
    duration: "6 – 8 Weeks",
    challenge: "Complex ccBPM & Stateful Workflow Dependencies",
    challengeDesc: "Long-running business processes requiring migration to SAP Build Process Automation.",
    milestone: "Target architecture approved, security posture established, templates finalized",
    description: "Formulate the future-state cloud architecture. Determine whether pure cloud-native, Edge Integration Cell, or hybrid Cloud Connector is required, and establish standard iFlow patterns.",
    checklist: [
      { text: "Score interface complexity using the 7-Factor Scoring Matrix", sub: "Rate mapping complexity, routing rules, adapter types, security, volume, dependencies, error handling" },
      { text: "Target Architecture Decision: Pure Cloud vs Hybrid vs Edge Integration Cell", sub: "Analyze data sovereignty laws, latency sensitivity, and on-premise system accessibility" },
      { text: "Design decoupled pipeline processing concept (EIP standards)", sub: "Establish standardized inbound, routing, transformation, and outbound flow templates" },
      { text: "Formulate ccBPM & BPM replacement strategy", sub: "Transition long-running stateful workflows to SAP Build Process Automation or stateless iFlows" }
    ],
    showComplexityScorer: true
  },
  4: {
    num: "Phase 04",
    name: "Wave Prioritization & Sizing",
    title: "Phase 4: Wave Prioritization & Planning",
    duration: "Continuous",
    challenge: "High Business Criticality & Team Capacity Bottlenecks",
    challengeDesc: "Scheduling rollout waves while balancing functional team availability and sprint velocity.",
    milestone: "Wave schedule locked, team staffing onboarded, sprint backlog prioritized",
    description: "Group interfaces into logical migration waves based on technical dependencies, business criticality, and early quick wins to build team confidence and validate operational readiness.",
    checklist: [
      { text: "Apply 6-Factor Prioritization Model with weighted criteria", sub: "Complexity (weight 5), Business Criticality (w=4), Dependencies (w=3), Volume (w=2), Resources (w=3), Quick Wins (w=4)" },
      { text: "Sequence Wave 0 (Pilot / Non-Critical Quick Wins)", sub: "Validate end-to-end deployment, Cloud Connector tunnel, and monitoring with low-risk interfaces" },
      { text: "Establish team structure and FTE commitments", sub: "Staff Program Manager, Integration Architect, Integration Developers, Test Leads, and Basis Admins" },
      { text: "Check SAP Business Accelerator Hub for pre-built packages", sub: "Save 20-30% development effort by adopting standard pre-delivered SAP content" }
    ],
    showTeamFte: true
  },
  5: {
    num: "Phase 05",
    name: "Execution & Testing",
    title: "Phase 5: Execution & Testing",
    duration: "8 – 12+ Wks/Wave",
    challenge: "Cross-System Regression & High-Volume Data Testing",
    challengeDesc: "Ensuring payload accuracy across third-party endpoints and connected enterprise apps.",
    milestone: "Development complete, unit testing certified, regression & UAT sign-off obtained",
    description: "Execute the core build and testing cycle for each wave following the 6-step wave execution sequence and three-tier testing strategy.",
    checklist: [
      { text: "Step 1: Develop new iFlows (or auto-convert via Migration Toolkit)", sub: "Import ICOs into Cloud Integration package; review generated flows and routing condition logic" },
      { text: "Step 2: Configure communication adapters & credential artifacts", sub: "Setup Cloud Connector mappings, certificates, endpoint URLs, and authentication aliases" },
      { text: "Step 3: Map data transformations & migrate custom logic", sub: "Import ESR message mappings; rewrite legacy Java User-Defined Functions (UDFs) to Groovy" },
      { text: "Step 4: Execute Three-Tier Testing Strategy (UT, IT, UAT)", sub: "Validate individual components, cross-system integration, and obtain business sign-off" }
    ],
    showTestingTiers: true
  },
  6: {
    num: "Phase 06",
    name: "Cutover & Hypercare",
    title: "Phase 6: Cutover & Hypercare",
    duration: "1 – 2 Wks + Hypercare",
    challenge: "Downtime Minimization & In-Flight Message Preservation",
    challengeDesc: "Draining legacy queues without transaction loss during live production redirection.",
    milestone: "PI/PO interfaces decommissioned, IS flows productive, hypercare transitioned to BAU",
    description: "Transition traffic smoothly to SAP Integration Suite with zero unplanned downtime. Execute the cutover checklist, manage parallel runs where applicable, and maintain 24/7 hypercare support.",
    checklist: [
      { text: "Verify technical prerequisites (tenants provisioned, security deployed, certs valid)", sub: "All target Cloud Integration packages deployed and showing 'Started' status" },
      { text: "Execute connectivity sanity tests with all external endpoints", sub: "Confirm ping and handshake with B2B partners, cloud apps, and on-premise SAP systems" },
      { text: "Cutover window: Stop PI/PO sender communication channels & drain queues", sub: "Ensure zero messages stuck in PI queues (SMQ1/SMQ2) before channel redirection" },
      { text: "Activate SAP Integration Suite endpoints & redirect traffic", sub: "Update DNS, firewall rules, or partner webhook URLs to point to new cloud endpoints" }
    ],
    showCutoverChecklist: true
  }
};

// Case Studies
const CASE_STUDIES = [
  {
    id: "case-1",
    industry: "Automotive Manufacturing",
    title: "Global Automotive Tier-1 Supplier",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    footprint: "~800 Interfaces (PI/PO 7.5 Dual-Stack)",
    scope: "Cloud Integration, API Management, OData, SAP BTP",
    target: "S/4HANA Cloud, Ariba, Salesforce SFDC, 30+ OEM Partners",
    timeline: "14 Months (5 Phased Waves)",
    migrated: "~700 Interfaces Migrated, ~100 Retired",
    keyBenefits: [
      "Streamlined automotive supply chain with zero assembly line disruption",
      "Cut overall integration operational TCO by 38% annually",
      "Replaced complex legacy ccBPM scenarios with asynchronous iFlows",
      "Gained real-time end-to-end telemetry across all OEM EDI messages"
    ]
  },
  {
    id: "case-2",
    industry: "Retail & Consumer Goods",
    title: "Omnichannel Fashion & Apparel Retailer",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    footprint: "250+ Interfaces (SAP PI 7.4)",
    scope: "SAP Integration Suite (Cloud Integration & API Management)",
    target: "E-Commerce, POS Systems, 3PL Warehouses across 10+ Countries",
    timeline: "8 Months (Discovery to Production)",
    migrated: "210 Active Interfaces Modernized to REST/APIs",
    keyBenefits: [
      "Enabled rapid partner onboarding from 3 weeks down to 2 days",
      "Migrated point-to-point batch files into real-time REST API endpoints",
      "Automated 72% of interface transformations using Migration Toolkit",
      "Unified B2B vendor inventory exchange via Trading Partner Management"
    ]
  },
  {
    id: "case-3",
    industry: "Utilities & Energy",
    title: "Major European Power & Utilities Provider",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    footprint: "450+ Interfaces (SAP PO 7.5 Single-Stack)",
    scope: "Full Migration to IS, OData, Event Mesh & Edge Integration Cell",
    target: "Smart Grid Telemetry, Smart Meter Data, Billing, Regulatory Portals",
    timeline: "18 Months (Strict Compliance Roadmaps)",
    migrated: "420 Interfaces Modernized, Edge Deployed",
    keyBenefits: [
      "Achieved 50% reduction in end-to-end integration latency for smart metering",
      "Deployed Edge Integration Cell on-premise to comply with national energy privacy laws",
      "Replaced synchronous RFC polling with real-time Event Mesh publish/subscribe",
      "Zero compliance penalties during audit transitions"
    ]
  }
];

// Challenges & Top 10
const CHALLENGES = [
  {
    id: "chal-1",
    title: "Skill Gap & Cloud Learning Curve",
    desc: "Existing on-premise PI/PO team lacks deep familiarity with SAP BTP, Cloud Integration, Groovy scripting, and modern REST APIs.",
    mitigation: "Enroll in SAP's official 'Migrating to SAP Integration Suite' learning journey, leverage openSAP courses, and pair developers with cloud mentors."
  },
  {
    id: "chal-2",
    title: "Legacy & Undocumented Dependencies",
    desc: "Interfaces accumulated over 10-15 years often have undocumented routing conditions, forgotten RFC destinations, and unmaintained custom Java UDFs.",
    mitigation: "Execute the automated SAP Migration Assessment tool to scan ESR metadata, run automated test recording, and hold mapping workshops."
  },
  {
    id: "chal-3",
    title: "High Data Volumes & Batch Congestion",
    desc: "Large file payloads (100MB+) and heavy batch jobs can strain cloud memory if designed using legacy monolithic PI patterns.",
    mitigation: "Adopt modern stream processing, split large payloads, utilize SFTP/storage presigned URLs, and implement Edge Integration Cell for local high throughput."
  },
  {
    id: "chal-4",
    title: "Business Downtime & Cutover Risk",
    desc: "Fear of disrupting 24/7 production plants, warehouses, or financial reporting during switchover.",
    mitigation: "Use phased wave rollout, maintain temporary dual-run with Cloud Connector, rehearse cutover in staging, and enforce strict rollback criteria."
  },
  {
    id: "chal-5",
    title: "Security, Compliance & Data Sovereignty",
    desc: "Strict enterprise security requirements regarding outbound connections, TLS certificate lifecycles, and regional data residence laws.",
    mitigation: "Deploy SAP Cloud Connector for secure reverse-proxy tunnels, enforce mTLS and OAuth 2.0, and deploy Edge Integration Cell for on-premise data retention."
  }
];

const TOP_10_RECOMMENDATIONS = [
  { num: "01", text: "Start with clear business goals", sub: "Align stakeholders on cloud modernization, agility, and TCO reduction rather than a simple 1:1 technical lift-and-shift." },
  { num: "02", text: "Leverage SAP assessment tools early", sub: "Run the self-service Migration Assessment or apply for the free SAP Migration Factory early to identify complexity." },
  { num: "03", text: "Prioritize critical interfaces first", sub: "Use the multi-factor weighting model to sequence foundational interfaces and pilot non-critical flows in Wave 0." },
  { num: "04", text: "Adopt a phased migration approach", sub: "De-risk delivery by migrating in 4 to 6 agile waves instead of an unmanageable 'big-bang' cutover." },
  { num: "05", text: "Invest in team upskilling", sub: "Train your internal PI/PO team in Groovy scripting, Cloud Integration concepts, and target SAP Certified - Integration Developer certification." },
  { num: "06", text: "Thoroughly test all integrations", sub: "Implement the three-tier testing strategy (UT, IT, UAT) and automate regression testing." },
  { num: "07", text: "Plan for robust error handling", sub: "Replace legacy alert configurations with Exception Subprocesses, custom headers, dead-letter queues, and Cloud ALM." },
  { num: "08", text: "Secure landscape from day one", sub: "Standardize on OAuth 2.0, mutual TLS certificates, SAP Cloud Connector tunnels, and zero-trust credentials." },
  { num: "09", text: "Document everything meticulously", sub: "Maintain central interface registries, interface design documents (IDDs), and testing sign-off artifacts." },
  { num: "10", text: "Engage SAP expertise as needed", sub: "Take advantage of official SAP Support Notes, Migration Factory advisory, and partner accelerators." }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================

const state = {
  theme: localStorage.getItem("po2suite_theme") || "light",
  currency: localStorage.getItem("po2suite_currency") || "USD",
  eurToUsdRate: 1.08,
  activePhase: 1,
  completedSteps: JSON.parse(localStorage.getItem("po2suite_steps") || "[]"),
  cutoverStatus: JSON.parse(localStorage.getItem("po2suite_cutover_status") || "{}"),
  savedResourceIds: JSON.parse(localStorage.getItem("po2suite_saved_resources") || "[]"),
  sidebarSearchQuery: "",
  activeArchScenario: "ground-to-ground",
  activeArchTab: "scenarios",

  // Sizing inputs (SAP Migration Assessment T-Shirt Sizing)
  calc: {
    smallCount: 40,
    mediumCount: 40,
    largeCount: 15,
    xlCount: 5,
    fixedSetupDays: 40,
    dailyRateUSD: 750,
    dailyRateEUR: 700
  }
};

// ==========================================
// 3. INITIALIZATION & UTILITIES
// ==========================================

function debounce(func, wait = 100) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str).replace(/[&<>"']/g, m => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[m]);
}

async function loadPortalData() {
  try {
    const res = await fetch("data.json");
    if (res.ok) {
      const data = await res.json();
      if (data.startingSteps && data.startingSteps.length) {
        STARTING_STEPS = data.startingSteps;
      }
      if (data.phases) {
        Object.keys(data.phases).forEach(k => {
          if (PHASES[k]) {
            Object.assign(PHASES[k], data.phases[k]);
          } else {
            PHASES[k] = data.phases[k];
          }
        });
      }
      // Re-render with loaded external data
      renderStartingSteps();
      renderPhases();
    }
  } catch (err) {
    // Graceful fallback to embedded arrays for local file:// opening
    console.info("Loaded with embedded baseline constants (data.json local fallback active)");
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  initGlobalSearch();
  initArchBlueprint();
  renderStartingSteps();
  renderPhases();
  renderCaseStudies();
  renderChallengesAndTop10();
  renderSidebarResources();
  initEstimator();
  setupEventListeners();
  initDialogListeners();
  await loadPortalData();
});

// ==========================================
// 4. THEME & EVENT CONTROLS
// ==========================================

function initTheme() {
  document.documentElement.setAttribute("data-theme", "light");
}

function setupEventListeners() {
  document.querySelectorAll(".currency-btn").forEach(btn => {
    if (btn.getAttribute("data-currency") === state.currency) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
    btn.addEventListener("click", () => {
      document.querySelectorAll(".currency-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currency = btn.getAttribute("data-currency");
      localStorage.setItem("po2suite_currency", state.currency);
      calculateEstimates();
      showToast(`Switched currency to ${state.currency === "USD" ? "$ USD" : "€ EUR"}`);
    });
  });

  const sideSearch = document.getElementById("sidebar-search-input");
  if (sideSearch) {
    sideSearch.addEventListener("input", (e) => {
      state.sidebarSearchQuery = e.target.value.trim().toLowerCase();
      renderSidebarResources();
    });
  }

  window.addEventListener("beforeprint", () => {
    state._savedDocTitle = document.title;
    document.title = `PO2Suite_Migration_Effort_Estimator_${state.currency || 'USD'}_${new Date().toISOString().split("T")[0]}`;
  });

  window.addEventListener("afterprint", () => {
    if (state._savedDocTitle) document.title = state._savedDocTitle;
  });
}

// ==========================================
// 4B. GLOBAL SEARCH & ARCHITECTURE BLUEPRINT
// ==========================================

function initGlobalSearch() {
  const input = document.getElementById("global-search-input");
  const dropdown = document.getElementById("global-search-dropdown");
  const clearBtn = document.getElementById("global-search-clear");
  if (!input || !dropdown) return;

  const debouncedSearch = debounce((q) => {
    handleGlobalSearch(q);
  }, 120);

  input.addEventListener("input", (e) => {
    const q = e.target.value.trim();
    if (clearBtn) clearBtn.style.display = q.length > 0 ? "block" : "none";
    debouncedSearch(q);
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#global-search-container")) {
      dropdown.classList.remove("active");
    }
  });

  // Re-open on focus if query exists
  input.addEventListener("focus", () => {
    if (input.value.trim().length > 0) {
      dropdown.classList.add("active");
    }
  });
}

function handleGlobalSearch(query) {
  const dropdown = document.getElementById("global-search-dropdown");
  if (!dropdown) return;

  if (!query || query.length === 0) {
    dropdown.classList.remove("active");
    dropdown.innerHTML = "";
    return;
  }

  const q = query.toLowerCase();
  const results = RESOURCES.filter(r => {
    return (r.title && r.title.toLowerCase().includes(q)) ||
           (r.description && r.description.toLowerCase().includes(q)) ||
           (r.id && r.id.toLowerCase().includes(q)) ||
           (r.tags && r.tags.some(t => t.toLowerCase().includes(q)));
  }).slice(0, 8);

  if (results.length === 0) {
    dropdown.innerHTML = `
      <div class="global-search-empty">
        No matching SAP notes, guides, or tools found for "<strong>${escapeHtml(query)}</strong>"
      </div>
    `;
  } else {
    dropdown.innerHTML = results.map(r => `
      <a href="${r.link}" target="_blank" rel="noopener noreferrer" class="global-search-item">
        <div class="global-search-item-header">
          <span class="global-search-item-title">${escapeHtml(r.title)}</span>
          <span class="global-search-item-badge">${escapeHtml(r.categoryLabel || r.category)}</span>
        </div>
        <div class="global-search-item-desc">${escapeHtml(r.description)}</div>
      </a>
    `).join("");
  }

  dropdown.classList.add("active");
}

function clearGlobalSearch() {
  const input = document.getElementById("global-search-input");
  const clearBtn = document.getElementById("global-search-clear");
  const dropdown = document.getElementById("global-search-dropdown");
  if (input) input.value = "";
  if (clearBtn) clearBtn.style.display = "none";
  if (dropdown) {
    dropdown.classList.remove("active");
    dropdown.innerHTML = "";
  }
  input?.focus();
}

const ARCH_SCENARIOS = [
  {
    id: "ground-to-ground",
    icon: "🏭",
    name: "Ground-to-Ground & Edge",
    subtitle: "Plant MES, Shop Floor, SCADA, Low-Latency Local DBs",
    targetTopology: "Edge Integration Cell (Kubernetes)",
    targetBadge: "Edge Integration Cell",
    badgeType: "edge",
    treatment5R: "Replatform / Local Runtime",
    treatmentBadge: "5R: Replatform",
    feasibilityScore: 75,
    feasibilityText: "High (~75% Automated)",
    feasibilityNote: "ICOs convert via Wizard; requires local K8s cluster (SUSE Rancher, OpenShift) setup.",
    problemStatement: "High-volume, sub-second latency communications between on-premise systems (e.g. Shop Floor / MES to ERP, automated warehouse sorting) where traffic must never hairpin to the public cloud.",
    decisionCriteria: [
      { label: "Data Sovereignty", text: "Mandatory regulatory / compliance requirement to keep raw payloads inside private corporate network." },
      { label: "Latency Profile", text: "Sub-millisecond or low-latency roundtrips required for real-time manufacturing or physical automation." },
      { label: "Offline Resilience", text: "Factory line must continue executing even during WAN or public internet outages." },
      { label: "Bandwidth & Egress", text: "Eliminates high internet egress fees associated with streaming continuous IoT/sensor telemetry to cloud." }
    ],
    shiftComparison: {
      legacy: {
        title: "Legacy SAP PO 7.5 Approach",
        points: [
          "Local Advanced Adapter Engine (AAE) running on NetWeaver Java VM instances",
          "Decentralized Adapter Engines (non-central AAE) requiring separate patch lifecycles and SLD registration",
          "Synchronous RFC/SOAP endpoints tightly coupled with on-premise firewalls"
        ]
      },
      target: {
        title: "Target SAP Integration Suite Blueprint",
        points: [
          "Edge Integration Cell running as containerized microservices in customer private K8s (SUSE Rancher, Red Hat OpenShift, Amazon EKS Anywhere)",
          "Single pane of glass: centrally designed, governed, and deployed from SAP BTP Cloud Integration Web UI",
          "Decoupled local execution: runs autonomously even when disconnected from BTP control plane"
        ]
      }
    },
    protocols: {
      legacy: "RFC, SOAP, Flat Files, JDBC",
      target: "REST/OData, Kafka/JMS, Webhooks, Edge JDBC"
    },
    governanceRule: "Deploy Edge Integration Cell strictly for ground-to-ground or data sovereignty workloads. Route all SaaS, B2B, and cross-enterprise traffic through BTP Multi-Tenant Cloud Integration to avoid managing unnecessary edge infrastructure."
  },
  {
    id: "hybrid-a2a",
    icon: "☁️",
    name: "Hybrid Enterprise A2A",
    subtitle: "S/4HANA & ECC Core to Cloud SaaS (Ariba, Salesforce, Workday)",
    targetTopology: "SAP Cloud Integration + SAP Cloud Connector",
    targetBadge: "Multi-Tenant BTP + Cloud Connector",
    badgeType: "target",
    treatment5R: "Replatform (Migration Wizard)",
    treatmentBadge: "5R: Replatform",
    feasibilityScore: 85,
    feasibilityText: "Very High (~85% Automated)",
    feasibilityNote: "Standard ICOs auto-extracted via SAP Migration Wizard; destination endpoints re-pointed to Cloud Connector.",
    problemStatement: "Bi-directional integration connecting core on-premise transactional systems (SAP ECC 6.0, S/4HANA On-Prem) with public cloud SaaS applications (Salesforce, Workday, Coupa, ServiceNow).",
    decisionCriteria: [
      { label: "Security Posture", text: "Requires zero inbound ports opened in the corporate firewall to protect SAP core ERP from external threats." },
      { label: "Principal Propagation", text: "Identity federation exchanging Cloud JWT tokens to on-premise X.509 certificates for strict user auditing." },
      { label: "Elastic Scaling", text: "Elastic compute on SAP BTP handles sudden enterprise traffic spikes without provisioning on-premise VMs." },
      { label: "Maintenance Free", text: "Automated zero-downtime SAP kernel updates, OS patching, and hyperscaler disaster recovery." }
    ],
    shiftComparison: {
      legacy: {
        title: "Legacy SAP PO 7.5 Approach",
        points: [
          "Inbound DMZ Reverse Proxies (SAP Web Dispatcher) requiring external firewall holes opened",
          "Static technical user credentials shared across integration channels in NWA Keystore",
          "Heavy on-premise NetWeaver memory consumption during large XML payload transformations"
        ]
      },
      target: {
        title: "Target SAP Integration Suite Blueprint",
        points: [
          "SAP Cloud Connector reverse-proxy establishing encrypted outbound-only TLS tunnel from intranet to BTP",
          "Fine-grained Resource Whitelisting restricting which specific BAPIs, RFCs, and URL paths cloud iFlows can invoke",
          "Cloud Integration multi-tenant worker nodes automatically scale compute based on message queue volume"
        ]
      }
    },
    protocols: {
      legacy: "IDoc over tRFC/qRFC, SOAP HTTP, XI 3.0",
      target: "OData v2/v4, REST JSON, SOAP over Cloud Connector, SAP Event Mesh"
    },
    governanceRule: "Always configure High Availability (Master / Shadow) on SAP Cloud Connector and enforce Principal Propagation instead of shared generic service accounts for compliance."
  },
  {
    id: "b2b-edi",
    icon: "🤝",
    name: "B2B & EDI Trading Partner",
    subtitle: "UN/EDIFACT, ANSI X12, AS2, OFTP2, cXML Partner Exchanges",
    targetTopology: "SAP Integration Advisor (MIG/MAG) + TPM",
    targetBadge: "AI-Assisted B2B + TPM",
    badgeType: "target",
    treatment5R: "Refactor / Modernize",
    treatmentBadge: "5R: Refactor",
    feasibilityScore: 65,
    feasibilityText: "Medium (~65% Accelerated)",
    feasibilityNote: "Integration Advisor accelerates mappings by 60-80%; partner certificates and AS2 parameters migrated to TPM.",
    problemStatement: "Exchanging critical purchase orders, invoices, ASNs, and customs declarations with hundreds of external vendors, 3PL logistics carriers, and retail partners.",
    decisionCriteria: [
      { label: "EDI Standards Library", text: "Access to comprehensive global standard schemas (ASC X12, UN/EDIFACT, ODETTE, VDA, cXML, UBL)." },
      { label: "Partner Agility", text: "Onboard new trading partners in hours instead of weeks without writing custom mapping code from scratch." },
      { label: "Decoupled Governance", text: "Centralized Partner Directory separates partner-specific routing, identifiers, and certificates from runtime iFlows." },
      { label: "Security & Non-Repudiation", text: "Native AS2 MDN signing, SHA-256 digital signatures, and certificate lifecycle management." }
    ],
    shiftComparison: {
      legacy: {
        title: "Legacy SAP PO 7.5 Approach",
        points: [
          "B2B Add-on 1.0 SP08+ requiring local license modules, TPM tables, and manual split/merge configurations",
          "Brittle graphical message mappings with hundreds of custom Java UDFs for EDI qualifier lookups",
          "Hardcoded partner routing rules inside Integrated Configurations (ICOs)"
        ]
      },
      target: {
        title: "Target SAP Integration Suite Blueprint",
        points: [
          "SAP Integration Advisor with machine-learning crowdsourced Message Implementation Guidelines (MIG) & Mapping Guidelines (MAG)",
          "Trading Partner Management (TPM) application managing agreements, AS2/OFTP2 parameters, and interchanges",
          "Automated push-button generation of runtime iFlows directly from approved MAG mappings"
        ]
      }
    },
    protocols: {
      legacy: "AS2, OFTP2, SFTP, EDIFACT, ANSI X12, IDoc",
      target: "AS2 with SHA-256, Cloud SFTP, TPM Partner Directory, AI-Generated MAGs"
    },
    governanceRule: "Do not replicate legacy 1-to-1 partner iFlows. Consolidate B2B interfaces into generic parameter-driven orchestration pipelines fed by the BTP Trading Partner Management (TPM) directory."
  },
  {
    id: "sync-apis",
    icon: "⚡",
    name: "Synchronous APIs & Gateways",
    subtitle: "Mobile Apps, Customer Portals, Third-Party Webhooks",
    targetTopology: "SAP API Management + Cloud Integration",
    targetBadge: "API Management + CPI",
    badgeType: "target",
    treatment5R: "Replace / Expose API",
    treatmentBadge: "5R: Replace with API",
    feasibilityScore: 80,
    feasibilityText: "High (~80% Standardized)",
    feasibilityNote: "Replace point-to-point SOAP endpoints with REST/OData API proxies; apply standard security policies.",
    problemStatement: "External client applications, digital customer portals, or SaaS webhooks requiring instant synchronous responses (sub-500ms) with strict rate limiting, monetization, or API governance.",
    decisionCriteria: [
      { label: "Traffic Shaping & DDoS", text: "Protect backend ERP from traffic spikes using Spike Arrest, Rate Limiting, and Quota policies." },
      { label: "Standardized Authentication", text: "OAuth 2.0 Client Credentials / Authorization Code flow, API Keys, and JWT token validation at the edge." },
      { label: "API Lifecycle & Catalog", text: "Expose self-service Developer Portal with Swagger / OpenAPI 3.0 documentation for internal and partner developers." },
      { label: "Protocol Mediation", text: "Convert legacy SOAP XML backends into lightweight JSON REST / OData endpoints consumed by modern frontends." }
    ],
    shiftComparison: {
      legacy: {
        title: "Legacy SAP PO 7.5 Approach",
        points: [
          "Direct point-to-point SOAP/HTTP calls into PO without API rate limiting or traffic throttling",
          "Backend ECC work processes exhausted during external traffic spikes, degrading core ERP performance",
          "No developer portal; API specifications exchanged via manual PDF/Word interface documentation"
        ]
      },
      target: {
        title: "Target SAP Integration Suite Blueprint",
        points: [
          "SAP API Management edge facade enforcing OAuth 2.0, IP filtering, caching, and Spike Arrest policies",
          "Cloud Integration invoked only when complex message orchestration, multi-system aggregation, or protocol conversion is needed",
          "Native integration with SAP Business Accelerator Hub for pre-packaged standard SAP enterprise APIs"
        ]
      }
    },
    protocols: {
      legacy: "SOAP HTTP 1.1, RFC Web Services",
      target: "OpenAPI 3.0, REST JSON, OData v4, GraphQL, OAuth 2.0"
    },
    governanceRule: "Never expose Cloud Integration endpoints directly to public internet consumers without an API Management gateway facade for authentication, rate limiting, and threat protection."
  },
  {
    id: "stateful-bpm",
    icon: "⏳",
    name: "Stateful BPM & Orchestrations",
    subtitle: "ccBPM, NetWeaver BPM, Long-Running Human Approvals",
    targetTopology: "SAP Build Process Automation + Stateless iFlows",
    targetBadge: "SAP Build + Event-Driven",
    badgeType: "warning",
    treatment5R: "Re-architect (Manual Redesign)",
    treatmentBadge: "5R: Re-architect",
    feasibilityScore: 20,
    feasibilityText: "Low (~20% Auto-Feasible)",
    feasibilityNote: "100% manual re-architecture required. Migration Wizard cannot convert stateful BPM processes.",
    problemStatement: "Multi-step orchestrations with correlation sets, synchronous-to-asynchronous message bridges, human task approvals, or long-running workflows with multi-day wait timers.",
    decisionCriteria: [
      { label: "Statelessness Requirement", text: "SAP Cloud Integration is strictly stateless and cannot persist intermediate process instance states in memory." },
      { label: "Human Workflow Tasks", text: "Processes requiring user interaction, task inboxes, and managerial approval hierarchies belong in SAP Build." },
      { label: "Correlation Bridges", text: "Sync/Async correlation patterns must be decoupled using asynchronous queues or webhook callbacks." },
      { label: "Database Bloat Prevention", text: "Eliminates legacy NetWeaver BPM database table bloat (SWWWIHEAD) and costly server lockups." }
    ],
    shiftComparison: {
      legacy: {
        title: "Legacy SAP PO 7.5 Approach",
        points: [
          "ccBPM (Integration Server) or NetWeaver BPM (Java EE) holding process states in heavy database tables",
          "Complex correlation sets waiting hours or days for asynchronous acknowledgement messages",
          "High memory overhead and fragile process recovery when server restarts unexpectedly"
        ]
      },
      target: {
        title: "Target SAP Integration Suite Blueprint",
        points: [
          "Human approvals and multi-step business logic moved to low-code SAP Build Process Automation",
          "Technical integration steps decoupled into lightweight, stateless Cloud Integration iFlows",
          "Asynchronous event correlation managed via SAP Event Mesh or Data Store / JMS temporary queues"
        ]
      }
    },
    protocols: {
      legacy: "BPEL, ccBPM Correlation Sets, XI Sync/Async Bridge",
      target: "SAP Build Process Automation, CloudEvents, Event Mesh, Stateless JMS"
    },
    governanceRule: "Do not attempt to replicate ccBPM state machines inside Cloud Integration with looping or wait timers. Always separate business workflow (SAP Build) from data integration (Cloud Integration)."
  },
  {
    id: "batch-file",
    icon: "📦",
    name: "High-Volume Batch & Heavy Files",
    subtitle: "Large SFTP Dumps, 100MB+ Payloads, Periodic Batch Transfers",
    targetTopology: "Event-Driven Streaming + Object Store / SFTP",
    targetBadge: "Streaming iFlows + Event Mesh",
    badgeType: "info",
    treatment5R: "Refactor / Stream",
    treatmentBadge: "5R: Refactor",
    feasibilityScore: 70,
    feasibilityText: "Good (~70% Standardized)",
    feasibilityNote: "Replace polling channels with event triggers; configure Camel streaming splitter to prevent memory bloat.",
    problemStatement: "Periodic batch data drops, 50MB to 500MB+ flat files, large inventory extracts, or legacy SFTP scheduled polling between enterprise systems.",
    decisionCriteria: [
      { label: "JVM Memory Safety", text: "Loading entire multi-hundred MB XML/CSV files into memory causes JVM Out-Of-Memory (OOM) fatal crashes." },
      { label: "Event vs Polling", text: "Replace aggressive 60-second directory polling with event-driven file notifications (Webhooks / Event Mesh)." },
      { label: "Parallel Chunking", text: "Stream and split payloads into manageable message chunks (5,000-10,000 records) processed concurrently." },
      { label: "Cloud Object Storage", text: "Leverage hyperscaler object stores (AWS S3, Azure Blob, Google Cloud Storage) with presigned URLs for raw data." }
    ],
    shiftComparison: {
      legacy: {
        title: "Legacy SAP PO 7.5 Approach",
        points: [
          "File/FTP Adapter polling NFS shares every 60 seconds with OS-level lock files",
          "Massive XML payloads held in Java heap during DOM tree parsing and graphical mapping",
          "Batch failures require entire multi-hour file re-processing from scratch"
        ]
      },
      target: {
        title: "Target SAP Integration Suite Blueprint",
        points: [
          "Cloud Integration SFTP / Object Store adapter with Camel Streaming XML/CSV Splitter",
          "Iterative chunk processing committing records in batches to JMS queue or target endpoint",
          "Failed chunks route to Dead Letter Queue (DLQ) without failing the rest of the batch"
        ]
      }
    },
    protocols: {
      legacy: "NFS, FTP/SFTP Polling, Large XML DOM",
      target: "Streaming SFTP, AWS S3/Azure Blob Adapters, Camel Streaming Splitter, JMS DLQ"
    },
    governanceRule: "Always activate 'Streaming' in the General Splitter step and avoid DOM-based parsers (like XPath or XML-to-JSON with full buffer) for payloads exceeding 40MB."
  }
];

function initArchBlueprint() {
  renderArchScenarioChips();
  renderArchDecisionCard(state.activeArchScenario || "ground-to-ground");
}

function renderArchScenarioChips() {
  const container = document.getElementById("arch-scenario-chips-grid");
  if (!container) return;

  container.innerHTML = ARCH_SCENARIOS.map(s => {
    const isActive = s.id === (state.activeArchScenario || "ground-to-ground");
    return `
      <div class="arch-scenario-chip ${isActive ? 'active' : ''}" onclick="selectArchScenario('${s.id}')" role="button" tabindex="0">
        <div class="arch-chip-top">
          <span class="arch-chip-icon">${s.icon}</span>
          <span class="arch-chip-badge ${s.badgeType}">${s.targetBadge}</span>
        </div>
        <div class="arch-chip-title">${escapeHtml(s.name)}</div>
        <div class="arch-chip-sub">${escapeHtml(s.subtitle)}</div>
      </div>
    `;
  }).join("");
}

function selectArchScenario(scenarioId) {
  state.activeArchScenario = scenarioId;
  const chips = document.querySelectorAll(".arch-scenario-chip");
  chips.forEach((c, idx) => {
    if (ARCH_SCENARIOS[idx] && ARCH_SCENARIOS[idx].id === scenarioId) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });
  renderArchDecisionCard(scenarioId);
}

function renderArchDecisionCard(scenarioId) {
  const container = document.getElementById("arch-active-decision-box");
  if (!container) return;

  const scenario = ARCH_SCENARIOS.find(s => s.id === scenarioId) || ARCH_SCENARIOS[0];

  const fillWidth = scenario.feasibilityScore + "%";
  const fillColor = scenario.feasibilityScore >= 75 ? "var(--status-positive)" : (scenario.feasibilityScore >= 50 ? "var(--sap-blue)" : "var(--status-critical)");

  container.innerHTML = `
    <!-- Top Executive Banner -->
    <div class="arch-decision-banner">
      <div class="arch-db-left">
        <span class="arch-db-scenario-tag">${scenario.icon} Scenario Architecture Evaluation</span>
        <h3 class="arch-db-title">${escapeHtml(scenario.name)}</h3>
        <p class="arch-db-prob">${escapeHtml(scenario.problemStatement)}</p>
      </div>
      <div class="arch-db-right">
        <div class="arch-db-target-pill">
          <span>Target Architecture:</span>
          <strong>${escapeHtml(scenario.targetTopology)}</strong>
        </div>
        <div class="arch-feasibility-meter">
          <span>Tooling Feasibility:</span>
          <div class="arch-feas-bar-bg" title="${escapeHtml(scenario.feasibilityText)}">
            <div class="arch-feas-bar-fill" style="width: ${fillWidth}; background: ${fillColor};"></div>
          </div>
          <span style="font-weight: 700; color: #FFFFFF;">${scenario.feasibilityScore}%</span>
        </div>
      </div>
    </div>

    <!-- 3-Column Decision Breakdown Grid -->
    <div class="arch-decision-grid">
      <!-- Col 1: Decision Drivers & Rationale -->
      <div class="arch-dcol">
        <div class="arch-dcol-header">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Key Decision Rationale</span>
        </div>
        <div class="arch-criteria-list">
          ${scenario.decisionCriteria.map(c => `
            <div class="arch-crit-item">
              <span class="arch-crit-key">${escapeHtml(c.label)}</span>
              <span class="arch-crit-text">${escapeHtml(c.text)}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Col 2: Architectural Transition Shift -->
      <div class="arch-dcol">
        <div class="arch-dcol-header">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          <span>Architecture Shift (Legacy ➔ Target)</span>
        </div>
        <div class="arch-shift-block">
          <div class="arch-shift-box legacy">
            <div class="arch-shift-box-title">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
              <span>${escapeHtml(scenario.shiftComparison.legacy.title)}</span>
            </div>
            <ul class="arch-shift-list">
              ${scenario.shiftComparison.legacy.points.map(p => `<li>${escapeHtml(p)}</li>`).join("")}
            </ul>
          </div>
          <div class="arch-shift-box target">
            <div class="arch-shift-box-title">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${escapeHtml(scenario.shiftComparison.target.title)}</span>
            </div>
            <ul class="arch-shift-list">
              ${scenario.shiftComparison.target.points.map(p => `<li>${escapeHtml(p)}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>

      <!-- Col 3: Tooling, Protocols & Governance -->
      <div class="arch-dcol">
        <div class="arch-dcol-header">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          <span>5R Treatment & Governance</span>
        </div>
        <div class="arch-spec-box">
          <span class="arch-spec-box-label">5R Strategy Classification</span>
          <div class="arch-spec-box-content">
            <strong style="color: var(--sap-blue); font-size: 0.85rem;">${escapeHtml(scenario.treatment5R)}</strong>
            <p style="margin: 0.2rem 0 0; font-size: 0.72rem; color: var(--text-muted);">${escapeHtml(scenario.feasibilityNote)}</p>
          </div>
        </div>
        <div class="arch-spec-box">
          <span class="arch-spec-box-label">Protocol Modernization</span>
          <div class="arch-spec-box-content" style="font-size: 0.74rem;">
            <div><span style="color: var(--status-critical); font-weight:700;">Legacy:</span> ${escapeHtml(scenario.protocols.legacy)}</div>
            <div style="margin-top: 0.2rem;"><span style="color: var(--status-positive); font-weight:700;">Target:</span> ${escapeHtml(scenario.protocols.target)}</div>
          </div>
        </div>
        <div class="arch-gov-guardrail">
          <strong>Architecture Rule:</strong> ${escapeHtml(scenario.governanceRule)}
        </div>
      </div>
    </div>
  `;
}

function switchArchTab(tabId) {
  state.activeArchTab = tabId;
  const tabs = ['scenarios', 'matrix', 'blueprint'];

  tabs.forEach(t => {
    const btn = document.getElementById(`arch-tab-${t}`);
    const pane = document.getElementById(`arch-pane-${t}`);
    if (btn) {
      if (t === tabId) {
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      }
    }
    if (pane) {
      if (t === tabId) {
        pane.style.display = "block";
        pane.classList.add("active");
      } else {
        pane.style.display = "none";
        pane.classList.remove("active");
      }
    }
  });

  if (tabId === 'scenarios') {
    renderArchScenarioChips();
    renderArchDecisionCard(state.activeArchScenario || "ground-to-ground");
  }
}

// ==========================================
// 5. RECOMMENDED STARTING STEPS (GAME UI THEME / POPUP)
// ==========================================

function renderStartingSteps() {
  const container = document.getElementById("quest-grid");
  if (!container) return;

  container.innerHTML = STARTING_STEPS.map(q => {
    const isDone = state.completedSteps.includes(q.id);
    return `
      <div class="quest-card ${isDone ? 'completed' : ''}" onclick="openStepPopup(${q.id})">
        <div>
          <div class="quest-top-meta">
            <span class="quest-level-badge">Step ${q.number || q.id}</span>
            <span class="quest-xp-badge">${escapeHtml(q.category || 'Architecture')}</span>
          </div>
          <h4 class="quest-name">${q.icon || '📌'} ${escapeHtml(q.title)}</h4>
          <p class="quest-flavor-desc">${escapeHtml(q.businessOutcome || q.details)}</p>
        </div>
        <div class="quest-footer-action">
          <div class="quest-click-hint">
            <span>Prerequisites & Checklist</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
          <div class="quest-status-icon">${isDone ? '✓' : '→'}</div>
        </div>
      </div>
    `;
  }).join("");
}

function openStepPopup(id) {
  const step = STARTING_STEPS.find(q => q.id === id);
  if (!step) return;

  const dialog = document.getElementById("quest-modal");
  const body = document.getElementById("quest-modal-body");
  if (!dialog || !body) return;

  const isDone = state.completedSteps.includes(id);

  body.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
      <span class="quest-level-badge">Step ${step.number || step.id}</span>
      <span class="quest-xp-badge">${escapeHtml(step.category || 'Architecture')}</span>
    </div>
    <h2 style="font-size: 1.45rem; margin-bottom: 0.35rem;">${step.icon || '📌'} ${escapeHtml(step.title)}</h2>
    <div style="font-size: 0.88rem; font-weight: 700; color: var(--sap-blue); margin-bottom: 0.5rem;">Objective: ${escapeHtml(step.objective)}</div>

    ${step.prerequisites ? `
      <div style="background: var(--bg-subtle); border-left: 3px solid var(--sap-blue); padding: 0.5rem 0.75rem; margin-bottom: 0.65rem; font-size: 0.82rem; border-radius: var(--radius-xs);">
        <strong>Technical Prerequisites:</strong> ${escapeHtml(step.prerequisites)}
      </div>
    ` : ''}

    ${step.businessOutcome ? `
      <div style="background: var(--bg-subtle); border-left: 3px solid var(--status-positive); padding: 0.5rem 0.75rem; margin-bottom: 0.85rem; font-size: 0.82rem; border-radius: var(--radius-xs);">
        <strong>Business Outcome:</strong> ${escapeHtml(step.businessOutcome)}
      </div>
    ` : ''}

    <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.25rem;">${escapeHtml(step.details)}</p>

    <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem;">Recommended Action Items:</h4>
    <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1.5rem;">
      ${(step.checklist || []).map(c => `
        <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.84rem; background: var(--bg-subtle); padding: 0.5rem 0.75rem; border-radius: var(--radius-xs);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--status-positive)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${escapeHtml(c)}</span>
        </div>
      `).join("")}
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--border-light);">
      <a href="${step.link}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        <span>Official Documentation</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </a>
      <button class="btn ${isDone ? 'btn-secondary' : 'btn-primary'} btn-sm" onclick="toggleStepCompletion(${step.id})">
        <span>${isDone ? 'Marked Completed ✓' : 'Mark Step as Completed'}</span>
      </button>
    </div>
  `;

  if (dialog.showModal) {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "true");
  }
}

function closeQuestPopup() {
  const dialog = document.getElementById("quest-modal");
  if (dialog) {
    if (dialog.close) dialog.close();
    else dialog.removeAttribute("open");
  }
}

function toggleStepCompletion(id) {
  const step = STARTING_STEPS.find(q => q.id === id);
  if (!step) return;

  if (state.completedSteps.includes(id)) {
    state.completedSteps = state.completedSteps.filter(q => q !== id);
    showToast("Step status reset");
  } else {
    state.completedSteps.push(id);
    showToast("Step marked as completed!");
  }

  localStorage.setItem("po2suite_steps", JSON.stringify(state.completedSteps));
  renderStartingSteps();
  closeQuestPopup();
}

// ==========================================
// 6. 6-PHASE ROADMAP (GAME UI / PROFESSIONAL WORDS)
// ==========================================

function renderPhases() {
  const navContainer = document.getElementById("realm-path-nav");
  const contentContainer = document.getElementById("realm-content-box");
  if (!navContainer || !contentContainer) return;

  navContainer.innerHTML = Object.keys(PHASES).map(key => {
    const p = PHASES[key];
    const kNum = parseInt(key);
    const isActive = kNum === state.activePhase;
    return `
      <div class="realm-node-btn ${isActive ? 'active' : ''}" onclick="switchPhase(${kNum})">
        <div class="realm-node-header">
          <span class="realm-badge-num">${p.num}</span>
          <span class="realm-icon-indicator">${isActive ? '●' : '○'}</span>
        </div>
        <div class="realm-name-text">${p.name}</div>
        <div class="realm-duration-pill">${p.duration}</div>
      </div>
    `;
  }).join("");

  const p = PHASES[state.activePhase];
  if (!p) return;

  let toolsBlock = "";

  if (p.showRaci) {
    toolsBlock = `
      <div style="margin-top: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem;">Governance: Stakeholder RACI Matrix</h4>
        <div class="table-scroll-wrap">
          <table class="clean-table">
            <thead>
              <tr>
                <th>Project Role</th>
                <th>Responsible (R)</th>
                <th>Accountable (A)</th>
                <th>Consulted (C)</th>
                <th>Informed (I)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Project Sponsor</strong></td><td>-</td><td><span class="raci-pill raci-a">A</span></td><td>-</td><td><span class="raci-pill raci-i">I</span></td></tr>
              <tr><td><strong>Project Manager</strong></td><td><span class="raci-pill raci-r">R</span></td><td><span class="raci-pill raci-a">A</span></td><td><span class="raci-pill raci-c">C</span></td><td><span class="raci-pill raci-i">I</span></td></tr>
              <tr><td><strong>Integration Architect</strong></td><td><span class="raci-pill raci-r">R</span></td><td><span class="raci-pill raci-a">A</span></td><td><span class="raci-pill raci-c">C</span></td><td>-</td></tr>
              <tr><td><strong>Technical Lead</strong></td><td><span class="raci-pill raci-r">R</span></td><td><span class="raci-pill raci-a">A</span></td><td><span class="raci-pill raci-c">C</span></td><td>-</td></tr>
              <tr><td><strong>SAP Basis / Cloud Admin</strong></td><td><span class="raci-pill raci-r">R</span></td><td>-</td><td><span class="raci-pill raci-c">C</span></td><td><span class="raci-pill raci-i">I</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (p.showEffortBaseline) {
    toolsBlock = `
      <div style="margin-top: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem;">Standard Effort Estimation Baseline</h4>
        <div class="table-scroll-wrap">
          <table class="clean-table">
            <thead>
              <tr><th>Integration Type</th><th>Standard Count</th><th>Avg Effort</th><th>Total Baseline</th><th>Automation Factor</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Async A2A</strong></td><td>120</td><td>0.50 Days</td><td><strong>60.0 Days</strong></td><td>High (~70% auto)</td></tr>
              <tr><td><strong>Sync A2A</strong></td><td>80</td><td>0.75 Days</td><td><strong>60.0 Days</strong></td><td>Moderate</td></tr>
              <tr><td><strong>B2B / EDI</strong></td><td>30</td><td>1.50 Days</td><td><strong>45.0 Days</strong></td><td>MIG / MAG Assisted</td></tr>
              <tr><td><strong>BPM Scenarios</strong></td><td>10</td><td>2.00 Days</td><td><strong>20.0 Days</strong></td><td>Manual Redesign</td></tr>
              <tr><td><strong>Technical Interfaces</strong></td><td>50</td><td>0.25 Days</td><td><strong>12.5 Days</strong></td><td>Pass-Through</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (p.showComplexityScorer) {
    toolsBlock = `
      <div style="margin-top: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem;">Interactive 7-Factor Complexity Scorer</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.75rem; background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
          <div><label style="font-size: 0.8rem; font-weight: 700; display:flex; justify-content:space-between;">1. Mapping Complexity <span id="cx-1">3</span></label><input type="range" min="1" max="5" value="3" style="width:100%; accent-color:var(--sap-blue);" oninput="updateCx(1, this.value)"></div>
          <div><label style="font-size: 0.8rem; font-weight: 700; display:flex; justify-content:space-between;">2. Routing Rules <span id="cx-2">2</span></label><input type="range" min="1" max="5" value="2" style="width:100%; accent-color:var(--sap-blue);" oninput="updateCx(2, this.value)"></div>
          <div><label style="font-size: 0.8rem; font-weight: 700; display:flex; justify-content:space-between;">3. Adapter Modules <span id="cx-3">3</span></label><input type="range" min="1" max="5" value="3" style="width:100%; accent-color:var(--sap-blue);" oninput="updateCx(3, this.value)"></div>
          <div><label style="font-size: 0.8rem; font-weight: 700; display:flex; justify-content:space-between;">4. Security & Tokens <span id="cx-4">2</span></label><input type="range" min="1" max="5" value="2" style="width:100%; accent-color:var(--sap-blue);" oninput="updateCx(4, this.value)"></div>
          <div><label style="font-size: 0.8rem; font-weight: 700; display:flex; justify-content:space-between;">5. Volume & Payload <span id="cx-5">3</span></label><input type="range" min="1" max="5" value="3" style="width:100%; accent-color:var(--sap-blue);" oninput="updateCx(5, this.value)"></div>
          <div><label style="font-size: 0.8rem; font-weight: 700; display:flex; justify-content:space-between;">6. External Systems <span id="cx-6">2</span></label><input type="range" min="1" max="5" value="2" style="width:100%; accent-color:var(--sap-blue);" oninput="updateCx(6, this.value)"></div>
          <div><label style="font-size: 0.8rem; font-weight: 700; display:flex; justify-content:space-between;">7. Error Handling <span id="cx-7">3</span></label><input type="range" min="1" max="5" value="3" style="width:100%; accent-color:var(--sap-blue);" oninput="updateCx(7, this.value)"></div>
        </div>
        <div style="margin-top: 0.85rem; padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-xs); display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size: 0.84rem; font-weight: 700;">Score: <span id="cx-result" style="color: var(--accent-amber);">2.57 / 5.0 (Medium Complexity)</span></span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Effort: 0.75 – 1.25 Days</span>
        </div>
      </div>
    `;
  } else if (p.showTeamFte) {
    toolsBlock = `
      <div style="margin-top: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem;">Team Structure & FTE Allocation Framework</h4>
        <div class="table-scroll-wrap">
          <table class="clean-table">
            <thead>
              <tr><th>Role</th><th>Responsibilities</th><th>Small (&lt;100)</th><th>Medium (100–300)</th><th>Large (300+)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Program Manager</strong></td><td>Governance, timeline, stakeholder comms</td><td>0.2 FTE</td><td>0.5 FTE</td><td>1.0 FTE</td></tr>
              <tr><td><strong>Integration Architect</strong></td><td>Solution design, pattern governance</td><td>0.5 FTE</td><td>1.0 FTE</td><td>1.5 FTE</td></tr>
              <tr><td><strong>Integration Developer</strong></td><td>Build iFlows, mappings, Groovy scripts</td><td>1.0 FTE</td><td>2.0 – 4.0 FTE</td><td>4.0 – 8.0 FTE</td></tr>
              <tr><td><strong>QA / Test Lead</strong></td><td>Testing strategy, regression automation</td><td>0.3 FTE</td><td>0.5 FTE</td><td>1.0 FTE</td></tr>
              <tr><td><strong>Basis / Security Admin</strong></td><td>Cloud Connector, keystores, tunnels</td><td>0.2 FTE</td><td>0.3 FTE</td><td>0.5 FTE</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (p.showTestingTiers) {
    toolsBlock = `
      <div style="margin-top: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem;">Three-Tier Testing Strategy</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.85rem;">
          <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-sm); border-top: 3px solid var(--sap-blue); border-left:1px solid var(--border-light); border-right:1px solid var(--border-light); border-bottom:1px solid var(--border-light);">
            <strong style="color: var(--sap-blue); font-size: 0.75rem; text-transform:uppercase;">Tier 1</strong>
            <h5 style="margin: 0.25rem 0;">Unit Testing (UT)</h5>
            <p style="font-size: 0.8rem; color: var(--text-muted);">Component mappings, adapter headers, routing condition scripts, Groovy edge cases.</p>
          </div>
          <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-sm); border-top: 3px solid var(--accent-purple); border-left:1px solid var(--border-light); border-right:1px solid var(--border-light); border-bottom:1px solid var(--border-light);">
            <strong style="color: var(--accent-purple); font-size: 0.75rem; text-transform:uppercase;">Tier 2</strong>
            <h5 style="margin: 0.25rem 0;">Integration Testing (IT)</h5>
            <p style="font-size: 0.8rem; color: var(--text-muted);">End-to-end data flow with connected systems, Cloud Connector tunnels, automated regression.</p>
          </div>
          <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-sm); border-top: 3px solid var(--accent-emerald); border-left:1px solid var(--border-light); border-right:1px solid var(--border-light); border-bottom:1px solid var(--border-light);">
            <strong style="color: var(--accent-emerald); font-size: 0.75rem; text-transform:uppercase;">Tier 3</strong>
            <h5 style="margin: 0.25rem 0;">User Acceptance (UAT)</h5>
            <p style="font-size: 0.8rem; color: var(--text-muted);">Business outcome verification, sign-off from functional process owners, audit readiness.</p>
          </div>
        </div>
      </div>
    `;
  } else if (p.showCutoverChecklist) {
    const list = [
      { id: "cut-1", cat: "Technical", text: "Integration Suite tenant provisioned and validated" },
      { id: "cut-2", cat: "Technical", text: "Security keystore artifacts and certificates deployed" },
      { id: "cut-3", cat: "Technical", text: "Connectivity handshake executed with all external endpoints" },
      { id: "cut-4", cat: "Business", text: "Business user training and SOP documentation completed" },
      { id: "cut-5", cat: "Go-Live", text: "PI/PO sender communication channels stopped & queues drained" },
      { id: "cut-6", cat: "Go-Live", text: "Integration Suite interfaces activated & DNS/URL redirected" },
      { id: "cut-7", cat: "Go-Live", text: "Post-go-live Cloud ALM monitoring & telemetry confirmed" }
    ];

    toolsBlock = `
      <div style="margin-top: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem;">Production Cutover Checklist</h4>
        <div style="display: flex; flex-direction: column; gap: 0.35rem;">
          ${list.map(c => {
            const isDone = state.cutoverStatus[c.id] || false;
            return `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0.85rem; border-radius: var(--radius-xs); background: var(--bg-surface); border: 1px solid var(--border-light);">
                <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.84rem; cursor: pointer;">
                  <input type="checkbox" ${isDone ? 'checked' : ''} onchange="toggleCutover('${c.id}')" style="accent-color: var(--accent-emerald);">
                  <span style="${isDone ? 'text-decoration: line-through; color: var(--text-muted);' : ''}">${c.text}</span>
                </label>
                <span class="preview-pill">${c.cat}</span>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  contentContainer.innerHTML = `
    <div class="realm-header-row">
      <div>
        <span class="notice-pill" style="margin-bottom: 0.4rem; display: inline-block;">${p.num}</span>
        <h3 style="font-size: 1.6rem; margin-bottom: 0.2rem;">${p.title}</h3>
        <div style="font-size: 0.85rem; color: var(--sap-blue); font-weight: 700;">Duration: ${p.duration} • Milestone: ${p.milestone}</div>
      </div>
    </div>

    <!-- Critical Technical Risk & Bottleneck Banner -->
    <div class="phase-risk-banner">
      <div class="phase-risk-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      </div>
      <div>
        <div class="phase-risk-title">Critical Technical Bottleneck & Risk: ${escapeHtml(p.criticalRisk || p.challenge)}</div>
        <div class="phase-risk-desc">${escapeHtml(p.challengeDesc || '')}</div>
        ${p.riskMitigation ? `<div class="phase-risk-mitigation"><strong>Engineering Mitigation:</strong> ${escapeHtml(p.riskMitigation)}</div>` : ''}
      </div>
    </div>

    <p style="font-size: 0.94rem; margin-bottom: 1.25rem;">${p.description}</p>

    <h4 style="font-size: 0.88rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.65rem;">Phase Action Items & Deliverables:</h4>
    <div class="checklist-items-stack">
      ${p.checklist.map(c => `
        <div class="check-row-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <div>
            <div class="check-row-main">${c.text}</div>
            <div class="check-row-sub">${c.sub}</div>
          </div>
        </div>
      `).join("")}
    </div>

    ${toolsBlock}
  `;
}

function switchPhase(num) {
  state.activePhase = num;
  renderPhases();
}

function toggleCutover(id) {
  state.cutoverStatus[id] = !state.cutoverStatus[id];
  localStorage.setItem("po2suite_cutover_status", JSON.stringify(state.cutoverStatus));
  renderPhases();
}

const cxVals = { 1: 3, 2: 2, 3: 3, 4: 2, 5: 3, 6: 2, 7: 3 };
function updateCx(id, val) {
  cxVals[id] = parseInt(val);
  const span = document.getElementById(`cx-${id}`);
  if (span) span.textContent = val;

  const total = Object.values(cxVals).reduce((a, b) => a + b, 0);
  const avg = (total / 7).toFixed(2);
  const res = document.getElementById("cx-result");
  if (!res) return;

  if (avg < 2.2) { res.textContent = `${avg} / 5.0 (Low Complexity)`; res.style.color = "var(--accent-emerald)"; }
  else if (avg <= 3.4) { res.textContent = `${avg} / 5.0 (Medium Complexity)`; res.style.color = "var(--accent-amber)"; }
  else { res.textContent = `${avg} / 5.0 (High Complexity)`; res.style.color = "var(--accent-rose)"; }
}

// ==========================================
// 7. EFFORT & BUDGET ESTIMATOR ($ / €)
// ==========================================

const debouncedCalculateEstimates = debounce(() => {
  calculateEstimates();
}, 300);

function initEstimator() {
  bindInput("calc-small", v => { state.calc.smallCount = Math.max(0, parseInt(v) || 0); debouncedCalculateEstimates(); });
  bindInput("calc-medium", v => { state.calc.mediumCount = Math.max(0, parseInt(v) || 0); debouncedCalculateEstimates(); });
  bindInput("calc-large", v => { state.calc.largeCount = Math.max(0, parseInt(v) || 0); debouncedCalculateEstimates(); });
  bindInput("calc-xl", v => { state.calc.xlCount = Math.max(0, parseInt(v) || 0); debouncedCalculateEstimates(); });
  bindInput("calc-fixed-setup", v => {
    state.calc.fixedSetupDays = Math.max(0, parseInt(v) || 0);
    const label = document.getElementById("calc-fixed-days-label");
    if (label) label.textContent = `${state.calc.fixedSetupDays} Days`;
    debouncedCalculateEstimates();
  });

  const rateInput = document.getElementById("calc-dailyrate");
  if (rateInput) {
    rateInput.addEventListener("input", e => {
      const val = Math.max(0, parseInt(e.target.value) || 0);
      if (state.currency === "USD") state.calc.dailyRateUSD = val;
      else state.calc.dailyRateEUR = val;
      debouncedCalculateEstimates();
    });
  }

  calculateEstimates();
}

function bindInput(id, cb) {
  const el = document.getElementById(id);
  if (el) el.addEventListener("input", e => cb(e.target.value));
}

function calculateEstimates() {
  const { smallCount, mediumCount, largeCount, xlCount, fixedSetupDays } = state.calc;
  const isUSD = state.currency === "USD";
  const sym = isUSD ? "$" : "€";
  const effectiveRate = isUSD ? state.calc.dailyRateUSD : state.calc.dailyRateEUR;

  // Sync inputs with state
  const smallInput = document.getElementById("calc-small");
  if (smallInput && parseInt(smallInput.value) !== smallCount) smallInput.value = smallCount;

  const mediumInput = document.getElementById("calc-medium");
  if (mediumInput && parseInt(mediumInput.value) !== mediumCount) mediumInput.value = mediumCount;

  const largeInput = document.getElementById("calc-large");
  if (largeInput && parseInt(largeInput.value) !== largeCount) largeInput.value = largeCount;

  const xlInput = document.getElementById("calc-xl");
  if (xlInput && parseInt(xlInput.value) !== xlCount) xlInput.value = xlCount;

  const fixedInput = document.getElementById("calc-fixed-setup");
  if (fixedInput && parseInt(fixedInput.value) !== fixedSetupDays) fixedInput.value = fixedSetupDays;

  const fixedLabel = document.getElementById("calc-fixed-days-label");
  if (fixedLabel) fixedLabel.textContent = `${fixedSetupDays} Days`;

  const rateInput = document.getElementById("calc-dailyrate");
  const rateLabel = document.getElementById("rate-currency-label");
  if (rateInput) {
    rateInput.value = effectiveRate;
  }
  if (rateLabel) {
    rateLabel.textContent = `Blended Daily Rate (${sym})`;
  }
  const printCur = document.getElementById("print-currency-display");
  if (printCur) {
    printCur.textContent = isUSD ? "USD ($)" : "EUR (€)";
  }

  // Per interface effort matrix coefficients:
  // Phase: [Small, Medium, Large, XL]
  const matrix = [
    { phase: "Analysis & Design", small: 0.5, medium: 1.0, large: 2.5, xl: 5.0 },
    { phase: "Build & Refactoring", small: 1.0, medium: 3.0, large: 6.0, xl: 12.0 },
    { phase: "Unit Testing", small: 0.5, medium: 1.0, large: 2.0, xl: 3.0 },
    { phase: "SIT & E2E Testing", small: 1.0, medium: 1.5, large: 3.0, xl: 4.0 },
    { phase: "Documentation & Cutover", small: 0.5, medium: 0.5, large: 1.0, xl: 1.5 }
  ];

  // Base interface totals
  const smallDays = smallCount * 3.5;
  const mediumDays = mediumCount * 7.0;
  const largeDays = largeCount * 14.5;
  const xlDays = xlCount * 25.5;

  const totalInterfaceDays = smallDays + mediumDays + largeDays + xlDays;
  const totalInterfaces = smallCount + mediumCount + largeCount + xlCount;

  // PM (15%) + Hypercare (10%) = 25% of Total Interface Days
  const pmHypercareDays = Math.round(totalInterfaceDays * 0.25);
  const totalProjectDays = Math.round(totalInterfaceDays + fixedSetupDays + pmHypercareDays);

  const approxBilling = Math.round(totalProjectDays * effectiveRate);

  // Update Dense Spreadsheet Table Subtotals
  setVal("calc-small-subtotal", `${smallDays.toFixed(1)}d`);
  setVal("calc-medium-subtotal", `${mediumDays.toFixed(1)}d`);
  setVal("calc-large-subtotal", `${largeDays.toFixed(1)}d`);
  setVal("calc-xl-subtotal", `${xlDays.toFixed(1)}d`);

  // Update Top KPIs
  setVal("kpi-total-interfaces", totalInterfaces);
  setVal("kpi-interface-days", `${totalInterfaceDays.toLocaleString()} Days`);
  setVal("kpi-fixed-days", `${fixedSetupDays} Days`);
  setVal("kpi-pm-hypercare", `${pmHypercareDays.toLocaleString()} Days`);
  setVal("kpi-total-project-days", `${totalProjectDays.toLocaleString()} Days`);
  setVal("kpi-approx-billing", `${sym}${approxBilling.toLocaleString()}`);

  const summarySpan = document.getElementById("chart-total-summary");
  if (summarySpan) {
    summarySpan.textContent = `${totalInterfaceDays.toLocaleString()} Interface Days`;
  }

  // Render Visual Bars
  renderTshirtBars({
    smallCount, smallDays,
    mediumCount, mediumDays,
    largeCount, largeDays,
    xlCount, xlDays,
    totalInterfaceDays
  });

  // Render Matrix Table
  renderLifecycleMatrix(matrix, {
    smallCount, mediumCount, largeCount, xlCount,
    smallDays, mediumDays, largeDays, xlDays,
    totalInterfaceDays, fixedSetupDays, pmHypercareDays,
    totalProjectDays, effectiveRate, sym
  });
}

function exportEstimatorCSV() {
  const { smallCount, mediumCount, largeCount, xlCount, fixedSetupDays } = state.calc;
  const isUSD = state.currency === "USD";
  const sym = isUSD ? "$" : "€";
  const effectiveRate = isUSD ? state.calc.dailyRateUSD : state.calc.dailyRateEUR;
  const currencyCode = isUSD ? "USD" : "EUR";

  const smallDays = smallCount * 3.5;
  const mediumDays = mediumCount * 7.0;
  const largeDays = largeCount * 14.5;
  const xlDays = xlCount * 25.5;
  const totalInterfaceDays = smallDays + mediumDays + largeDays + xlDays;
  const totalInterfaces = smallCount + mediumCount + largeCount + xlCount;
  const pmDays = Math.round(totalInterfaceDays * 0.15);
  const hypercareDays = Math.round(totalInterfaceDays * 0.10);
  const pmHypercareDays = pmDays + hypercareDays;
  const totalProjectDays = Math.round(totalInterfaceDays + fixedSetupDays + pmHypercareDays);
  const approxBilling = Math.round(totalProjectDays * effectiveRate);

  const csvRows = [
    ["PO2Suite SAP PI/PO to SAP Integration Suite Migration Estimation"],
    ["Generated Date", new Date().toISOString().split("T")[0]],
    ["Currency", currencyCode],
    ["Blended Daily Rate", `${effectiveRate} ${currencyCode}`],
    [],
    ["--- INTERFACE INVENTORY & T-SHIRT SIZING ---"],
    ["Complexity Tier", "Technical Scope", "Tooling Support", "Days per Object", "Interface Count", "Subtotal Days"],
    ["Small (Simple)", "Point-to-Point, Basic Standard Adapters, 1:1 Mapping", "High Auto", "3.5", smallCount, smallDays.toFixed(1)],
    ["Medium", "Content-Based Routing, Standard UDFs to Groovy, B2B", "Medium Auto", "7.0", mediumCount, mediumDays.toFixed(1)],
    ["Large (Complex)", "Custom Java/XSLT, Complex B2B/EDI, External DB", "Low Auto", "14.5", largeCount, largeDays.toFixed(1)],
    ["Extra Large (Highly Complex)", "ccBPM/NW BPM Orchestration, Sync/Async Bridges", "Manual Redesign", "25.5", xlCount, xlDays.toFixed(1)],
    ["Total Interface Footprint", "", "", "", totalInterfaces, totalInterfaceDays.toFixed(1)],
    [],
    ["--- PROJECT LANDSCAPE & GOVERNANCE OVERHEAD ---"],
    ["Overhead Item", "Scope Description", "Calculation Basis", "Person-Days", `Cost (${currencyCode})`],
    ["Fixed Landscape Setup", "Discovery (15d) + Cloud Connector/ALM (10d) + Frameworks (15d)", "Baseline Setup", fixedSetupDays, Math.round(fixedSetupDays * effectiveRate)],
    ["Project Management (PM)", "Agile sprint ceremonies, dependency tracking, governance", "15% of Interface Effort", pmDays, Math.round(pmDays * effectiveRate)],
    ["Hypercare & Decommissioning", "24/7 post-go-live coverage, PO decommissioning", "10% of Interface Effort", hypercareDays, Math.round(hypercareDays * effectiveRate)],
    ["Subtotal Overhead", "Fixed Setup + PM + Hypercare", "Fixed + 25%", pmHypercareDays + fixedSetupDays, Math.round((pmHypercareDays + fixedSetupDays) * effectiveRate)],
    [],
    ["--- GRAND TOTAL PROJECT ESTIMATION ---"],
    ["Total Migrated Interfaces", totalInterfaces],
    ["Total Project Person-Days", totalProjectDays],
    ["Approximate Total Billing", `${sym}${approxBilling.toLocaleString()} ${currencyCode}`],
    [],
    ["--- LIFECYCLE PHASE BREAKDOWN MATRIX (DAYS) ---"],
    ["Lifecycle Phase", "Small (d)", "Medium (d)", "Large (d)", "Extra Large (d)", "Total Days", `Approx Cost (${currencyCode})`],
    ["Analysis & Design", (smallCount * 0.5).toFixed(1), (mediumCount * 1.0).toFixed(1), (largeCount * 2.5).toFixed(1), (xlCount * 5.0).toFixed(1), (smallCount * 0.5 + mediumCount * 1.0 + largeCount * 2.5 + xlCount * 5.0).toFixed(1), Math.round((smallCount * 0.5 + mediumCount * 1.0 + largeCount * 2.5 + xlCount * 5.0) * effectiveRate)],
    ["Build & Refactoring", (smallCount * 1.0).toFixed(1), (mediumCount * 3.0).toFixed(1), (largeCount * 6.0).toFixed(1), (xlCount * 12.0).toFixed(1), (smallCount * 1.0 + mediumCount * 3.0 + largeCount * 6.0 + xlCount * 12.0).toFixed(1), Math.round((smallCount * 1.0 + mediumCount * 3.0 + largeCount * 6.0 + xlCount * 12.0) * effectiveRate)],
    ["Unit Testing", (smallCount * 0.5).toFixed(1), (mediumCount * 1.0).toFixed(1), (largeCount * 2.0).toFixed(1), (xlCount * 3.0).toFixed(1), (smallCount * 0.5 + mediumCount * 1.0 + largeCount * 2.0 + xlCount * 3.0).toFixed(1), Math.round((smallCount * 0.5 + mediumCount * 1.0 + largeCount * 2.0 + xlCount * 3.0) * effectiveRate)],
    ["SIT & E2E Testing", (smallCount * 1.0).toFixed(1), (mediumCount * 1.5).toFixed(1), (largeCount * 3.0).toFixed(1), (xlCount * 4.0).toFixed(1), (smallCount * 1.0 + mediumCount * 1.5 + largeCount * 3.0 + xlCount * 4.0).toFixed(1), Math.round((smallCount * 1.0 + mediumCount * 1.5 + largeCount * 3.0 + xlCount * 4.0) * effectiveRate)],
    ["Documentation & Cutover", (smallCount * 0.5).toFixed(1), (mediumCount * 0.5).toFixed(1), (largeCount * 1.0).toFixed(1), (xlCount * 1.5).toFixed(1), (smallCount * 0.5 + mediumCount * 0.5 + largeCount * 1.0 + xlCount * 1.5).toFixed(1), Math.round((smallCount * 0.5 + mediumCount * 0.5 + largeCount * 1.0 + xlCount * 1.5) * effectiveRate)]
  ];

  const csvContent = "data:text/csv;charset=utf-8," + csvRows.map(e => e.map(item => `"${(item ?? '').toString().replace(/"/g, '""')}"`).join(",")).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `SAP_PO2Suite_Migration_Effort_Estimation_${new Date().toISOString().split("T")[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("CSV Estimation Report exported successfully");
}

function setVal(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function renderTshirtBars(data) {
  const container = document.getElementById("chart-tshirt-bars");
  if (!container) return;

  const tiers = [
    { name: "Small (Simple)", count: data.smallCount, days: data.smallDays, rate: "3.5d", color: "var(--accent-emerald, #10b981)" },
    { name: "Medium", count: data.mediumCount, days: data.mediumDays, rate: "7.0d", color: "var(--sap-blue, #0070f2)" },
    { name: "Large (Complex)", count: data.largeCount, days: data.largeDays, rate: "14.5d", color: "var(--accent-purple, #8b5cf6)" },
    { name: "Extra Large", count: data.xlCount, days: data.xlDays, rate: "25.5d", color: "var(--accent-rose, #f43f5e)" }
  ];

  const total = Math.max(1, data.totalInterfaceDays);

  container.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 0.65rem;">
      ${tiers.map(t => {
        const pct = Math.round((t.days / total) * 100);
        return `
          <div>
            <div style="display: flex; justify-content: space-between; align-items: baseline; font-size: 0.76rem; margin-bottom: 0.2rem;">
              <span style="font-weight: 600; color: var(--text-main);">
                ${t.name} <span style="color: var(--text-muted); font-weight: normal;">(${t.count} objs × ${t.rate})</span>
              </span>
              <span style="font-weight: 700; color: var(--text-main);">
                ${t.days.toLocaleString()} Days <span style="font-weight: normal; color: var(--text-muted);">(${pct}%)</span>
              </span>
            </div>
            <div style="width: 100%; height: 9px; background: var(--bg-subtle); border-radius: 999px; overflow: hidden; border: 1px solid var(--border-light);">
              <div style="width: ${pct}%; height: 100%; background: ${t.color}; border-radius: 999px; transition: width 0.3s ease;"></div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderLifecycleMatrix(matrix, calcData) {
  const tbody = document.getElementById("estimator-matrix-tbody");
  if (!tbody) return;

  const {
    smallCount, mediumCount, largeCount, xlCount,
    smallDays, mediumDays, largeDays, xlDays,
    totalInterfaceDays, fixedSetupDays, pmHypercareDays,
    totalProjectDays, effectiveRate, sym
  } = calcData;

  const rowsHtml = matrix.map(row => {
    const s = row.small * smallCount;
    const m = row.medium * mediumCount;
    const l = row.large * largeCount;
    const xl = row.xl * xlCount;
    const phaseTotal = s + m + l + xl;
    const phaseCost = Math.round(phaseTotal * effectiveRate);

    return `
      <tr>
        <td style="font-weight: 600; color: var(--text-main);">${row.phase}</td>
        <td>${s.toFixed(1)}d <span style="font-size: 0.7rem; color: var(--text-muted);">(${row.small}d)</span></td>
        <td>${m.toFixed(1)}d <span style="font-size: 0.7rem; color: var(--text-muted);">(${row.medium}d)</span></td>
        <td>${l.toFixed(1)}d <span style="font-size: 0.7rem; color: var(--text-muted);">(${row.large}d)</span></td>
        <td>${xl.toFixed(1)}d <span style="font-size: 0.7rem; color: var(--text-muted);">(${row.xl}d)</span></td>
        <td style="font-weight: 700; color: var(--sap-blue);">${phaseTotal.toFixed(1)}d</td>
        <td style="font-weight: 600;">${sym}${phaseCost.toLocaleString()}</td>
      </tr>
    `;
  }).join("");

  const subtotalCost = Math.round(totalInterfaceDays * effectiveRate);
  const overheadTotal = fixedSetupDays + pmHypercareDays;
  const overheadCost = Math.round(overheadTotal * effectiveRate);
  const grandCost = Math.round(totalProjectDays * effectiveRate);

  tbody.innerHTML = `
    ${rowsHtml}
    <tr style="background: var(--bg-subtle); border-top: 2px solid var(--border-light); font-weight: 700;">
      <td style="color: var(--text-main);">Subtotal: Interface Migration</td>
      <td>${smallDays.toFixed(1)}d</td>
      <td>${mediumDays.toFixed(1)}d</td>
      <td>${largeDays.toFixed(1)}d</td>
      <td>${xlDays.toFixed(1)}d</td>
      <td style="color: var(--sap-blue);">${totalInterfaceDays.toFixed(1)}d</td>
      <td>${sym}${subtotalCost.toLocaleString()}</td>
    </tr>
    <tr style="background: var(--bg-surface); font-size: 0.8rem;">
      <td colspan="5" style="color: var(--text-secondary);">
        <strong>Project Landscape & Governance:</strong> Fixed Setup (${fixedSetupDays}d) + PM & Hypercare 25% (${pmHypercareDays}d)
      </td>
      <td style="font-weight: 700; color: var(--accent-purple);">${overheadTotal}d</td>
      <td style="font-weight: 600;">${sym}${overheadCost.toLocaleString()}</td>
    </tr>
    <tr style="background: var(--bg-subtle); border-top: 2px solid var(--sap-blue); font-weight: 800; font-size: 0.88rem;">
      <td colspan="5" style="color: var(--text-main);">GRAND TOTAL PROJECT ESTIMATION</td>
      <td style="color: var(--accent-emerald); font-size: 0.95rem;">${totalProjectDays.toLocaleString()} Days</td>
      <td style="color: var(--sap-blue); font-size: 0.95rem;">${sym}${grandCost.toLocaleString()}</td>
    </tr>
  `;
}

// ==========================================
// 8. COLLAPSIBLE RESOURCE SIDEBAR
// ==========================================

const CATEGORY_MAP = {
  notes: { title: "Official SAP Notes", icon: "📋" },
  docs: { title: "Documentation & Guides", icon: "📖" },
  tools: { title: "Tools & Accelerators", icon: "🔧" },
  videos: { title: "Video Masterclasses", icon: "🎥" },
  blogs: { title: "Expert Community Blogs", icon: "📝" },
  learning: { title: "Learning & Certifications", icon: "🗺" }
};

function renderSidebarResources() {
  const container = document.getElementById("sidebar-categories-tree");
  if (!container) return;

  const q = state.sidebarSearchQuery;
  const filtered = RESOURCES.filter(item => {
    if (!q) return true;
    return item.title.toLowerCase().includes(q) ||
           item.description.toLowerCase().includes(q) ||
           (item.number && item.number.toLowerCase().includes(q)) ||
           (item.tags && item.tags.some(t => t.toLowerCase().includes(q)));
  });

  const categories = ["notes", "docs", "tools", "videos", "blogs", "learning"];

  container.innerHTML = categories.map(catKey => {
    const items = filtered.filter(i => i.category === catKey);
    const meta = CATEGORY_MAP[catKey];
    const isOpen = q.length > 0;

    return `
      <div class="sidebar-cat-accordion ${isOpen ? 'open' : ''}" id="cat-acc-${catKey}">
        <div class="sidebar-cat-header" onclick="toggleSidebarCategory('${catKey}')">
          <span>${meta.icon} ${meta.title}</span>
          <span class="cat-count-pill">${items.length}</span>
        </div>
        <div class="sidebar-cat-body">
          ${items.length === 0 ? '<div style="font-size:0.75rem; color:var(--text-muted); padding:0.4rem;">No matching items</div>' : ''}
          ${items.map(item => `
            <div class="sidebar-item-row">
              <div class="sidebar-item-title">
                <span>${item.number ? `#${item.number}: ` : ''}${item.title}</span>
                <a href="${item.link}" target="_blank" rel="noopener noreferrer" style="color:var(--sap-blue);" title="Open link">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              </div>
              <div class="sidebar-item-sub">${item.topic}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function toggleSidebarCategory(catKey) {
  const el = document.getElementById(`cat-acc-${catKey}`);
  if (el) el.classList.toggle("open");
}

function openResourceSidebar() {
  renderSidebarResources();
  document.getElementById("sidebar-backdrop")?.classList.add("active");
  document.getElementById("resource-sidebar-drawer")?.classList.add("open");
}

function closeResourceSidebar() {
  document.getElementById("sidebar-backdrop")?.classList.remove("active");
  document.getElementById("resource-sidebar-drawer")?.classList.remove("open");
}

// ==========================================
// 9. CASE STUDIES, CHALLENGES & TOP 10
// ==========================================

function renderCaseStudies() {
  const container = document.getElementById("case-studies-grid");
  if (!container) return;

  container.innerHTML = CASE_STUDIES.map(cs => `
    <div class="case-study-card">
      <div class="case-photo-box">
        <img src="${cs.image}" alt="${cs.title}" loading="lazy" />
        <span class="case-tag-pill">${cs.industry}</span>
      </div>
      <div class="case-body">
        <h4 class="case-main-title">${cs.title}</h4>
        <div class="case-stats-duo">
          <div><div class="case-stat-num">${cs.timeline}</div><div class="case-stat-lbl">Duration</div></div>
          <div><div class="case-stat-num">${cs.migrated}</div><div class="case-stat-lbl">Scope</div></div>
        </div>
        <div style="font-size: 0.82rem; color: var(--text-secondary);">
          <p style="margin-bottom: 0.2rem;"><strong>Footprint:</strong> ${cs.footprint}</p>
          <p style="margin-bottom: 0.2rem;"><strong>Scope:</strong> ${cs.scope}</p>
          <p style="margin-bottom: 0.4rem;"><strong>Target:</strong> ${cs.target}</p>
        </div>
        <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted);">Key Outcomes:</div>
        <ul class="case-benefits-list">
          ${cs.keyBenefits.map(b => `
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${b}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

function renderChallengesAndTop10() {
  const chalBox = document.getElementById("challenges-deck");
  if (chalBox) {
    chalBox.innerHTML = CHALLENGES.map(c => `
      <div class="challenge-card">
        <div class="challenge-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-rose)" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <span>${c.title}</span>
        </div>
        <p class="challenge-desc">${c.desc}</p>
        <div class="mitigation-panel">
          <div class="mitigation-label">Mitigation:</div>
          <div>${c.mitigation}</div>
        </div>
      </div>
    `).join("");
  }

  const recBox = document.getElementById("top10-layout");
  if (recBox) {
    recBox.innerHTML = TOP_10_RECOMMENDATIONS.map(r => `
      <div class="top10-card">
        <div class="top10-badge">${r.num}</div>
        <div>
          <div class="top10-title">${r.text}</div>
          <div class="top10-sub">${r.sub}</div>
        </div>
      </div>
    `).join("");
  }
}

// ==========================================
// 10. UTILITIES & TOAST
// ==========================================

function showToast(msg) {
  const toast = document.getElementById("toast-bar");
  if (!toast) return;
  toast.innerHTML = `<span>${msg}</span>`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function openFactoryModal() {
  const dialog = document.getElementById("factory-modal");
  if (dialog) {
    if (dialog.showModal) dialog.showModal();
    else dialog.setAttribute("open", "true");
  } else {
    document.getElementById("factory-modal-overlay")?.classList.add("active");
  }
}

function closeFactoryModal() {
  const dialog = document.getElementById("factory-modal");
  if (dialog) {
    if (dialog.close) dialog.close();
    else dialog.removeAttribute("open");
  } else {
    document.getElementById("factory-modal-overlay")?.classList.remove("active");
  }
}

function openContactModal() {
  const dialog = document.getElementById("contact-modal");
  if (dialog) {
    if (dialog.showModal) dialog.showModal();
    else dialog.setAttribute("open", "true");
  } else {
    document.getElementById("contact-modal-overlay")?.classList.add("active");
  }
}

function closeContactModal() {
  const dialog = document.getElementById("contact-modal");
  if (dialog) {
    if (dialog.close) dialog.close();
    else dialog.removeAttribute("open");
  } else {
    document.getElementById("contact-modal-overlay")?.classList.remove("active");
  }
}

function copyContactNumber(num) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(num).then(() => {
      showToast(`Copied ${num} to clipboard!`);
    }).catch(() => {
      showToast(`Phone: ${num}`);
    });
  } else {
    showToast(`Phone: ${num}`);
  }
}

function initDialogListeners() {
  document.querySelectorAll("dialog.native-dialog").forEach(dialog => {
    dialog.addEventListener("click", e => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height
        && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        dialog.close();
      }
    });
  });
}

// Close modals on overlay backdrop click fallback
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("active");
  }
});
