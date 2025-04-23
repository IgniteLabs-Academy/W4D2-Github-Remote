test('Repo synced', () => {
  const { execSync } = require('child_process'); const status = execSync('git status --porcelain').toString(); expect(status.trim()).toBe('');
});
