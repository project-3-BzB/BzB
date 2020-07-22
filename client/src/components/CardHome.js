import React from 'react';
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
                <h4 className="title">BzB</h4>
                {/* <img className="animate__animated animate__flip" src={iconBee} width="200px" alt="beeIcon"/> */}
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