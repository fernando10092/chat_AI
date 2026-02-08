import styled from 'styled-components';

export const Body = styled.div`
width: 100%;
height: 100vh;
background-color: #140101;
align-content: center;
margin: 0;
display: grid;
grid-template-columns: 1fr 1fr;
`

export const Left = styled.div`
height: 100%;
background-color: #0C0C12;
text-align: center;
align-content: center;
`

export const Title = styled.h1`
color: #241F1F;
font-size: 36px;
font-weight: bold;
border-bottom: 2px solid #241F1F;
width: 200px;
align-items: center;
display: block;
margin: 20px auto;
`

export const Inp = styled.textarea`
width: 450px;
height: 90px;
resize: none;
display: block;
margin: 20px auto;
font-size: 24px;
border: none;
border-radius: 5px;
`;

export const Btn = styled.button`
width: 100px;
height: 30px;
background-color: #140101;
color: white;
border: none;
border-radius: 5px;
&: hover{
    background-color: #241F1F;
    cursor: pointer;
    }
`;


export const Right = styled.div`
height: 100%;
background-color: #0C0C12;
`

export const Label = styled.label`
background-color: #eee;
padding: 10px;
border-radius: 5px;
display: block;
margin: 10px auto;
width: 500px;
height: 450px;
text-align: justify;
max-height: 450px;
scrollbar-width: thin;
overflow-y: auto;
`