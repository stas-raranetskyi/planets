import { createContext } from 'react';
import type { PlanetContextValue } from './types';

export const PlanetContext = createContext<PlanetContextValue | undefined>(undefined);
