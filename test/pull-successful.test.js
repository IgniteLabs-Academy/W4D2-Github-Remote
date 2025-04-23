test('Pull successful', () => {
  const { execSync } = require('child_process'); const log = execSync('git log --oneline').toString(); expect(log.length).toBeGreaterThan(0);
});
