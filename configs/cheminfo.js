import { defineConfig } from 'eslint/config';

import base from './base.js';
import jsdoc from './jsdoc.js';
import unicorn from './unicorn.js';

export default defineConfig(base, jsdoc, unicorn);
