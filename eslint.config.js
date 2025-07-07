import { defineConfig, globalIgnores } from 'eslint/config';

import cheminfo from './configs/cheminfo.js';

const config = [cheminfo];

if (!process.env.LINT_NOT_OK) {
  config.push(globalIgnores(['test/not-ok.js', 'test/not_ok.test.js']));
}

export default defineConfig(config);
