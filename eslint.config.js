import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['src/pages/core/*.md'],
  },
  {
    files: ['packages/**/__use__/*.ts', 'src/components/core/*.vue'],
    rules: {
      'no-alert': 'off',
      'no-console': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-restricted-imports': 'off',
      'vue/no-unused-vars': 'off',
      'vue/no-unused-refs': 'off',
      'vue/require-v-for-key': 'off',
      'ts/no-unused-vars': 'off',
      'ts/no-redeclare': 'off',
      'unused-imports/no-unused-vars': 'off',
      'style/max-statements-per-line': 'off',
    },
  },
)
