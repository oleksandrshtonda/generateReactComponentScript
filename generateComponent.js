import fs from 'fs';
import path from 'path';
// if you use commonJS, use require() instead

function createComponent(componentName) {
  const componentDir = path.join(process.cwd(), componentName);

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  } else {
    console.log(`Directory ${componentName} already exists.`);
    return;
  }

  const indexPath = path.join(componentDir, 'index.ts');
  fs.writeFileSync(indexPath, `export * from './${path.basename(componentDir)}.tsx';\n`);

  const scssPath = path.join(componentDir, `${path.basename(componentDir)}.scss`);
  fs.writeFileSync(scssPath, `.${path.basename(componentDir).toLowerCase()} {\n\n}`);

  const tsxPath = path.join(componentDir, `${path.basename(componentDir)}.tsx`);
  fs.writeFileSync(
    tsxPath,
    `import './${path.basename(componentDir)}.scss';\n\n` +
    `interface Props {}\n\n` +
    `export const ${path.basename(componentDir)}: React.FC<Props> = () => {\n` +
    `  return (<div className="${path.basename(componentDir).toLowerCase()}"></div>);\n` +
    `};\n`
  );

  console.log(`The ${path.basename(componentDir)} component was successfully created in ${componentDir}`);
}

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please, enter name of your future component along with its path :)");
  process.exit(1);
}

createComponent(componentName);
