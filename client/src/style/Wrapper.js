import styled from 'styled-components'

const Wrapper = styled.div `
    background-image: url(${props => props.img});
    min-height: 100vh;
    width: 100%;
    background-repeat: repeat;
    display: flex;
    justify-content: center;
`
export default Wrapper