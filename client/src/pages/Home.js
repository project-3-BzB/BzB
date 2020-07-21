import React, { useContext } from 'react'
import './styles/Home.css'
import Progress from '../components/Progress';
import FormHome from '../components/FormHome';
import Tiles from '../components/Tiles';
import {TileProvider} from '../utils/TileContext';
import { HeroBody, Login, HomeContent } from '../style/Home'
// import { FolderContext } from '../utils/FolderContext';
// import LogoutBtn from '../components/LogoutBtn';
import CardHome from '../components/CardHome';

function Home() {
  return (
    <div>
      <div className="wrapperGrey">
 
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-12">
            <Progress />
          </div>
        </div>

        <FormHome />
        <CardHome />
   
      </div>
    </div>
  );
}

export default Home; 