module.exports = {
  '*': () => [
    'npx --no-install ec -config .ecrc.json'
  ],
  'package.json': () => [
    'npx --no-install npmPkgJsonLint -c .npmpackagejsonlintrc.json .',
    'npm install --package-lock-only',
    'git add package-lock.json'
  ],
  '**/*.ts': (fileNames) => [
    fileNames.length > 10
    ? 'npx --no-install next lint --fix --ext ts --ext tsx'
    : `npx --no-install next lint --fix --ext ts --ext tsx ${fileNames.join(' ')}`,
  ]
};
