module.exports = {
  '*': () => [
    'npx --no-install ec -config .ecrc.json'
  ],
  'package.json': () => [
    'npx --no-install npmPkgJsonLint -c .npmpackagejsonlintrc.json .',
    'npm install --package-lock-only',
    'git add package-lock.json'
  ],
  '**/{.eslintrc,cypress,.npmpackagejsonlintrc,tsconfig,package}.json': [
    'npx --no-install v8r'
  ],
  '**/*.ts': (fileNames) => [
    fileNames.length > 10
    ? 'npx --no-install next lint --fix --ext ts --ext tsx'
    : `npx --no-install next lint --fix --ext ts --ext tsx ${fileNames.join(' ')}`,
  ]
};
