import React from 'react'
import './styles/Home.css'
import Nav from '../components/Nav';
import FormHome from '../components/FormHome';
import CardHome from '../components/CardHome';

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
        <CardHome />
   
      </div>
    </div>
  );
}

export default Home; 