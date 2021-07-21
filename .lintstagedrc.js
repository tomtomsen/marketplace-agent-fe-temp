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
  '**/*.{ts, tsx}': (fileNames) => [
    fileNames.length > 10
    ? 'npx --no-install eslint --fix --ext .ts,.tsx'
    : `npx --no-install eslint --fix --ext .ts,.tsx ${fileNames.join(' ')}`,
  ]
};
