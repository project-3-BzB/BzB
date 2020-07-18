import styled from 'styled-components'


export const Wrapper = styled.div `
background-image: url(${props => props.img});
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-repeat: repeat;
background-position: 0 0;
`
export const HeroBody = styled.div `
    justify-content: center;
`
export const Div = styled.div `
    border-radius: 25px;
    padding: 1.5rem;
    background-color: azure;
`
export const Input = styled.input `
    background: var(--shadowDark) !important;
`
