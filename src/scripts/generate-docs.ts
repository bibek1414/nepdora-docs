import { generateFiles } from "fumadocs-openapi";
import { openapi } from "@/lib/openapi";
import fs from "fs";
import path from "path";

// Function to escape angle brackets in MDX content
function fixMdxContent(content: string): string {
  const lines = content.split("\n");
  let inFrontmatter = false;
  let inJsxComponent = false;
  let frontmatterCount = 0;

  const fixedLines = lines.map((line) => {
    if (line.trim() === "---") {
      frontmatterCount++;
      inFrontmatter = frontmatterCount === 1;
      return line;
    }

    if (line.trim().startsWith("<") && line.trim().match(/^<[A-Z]/)) {
      inJsxComponent = true;
    }
    if (inJsxComponent && line.includes("/>")) {
      inJsxComponent = false;
      return line;
    }

    if (!inFrontmatter && !inJsxComponent && frontmatterCount >= 2) {
      return line.replace(/<([a-zA-Z][a-zA-Z0-9_]*)>/g, "&lt;$1&gt;");
    }

    if (inFrontmatter && line.includes("<") && line.includes(">")) {
      return line.replace(/<([a-zA-Z][a-zA-Z0-9_]*)>/g, "&lt;$1&gt;");
    }

    return line;
  });

  return fixedLines.join("\n");
}

function getAllMdxFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllMdxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }

  return files;
}

// Generate the documentation files
await generateFiles({
  input: openapi,
  output: "./content/docs/(api)",
  includeDescription: true,
});

// Post-process to fix angle bracket escaping
const docsDir = path.join(process.cwd(), "content/docs");
const files = getAllMdxFiles(docsDir);

let fixedCount = 0;
for (const file of files) {
  const content = fs.readFileSync(file, "utf-8");
  const fixed = fixMdxContent(content);

  if (content !== fixed) {
    fs.writeFileSync(file, fixed, "utf-8");
    fixedCount++;
  }
}

console.log(
  `\nPost-processing: Fixed ${fixedCount} files with escaped angle brackets.`
);
