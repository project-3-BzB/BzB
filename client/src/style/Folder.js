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