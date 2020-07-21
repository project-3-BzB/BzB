import React, {useContext} from 'react';
import '../pages/styles/Home.css'
import '../pages/styles/Tasks.css'

function TaskFolder() {
 
  return (
    <div>
    <div className="tile task">
        <article className="tile is-child notification is-link">
          <p className="title is-4 has-text-centered">Name</p>
        </article>
        <article className="tile is-child notification is-link task">
          <p className="title is-4 has-text-centered">Due Date</p>
        </article>
    </div>
    </div>
  );
}

export default TaskFolder;