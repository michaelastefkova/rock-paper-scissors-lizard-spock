import  styled  from 'styled-components';


export const ButtonFormat = styled.button`
background-color: transparent;
color: white;
border: 1px solid white;
border-radius: 8px;
padding: 0.6rem 1.5rem;
letter-spacing: 0.1rem;
text-transform: uppercase;
font-size: 0.9rem;
font-weight: 700;
cursor: pointer;
z-index: 2;
outline:none;
&:hover {
    background-color: hsl(213, 29%, 41%);
  }
`
