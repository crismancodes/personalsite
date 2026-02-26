export interface Project {
  slug: string;
  title: string;
  description: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  contextProblem: string;
  objectivesMetrics: string;
  myRole: string;
  approachDecisions: string;
  outcomesImpact: string;
  whatNext: string;
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
    description: "Rule builder for security and compliance posture at scale.",
    summary: "Visual rule builder for defining and automating security posture checks across cloud and SaaS.",
    tags: ["Security", "Compliance", "Rule Builder"],
    featured: true,
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
    description: "No-code builder for AI agents and workflows.",
    summary: "Low-code environment for building, testing, and deploying AI agents with guardrails and approvals.",
    tags: ["AI", "No-Code", "Workflows"],
    featured: true,
    contextProblem: "Product and ops teams needed to ship AI agents quickly without depending on engineering for every change.",
    objectivesMetrics: "Ship first agent in under 30 minutes; support approval loops and human-in-the-loop.",
    myRole: "Product design — canvas UX, node configuration, and runtime monitoring.",
    approachDecisions: "Canvas-based flow with nodes for models, tools, and human steps. Built-in testing and version history.",
    outcomesImpact: "Average time to first agent dropped to 28 minutes; 200+ agents in production within 6 months.",
    whatNext: "Multi-agent orchestration and deeper integrations with enterprise data sources.",
  },
  {
    slug: "siem-data-parser",
    title: "SIEM Data Parser",
    description: "Structured parsing and normalization for SIEM ingestion.",
    summary: "Tooling to parse, normalize, and route log and event data into SIEM and data lakes.",
    tags: ["Security", "Data", "SIEM"],
    featured: false,
    contextProblem: "Security teams struggled to onboard new log sources; parsing logic lived in code and was hard to change.",
    objectivesMetrics: "Reduce onboarding time for new log types; support non-developer edits to parsers.",
    myRole: "Design lead — parser config UI, mapping tables, and validation feedback.",
    approachDecisions: "Visual mapping from raw fields to schema, with regex and transform helpers. Live preview of sample data.",
    outcomesImpact: "New log type onboarding from days to hours; 80% of parser edits by non-engineers.",
    whatNext: "ML-assisted field mapping and anomaly detection on parser health.",
  },
  {
    slug: "crowdstrike-app-platform",
    title: "CrowdStrike App Platform",
    description: "Extension and app ecosystem for the CrowdStrike Falcon platform.",
    summary: "Platform for building and distributing security apps that integrate with Falcon data and actions.",
    tags: ["Security", "Platform", "Ecosystem"],
    featured: false,
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
    tags: ["Video", "Livestream", "Platform"],
    featured: false,
    contextProblem: "Broadcasters needed reliability, analytics, and viewer experience in one platform; tools were fragmented.",
    objectivesMetrics: "99.9% uptime; sub-10s latency option; unified analytics and billing.",
    myRole: "Product design — encoding workflows, analytics dashboards, and viewer player/UX.",
    approachDecisions: "Unified dashboard for stream health, audience, and revenue. Player with quality selection and accessibility.",
    outcomesImpact: "Uptime and latency targets met; NPS improvement for broadcasters and viewers.",
    whatNext: "AI-driven encoding and clip generation.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
