import { defineConfig, globalIgnores } from 'eslint/config';

import cheminfo from './configs/cheminfo.js';

export default defineConfig([
  cheminfo,
  ...(!process.env.LINT_NOT_OK
    ? [globalIgnores(['test/not-ok.js', 'test/not_ok.test.js'])]
    : []),
]);
