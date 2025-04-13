import config from '@ofk/eslint-config-recommend';

export default config({
  extends: [
    {
      files: ['client/{root,routes}.*', 'client/routes/**'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          { allowedNames: ['clientLoader'] },
        ],
        'react-refresh/only-export-components': 'off',
      },
    },
  ],
  ignores: ['.react-router/', 'build/'],
  imports: {
    defaultExportFiles: ['client/{root,routes}.*', 'client/routes/**', 'server/index.ts'],
  },
});
