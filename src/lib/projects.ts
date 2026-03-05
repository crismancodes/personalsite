export type CaseStudyMedia = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudyBlock =
  | { type: "p"; text: string }
  | { type: "small"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "groups"; groups: { title: string; items: string[] }[] }
  | {
      type: "roleGrid";
      role: string;
      tools?: string;
      timeline?: string;
      owned: string[];
      note?: string;
    };

export type CaseStudySubsection = {
  heading: string;
  blocks: CaseStudyBlock[];
  media?: CaseStudyMedia[];
};

export type ExecutiveSummary = {
  overview: {
    product: string;
    company: string;
    role: string;
    timeline: string;
    scope: string;
  };
  keyContributions: string[];
  outcomes?: string[];
};

export type CaseStudySectionContent =
  | string
  | {
      blocks?: CaseStudyBlock[];
      media?: CaseStudyMedia[];
      subsections?: CaseStudySubsection[];
    };

export interface Project {
  slug: string;
  title: string;
  description: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  supportingLine?: string;
  heroImage?: CaseStudyMedia;
  /** Optional hero video (e.g. AgentGuard). When set, used on cards and detail hero. */
  heroVideo?: { src: string; poster?: string; ariaLabel: string };
  /** Card thumbnail fit: "contain" shows full image (e.g. wide banners); default "cover" fills the card. */
  thumbnailFit?: "cover" | "contain";
  contextProblem: CaseStudySectionContent;
  objectivesMetrics: CaseStudySectionContent;
  myRole: CaseStudySectionContent;
  approachDecisions: CaseStudySectionContent;
  outcomesImpact: CaseStudySectionContent;
  whatNext: CaseStudySectionContent;
  reflections?: CaseStudySectionContent;
  /** Optional section rendered directly under the hero, before Context & Problem. */
  executiveSummary?: ExecutiveSummary;
  screenshots?: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: "agentguard-ai-visibility",
    title: "AgentGuard AI Visibility",
    description:
      "Designed controls to monitor, govern, and secure AI agents and embedded AI features across SaaS platforms, enabling organizations to block or manage AI usage at scale.",
    summary: "",
    tags: ["AI", "Enterprise", "Dashboards"],
    featured: true,
    executiveSummary: {
      overview: {
        product: "AgentGuard AI Visibility",
        company: "Enterprise security platform",
        role: "Lead Product Designer",
        timeline: "Multiple releases",
        scope: "Visibility and governance for AI agents and embedded AI across SaaS",
      },
      keyContributions: [
        "Designed hierarchy from org to team to agent with risk scoring and policy alignment",
        "Led research, information architecture, and end-to-end UX for AI governance",
        "Prioritized clarity over density in dashboards for audit and compliance",
      ],
      outcomes: [
        "Shipped to 50+ enterprise pilots",
        "Audit cycle time reduced by 55% in early adopters",
      ],
    },
    heroVideo: {
      src: "/videos/agentguard-hero.mp4",
      poster: "/videos/agentguard-hero-poster.jpg",
      ariaLabel: "AgentGuard AI Visibility hero animation",
    },
    contextProblem: "Enterprises lacked visibility into where and how AI agents were being used, creating compliance and security risks.",
    objectivesMetrics: "Reduce time-to-audit by 60%; surface high-risk agent usage within 24 hours.",
    myRole: "Lead product designer — research, information architecture, and end-to-end UX.",
    approachDecisions: "Designed a hierarchy from org → team → agent, with risk scoring and policy alignment. Prioritized clarity over density in dashboards.",
    outcomesImpact: "Shipped to 50+ enterprise pilots; audit cycle time reduced by 55% in early adopters.",
    whatNext: "Extend to agent-to-agent workflows and cross-tenant benchmarking.",
  },
  {
    slug: "saas-discovery-platform",
    title: "SaaS Discovery & Governance",
    description:
      "Led the design of a distributed browser extension that surfaced shadow IT and enabled admins to review, approve, or block apps at scale.",
    summary: "",
    tags: ["SaaS", "B2B", "Discovery"],
    featured: true,
    executiveSummary: {
      overview: {
        product: "SaaS Discovery & Governance",
        company: "B2B SaaS",
        role: "Product Design Lead",
        timeline: "Multi-quarter initiative",
        scope: "Distributed browser extension for shadow IT discovery and app governance",
      },
      keyContributions: [
        "Led user research, journey mapping, and UI for search, comparison, and approval flows",
        "Designed comparison tables and criteria weighting for software evaluation",
        "Integrated with SSO and procurement for a single evaluation workflow",
      ],
      outcomes: [
        "Evaluation time down 38%",
        "NPS for procurement users increased by 22 points",
      ],
    },
    contextProblem: "Teams spent weeks in spreadsheets and ad-hoc tools to evaluate software; no single source of truth.",
    objectivesMetrics: "Cut evaluation time by 40%; increase stakeholder alignment scores.",
    myRole: "Product design lead — user research, journey mapping, and UI for search, comparison, and approval flows.",
    approachDecisions: "Focused on comparison tables and criteria weighting. Integrated with SSO and procurement systems for a single workflow.",
    outcomesImpact: "Evaluation time down 38%; NPS for procurement users increased by 22 points.",
    whatNext: "Add AI-assisted recommendations and renewal forecasting.",
  },
  {
    slug: "posture-management-rules",
    title: "Posture Management Rules",
    description:
      "Architected a visual interface for configuring scalable security and compliance controls across organizational SaaS applications.",
    summary: "",
    tags: ["Security", "Compliance", "Rule Builder"],
    featured: true,
    executiveSummary: {
      overview: {
        product: "Posture Management Rules",
        company: "Security platform",
        role: "Lead Designer",
        timeline: "Multiple releases",
        scope: "Visual interface for security and compliance rule configuration across SaaS",
      },
      keyContributions: [
        "Architected block-based expression model with natural-language hints",
        "Designed rule model, expression UI, and testing and preview flows",
        "Emphasized preview and dry-run before deployment for safe changes",
      ],
      outcomes: [
        "70% of new rules created by non-engineers",
        "Time-to-rule under 2 hours for typical cases",
      ],
    },
    contextProblem: "Security teams could not express complex posture rules without engineering; changes took weeks.",
    objectivesMetrics: "Enable non-engineers to create and edit rules; reduce time-to-rule from weeks to hours.",
    myRole: "Lead designer — rule model, expression UI, and testing/preview flows.",
    approachDecisions: "Adopted a block-based expression model with natural-language hints. Emphasized preview and dry-run before deployment.",
    outcomesImpact: "70% of new rules created by non-engineers; time-to-rule under 2 hours for typical cases.",
    whatNext: "Templates and community rule packs; integration with SIEM and ticketing.",
  },
  {
    slug: "charlotte-ai-agent-builder",
    title: "Charlotte AI Agent Builder",
    description:
      "Conversational AI agent creation platform for building, testing, and managing security automation agents.",
    summary:
      "Conversational AI agent creation platform for building, testing, and managing security automation agents.",
    supportingLine: "CrowdStrike",
    tags: ["AI", "Security", "Automation", "Platform"],
    featured: true,
    heroImage: {
      src: "/images/case-studies/charlotte-ai-agent-builder/hero.png",
      alt: "AI Agent Builder home screen (hero image)",
      caption: "",
    },
    thumbnailFit: "contain",
    executiveSummary: {
      overview: {
        product: "Charlotte AI Agent Builder",
        company: "CrowdStrike",
        role: "Lead Product Designer",
        timeline: "5 months",
        scope: "AI agent platform for security workflow automation",
      },
      keyContributions: [
        "Designed the platform architecture for an AI agent ecosystem within the security console",
        "Created a conversational builder enabling natural language agent creation",
        "Designed a dual-mode configuration system balancing guided setup with manual control",
      ],
      outcomes: [
        "Enabled non-engineers to create AI automation without writing code",
        "Established a foundation for agent-based workflows across the platform",
        "Created a scalable pattern for future AI features",
      ],
    },
    contextProblem:
      "Security teams increasingly rely on AI tools for investigation, triage, and workflow automation. However, creating useful agents often requires engineering support, scripting knowledge, or fragmented tools.\n\nThe opportunity was to design an AI agent platform that would allow security analysts to create, configure, and deploy their own AI agents directly inside the cybersecurity platform.\n\nThe challenge was balancing flexibility with usability. Power users needed deep configuration and control, while less technical users needed a guided experience that made agent creation intuitive and approachable.",
    objectivesMetrics: {
      blocks: [
        {
          type: "p",
          text: "Design a unified AI agent platform where users could:",
        },
        {
          type: "ul",
          items: [
            "Discover and explore existing AI agents",
            "Create new agents without writing code",
            "Configure agent behavior, tools, and knowledge sources",
            "Manage and monitor agents across their environment",
          ],
        },
        {
          type: "p",
          text: "Success meant enabling non-engineers to create automation while still supporting advanced customization for experienced users.",
        },
      ],
    },
    myRole: {
      blocks: [
        {
          type: "roleGrid",
          role: "Product Design",
          tools: "Figma, Miro, User interviews",
          timeline: "5 months",
          owned: [
            "UX architecture for the AI agent platform",
            "Conversational agent builder design",
            "Advanced configuration interface design",
            "User research and validation",
            "Cross-team collaboration with product, engineering, and AI teams",
          ],
        },
      ],
    },
    approachDecisions: {
      subsections: [
        {
          heading: "Competitive Research",
          blocks: [
            {
              type: "p",
              text: "The project began with researching emerging AI agent platforms to understand how other tools approached agent creation, orchestration, and configuration.",
            },
            {
              type: "p",
              text: "I created a competitive landscape board in Miro and evaluated platforms such as Microsoft's Copilot agent builder and other AI automation tools.",
            },
            {
              type: "p",
              text: "This analysis revealed common patterns around agent configuration, knowledge management, and workflow orchestration that informed the platform direction.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/charlotte-ai-agent-builder/competitive-intel.svg",
              alt: "Competitive landscape and research on emerging AI agent platforms",
              caption:
                "Competitive landscape and research gathered on emerging AI agent platforms.",
            },
          ],
        },
        {
          heading: "Information Architecture & User Flows",
          blocks: [
            {
              type: "p",
              text: "Before designing the interface, I mapped the core information architecture and user workflows required for an AI agent platform.",
            },
            {
              type: "p",
              text: "This included flows for:",
            },
            {
              type: "ul",
              items: [
                "Creating new agents",
                "Discovering existing agents",
                "Managing and monitoring agents",
                "Connecting agents to tools and knowledge sources",
              ],
            },
            {
              type: "p",
              text: "Mapping these flows helped align the team on the underlying system structure before moving into interface design.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/charlotte-ai-agent-builder/miro-workflows.svg",
              alt: "Early workflow diagrams for agent creation and management",
              caption:
                "Early workflow diagrams mapping how users create, manage, and deploy agents.",
            },
          ],
        },
        {
          heading: "Cross-Organizational Collaboration & Alignment",
          blocks: [
            {
              type: "p",
              text: "Designing an AI platform required alignment across product, engineering, and AI research teams.",
            },
            {
              type: "p",
              text: "To facilitate this, I ran a design sprint workshop with stakeholders across the organization.",
            },
            {
              type: "p",
              text: "During the workshop we mapped the end-to-end user journey, identified opportunities, and generated early concepts that later informed the high-fidelity designs.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/charlotte-ai-agent-builder/collab-miro-board.svg",
              alt: "Workshop artifacts for AI agent platform alignment",
              caption:
                "Workshop artifacts used to align stakeholders on the AI agent platform direction.",
            },
          ],
        },
        {
          heading: "AI Agent Platform",
          blocks: [
            {
              type: "p",
              text: "The first step in enabling an agent ecosystem was designing a central hub where users could explore, create, and manage their agents.",
            },
            {
              type: "p",
              text: "The AI Agents landing page provides a unified control center where users can:",
            },
            {
              type: "ul",
              items: [
                "Browse template agents",
                "Create custom agents",
                "Manage and monitor agents",
                "Search and filter agents",
              ],
            },
          ],
          media: [
            {
              src: "/images/case-studies/charlotte-ai-agent-builder/ai-agents-home.png",
              alt: "Central platform view for managing and creating AI agents",
              caption:
                "Central platform view for managing and creating AI agents.",
            },
          ],
        },
        {
          heading: "Conversational Agent Builder",
          blocks: [
            {
              type: "p",
              text: "To make agent creation accessible to a wide range of users, I designed a conversational builder powered by an AI assistant.",
            },
            {
              type: "p",
              text: "Users can describe the agent they want to create in natural language, and the system generates the configuration, goals, and structure of the agent.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/charlotte-ai-agent-builder/agent-builder-convo.png",
              alt: "Conversational builder for creating agents with natural language",
              caption:
                "Conversational builder allowing analysts to create agents using natural language.",
            },
          ],
        },
        {
          heading: "Advanced Configuration Interface",
          blocks: [
            {
              type: "p",
              text: "While the conversational builder simplified creation, advanced users still needed direct control over agent behavior.",
            },
            {
              type: "p",
              text: "I designed an advanced configuration interface exposing the agent's components and settings in a structured view.",
            },
            {
              type: "p",
              text: "Users can define goals, select models, connect tools, and configure knowledge sources.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/charlotte-ai-agent-builder/agent-builder-manual.png",
              alt: "Manual configuration interface for advanced users",
              caption:
                "Manual configuration interface for advanced users.",
            },
          ],
        },
        {
          heading: "Design Challenges & Tradeoffs",
          blocks: [
            {
              type: "p",
              text: "One of the core design challenges was balancing simplicity with flexibility.",
            },
            {
              type: "p",
              text: "A fully configurable system could overwhelm analysts new to AI automation, while overly simplifying the system would limit advanced use cases.",
            },
            {
              type: "p",
              text: "The solution was a dual-mode design:",
            },
            {
              type: "ul",
              items: [
                "A conversational builder for fast creation",
                "A structured configuration interface for full control",
              ],
            },
            {
              type: "p",
              text: "This allowed both new and experienced users to work efficiently.",
            },
          ],
        },
        {
          heading: "User Research",
          blocks: [
            {
              type: "p",
              text: "To validate the concept, I conducted interviews with eight security professionals and walked them through the proposed workflows.",
            },
            {
              type: "p",
              text: "Participants completed tasks such as creating and configuring agents using the prototypes.",
            },
            {
              type: "p",
              text: "The conversational builder proved particularly compelling, with most users understanding the concept quickly.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/charlotte-ai-agent-builder/user-research.svg",
              alt: "User interviews validating the agent creation workflow",
              caption:
                "User interviews validating the agent creation workflow.",
            },
          ],
        },
      ],
    },
    outcomesImpact: {
      blocks: [
        {
          type: "p",
          text: "The goal of this project was to translate a strategic AI initiative into a usable product platform.",
        },
        {
          type: "p",
          text: "Through research, collaboration, and system design, the project delivered a flexible AI agent platform that enables security teams to automate workflows and explore AI-driven capabilities safely.",
        },
        { type: "p", text: "Outcomes" },
        {
          type: "ul",
          items: [
            "Enabled security analysts to create AI automation without writing code",
            "Established the foundation for AI agents across the platform",
            "Designed a scalable system supporting future AI capabilities",
          ],
        },
      ],
    },
    whatNext:
      "Multi-agent orchestration and deeper integrations with enterprise data sources.",
  },
  {
    slug: "siem-data-parser",
    title: "SIEM Data Parser",
    description: "Structured parsing and normalization for SIEM ingestion.",
    summary:
      "Scriptable tools to parse, normalize, and route security log and event data into SIEM and data lakes.",
    supportingLine: "CrowdStrike (pseudonym: Cybersecurity Co.)",
    tags: ["Security", "Data", "SIEM"],
    featured: false,
    heroImage: {
      src: "/images/case-studies/siem-data-parser/parser-editor.svg",
      alt: "Parser editor with script surface, live test logs, and Generate parser script with AI action.",
      caption:
        "Parser editor with script surface, live test logs, and a Generate parser script with AI action.",
    },
    executiveSummary: {
      overview: {
        product: "SIEM Data Parser",
        company: "CrowdStrike",
        role: "Lead Product Designer",
        timeline: "5 months",
        scope: "Tooling to parse, normalize, and route log and event data into SIEM and data lakes",
      },
      keyContributions: [
        "Designed the end-to-end parser creation and editing workflow for faster log onboarding",
        "Simplified complex parsing concepts into a usable, auditable interface for security teams",
        "Partnered with engineering to support scalable onboarding across many log types",
      ],
      outcomes: [
        "Reduced friction for onboarding new log sources",
        "Enabled repeatable, standardized parser authoring and maintenance",
        "Improved clarity and confidence for security teams managing log pipelines",
      ],
    },
    contextProblem:
      "Cybersecurity Co.’s customers stream large volumes of third-party security logs into the platform, but each source formats fields differently. Raw events were hard for humans to read, inconsistent for detection content, and expensive to normalize in backend code. Parser logic lived in engineer-owned scripts, so onboarding a new integration or fixing a broken parser meant opening tickets, waiting on deploys, and guessing at production behavior with little visibility into parser health.",
    objectivesMetrics: {
      blocks: [
        {
          type: "p",
          text: "We set out clear goals across ownership, speed, visibility, and intelligence:",
        },
        {
          type: "groups",
          groups: [
            {
              title: "Ownership",
              items: [
                "Give detection engineers and analysts a first-class UI for creating and maintaining parsers without needing a code deploy.",
                "Shift day-to-day parser edits from backend engineering into the detection engineering team.",
              ],
            },
            {
              title: "Speed & Efficiency",
              items: [
                "Cut the time to onboard a new log source from days to hours.",
                "Enable live testing against real log samples so users can iterate quickly and confidently.",
              ],
            },
            {
              title: "Visibility",
              items: [
                "Centralize visibility into parser status, usage, and data volume in a single library.",
                "Help teams quickly spot broken or stale parsers and prioritize fixes based on impact.",
              ],
            },
            {
              title: "Intelligence",
              items: [
                "Introduce AI-assisted parser generation so users can bootstrap new parsers without writing every script from scratch.",
              ],
            },
          ],
        },
      ],
    },
    myRole: {
      blocks: [
        {
          type: "roleGrid",
          role: "Lead Product Designer & User Research",
          tools: "Figma, FigJam",
          timeline: "5 months",
          owned: [
            "User research with SOC analysts and detection engineers",
            "End-to-end parser workflow mapping",
            "Parser editor UX (script surface, tests, AI assist)",
            "Parser library and parser details information architecture",
            "High-fidelity prototypes and interaction design",
            "Design specifications, QA, and implementation support",
          ],
          note:
            "I led the project from discovery through launch, partnering closely with PM and staff engineers.",
        },
      ],
    },
    approachDecisions: {
      subsections: [
        {
          heading: "Script-Based Editor with Live Testing",
          blocks: [
            {
              type: "p",
              text: "Rather than abstract parsing into a drag-and-drop flow, we leaned into our users’ familiarity with scripting and query languages and designed a script-based editor with live testing.",
            },
            {
              type: "p",
              text: "The editor surfaces the parser script side-by-side with test log data, pass/fail counts, and a run-tests control so users can validate changes against real log samples as they iterate.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/siem-data-parser/parser-editor-inline.svg",
              alt: "Parser editor with script surface, live test logs, and Generate parser script with AI action.",
              caption:
                "Parser editor designed for detection engineers, with script surface, live test logs, and AI-assisted generation.",
            },
          ],
        },
        {
          heading: "Parser Library as a Source of Truth",
          blocks: [
            {
              type: "p",
              text: "On top of the editor, we introduced a parser library that lists every parser across a tenant – including type (default, imported, custom), health status, 7-day data volume, and last-updated metadata.",
            },
            {
              type: "p",
              text: "Search and filters make it easy to find the parser behind a given integration and quickly understand coverage and impact across the estate.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/siem-data-parser/parser-library.svg",
              alt: "Parser library showing parser health, type, and 7-day data volume.",
              caption:
                "Parser library showing health, type, 7-day data volume, and recency for every parser in a tenant.",
            },
          ],
        },
        {
          heading: "Parser Details, Blast Radius, and AI Assist",
          blocks: [
            {
              type: "p",
              text: "From the library, a parser details view exposes richer context: parser metadata, the script and test logs, plus all data connectors currently using that parser so users can see the blast radius of any change before they edit.",
            },
            {
              type: "p",
              text: "As a fast follow, we added a ‘Generate parser script with AI’ action directly into the editor. Users paste or select example logs, click the AI button, and get a starter parser script that targets the platform’s schema conventions.",
            },
            {
              type: "p",
              text: "They can then review, tweak, and re-run tests against real sample data, keeping the script as the source of truth while dramatically reducing the time and effort to author new parsers.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/siem-data-parser/parser-details.svg",
              alt: "Parser details view with parser metadata, script, test logs, and connected data sources.",
              caption:
                "Parser details view with metadata, script, test logs, and connected data sources for blast-radius awareness.",
            },
          ],
        },
      ],
    },
    outcomesImpact: {
      blocks: [
        {
          type: "ul",
          items: [
            "Shifted parser ownership from backend engineers to detection engineers and analysts, with most day-to-day edits happening directly in the UI.",
            "Cut the typical time to bring a new log source online from multiple days of back-and-forth to a same-day workflow using live tests on production-like logs.",
            "Lowered the barrier for new parsers with the AI ‘Generate parser script’ button, providing high-quality starter scripts in seconds.",
            "Reduced manual script authoring effort while improving confidence in changes through side-by-side testing.",
            "Gave teams a single place to monitor parser status, spot non-functional or stale parsers, and prioritize fixes based on data volume and impact.",
          ],
        },
      ],
    },
    whatNext: {
      blocks: [
        {
          type: "p",
          text: "Next, I’d extend the system’s intelligence and observability:",
        },
        {
          type: "ul",
          items: [
            "Extend AI assistance beyond generation to include inline explanations of script snippets and suggested field mappings when new fields appear in logs.",
            "Automatically detect parsing anomalies or drops so teams are alerted when parsers silently fail or degrade.",
            "Add richer analytics around parser performance over time – error rates, dropped events, and latency – to guide optimization work.",
            "Explore reusing this editor pattern for other data-transformation tooling in the platform so users have a consistent way to author and test data logic.",
          ],
        },
      ],
    },
  },
  {
    slug: "crowdstrike-app-platform",
    title: "CrowdStrike App Platform",
    description: "Extension and app ecosystem for the CrowdStrike Falcon platform.",
    summary: "Platform for building and distributing security apps that integrate with Falcon data and actions.",
    tags: ["Security", "Platform", "Ecosystem"],
    featured: false,
    executiveSummary: {
      overview: {
        product: "CrowdStrike App Platform",
        company: "CrowdStrike",
        role: "Product Designer",
        timeline: "Multi-quarter initiative",
        scope: "Extension and app ecosystem for building and distributing security apps on Falcon",
      },
      keyContributions: [
        "Designed developer experience for app build, test, publish, and update lifecycle",
        "Designed app marketplace UX with categories and trust signals",
        "Shaped SDK and platform patterns for third-party app integration",
      ],
      outcomes: [
        "Marketplace launched with 15 apps",
        "30+ apps within 18 months",
      ],
    },
    contextProblem: "Partners and enterprises wanted to extend Falcon with custom workflows; no standard way to build or ship apps.",
    objectivesMetrics: "Launch app marketplace; support 20+ apps in first year.",
    myRole: "Product design — developer experience, app lifecycle, and marketplace UX.",
    approachDecisions: "Clear SDK and lifecycle (build, test, publish, update). Marketplace with categories and trust signals.",
    outcomesImpact: "Marketplace launched with 15 apps; 30+ apps within 18 months.",
    whatNext: "Monetization and usage analytics for app developers.",
  },
  {
    slug: "resi-design-system",
    title: "Resi Design System",
    description: "Scalable design system for livestream and video products.",
    summary: "Component library, patterns, and documentation for consistent UI across Resi's product suite.",
    tags: ["Design Systems", "Documentation", "Components"],
    featured: false,
    executiveSummary: {
      overview: {
        product: "Resi Design System",
        company: "Resi Media",
        role: "Design System Lead",
        timeline: "Multi-quarter initiative",
        scope: "Component library, tokens, and documentation for consistent UI across products",
      },
      keyContributions: [
        "Led token-first system (color, type, spacing) and React component library",
        "Built documentation site with usage and accessibility guidance",
        "Drove adoption and design-dev handoff standards",
      ],
      outcomes: [
        "Adoption across 4 products",
        "Design-dev handoff time cut by half",
      ],
    },
    contextProblem: "Multiple products and teams led to inconsistent UI and duplicated effort; no single source of truth.",
    objectivesMetrics: "Single component library; 90%+ adoption across products; documented patterns.",
    myRole: "Design system lead — tokens, components, and documentation site.",
    approachDecisions: "Token-first (color, type, spacing) with React components. Documentation with usage and accessibility notes.",
    outcomesImpact: "Adoption across 4 products; design-dev handoff time cut by half.",
    whatNext: "Figma sync and automated visual regression.",
  },
  {
    slug: "livestream-video-platform",
    title: "Livestream Video Platform",
    description: "End-to-end platform for professional livestreaming and VOD.",
    summary: "Encoding, delivery, and viewer experience for broadcast-grade livestream and video-on-demand.",
    supportingLine: "Resi Media (pseudonym: Video Stream Co.)",
    tags: ["Video", "Livestream", "Platform"],
    featured: false,
    heroImage: {
      src: "/images/case-studies/livestream-video-platform/player-fullscreen.png",
      alt: "Video player in fullscreen mode",
      caption: "Custom player designed for live and VOD playback.",
    },
    executiveSummary: {
      overview: {
        product: "Livestream Video Platform",
        company: "Resi Media",
        role: "Lead Product Designer",
        timeline: "9 months",
        scope: "Encoding, delivery, analytics, and viewer experience for broadcast-grade livestream and VOD",
      },
      keyContributions: [
        "Designed operator workflows across encoding, monitoring, and stream management",
        "Unified analytics and experience touchpoints across platform surfaces",
        "Improved viewer experience through player and playback UX enhancements",
      ],
      outcomes: [
        "Increased reliability and operational clarity for broadcasters",
        "Improved visibility into stream health and performance",
        "Established a scalable foundation for additional platform capabilities",
      ],
    },
    contextProblem: {
      blocks: [
        {
          type: "p",
          text: "Resi Media (pseudonym: Video Stream Co.) was building a live-streaming platform for broadcasters who needed enterprise-grade reliability, high video quality, and a professional viewer experience.",
        },
        { type: "p", text: "The challenge was fragmentation." },
        {
          type: "p",
          text: "Broadcasters were using:",
        },
        {
          type: "ul",
          items: [
            "Separate encoding tools",
            "Disconnected analytics dashboards",
            "Basic or white-labeled players",
            "Manual workflows for organizing and sharing content",
          ],
        },
        {
          type: "p",
          text: "There was no unified system connecting stream health, audience engagement, monetization, and post-stream content management.",
        },
        {
          type: "p",
          text: "The opportunity was to design an integrated platform that supported:",
        },
        {
          type: "ul",
          items: [
            "Live broadcast reliability",
            "Video library management",
            "Playlist creation and sharing",
            "A custom, branded video player",
            "Viewer analytics and engagement",
          ],
        },
        { type: "p", text: "This was not a single feature. It was a product ecosystem." },
      ],
      media: [
        {
          src: "/images/case-studies/livestream-video-platform/wireframes.png",
          alt: "Early platform wireframes",
          caption: "Early wireframes exploring library and playlist layouts.",
        },
        {
          src: "/images/case-studies/livestream-video-platform/project-brief.png",
          alt: "Project brief and acceptance criteria",
          caption:
            "Project brief and acceptance criteria I created for the playlist feature for the platform's initial release.",
        },
      ],
    },
    objectivesMetrics: {
      blocks: [
        { type: "p", text: "The product team aligned around measurable performance and experience goals:" },
        {
          type: "groups",
          groups: [
            {
              title: "Reliability",
              items: ["99.9%+ uptime target", "Optional sub-10s latency mode"],
            },
            {
              title: "Operational Clarity",
              items: ["Unified stream health dashboard", "Real-time monitoring for broadcasters"],
            },
            {
              title: "Viewer Experience",
              items: [
                "Custom, accessible player",
                "Multi-device responsive design",
                "Reduced buffering and playback failures",
              ],
            },
            {
              title: "Engagement & Retention",
              items: [
                "Improved NPS for broadcasters",
                "Increased average watch time",
                "Better playlist usage and content reuse",
              ],
            },
          ],
        },
      ],
    },
    myRole: {
      blocks: [
        {
          type: "roleGrid",
          role: "Lead Product Designer",
          tools: "Figma, FigJam, Jira, Storybook",
          timeline: "9 months",
          owned: [
            "Encoding workflow UX",
            "Stream health monitoring dashboards",
            "Video library and playlist architecture",
            "Custom video player design",
            "Microinteractions and responsive behavior",
            "Cross-functional alignment with engineering and product",
          ],
          note: "This was a 9-month initiative spanning multiple releases.",
        },
      ],
    },
    approachDecisions: {
      subsections: [
        {
          heading: "Designing for the System, Not Just Screens",
          blocks: [
            {
              type: "p",
              text: "Rather than designing isolated features, I mapped the end-to-end lifecycle:",
            },
            { type: "p", text: "Encode → Go Live → Monitor → Archive → Organize → Share → Analyze" },
            {
              type: "p",
              text: "This ensured every surface — dashboard, library, playlists, player — worked as a cohesive system.",
            },
          ],
        },
        {
          heading: "Unified Stream Health Dashboard",
          blocks: [
            { type: "p", text: "Broadcasters needed confidence while live." },
            {
              type: "p",
              text: "I designed a centralized dashboard that surfaced:",
            },
            {
              type: "ul",
              items: [
                "Stream status",
                "Viewer counts",
                "Health indicators",
                "Revenue and engagement metrics",
              ],
            },
            { type: "p", text: "The goal was reducing cognitive load during live events." },
            {
              type: "p",
              text: "Instead of navigating multiple tools, everything was visible in one operational surface.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/livestream-video-platform/live-player.png",
              alt: "Live playback experience with key indicators",
              caption: "Live state indicators and operational confidence during broadcasts.",
            },
          ],
        },
        {
          heading: "Library & Playlist Architecture",
          blocks: [
            { type: "p", text: "After a stream ended, broadcasters needed to reuse content quickly." },
            { type: "p", text: "I designed:" },
            {
              type: "ul",
              items: [
                "A scalable video library",
                "Playlist creation and management",
                "Drag-and-drop ordering",
                "Cross-channel sharing workflows",
              ],
            },
            {
              type: "p",
              text: "This turned livestream content into long-term reusable assets instead of one-time events.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/livestream-video-platform/library.png",
              alt: "Video library page",
              caption: "Video library with saved videos and playlists.",
            },
            {
              src: "/images/case-studies/livestream-video-platform/playlist.png",
              alt: "Playlist management page",
              caption: "Playlists with ordering and management controls.",
            },
          ],
        },
        {
          heading: "Custom Video Player",
          blocks: [
            { type: "p", text: "The viewer player was a critical surface." },
            { type: "p", text: "I designed:" },
            {
              type: "ul",
              items: [
                "Quality selection controls",
                "Adaptive resolution behavior",
                "Accessible controls and subtitles",
                "Scrubbing with chapter previews",
                "Volume state microinteractions",
                "Responsive layout across breakpoints",
              ],
            },
            { type: "p", text: "Special consideration was given to:" },
            {
              type: "ul",
              items: [
                "Live state indicators",
                "Viewer count during live streams",
                "Visual hierarchy during full-screen playback",
              ],
            },
            {
              type: "p",
              text: "The player balanced brand customization with performance constraints.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/livestream-video-platform/video-details.png",
              alt: "Video details page with player",
              caption: "Player within the video details page and supporting metadata.",
            },
            {
              src: "/images/case-studies/livestream-video-platform/player-fullscreen.png",
              alt: "Fullscreen player controls",
              caption: "Fullscreen playback with clear control hierarchy.",
            },
          ],
        },
        {
          heading: "Microinteractions for Clarity",
          blocks: [
            { type: "p", text: "Small details mattered:" },
            {
              type: "ul",
              items: [
                "Timeline image slices with timestamps",
                "Volume icon states based on level",
                "Hover states for chapter markers",
                "Smooth transitions during quality switching",
              ],
            },
            {
              type: "p",
              text: "These interactions reinforced trust and polish in a high-stakes environment.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/livestream-video-platform/player-cue.png",
              alt: "Player with scrubbing cue preview",
              caption: "Scrubbing cues and chapter markers for faster navigation.",
            },
            {
              src: "/images/case-studies/livestream-video-platform/volume-microinteractions.png",
              alt: "Volume micro-interaction states",
              caption: "Volume states and micro-interactions based on level.",
            },
          ],
        },
        {
          heading: "Responsive System",
          blocks: [
            { type: "p", text: "The player and controls were designed to scale across:" },
            { type: "ul", items: ["Desktop", "Tablet", "Mobile"] },
            {
              type: "p",
              text: "Rather than shrinking controls, I restructured interaction models to preserve usability at every breakpoint.",
            },
          ],
          media: [
            {
              src: "/images/case-studies/livestream-video-platform/player-mobile.png",
              alt: "Mobile player layout",
              caption: "Responsive control model for smaller screens.",
            },
          ],
        },
      ],
    },
    outcomesImpact: {
      blocks: [
        {
          type: "ul",
          items: [
            "Uptime and latency targets achieved",
            "Reduced broadcaster friction during live events",
            "Improved NPS across broadcasters and viewers",
            "Increased content reuse through playlists",
            "Stronger perception of platform reliability",
          ],
        },
        {
          type: "p",
          text: "Most importantly, the platform moved from a set of tools to a cohesive product experience.",
        },
      ],
    },
    whatNext: {
      blocks: [
        {
          type: "p",
          text: "If I were to evolve this platform further, I would explore:",
        },
        {
          type: "ul",
          items: [
            "AI-driven encoding optimization",
            "Automated highlight and clip generation",
            "Predictive stream health alerts",
            "Smart playlist suggestions based on viewer behavior",
          ],
        },
        {
          type: "p",
          text: "The next evolution would focus on automation and intelligence layered onto the existing system.",
        },
      ],
    },
    reflections: {
      blocks: [
        { type: "p", text: "This project shaped how I think about platform design. It reinforced that:" },
        {
          type: "ul",
          items: [
            "Reliability is UX.",
            "Systems thinking matters more than isolated features.",
            "Microinteractions build trust.",
            "A player is not just a component, it’s a brand surface.",
          ],
        },
        {
          type: "p",
          text: "Designing across encoding, dashboards, content management, and playback required zooming out to see how every decision impacted the broader ecosystem.",
        },
      ],
    },
  },
];

/** Slugs allowed to appear in project lists (home Selected Work, /work grid). Order = display order. */
const VISIBLE_SLUGS = [
  "agentguard-ai-visibility",
  "saas-discovery-platform",
  "posture-management-rules",
  "charlotte-ai-agent-builder",
  "siem-data-parser",
  "livestream-video-platform",
] as const;

export function getVisibleProjects(): Project[] {
  const bySlug = new Map(projects.map((p) => [p.slug, p]));
  return VISIBLE_SLUGS.filter((slug) => bySlug.has(slug)).map((slug) => bySlug.get(slug)!);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** First N visible projects for homepage "Selected work" only. /work page shows all via getVisibleProjects(). */
const FEATURED_COUNT = 4;

export function getFeaturedProjects(): Project[] {
  return getVisibleProjects().slice(0, FEATURED_COUNT);
}
