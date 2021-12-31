import styled from "styled-components";

type ConatinerProps ={
    done:boolean
}

export const Container = styled.div(({done}:ConatinerProps)=>(
    `
    display: flex;
    background-color: transparent;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items : center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 10px;
        color: #808080;
    }

    label{
        color: #808080;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

`
))