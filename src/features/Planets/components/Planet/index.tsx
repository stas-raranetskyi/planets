import { useMemo, type FC } from 'react';
import type { Props } from './types';
import MoonList from '../../../Moons/components/MoonList';
import { usePlanetContext } from '../../hooks/usePlanetContext';

const BORDER_WIDTH = 2;
const BORDER_GAP = 2;

const Planet: FC<Props> = ({ planet }) => {
	const { selectedMoonsIds } = usePlanetContext();

	const boxShadow: string = useMemo(() => {
		return selectedMoonsIds
			.reduce((acc, _, index) => {
				const gapSpread = (index + 1) * (BORDER_WIDTH + BORDER_GAP);
				acc.push(`0 0 0 ${gapSpread}px var(--planet-gap-color)`);

				const borderSpread = (index + 2) * (BORDER_WIDTH + BORDER_GAP) - BORDER_GAP;
				acc.push(`0 0 0 ${borderSpread}px var(--selected-moon-color)`);
				return acc;
			}, [] as string[])
			.join(', ');
	}, [selectedMoonsIds]);

	return (
		<div
			className="planet-item"
			style={{
				padding: selectedMoonsIds.length * (BORDER_WIDTH + BORDER_GAP),
			}}
		>
			<div
				className="planet"
				style={{
					boxShadow,
				}}
			>
				<span>{planet.title} </span>
				{selectedMoonsIds.length > 0 && <span>{selectedMoonsIds.length}</span>}
			</div>
			<MoonList />
		</div>
	);
};

export default Planet;
