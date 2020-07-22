import styled from 'styled-components'

export const ProjectsContent = styled.div `
  width: 800px;
  padding: 20px;
  margin-top: 80px;
`

export const ProjectsWrapper = styled.div `
    background-image: url(${props => props.img});
    min-height: 100vh;
    width: 100%;
    background-repeat: repeat;
    display: flex;
    justify-content: center;
`

export const Icon = styled.i `
  margin-right: 5px;
`