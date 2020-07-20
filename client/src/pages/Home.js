import React, { useContext } from 'react'
import './styles/Home.css'
import Nav from '../components/Nav';
import FormHome from '../components/FormHome';
import Tiles from '../components/Tiles';
import {TileProvider} from '../utils/TileContext';
import { HeroBody, Login, HomeContent } from '../style/Home'
// import { FolderContext } from '../utils/FolderContext';
// import LogoutBtn from '../components/LogoutBtn';

function Home() {
  return (
    <div>
      <div className="wrapperGrey">

        <div class="tile is-ancestor">
          <div class="tile is-vertical is-12">
            <Nav />
          </div>
        </div>

        <FormHome />

        <div class="tile is-ancestor">
          <div class="tile is-vertical is-12">
            <section className="hero is-fullheight">
              <HeroBody className="hero-body has-text-centered">
                <Login className="login">
                  <h4 className="title is-4">BzB</h4>
                  <TileProvider>
                    <Tiles />
                  </TileProvider>
                </Login>
              </HeroBody>
            </section>
          </div>
        </div>

    
      </div>
    </div>
  );
}

export default Home; 