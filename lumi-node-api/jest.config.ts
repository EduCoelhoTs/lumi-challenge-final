import { compilerOptions } from './tsconfig.json';
import { pathsToModuleNameMapper } from 'ts-jest';

export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testRegex: ['.*\\..*spec\\.ts$', '.*\\..*test\\.ts$'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/coverage/',
    '/src/shared/database/migrations/',
    '.entity.ts',
    '.interface.ts',
    '.module.ts',
    '.mock.ts',
    '.dto.ts',
    '.doc.ts',
    '.config.ts',
    'main.ts',
    'index.ts',
    '.factory.ts',
    '.eslintrc.js',
    'jest.config.ts',
    'data-source.ts',
    'entity-typeorm.ts',
    '.filter.ts',
    '-error.ts',
    '.+/infra/main/.*\\.controller\\.ts$',
  ],
};
