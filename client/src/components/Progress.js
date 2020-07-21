import React, {useContext} from 'react';
import '../pages/styles/Home.css'
import { Score, Login, HomeContent } from '../style/Home'


function Progress() {
 
  return (
      <Score className="level is-mobile">
        <div className="level-item has-text-centered">
          <div>
            <p className="title has-text-warning animate__animated animate__fadeInLeftBig">Tasks</p>
            <p className="title has-text-warning animate__animated animate__fadeInLeftBig">3</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="title has-text-warning animate__animated animate__fadeInUpBig">Jounals</p>
            <p className="title has-text-warning animate__animated animate__fadeInUpBig">18</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="title has-text-warning animate__animated animate__fadeInUpBig">Links</p>
            <p className="title has-text-warning animate__animated animate__fadeInUpBig">15</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="title has-text-warning animate__animated animate__fadeInRightBig">Photos</p>
            <p className="title has-text-warning animate__animated animate__fadeInRightBig">22</p>
          </div>
        </div>
      </Score>
  );
}

export default Progress;