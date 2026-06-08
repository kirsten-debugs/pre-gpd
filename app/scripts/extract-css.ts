import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import chalk from 'chalk';

const pink = chalk.hex('#FFB6C1');
const cssPath = path.join(process.cwd(), 'app', 'presets', 'gaia.css');
const outputPath = path.join(process.cwd(), 'app', 'data', 'gaia-selectors.json');

try {
  const cssContent = fs.readFileSync(cssPath, 'utf8');

  const root = postcss.parse(cssContent);
  const list: string[] = [];

  root.walkRules((rule) => {
    if (rule.selector) {
      const cleanSelector = rule.selector.replace(/\s+/g, ' ').trim();
      if (cleanSelector) {
        list.push(cleanSelector);
      }
    }
  });

  const uniqueSelectors = Array.from(new Set(list));

  if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(uniqueSelectors, null, 2));

  console.log(pink.bold('GAIA SELECTORS: SUCCESS. GENERATED FILE:'));
  console.log(pink.italic('❤️  gaia-selectors.json'));
  console.log(pink(`Total: ${uniqueSelectors.length} selectors`));
} catch (error) {
  console.error(chalk.red.bold('Error processing Gaia selectors:'), error);
  process.exit(1);
}