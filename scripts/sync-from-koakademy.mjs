import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

const candidatePaths = [
  process.env.KOAKADEMY_DOCS_PATH,
  path.resolve(process.cwd(), "../koakademy/docs/src/content/docs"),
  "/home/admin/koakademy/.delta/worktrees/f5tj91c6fjbt/koakademy/docs/src/content/docs",
  path.resolve(process.cwd(), "../../koakademy/docs/src/content/docs")
].filter(Boolean);

const sourceRoot = candidatePaths.find((p) => fs.existsSync(p));

if (!sourceRoot) {
  console.error("Could not find koakademy docs/src/content/docs. Set KOAKADEMY_DOCS_PATH.");
  process.exit(1);
}

console.log("Using source docs at:", sourceRoot);

const fileMap = [
  // API
  { src: "api/api-overview.mdx", dest: "src/pages/api/api-overview.astro", path: "/api/api-overview" },
  { src: "api/developer-api.mdx", dest: "src/pages/api/authenticated-settings.astro", path: "/api/authenticated-settings" },
  { src: "api/student-verification-api.mdx", dest: "src/pages/api/student-verification.astro", path: "/api/student-verification" },
  { src: "api/mcp.mdx", dest: "src/pages/api/mcp.astro", path: "/api/mcp" },

  // DEV
  { src: "start-here/development.mdx", dest: "src/pages/dev/development-setup.astro", path: "/dev/development-setup" },
  { src: "development/enrollment-policy-extensions.mdx", dest: "src/pages/dev/enrollment-policy-extensions.astro", path: "/dev/enrollment-policy-extensions" },
  { src: "development/authority-code-imports.mdx", dest: "src/pages/dev/authority-code-imports.astro", path: "/dev/authority-code-imports" },
  { src: "development/regulatory-report-providers.mdx", dest: "src/pages/dev/regulatory-report-providers.astro", path: "/dev/regulatory-report-providers" },

  // DOCS - Start here
  { src: "start-here/introduction.mdx", dest: "src/pages/docs/start-here/introduction.astro", path: "/docs/start-here/introduction" },
  { src: "start-here/architecture.mdx", dest: "src/pages/docs/start-here/architecture.astro", path: "/docs/start-here/architecture" },
  { src: "start-here/contributing.mdx", dest: "src/pages/docs/start-here/contributing.astro", path: "/docs/start-here/contributing" },

  // DOCS - Self-hosting
  { src: "self-hosting/installation.mdx", dest: "src/pages/docs/self-hosting/installation.astro", path: "/docs/self-hosting/installation" },
  { src: "self-hosting/deployment.mdx", dest: "src/pages/docs/self-hosting/deployment.astro", path: "/docs/self-hosting/deployment" },
  { src: "self-hosting/configuration.mdx", dest: "src/pages/docs/self-hosting/configuration.astro", path: "/docs/self-hosting/configuration" },
  { src: "self-hosting/docker-compose.mdx", dest: "src/pages/docs/self-hosting/docker-compose.astro", path: "/docs/self-hosting/docker-compose" },
  { src: "self-hosting/docker-swarm.mdx", dest: "src/pages/docs/self-hosting/docker-swarm.astro", path: "/docs/self-hosting/docker-swarm" },
  { src: "self-hosting/dokploy.mdx", dest: "src/pages/docs/self-hosting/dokploy.astro", path: "/docs/self-hosting/dokploy" },
  { src: "self-hosting/coolify.mdx", dest: "src/pages/docs/self-hosting/coolify.astro", path: "/docs/self-hosting/coolify" },
  { src: "self-hosting/kubernetes.mdx", dest: "src/pages/docs/self-hosting/kubernetes.astro", path: "/docs/self-hosting/kubernetes" },
  { src: "self-hosting/openshift.mdx", dest: "src/pages/docs/self-hosting/openshift.astro", path: "/docs/self-hosting/openshift" },
  { src: "self-hosting/troubleshooting.mdx", dest: "src/pages/docs/self-hosting/troubleshooting.astro", path: "/docs/self-hosting/troubleshooting" },
  { src: "self-hosting/faq.mdx", dest: "src/pages/docs/self-hosting/faq.astro", path: "/docs/self-hosting/faq" },

  // DOCS - System
  { src: "system/architecture-domain.mdx", dest: "src/pages/docs/system/architecture-domain.astro", path: "/docs/system/architecture-domain" },
  { src: "system/auth-authorization.mdx", dest: "src/pages/docs/system/auth-authorization.astro", path: "/docs/system/auth-authorization" },
  { src: "system/modules-flags.mdx", dest: "src/pages/docs/system/modules-flags.astro", path: "/docs/system/modules-flags" },
  { src: "system/enrollment-engine.mdx", dest: "src/pages/docs/system/enrollment-engine.astro", path: "/docs/system/enrollment-engine" },
  { src: "system/queues-pdf.mdx", dest: "src/pages/docs/system/queues-pdf.astro", path: "/docs/system/queues-pdf" },
  { src: "system/frontend.mdx", dest: "src/pages/docs/system/frontend.astro", path: "/docs/system/frontend" },
  { src: "system/observability.mdx", dest: "src/pages/docs/system/observability.astro", path: "/docs/system/observability" },

  // DOCS - User guide
  { src: "user-guide/introduction.mdx", dest: "src/pages/docs/user-guide/introduction.astro", path: "/docs/user-guide/introduction" },
  { src: "user-guide/features-overview.mdx", dest: "src/pages/docs/user-guide/features-overview.astro", path: "/docs/user-guide/features-overview" },
  { src: "user-guide/admin-portal.mdx", dest: "src/pages/docs/user-guide/admin-portal.astro", path: "/docs/user-guide/admin-portal" },
  { src: "user-guide/faculty-portal.mdx", dest: "src/pages/docs/user-guide/faculty-portal.astro", path: "/docs/user-guide/faculty-portal" },
  { src: "user-guide/student-portal.mdx", dest: "src/pages/docs/user-guide/student-portal.astro", path: "/docs/user-guide/student-portal" },
  { src: "user-guide/modules.mdx", dest: "src/pages/docs/user-guide/modules.astro", path: "/docs/user-guide/modules" },

  // DOCS - Enrollment policies
  { src: "enrollment-policies/overview.mdx", dest: "src/pages/docs/enrollment-policies/overview.astro", path: "/docs/enrollment-policies/overview" },
  { src: "enrollment-policies/quick-start.mdx", dest: "src/pages/docs/enrollment-policies/quick-start.astro", path: "/docs/enrollment-policies/quick-start" },
  { src: "enrollment-policies/scopes-inheritance.mdx", dest: "src/pages/docs/enrollment-policies/scopes-inheritance.astro", path: "/docs/enrollment-policies/scopes-inheritance" },
  { src: "enrollment-policies/availability-eligibility-documents.mdx", dest: "src/pages/docs/enrollment-policies/availability-eligibility-documents.astro", path: "/docs/enrollment-policies/availability-eligibility-documents" },
  { src: "enrollment-policies/subjects-classes-tuition.mdx", dest: "src/pages/docs/enrollment-policies/subjects-classes-tuition.astro", path: "/docs/enrollment-policies/subjects-classes-tuition" },
  { src: "enrollment-policies/approvals-notifications.mdx", dest: "src/pages/docs/enrollment-policies/approvals-notifications.astro", path: "/docs/enrollment-policies/approvals-notifications" },
  { src: "enrollment-policies/simulation-publication.mdx", dest: "src/pages/docs/enrollment-policies/simulation-publication.astro", path: "/docs/enrollment-policies/simulation-publication" },
  { src: "enrollment-policies/troubleshooting-deployment.mdx", dest: "src/pages/docs/enrollment-policies/troubleshooting-deployment.astro", path: "/docs/enrollment-policies/troubleshooting-deployment" },

  // DOCS - Maintainers
  { src: "maintainers/ci.mdx", dest: "src/pages/docs/maintainers/ci.astro", path: "/docs/maintainers/ci" },
  { src: "maintainers/releases.mdx", dest: "src/pages/docs/maintainers/releases.astro", path: "/docs/maintainers/releases" },
  { src: "maintainers/create-module.mdx", dest: "src/pages/docs/maintainers/create-module.astro", path: "/docs/maintainers/create-module" },
  { src: "maintainers/module-registry.mdx", dest: "src/pages/docs/maintainers/module-registry.astro", path: "/docs/maintainers/module-registry" },
  { src: "maintainers/automation.mdx", dest: "src/pages/docs/maintainers/automation.astro", path: "/docs/maintainers/automation" },
  { src: "maintainers/documentation.mdx", dest: "src/pages/docs/maintainers/documentation.astro", path: "/docs/maintainers/documentation" },
  { src: "maintainers/oss-documentation.mdx", dest: "src/pages/docs/maintainers/oss-documentation.astro", path: "/docs/maintainers/oss-documentation" },
  { src: "maintainers/oss-hardening.mdx", dest: "src/pages/docs/maintainers/oss-hardening.astro", path: "/docs/maintainers/oss-hardening" },
];

