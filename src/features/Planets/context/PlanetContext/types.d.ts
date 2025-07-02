import type { Planet } from '../../types';

export type Props = {
	planetId: Planet['id'];
};

export type PlanetContextValue = {
	selectedMoonsIds: number[];
	handleSelectMoon: (moonId: number) => void;
} & Props;
