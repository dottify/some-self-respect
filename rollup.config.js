// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs', // CommonJS, for Node.js
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ES Modules, for bundlers like Vite/Webpack
    },
  ],
  plugins: [resolve(), commonjs(), typescript()],
};
