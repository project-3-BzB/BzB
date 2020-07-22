import React from 'react'
import './styles/Home.css'
import Progress from '../components/Progress';
import FormHome from '../components/FormHome';
import ProjectName from '../components/ProjectName';
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

        {/* <FormHome /> */}
        <ProjectName />
        <CardHome />
   
      </div>
    </div>
  );
}

export default Home; 