module.exports = {
  extends: ['@mvlchain/eslint-config'], // or @mvlchain/eslint-config/react
  rules: {
    // rules에 다음과 같이 추가
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
