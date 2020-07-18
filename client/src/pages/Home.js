import React from 'react'
import './styles/Home.css'
import Tiles from '../components/Tiles';
import {TileProvider} from '../utils/TileContext';

function Home() {
  return (
    <div>
      <div className="wrapperGrey">
      <section className="hero is-fullheight">
        <div className="hero-body has-text-centered">
          <div className="login">
            <h4 className="title is-4">Home</h4>
            <TileProvider>
            <div className="columns is-desktop is-mobile">
            
              <Tiles />

              {/* <div className="column is-half-mobile">
                <img src='images/button_tasks.png' alt="Tasks"/>
              </div>
              <div className="column is-half-mobile">
                <img src="images/button_journals.png" alt="Journals"/>
              </div> */}
            </div>
            </TileProvider>
            {/* <div className="columns is-desktop is-mobile">
              <div className="column is-half-mobile">
                <img src="images/button_links.png" alt="Links"/>
              </div>
              <div className="column is-half-mobile">
                <img src="images/button_photos.png" alt="Photos"/>
              </div>
            </div> */}

          </div>
        </div>
      </section>
      </div>

    </div>
  );
}

export default Home;