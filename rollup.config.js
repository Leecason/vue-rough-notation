import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

// `yarn build` -> `production` is true
// `yarn dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default () => [
  getConfig({
    file: path.resolve(__dirname, 'dist/vue-rough-notation.js'),
    format: 'umd',
  }),
  getConfig({
    file: path.resolve(__dirname, 'dist/vue-rough-notation.esm.js'),
    format: 'es',
  }),
];

function getConfig ({
  file,
  format,
}) {
  return {
    input: path.resolve(__dirname, 'src/index.js'),
    output: {
      file,
      name: 'VueRoughNotation',
      format,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime'],
      }),
      production && terser(),
    ],
  };
}
