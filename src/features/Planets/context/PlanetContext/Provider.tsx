import { useState, type FC } from 'react';
import type { Props } from './types';
import { PlanetContext } from '.';
import type { PropsWithChildren } from 'react';

const PlanetProvider: FC<PropsWithChildren<Props>> = ({ children, planetId }) => {
	const [selectedMoonsIds, setSelectedMoonsIds] = useState<number[]>([]);

	const handleSelectMoon = (moonId: number) => {
		setSelectedMoonsIds((prev) => {
			if (prev.includes(moonId)) {
				return prev.filter((id) => id !== moonId);
			}

			return [...prev, moonId];
		});
	};

	return <PlanetContext value={{ planetId, selectedMoonsIds, handleSelectMoon }}>{children}</PlanetContext>;
};

export default PlanetProvider;
