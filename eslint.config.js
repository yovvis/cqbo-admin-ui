import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,
  {
    rules: {
      'vue/multi-word-component-names': 'off', // 关闭 multi-word-component-names 规则
      '@typescript-eslint/no-explicit-any': 'off', // 关闭 no-explicit-any 规则
      '@typescript-eslint/ban-ts-comment': 'off', // 关闭 ban-ts-comment 规则
      '@typescript-eslint/no-unused-expressions': 'off', // 关闭 no-unused-expressions 规则
      '@typescript-eslint/no-unused-vars': 'off', //关闭  no-unused-vars 规则
      '@typescript-eslint/no-empty-object-type': 'off', // 关闭 no-empty-object-type 规则
    },
  },
]
