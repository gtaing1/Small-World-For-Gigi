import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  preset: "ts-jest", 
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    '^@project/(.*)$': '<rootDir>/src/',
    "\\.(css|less)$": "identity-obj-proxy"
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$', 
  verbose: false, 
  transform: {
   ".*": "babel-jest",
    '^.+\\.(ts|tsx)$': 'ts-jest',      
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts"
  ],
  moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
  ],
  resolver: `<rootDir>/resolver.js`
}
export default config;