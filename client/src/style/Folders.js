import styled from 'styled-components'

export const HexGrid = styled.ul `
display: flex;
flex-wrap: wrap;
width: 90%;
margin: 0 auto;
overflow: hidden;
font-family: 'Raleway', sans-serif;
font-size: 15px;
list-style-type: none;
`

export const Hex = styled.li `
position: relative;
/* visibility:hidden; */
outline:1px solid transparent;
`

export const HexIn = styled.div `
position: absolute;
width:96%;
padding-bottom: 110.851%; /* =  width / sin(60) */
margin:0 2%;
overflow: hidden;
visibility: hidden;
outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
-webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
        transform: rotate3d(0,0,1,-60deg) skewY(30deg);
`