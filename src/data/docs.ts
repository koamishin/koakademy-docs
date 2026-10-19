export interface DocEntry {
  href: string
  title: string
  /** Short line for the docs index cards */
  blurb: string
}

export interface DocGroup {
  label: string
  links: DocEntry[]
}

export type DocSection = "docs" | "api" | "dev"

/** General documentation — product, operations, and maintenance. */
export const docsTree: DocGroup[] = [
  {
    label: "Start here",
    links: [
      {
        href: "/docs/start-here/introduction",
        title: "Introduction",
        blurb:
          "What Koakademy is, the stack it runs on, and which path to pick.",
      },
      {
        href: "/docs/self-hosting/installation",
        title: "Quickstart",
        blurb: "Evaluate Koakademy in minutes on any server or local host.",
      },
      {
        href: "/docs/start-here/architecture",
        title: "Architecture",
        blurb: "Runtime services, application boundaries, and data flows.",
      },
      {
        href: "/docs/start-here/contributing",
        title: "Contributing",
        blurb: "PR checklist, code style, and documentation ownership.",
      },
    ],
  },
  {
    label: "Platform features",
    links: [
      {
        href: "/docs/features/index",
        title: "Features overview",
        blurb:
          "High-level map of capabilities, institutional models, and user roles.",
      },
      {
        href: "/docs/features/student-information-system",
        title: "Student records & SIS",
        blurb:
          "Demographics, PSGC address hierarchy, clearances, and digital ID cards.",
      },
      {
        href: "/docs/features/academics-scheduling",
        title: "Academics & timetabling",
        blurb:
          "Curricula, SHS tracks, prerequisites, sections, and conflict detection.",
      },
      {
        href: "/docs/features/enrollment-management",
        title: "Enrollment management",
        blurb:
          "Guided blueprints, dynamic fee rules, and acyclic approval workflows.",
      },
      {
        href: "/docs/features/grading-transcripts",
        title: "Grading & transcripts",
        blurb:
          "Multi-scale grading rubrics, automated GWA, and verifiable TOR generation.",
      },
      {
        href: "/docs/features/finance-cashiering",
        title: "Financials & cashiering",
        blurb:
          "Tuition assessments, installment plans, cashier POS, and Statements of Account.",
      },
      {
        href: "/docs/features/portals-workspaces",
        title: "Portals & workspaces",
        blurb:
          "Admin Panel, Faculty Portal, and mobile-first Student Portal walkthroughs.",
      },
      {
        href: "/docs/features/bundled-modules",
        title: "Bundled modules",
        blurb:
          "Announcements, Cashier, Inventory, Library, Notifications, and Clinic Records.",
      },
      {
        href: "/docs/features/ai-mcp",
        title: "AI & MCP server",
        blurb:
          "Natural language staff assistants and Model Context Protocol tool endpoints.",
      },
    ],
  },
  {
    label: "Self-hosting & operations",
    links: [
      {
        href: "/docs/self-hosting/installation",
        title: "Overview & matrix",
        blurb:
          "Supported production topologies, hardware requirements, and runtimes.",
      },
      {
        href: "/docs/self-hosting/docker-compose",
        title: "Docker Compose",
        blurb:
          "Deploy Koakademy using Docker Compose on any Linux server or standalone Docker host.",
      },
      {
        href: "/docs/self-hosting/docker-swarm",
        title: "Docker Swarm",
        blurb:
          "Production-grade Docker Swarm deployment with Docker Secrets and rolling updates.",
      },
      {
        href: "/docs/self-hosting/dokploy",
        title: "Dokploy deployment",
        blurb: "Run Koakademy on Dokploy, the open-source Docker PaaS.",
      },
      {
        href: "/docs/self-hosting/vps",
        title: "VPS deployment",
        blurb: "Bare-metal Docker Compose on your own Linux server with Caddy.",
      },
      {
        href: "/docs/self-hosting/coolify",
        title: "Coolify deployment",
        blurb: "Run Koakademy on Coolify from its Docker Compose file.",
      },
      {
        href: "/docs/self-hosting/caprover",
        title: "CapRover deployment",
        blurb: "One app per service — PostgreSQL, Redis, Gotenberg, Koakademy.",
      },
      {
        href: "/docs/self-hosting/kubernetes",
        title: "Kubernetes (K8s)",
        blurb:
          "Production Kubernetes and K3s deployment with manifests and persistent storage.",
      },
      {
        href: "/docs/self-hosting/openshift",
        title: "Red Hat OpenShift",
        blurb:
          "Deploy Koakademy in enterprise Red Hat OpenShift (OKD, ARO, ROSA, OCP) environments.",
      },
      {
        href: "/docs/self-hosting/deployment",
        title: "Operations & runbook",
        blurb:
          "First deploy, reverse proxies, backups, upgrades, and rollback.",
      },
      {
        href: "/docs/self-hosting/configuration",
        title: "Configuration",
        blurb: "Environment variables and the contracts of every service.",
      },
      {
        href: "/docs/self-hosting/troubleshooting",
        title: "Troubleshooting",
        blurb: "Diagnose containers, proxies, uploads, PDFs, and queues.",
      },
      {
        href: "/docs/self-hosting/faq",
        title: "FAQ",
        blurb:
          "Support, deployment, storage, PDFs, and API questions answered.",
      },
    ],
  },
  {
    label: "Administration & security",
    links: [
      {
        href: "/docs/system/architecture-domain",
        title: "Domain model & tenancy",
        blurb: "Runtime shape, entry points, core entities, and tenancy.",
      },
      {
        href: "/docs/system/auth-authorization",
        title: "Auth, roles & permissions",
        blurb: "Guards, MFA, passkeys, roles, and where checks are enforced.",
      },
      {
        href: "/docs/system/modules-flags",
        title: "Modules & feature flags",
        blurb: "Optional modules, Pennant toggles, and institution settings.",
      },
      {
        href: "/docs/system/observability",
        title: "Observability & audit logs",
        blurb:
          "Developer observability tools — Laralyze, Pulse, Telescope, Horizon, and log purge.",
      },
    ],
  },
  {
    label: "Enrollment blueprints",
    links: [
      {
        href: "/docs/enrollment-policies/overview",
        title: "Overview",
        blurb:
          "The seven questions a blueprint answers, plus the safety model.",
      },
      {
        href: "/docs/enrollment-policies/quick-start",
        title: "Quick start",
        blurb:
          "Preset to activation — publish and activate your first blueprint.",
      },
      {
        href: "/docs/enrollment-policies/scopes-inheritance",
        title: "Scopes & inheritance",
        blurb: "Who a blueprint covers, and how overrides stay sparse.",
      },
      {
        href: "/docs/enrollment-policies/availability-eligibility-documents",
        title: "Availability & documents",
        blurb:
          "Channels, date windows, eligibility checks, and required documents.",
      },
      {
        href: "/docs/enrollment-policies/subjects-classes-tuition",
        title: "Subjects, classes & tuition",
        blurb:
          "Assignment strategies, fees, payment methods, and minimum gates.",
      },
      {
        href: "/docs/enrollment-policies/approvals-notifications",
        title: "Approvals & notifications",
        blurb:
          "Safe acyclic workflows with roles, actions, and conditional branches.",
      },
      {
        href: "/docs/enrollment-policies/simulation-publication",
        title: "Simulation & publication",
        blurb:
          "Test journeys, publish immutable versions, activate, roll back, back up.",
      },
      {
        href: "/docs/enrollment-policies/troubleshooting-deployment",
        title: "Troubleshooting & safety",
        blurb:
          "Rollout states, common problems, and the deployment-safety checklist.",
      },
    ],
  },
  {
    label: "User guides",
    links: [
      {
        href: "/docs/user-guide/introduction",
        title: "Using Koakademy",
        blurb:
          "A safe daily workflow for registrars, cashiers, and administrators.",
      },
      {
        href: "/docs/user-guide/admin-portal",
        title: "Admin portal",
        blurb:
          "Records, enrollment processing, finance, and system management.",
      },
      {
        href: "/docs/user-guide/faculty-portal",
        title: "Faculty portal",
        blurb: "Classes, attendance, grading, schedules, and submissions.",
      },
      {
        href: "/docs/user-guide/student-portal",
        title: "Student portal",
        blurb:
          "Classes, schedule, tuition, statements, and the digital ID card.",
      },
      {
        href: "/docs/user-guide/modules",
        title: "Optional modules",
        blurb:
          "Announcements, cashier, inventory, library, notifications, and medical records.",
      },
    ],
  },
  {
    label: "Maintainers & governance",
    links: [
      {
        href: "/docs/maintainers/ci",
        title: "CI pipeline",
        blurb: "Required PR validation and workflow security.",
      },
      {
        href: "/docs/maintainers/releases",
        title: "Releases & versioning",
        blurb: "Release Please, image channels, metadata, and recovery.",
      },
      {
        href: "/docs/maintainers/create-module",
        title: "Create a module",
        blurb: "Build, test, and release a standalone Composer module package.",
      },
      {
        href: "/docs/maintainers/module-registry",
        title: "Module registry",
        blurb: "Publish, install, update, and operate standalone modules.",
      },
      {
        href: "/docs/maintainers/automation",
        title: "Repository automation",
        blurb: "Labels, issue quality checks, roadmap board, and PR access.",
      },
      {
        href: "/docs/maintainers/documentation",
        title: "Documentation system",
        blurb: "Canonical Markdown, generated mirrors, and the site build.",
      },
      {
        href: "/docs/maintainers/oss-documentation",
        title: "OSS standards & readiness",
        blurb:
          "Documentation surface, README checklist, and OSS documentation notes.",
      },
      {
        href: "/docs/maintainers/oss-hardening",
        title: "OSS hardening",
        blurb:
          "Current OSS hardening stage, completed artifacts, and maintainer decisions.",
      },
    ],
  },
]

