import { setupWorker, rest } from 'msw'
import { getApiUrl } from './api'
import { handlers } from './handlers'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker (...handlers
)