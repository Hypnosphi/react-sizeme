const babel = require('rollup-plugin-babel')
const { titleCase } = require('title-case')

process.env.BABEL_ENV = 'production'

const name = 'react-sizeme'

module.exports = {
  external: [
    'element-resize-detector',
    'invariant',
    'throttle-debounce',
    'prop-types',
    'react-dom',
    'react',
    'shallowequal',
  ],
  input: 'src/index.js',
  output: {
    file: `dist/${name}.js`,
    format: 'cjs',
    sourcemap: true,
    name: titleCase(name.replace(/-/g, ' ')).replace(/ /g, ''),
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
      ],
      plugins: ['@babel/plugin-proposal-class-properties'],
    }),
  ],
}
