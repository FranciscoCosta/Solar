import React from 'react';
import Title from './Title';
import missoes from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
            missoes.map(missao=><Missions key={ missao.name } infoM={ missao } />)
        }
      </div>
    );
  }
}

export default Missions;
