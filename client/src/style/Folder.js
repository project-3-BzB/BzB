import styled from 'styled-components'

export const Wrapper = styled.div `
    background-image: url(${props => props.img});
    min-height: 100vh;
    width: 100%;
    background-repeat: repeat;
    display: flex;
    justify-content: center;
`
export const Score = styled.div `
  margin-top: 50px;
  margin-right: 50px;
  margin-left: 50px;
`

export const CardCenter = styled.div `
  justify-content: center;
`

export const Cardcss = styled.div `
  border-radius: 25px;
  background-color: #ffdd57;
`

export const ContainerTile = styled.div `
  position: relative;
  width: 50%;
`

export const Overlay = styled.div `
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
 
  background-color:${props => props.color}; 
 
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