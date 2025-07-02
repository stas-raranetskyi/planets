import type { FC } from 'react';
import Planet from '../Planet';
import { planets } from '../../configs/const';
import PlanetProvider from '../../context/PlanetContext/Provider';

const PlanetList: FC = () => {
	return (
		<div className="planet-list">
			{planets.map((planet) => (
				<PlanetProvider planetId={planet.id} key={planet.id}>
					<Planet planet={planet} />
				</PlanetProvider>
			))}
		</div>
	);
};

export default PlanetList;
