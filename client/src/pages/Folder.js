import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import './styles/Home.css'
import Progress from '../components/Progress';
import FormHome from '../components/FormHome';
import Tiles from '../components/Tiles';
import {TileProvider} from '../utils/TileContext';
import { HeroBody, Login, HomeContent } from '../style/Home'
import { getIsLoggedIn } from '../utils/Auth'
import { FoldersContext } from '../utils/FolderContext'
import CardHome from '../components/CardHome';
import API from '../utils/API'
import { Wrapper, Score, CardCenter, Cardcss } from '../style/Folder';
import img from '../img/bg_grey.png'
import ProjectName from '../components/ProjectName';
import { ProjectsContent } from '../style/Projects';
import bee from '../img/icon_bee.png'
import note from '../img/button_journals.png'
import task from '../img/button_tasks.png'
import link from '../img/button_links.png'
import photo from '../img/button_photos.png'

const Folder = () => {

    // const [folders, setFolders] = useContext(FoldersContext)
    const [contents, setContents] = useState({})
    // const userId = getIsLoggedIn()
  
    const {id} = useParams()
    console.log(id)
  
    useEffect(() => {
      loadContents()
    }, [])
  
  
    function loadContents() {
      API.get(`/api/folder/${id}`).then(res => {
        console.log(res.data)
        setContents(res.data)
      })
    }

  return (
    <>
      <Wrapper img={img}>
        <ProjectsContent>
          <div className="columns is-ancestor is-mobile is-centered">
            <div className="column is-half ">
              <div className="tile task">
                <article className="tile is-child notification is-light">
                  <p className="title is-4 has-text-centered">{contents.name}</p>
                </article>
              </div>
            </div> 
          </div>
          <div className="columns is-mobile is-centered">
          <div className="column is-half">
            <Cardcss className="card">
              <div className="card-content">
                <CardCenter className="hero-body has-text-centered">
                  <div className="Card">
                    <h4 className="title">BzB</h4>
                    <TileProvider
                    //icon props 
                    bee={bee} img={photo} 
                    task={task} link={link} note={note}
                    //Link props
                    pLink={`/images/${id}`}
                    jLink={`/notes/${id}`}
                    lLink={`/links/${id}`}
                    tLink={`/tasks/${id}`}
                    >
                      <Tiles />
                    </TileProvider>
                  </div>
                </CardCenter>
              </div>
            </Cardcss>
          </div>
        </div>
        </ProjectsContent>

      </Wrapper>
    </>
  );
}

export default Folder; 



/* <button onClick={()=> 
          {API.post(`/api/folder/${id}/new_note`, 
          {title: 'first note', content: 'hello world'})
          .then(res=> console.log(res))}}
          >Note</button>
    */