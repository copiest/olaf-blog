const { pathsToModuleNameMapper } = require('ts-jest')

const tsConfig = require('./tsconfig.json')

const { paths } = tsConfig.compilerOptions

module.exports = {
  preset: 'ts-jest',
  testRegex: '(/__(tests|specs)__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    ...pathsToModuleNameMapper(paths),
  },
  globals: {
    __PATH_PREFIX__: '',
    'ts-jest': {
      diagnostics: false,
      tsconfig: 'tsconfig.jest.json',
      babelConfig: true,
    },
  },
  testEnvironment: 'jsdom',
  setupFiles: [],
  setupFilesAfterEnv: ['./jest.setup.js'],
}
