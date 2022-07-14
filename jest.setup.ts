import React from 'react'
import { TextDecoder, TextEncoder } from 'util'
import '@testing-library/jest-dom/extend-expect';

import { server } from './src/mock-apis/server'; 

beforeAll(() => {
    server.listen(); 
})

afterEach(() => {
    server.resetHandlers(); 
})

afterAll(() => {
    server.close(); 
})

global.React = React
global.TextEncoder = TextEncoder
// @ts-ignore
global.TextDecoder = TextDecoder


