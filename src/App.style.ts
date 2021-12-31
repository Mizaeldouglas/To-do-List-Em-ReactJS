import styled from "styled-components";



export const Container = styled.div `
    //background-color: #17181f;
    background-color: ${props => props.theme.colors.background};
    color:  ${props => props.theme.colors.text};
    min-height: 100vh;

`;


export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding:10px;
`;

export const Header = styled.div`
    margin:0;
    padding:0;
    color:#000;
    text-align:center;
    border-bottom:1px solid #444;
    padding-bottom: 20px;
`;