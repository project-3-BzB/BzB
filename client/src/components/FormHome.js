import React, {useContext} from 'react';
import '../pages/styles/Home.css'


function FormHome() {
 
  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-half">

        <div className="field ">
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Subject Title"/>
            <span className="icon is-small is-left">
              <i className="fas fa-tasks"></i>
            </span>
            <span className="icon is-small is-right">
              <button className="button is-link is-warning">Submit</button>
            </span>
          </div>
        </div>
        
        <div className="field">
          <div className="control">
            <button className="button is-warning is-fullwidth">View All Projects</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default FormHome;