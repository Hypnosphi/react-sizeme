const { uglify } = require('rollup-plugin-uglify')

const baseConfig = require('./rollup.config.js')

const name = 'react-sizeme'

baseConfig.plugins.push(uglify())
baseConfig.output.file = `dist/${name}.min.js`

module.exports = baseConfig
