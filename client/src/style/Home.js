import styled from 'styled-components'

export const HeroBody = styled.div `
  justify-content: center;
`

export const Login = styled.div `
  border-radius: 25px;
  padding: 1.5rem;
  background-color: azure;
`

export const Score = styled.div `
  margin: 60px
`

// export const MenuTop = styled.div `
//   position: fixed;
//   top: 0;
//   width: 400px;
//   margin:0 auto;
//   padding: 20px;
//   background-color: #1a1a1ad2;
//   border-bottom-left-radius:20px ;
//   border-bottom-right-radius:20px ;
//   z-index: 1;
// `

export const MenuBottom = styled.div `
  // position: fixed;
  bottom: 0;
  width: 400px;
  margin:0 auto;
  padding: 20px;
  background-color: #1a1a1ad2;
  border-top-left-radius:20px ;
  border-top-right-radius:20px ;
  z-index: 1;
`
// // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_overlay_zoom
export const ContainerTile = styled.div `
.container {
  position: relative;
  width: 50%;
`

export const Overlay = styled.div `
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  // background-color: #008CBA;
  background-color:${props => props.color}; 
  // background: url(../../img/bg_yellow.png);
  // background-color: #58afff;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transition: .3s ease;
`

export const Text = styled.div `
  color: black;
  /* color: white; */
  font-size: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`

// export const HomeContent = styled.div `
//   display: block;
//   width: 80%;
//   background-color: grey;
//   padding: 20px;
//   margin-top: 150px;
//   height: 800px;
// `