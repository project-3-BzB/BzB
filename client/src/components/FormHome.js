import React, {useContext} from 'react';
import '../pages/styles/Home.css'


function FormHome() {
 
  return (
    <div class="columns is-mobile is-centered">
      <div class="column is-half">

        <div class="field ">
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Subject Title"/>
            <span class="icon is-small is-left">
              <i class="fas fa-tasks"></i>
            </span>
            <span class="icon is-small is-right">
              <button class="button is-link is-warning">Submit</button>
            </span>
          </div>
        </div>
        
        <div class="field">
          <div class="column">
            <div class="control">
              <button class="button is-warning is-fullwidth is-centered">View All Projects</button>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default FormHome;