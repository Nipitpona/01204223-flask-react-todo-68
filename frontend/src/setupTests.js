import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup()
})

vi.mock('/vite.svg', () => ({ default: '' }));
vi.mock('./assets/react.svg', () => ({ default: '' }));
vi.mock('./App.css', () => ({}));