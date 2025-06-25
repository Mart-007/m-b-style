import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import { baseFlex } from "../utils/short-hand-styles/flex.js";
import Combination from "../utils/combinations/combination.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const shortHandStyles = {
  ...baseFlex,
};

const buildCSS = (strategy = "all") => {
  const keys = Object.keys(shortHandStyles);

  let combos;

  const combination = new Combination(keys, 3);

  switch (strategy) {
    case "all":
      combos = combination.all();
      break;
    case "limited":
      combos = combination.limited();
      break;
    case "batch":
      combos = combination.batch();
      break;
    case "common":
      combos = combination.common();
      break;
    default:
      return "Unknown Strategy";
  }

  const css = combos
    .map((parts) => {
      const className = `.mb-${parts.join("-")}`;
      const rules = parts.map((k) => shortHandStyles[k]).join(" ");
      return `${className} { ${rules} }`;
    })
    .join(`\n`);

  const outputDir = path.resolve(__dirname, "../dist");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  fs.writeFileSync(path.join(outputDir, "index.css"), css);

  console.log("✅ m-b-style.css generated in /dist");
  console.log(`CSS file size: ${(css.length / 1024).toFixed(2)} KB`);
};

buildCSS();
