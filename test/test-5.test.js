const fs = require('fs');
const path = require('path');

test('vite is listed as a dependency or devDependency in package.json', () => {
  const pkgPath = path.join(__dirname, '../package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const hasViteDep = (pkg.dependencies && pkg.dependencies.vite) || (pkg.devDependencies && pkg.devDependencies.vite);
  expect(!!hasViteDep).toBe(true);
});
