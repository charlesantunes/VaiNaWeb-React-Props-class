import styled, {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

export const Head = styled.header`
    background-color: darkcyan;
    color: gold;
    font-size: 1.5rem;
    font-weight: bolder;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;

`