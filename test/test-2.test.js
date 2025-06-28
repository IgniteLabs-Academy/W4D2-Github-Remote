const fs = require('fs');
const path = require('path');

test('vite.config.js exists in the project root directory', () => {
  const viteConfigExists = fs.existsSync(path.join(__dirname, '../vite.config.js'));
  expect(viteConfigExists).toBe(true);
});
