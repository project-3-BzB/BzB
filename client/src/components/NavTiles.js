import React, {useContext} from 'react';
import '../pages/styles/Home.css'
import { Score, Login, HomeContent } from '../style/Home'


function NavTiles() {
 
  return (
    
      <Score className="level is-mobile">
        <div className="level-item has-text-centered">
          <div>
            <p className="title has-text-warning">Tasks</p>
            <p className="title has-text-warning">3</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="title has-text-warning">Jounals</p>
            <p className="title has-text-warning">18</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="title has-text-warning">Links</p>
            <p className="title has-text-warning">15</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="title has-text-warning">Photos</p>
            <p className="title has-text-warning">22</p>
          </div>
        </div>
      </Score>
  );
}

export default NavTiles;