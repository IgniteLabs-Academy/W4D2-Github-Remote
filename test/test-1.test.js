const fs = require('fs');
const path = require('path');

test('src/components contains Counter.jsx and TextInput.jsx', () => {
  const componentsDir = path.join(__dirname, '../src/components');
  const counterExists = fs.existsSync(path.join(componentsDir, 'Counter.jsx'));
  const textInputExists = fs.existsSync(path.join(componentsDir, 'TextInput.jsx'));
  expect(counterExists).toBe(true);
  expect(textInputExists).toBe(true);
});