/** API reference — the documented, tested integration surface. */
export const apiTree: DocGroup[] = [
  {
    label: "Reference",
    links: [
      {
        href: "/api/api-overview",
        title: "API overview",
        blurb:
          "The tested beta contract, base URL, authentication, and errors.",
      },
      {
        href: "/api/mcp",
        title: "Model Context Protocol (MCP)",
        blurb: "Tools for students, subjects, enrollments, and admin via MCP.",
      },
      {
        href: "/api/authenticated-settings",
        title: "Authenticated settings",
        blurb: "Sanctum-protected routes for general settings.",
      },
      {
        href: "/api/student-verification",
        title: "Student verification",
        blurb: "Check whether a student ID and email match one record.",
      },
    ],
  },
]

/** Developer documentation — local setup, environments, and extensions. */
export const devTree: DocGroup[] = [
  {
    label: "Getting started",
    links: [
      {
        href: "/dev/development-setup",
        title: "Development setup",
        blurb:
          "From clone to running tests — toolchain, commands, and conventions.",
      },
    ],
  },
  {
    label: "Local development",
    links: [
      {
        href: "/dev/laravel-herd",
        title: "Laravel Herd",
        blurb: "Native PHP on Windows & macOS — no Docker required.",
      },
      {
        href: "/dev/laravel-sail",
        title: "Laravel Sail",
        blurb: "A per-project Docker environment for local development.",
      },
      {
        href: "/dev/laravel-valet",
        title: "Laravel Valet (macOS)",
        blurb: "The classic minimal PHP environment for macOS.",
      },
    ],
  },
  {
    label: "Extending",
    links: [
      {
        href: "/dev/enrollment-policy-extensions",
        title: "Policy extensions",
        blurb:
          "Contracts for rules, actions, and strategies — no executable classes.",
      },
      {
        href: "/dev/regulatory-report-providers",
        title: "Regulatory reports",
        blurb:
          "Add jurisdiction-specific reporting adapters without coupling the shared registrar workflow.",
      },
      {
        href: "/dev/authority-code-imports",
        title: "Authority code imports",
        blurb:
          "Import per-school regulatory course-code lists without bundling country data.",
      },
    ],
  },
]

export function treeFor(section: DocSection): DocGroup[] {
  if (section === "api") return apiTree
  if (section === "dev") return devTree
  return docsTree
}

export function sectionForPath(path: string): DocSection {
  if (path.startsWith("/api")) return "api"
  if (path.startsWith("/dev")) return "dev"
  return "docs"
}

export function flattenDocs(tree: DocGroup[]): DocEntry[] {
  return tree.flatMap((group) => group.links)
}

export function allGroups(): DocGroup[] {
  return [...docsTree, ...apiTree, ...devTree]
}

export function groupOf(
  path: string
): { group: DocGroup; entry: DocEntry } | null {
  for (const group of allGroups()) {
    const entry = group.links.find((link) => link.href === path)
    if (entry) return { group, entry }
  }
  return null
}
