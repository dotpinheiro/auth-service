import globals from "globals";

export default [
  {
    files: ["**/*.{ts}"],
    plugins: ['prettier', 'jest', 'import', '@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/prefer-as-const': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/member-delimiter-style': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'import/namespace': 'off',
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          pathGroups: [
            {
              group: 'external',
              pattern: 'react',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
        },
      ],
      'prettier/prettier': ['error'],
    },
  },
  {languageOptions: { globals: globals.node }},
];
