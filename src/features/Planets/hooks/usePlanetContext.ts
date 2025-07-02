import { useContext } from 'react';
import { PlanetContext } from '../context/PlanetContext';

export const usePlanetContext = () => {
	const context = useContext(PlanetContext);

	if (!context) {
		throw new Error('usePlanetContext must be used within a PlanetProvider');
	}

	return context;
};
