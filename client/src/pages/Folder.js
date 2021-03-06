import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
// import './styles/Home.css'
import Progress from '../components/Progress';
import FormHome from '../components/FormHome';
import Tiles from '../components/Tiles';
import {TileProvider} from '../utils/TileContext';
import { HeroBody, Login, HomeContent, ContainerTile, Overlay, Text } from '../style/Home'
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
import ProjectNav from '../components/projects/ProjectNav';
import logo from '../img/logo_header.png'

const Folder = () => {
    const history = useHistory()
    // const [folders, setFolders] = useContext(FoldersContext)
    const [contents, setContents] = useState({})
    // const userId = getIsLoggedIn()
  
    const {id} = useParams()
    console.log(id)
  
    useEffect(() => {
      loadContents()
    }, [])
  
    function back(){
      history.push('/projects')
    }

    function loadContents() {
      API.get(`/api/folder/${id}`).then(res => {
        console.log(res.data)
        if(res.data) {
          setContents(res.data)
        }
        
      })
    }

  return (
    <>
      <ProjectNav id={id} img={logo} go={back}></ProjectNav>
      <Wrapper img={img}>
        <ProjectsContent>
          <div className="columns is-ancestor is-mobile is-centered">
            <div className="column is-half ">
              <div className="tile task">
                <article className="tile is-child notification is-light">
                  <p className="title is-3 has-text-centered is-capitalized">{contents.name}</p>
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
                    <div className='columns is-mobile'>
                      <ContainerTile>
                        <div className='column'>
                          <Link to={`/tasks/${id}`}>
                            <img src={task} 
                            className='animate__animated animate__flip'
                            width="232px" alt='task'>
                            </img>
                            <Overlay className='overlay has-text-info'>
                              <Text className='text'>Tasks</Text>
                            </Overlay>
                          </Link>
                        </div>
                      </ContainerTile>
                      <ContainerTile>
                      <div className='column'>
                          <Link to={`/notes/${id}`}>
                            <img src={note} 
                            className='animate__animated animate__flip'
                            width="232px" alt='note'>
                            </img>
                            <Overlay className='overlay has-text-info'>
                              <Text className='text'>Notes</Text>
                            </Overlay>
                          </Link>
                        </div>
                      </ContainerTile>
                    </div>
                    <div className='columns is-mobile'>
                    <ContainerTile>
                    <div className='column'>
                          <Link to={`/links/${id}`}>
                            <img src={link} 
                            className='animate__animated animate__flip'
                            width="232px" alt='link'>
                            </img>
                            <Overlay className='overlay has-text-info'>
                              <Text className='text'>Links</Text>
                            </Overlay>
                          </Link>
                        </div>
                    </ContainerTile>
                    <ContainerTile>
                    <div className='column'>
                          <Link to={`/images/${id}`}>
                            <img src={photo} 
                            className='animate__animated animate__flip'
                            width="232px" alt='image'>
                            </img>
                            <Overlay className='overlay has-text-info'>
                              <Text className='text'>Images</Text>
                            </Overlay>
                          </Link>
                        </div>
                    </ContainerTile>
                    </div>
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
