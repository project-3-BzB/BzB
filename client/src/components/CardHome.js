import React, {useContext} from 'react';
// import '../pages/styles/Task.css'
import Tiles from './Tiles';
import {TileProvider} from '../utils/TileContext';
import { Cardcss, CardCenter } from '../style/Home'

function CardHome() {
 
  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-half">
        <Cardcss className="card">
          <div className="card-content">
            <CardCenter className="hero-body has-text-centered">
              <div className="Card">
                <h4 className="title is-4">BzB</h4>
                <TileProvider>
                  <Tiles />
                </TileProvider>
              </div>
            </CardCenter>
          </div>
        </Cardcss>
      </div>
    </div>
  );
}

export default CardHome;