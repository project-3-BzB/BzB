import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import './styles/Home.css'
import Progress from '../components/Progress';
import FormHome from '../components/FormHome';
import Tiles from '../components/Tiles';
import {TileProvider} from '../utils/TileContext';
import { HeroBody, Login, HomeContent } from '../style/Home'

import CardHome from '../components/CardHome';
import API from '../utils/API'

const Folder = () => {

    // const [folders, setFolders] = useContext(FoldersContext)
    // const [contents, setContents] = useState({})
    // const userId = getIsLoggedIn()
  
    // const {id} = useParams()
    // console.log(id)
  
    // useEffect(() => {
    //   loadContents()
    // }, [])
  
  
    // function loadContents() {
    //   API.get(`/api/folder/${id}`).then(res => {
    //     console.log(res.data)
    //   }).then(res => {
    //     setContents({...contents, fileContents: res})
    //   })
    // }

  return (
    // <TileProvider>
      <div>
      <div className="wrapperGrey">
 
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-12">
            <Progress />
          </div>
        </div>


        <FormHome />
        <CardHome />

        {/* <button onClick={()=> 
          {API.post(`/api/folder/${id}/new_note`, 
          {title: 'first note', content: 'hello world'})
          .then(res=> console.log(res))}}
          >Note</button>
    */}
      </div>
    </div>
    // </TileProvider>
    
  );
}

export default Folder; 