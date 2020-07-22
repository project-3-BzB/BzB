import React from 'react';
import { Score } from '../../style/Folder'


const FolderScore = ({ note, link, img, task }) => {
 
  return (
    <>
    <progress class="progress" value="15" max="100">15%</progress>
    <progress class="progress" value="30" max="100">30%</progress>
    <progress class="progress" value="45" max="100">45%</progress>
    <progress class="progress" value="60" max="100">60%</progress>
    </>
  );
}

export default FolderScore;