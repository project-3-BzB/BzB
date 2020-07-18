import React from 'react'
import './styles/Home.css'
import Tiles from '../components/Tiles';
import {TileProvider} from '../utils/TileContext';
import { HeroBody, Login } from '../style/Home'

function Home() {
  return (
    <div>
      <div className="wrapperGrey">
      <section className="hero is-fullheight">
        <HeroBody className="hero-body has-text-centered">
          <Login className="login">
            <h4 className="title is-4">Home</h4>

            <TileProvider>
              <div className="columns is-desktop is-mobile">
                <Tiles />
              </div>
            </TileProvider>

          </Login>
        </HeroBody>
      </section>
      </div>

    </div>
  );
}

export default Home;