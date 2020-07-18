import React from 'react'
// import './styles/Home.css'
import Tiles from '../components/Tiles';
import {TileProvider} from '../utils/TileContext';
import { MenuTop, MenuBottom, HomeContent } from '../style/Home'

function Home() {
  return (
    <div>
      <div className="wrapperGrey">
        
        <MenuTop className="menuTop">
          <div className="nes-field">
            {/* <label for="name_field">Your name</label>
            <input type="text" id="name_field" className="nes-input" value="Project Name"/> */}
          </div>
          <section>
              {/* </form>
            </dialog> */}
          </section>
        </MenuTop>
        <MenuBottom className="menuBottom">

            <TileProvider>
                <Tiles />
            </TileProvider>
    
        </MenuBottom>
        <HomeContent className="homeContent">
       
          <div className="entrybox-task"></div>
          <div className="entrybox-journal"></div>
          <div className="entrybox-link"></div>
          <div className="entrybox-photo"></div>
        </HomeContent>
 
      </div>
    </div>
  );
}

export default Home;