module.exports = {
  extends: 'airbnb-base',
  installedESLint: true,
  plugins: [
    'import',
  ],
  rules: {
    'import/no-unresolved': [2, {
      commonjs: false,
      amd: true,
    }],
    'no-console': 0,
    'no-param-reassign': ['error', {
      props: false,
    }],
  },
};
