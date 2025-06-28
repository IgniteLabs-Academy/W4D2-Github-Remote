const fs = require('fs');
const path = require('path');

test('.gitignore exists in the project root directory', () => {
  const gitignoreExists = fs.existsSync(path.join(__dirname, '../.gitignore'));
  expect(gitignoreExists).toBe(true);
});
