import path from 'path';
import node from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import cjs from 'rollup-plugin-commonjs';

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
      node(),
      cjs(),
      babel({ runtimeHelpers: true }),
      terser(),
    ],
  };
}
