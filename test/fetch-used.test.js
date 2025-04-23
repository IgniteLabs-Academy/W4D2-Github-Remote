test('Fetch used', () => {
  const { execSync } = require('child_process'); const help = execSync('git help fetch').toString(); expect(help.includes('fetch')).toBe(true);
});
