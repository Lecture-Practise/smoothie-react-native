module.exports = {
  env: {
    // node.js에서 document API의 에러를 발생하지 않도록 합니다.
    browser: true,
    es2021: true,
  },
  extends: [
    // airbnb 규칙을 사용한다.
    'airbnb',
    // @eslint-plugin-react 의 규칙을 사용한다.
    'plugin:react/recommended',
    // @typescript-eslint/eslint-plugin의 규칙을 사용한다.
    'plugin:@typescript-eslint/recommended',
    // eslint-config-prettier를 사용해서 @typescript-eslint/eslint-plugin의 규칙들 중 prettier와 충돌하는 규칙을 비활성화한다.
    'prettier/@typescript-eslint',
    // eslint-plugin-prettier와 eslint-config-prettier를 활성화한다. prettier 에러를 eslint 에러로 표시해 줄 것이다. 이 설정은 반드시 extends 배열의 마지막 값이어야 한다.
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  // ESLint 파서를 지정한다.
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      // jsx의 파싱을 허용한다.
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // 확장자 허용 (JSX not allowed in files with extension '.tsx')
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-filename-extension': [
      2,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'no-console': 'off',
    // 정의되기 전에 사용되도록 허용 ('React' was used before it was defined)
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // airbnb ESLint 구성의 문제를 해결하기 위함
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    react: {
      // eslint-plugin-react에게 사용하고 있는 리액트의 버전을 알아서 탐지하도록 한다.
      version: 'detect',
    },
    // 해당 확장자 모듈 가져오도록 등록
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
