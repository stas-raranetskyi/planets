import { useMemo, type FC } from 'react';
import type { Props } from './types';
import clsx from 'clsx';
import { usePlanetContext } from '../../../Planets/hooks/usePlanetContext';

const Moon: FC<Props> = ({ moon }) => {
	const { selectedMoonsIds, handleSelectMoon } = usePlanetContext();
	const isSelected = useMemo(() => selectedMoonsIds.includes(moon.id), [selectedMoonsIds, moon.id]);

	const handleClick = () => {
		handleSelectMoon(moon.id);
	};

	return (
		<div className={clsx('moon', { 'moon--selected': isSelected })} onClick={handleClick}>
			{moon.title}
		</div>
	);
};

export default Moon;
