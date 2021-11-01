yarn add --dev lint-staged husky prettier-eslint-cli
npx husky install
npx husky add .husky/pre-commit "yarn lint-staged"