function rewriteLink(href, currentFile) {
  if (!href || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("#") || href.startsWith("mailto:")) {
    return href;
  }

  const hashIndex = href.indexOf("#");
  let base = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";

  // Handle relative links
  if (base.startsWith("../") || base.startsWith("./")) {
    const currentDir = path.dirname(currentFile);
    base = path.posix.normalize(path.posix.join("/docs", currentDir, base));
  } else if (base.startsWith("/koakademy/")) {
    base = base.replace(/^\/koakademy\//, "/docs/");
  } else if (!base.startsWith("/docs/") && !base.startsWith("/api/") && !base.startsWith("/dev/")) {
    base = "/docs/" + base.replace(/^\//, "");
  }

  // Canonical redirects
  const redirects = {
    "/docs/api/api-overview": "/api/api-overview",
    "/docs/api/developer-api": "/api/authenticated-settings",
    "/docs/api/student-verification-api": "/api/student-verification",
    "/docs/api/mcp": "/api/mcp",
    "/docs/development/enrollment-policy-extensions": "/dev/enrollment-policy-extensions",
    "/docs/development/regulatory-report-providers": "/dev/regulatory-report-providers",
    "/docs/development/authority-code-imports": "/dev/authority-code-imports",
    "/docs/development/laravel-herd": "/dev/laravel-herd",
    "/docs/development/laravel-sail": "/dev/laravel-sail",
    "/docs/development/laravel-valet": "/dev/laravel-valet",
    "/docs/start-here/development": "/dev/development-setup",
  };

  let clean = base.replace(/\.mdx$/, "").replace(/\/$/, "");
  if (redirects[clean]) {
    clean = redirects[clean];
  }

  return clean + hash;
}

function convert(sourceMdx, routePath, relSrc) {
  // Extract frontmatter
  const fmMatch = sourceMdx.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  let title = "";
  let description = "";
  let content = sourceMdx;

  if (fmMatch) {
    const titleMatch = fmMatch[1].match(/title:\s*(.*)/);
    const descMatch = fmMatch[1].match(/description:\s*(.*)/);
    if (titleMatch) title = titleMatch[1].trim().replace(/^["']|["']$/g, "");
    if (descMatch) description = descMatch[1].trim().replace(/^["']|["']$/g, "");
    content = sourceMdx.slice(fmMatch[0].length);
  }

  // Remove import statements
  content = content.replace(/^import\s+[\s\S]*?from\s+["'][^"']+["'];?/gm, "");

  // Remove top-level h1 if present
  content = content.replace(/^\s*#\s+[^\r\n]+\r?\n/, "");

  // Convert :::callout[Title] ... :::
  content = content.replace(/:::(\w+)(?:\[(.*?)\])?\r?\n([\s\S]*?)\r?\n:::/g, (_match, type, label, body) => {
    let calloutType = "note";
    if (type === "tip") calloutType = "tip";
    else if (type === "caution" || type === "danger" || type === "warning") calloutType = "caution";
    
    const displayLabel = label || (type.charAt(0).toUpperCase() + type.slice(1));
    return `\n<div class="doc-callout doc-callout-${calloutType}">\n  <p class="doc-callout-label">${displayLabel}</p>\n\n${body.trim()}\n\n</div>\n`;
  });

  // Convert <CardGrid ...> ... </CardGrid>
  content = content.replace(/<CardGrid[^>]*>([\s\S]*?)<\/CardGrid>/g, (_match, body) => {
    return `\n<div class="my-6 grid grid-cols-1 gap-4 md:grid-cols-2">\n${body.trim()}\n</div>\n`;
  });

  // Convert <Card title="..." ...> ... </Card>
  content = content.replace(/<Card\s+title="([^"]+)"[^>]*>([\s\S]*?)<\/Card>/g, (_match, cardTitle, body) => {
    return `\n<div class="rounded-lg border border-line bg-paper-2 p-5">\n  <h3 class="font-medium text-ink mb-2">${cardTitle}</h3>\n  <div class="text-sm text-ink-soft leading-relaxed">\n\n${body.trim()}\n\n  </div>\n</div>\n`;
  });

  // Convert <LinkCard title="..." href="..." description="..." />
  content = content.replace(/<LinkCard\s+title="([^"]+)"\s+href="([^"]+)"\s+description="([^"]+)"\s*\/>/g, (_match, cardTitle, href, desc) => {
    const rewrittenHref = rewriteLink(href, relSrc);
    return `\n<a href="${rewrittenHref}" class="block rounded-lg border border-line bg-paper-2 p-5 hover:border-ink/40 transition-colors">\n  <h3 class="font-medium text-ink mb-1">${cardTitle}</h3>\n  <p class="text-sm text-ink-soft">${desc}</p>\n</a>\n`;
  });

  // Convert <Steps> ... </Steps>
  content = content.replace(/<Steps>([\s\S]*?)<\/Steps>/g, (_match, body) => {
    return `\n<div class="steps-flow my-6">\n${body.trim()}\n</div>\n`;
  });

  // Rewrite Markdown links [text](href)
  content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, text, href) => {
    return `[${text}](${rewriteLink(href, relSrc)})`;
  });

  // Rewrite HTML href attributes
  content = content.replace(/href="([^"]+)"/g, (_match, href) => {
    return `href="${rewriteLink(href, relSrc)}"`;
  });

  marked.setOptions({
    gfm: true,
    breaks: false
  });

  const html = marked.parse(content.trim());

  return `---
import DocsLayout from "@/layouts/DocsLayout.astro"

const html = ${JSON.stringify(html)}
---

<DocsLayout
  title=${JSON.stringify(title)}
  path=${JSON.stringify(routePath)}
  description=${JSON.stringify(description)}
>
  <Fragment set:html={html} />
</DocsLayout>
`;
}

console.log(`Starting sync of ${fileMap.length} documents...`);
for (const item of fileMap) {
  const srcPath = path.join(sourceRoot, item.src);
  if (!fs.existsSync(srcPath)) {
    console.error(`ERROR: Source missing: ${srcPath}`);
    continue;
  }
  const sourceMdx = fs.readFileSync(srcPath, "utf8");
  const destPath = item.dest;
  const astroContent = convert(sourceMdx, item.path, item.src);

  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, astroContent, "utf8");
  console.log(`Synced: ${item.src} -> ${item.dest}`);
}

console.log("All documents synced successfully.");
