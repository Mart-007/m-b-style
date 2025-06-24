import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const shortHandStyles = {
  f: "display: flex;",
  tc: "text-align: center;",
  jc: "justify-content: center;",
  g2: "gap: 2px;",
  g4: "gap: 4px;",
  g8: "gap: 8px;",
  g16: "gap: 16px;",
  aic: "align-items: center;",
  jfs: "justify-content: flex-start;",
  jfe: "justify-content: flex-end;",
  c: "display: contents;",
};

const generateCombinations = (keys) => {
  const result = [];

  const combine = (prefix, start) => {
    if (prefix.length > 0) result.push([...prefix]);
    for (let i = start; i < keys.length; i++) {
      combine([...prefix, keys[i]], i + 1);
    }
  };

  combine([], 0);
  return result;
};

const buildCSS = () => {
  const keys = Object.keys(shortHandStyles);
  const combos = generateCombinations(keys);
  const css = combos
    .map((parts) => {
      const className = `.mb-${parts.join("-")}`;
      const rules = parts.map((k) => shortHandStyles[k]).join(" ");
      return `${className} { ${rules} }`;
    })
    .join(`\n`);

  const outputDir = path.resolve(__dirname, "../dist");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
  fs.writeFileSync(path.join(outputDir, "m-b-style.css"), css);
  console.log("✅ m-b-style.css generated in /dist");
};

buildCSS();
