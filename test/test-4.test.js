const fs = require('fs');
const path = require('path');

test('src/App.jsx imports both Counter and TextInput from src/components', () => {
  const appPath = path.join(__dirname, '../src/App.jsx');
  const appContent = fs.readFileSync(appPath, 'utf8');
  const importsCounter = /import\s+Counter\s+from\s+['"]\.\/components\/Counter['"]/g.test(appContent);
  const importsTextInput = /import\s+TextInput\s+from\s+['"]\.\/components\/TextInput['"]/g.test(appContent);
  expect(importsCounter).toBe(true);
  expect(importsTextInput).toBe(true);
});
