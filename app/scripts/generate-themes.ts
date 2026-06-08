import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const pink = chalk.hex('#FFB6C1');

interface ThemeVars {
  '--background': string | null;
  '--primary': string | null;
  '--accent': string | null;
}

const themesDir = path.join(process.cwd(), 'app', 'themes');
const appCssPath = path.join(process.cwd(), 'app', 'app.css');
const registryOutput = path.join(themesDir, 'theme-registry.ts');
const indexCssOutput = path.join(themesDir, 'index.css');
const indexTsOutput = path.join(themesDir, 'index.ts');

try {
  const paletteData: Record<string, ThemeVars> = {};

  const extractVars = (cssBody: string): ThemeVars => {
    const vars: ThemeVars = { '--background': null, '--primary': null, '--accent': null };
    (['--background', '--primary', '--accent'] as const).forEach((key) => {
      const vMatch = cssBody.match(new RegExp(`${key}:\\s*([^;]+);`));
      vars[key] = vMatch ? vMatch[1].trim() : null;
    });
    return vars;
  };

  const appCss = fs.readFileSync(appCssPath, 'utf-8');
  const baseThemes = [
    { selector: ':root', name: 'light' },
    { selector: '\\.dark', name: 'dark' }
  ];

  for (const { selector, name } of baseThemes) {
    const regex = new RegExp(`${selector}\\s*{([^}]+)}`);
    const match = appCss.match(regex);
    if (match) {
      paletteData[name] = extractVars(match[1]);
    }
  }

  const files = fs.existsSync(themesDir) 
    ? fs.readdirSync(themesDir).filter((f) => f.endsWith('.css') && f !== 'index.css') 
    : [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(themesDir, file), 'utf-8');
    const regex = /\[data-theme=["']([^"']+)["']\]\s*{([^}]+)}/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      paletteData[match[1]] = extractVars(match[2]);
    }
  }

  const registryContent = `/** AUTO-GENERATED - DO NOT EDIT MANUALLY **/
export const THEMES = [
  ${Object.keys(paletteData).map((name) => `"${name}"`).join(',\n  ')}
] as const;

export type Theme = typeof THEMES[number];
export const ThemeList = [...THEMES] as string[];

export const themePalettes: Record<Theme, { 
  '--background': string | null;
  '--primary': string | null;
  '--accent': string | null;
}> = ${JSON.stringify(paletteData, null, 2)};`;

  const indexCssContent = files
    .map(file => `@import "./${file}";`)
    .join('\n');

  const indexTsContent = `/** AUTO-GENERATED - DO NOT EDIT MANUALLY **/
export * from './theme-registry';`;

  if (!fs.existsSync(themesDir)) {
    fs.mkdirSync(themesDir, { recursive: true });
  }

  fs.writeFileSync(registryOutput, registryContent);
  fs.writeFileSync(indexCssOutput, indexCssContent);
  fs.writeFileSync(indexTsOutput, indexTsContent);

  console.log(pink.bold('THEMES: SUCCESS. GENERATED FILES:'));
  console.log(pink.italic('❤️  theme-registry.ts'));
  console.log(pink.italic('❤️  index.ts'));
  console.log(pink.italic('❤️  index.css'));
} catch (error) {
  console.error(chalk.red('Error generating themes:'), error);
  process.exit(1);
}