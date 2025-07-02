import { useMemo, type FC } from 'react';
import type { Props } from './types';
import Moon from '../Moon';
import { moons } from '../../configs/const';
import { usePlanetContext } from '../../../Planets/hooks/usePlanetContext';

const MoonList: FC<Props> = () => {
	const { planetId } = usePlanetContext();
	const filteredMoons = useMemo(() => moons.filter((moon) => moon.planetId === planetId), [planetId]);

	return (
		<div className="moon-list">
			{filteredMoons.map((moon) => (
				<Moon key={moon.id} moon={moon} />
			))}
		</div>
	);
};

export default MoonList;
