test('Remote added', () => {
  const { execSync } = require('child_process'); const output = execSync('git remote -v').toString(); expect(output.includes('origin')).toBe(true);
});
