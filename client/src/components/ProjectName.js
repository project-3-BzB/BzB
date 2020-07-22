import React from 'react';
// import '../pages/styles/Home.css'
// import '../pages/styles/Tasks.css'

function ProjectName() {
 
  return (
    <div className="columns is-ancestor is-mobile is-centered">
      <div className="column is-half ">
        <div className="tile task">
          <article className="tile is-child notification is-light">
            <p className="title is-4 has-text-centered">Project Name</p>
          </article>
        </div>
      </div> 
    </div>
  );
}

export default ProjectName;